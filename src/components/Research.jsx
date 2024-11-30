import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';
import './Research.css'

import Data from '../data/research.json'

const DoiButton = ({doi_}) => {

  if (!doi_ || doi_ === "None") {
    return null;
  }
  return (
    <div className="doi-button">
      <Button as="a" href={doi_}>DOI</Button>
    </div>
  );

};

export const ReadResearch = () =>{

  /** jsonデータ編集 */
  var cdList_auther    = [];
  var cdList_title     = [];
  var cdList_year      = [];
  var cdList_publisher = [];
  var cdList_doi       = [];
  for (var cdNo in Data) {
      const cdStr_auther    = Data[cdNo]["auther"];
      const cdStr_title     = Data[cdNo]["title"];
      const cdStr_yaer      = Data[cdNo]["year"];
      const cdStr_publisher = Data[cdNo]["publisher"];
      var cdStr_doi       = Data[cdNo]["doi"];
      cdList_auther.push(cdStr_auther);
      cdList_title.push(cdStr_title);
      cdList_year.push(cdStr_yaer);
      cdList_publisher.push(cdStr_publisher);
      cdList_doi.push(cdStr_doi);
  }
  const cdList_auther_reversed = [...cdList_auther].reverse() 

  return (
      <div className="publications">
        <h1>Publications</h1>
        <ol>
        {cdList_auther_reversed.map((item, index) => (
            <li key={index}>
              {item} <b>"{cdList_title[cdList_auther_reversed.length - index - 1]}"</b>
              {cdList_publisher[cdList_auther_reversed.length - index - 1]}
              {cdList_year[cdList_auther_reversed.length - index - 1]} 
              <DoiButton doi_={cdList_doi[cdList_auther_reversed.length - index - 1]} />
            </li>
        ))}
        </ol>
      </div>
  );
};

export const Research = () => {
    return (
      <div className="research">
        <div className="research-disp">
          <h1>My Research</h1>
          <div>
          ロボットのためのセンサとその周辺のシステムに興味を持って研究を進めています．<br />
          学部時代の研究テーマは，4脚ロボットのための柔軟な足先センサモジュール．
          現在の研究テーマは，近接覚センサを用いたばら積みピッキングです．
          </div>
          <ReadResearch />          
        </div>
      </div>
    );
  };