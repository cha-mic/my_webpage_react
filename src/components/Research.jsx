import React, { useEffect, useState } from "react";
import Data from '../data/research.json'

export const ReadResearch = () =>{

  /** jsonデータ編集 */
  const cdList = [];
  for (var cdNo in Data) {
      const cdStr =  Data[cdNo]["title"] + ":" + Data[cdNo]["auther"];
      cdList.push(cdStr);
  }

  return (
      <div>
      <h1>Items List</h1>
      <ul>
      {cdList.map((item, index) => (
          <li key={index}>
          {item}
          </li>
      ))}
      </ul>
  </div>
  );
};

export const Research = () => {
    return (
      <div>
        <h1>My Research</h1>
        <ReadResearch />
      </div>
    );
  };