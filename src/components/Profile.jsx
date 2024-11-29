import React, { useEffect, useState } from "react";
import Data from '../data/profile.json'

export const ReadProfile = () =>{

    /** jsonデータ編集 */
    const cdList = [];
    for (var cdNo in Data) {
        const cdStr =  Data[cdNo]["period"] + ":" + Data[cdNo]["organization"];
        cdList.push(cdStr);
    }

    return (
        <div>
        <h1>Profile</h1>
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

function Profile(){

    return (
        <div>
            <ReadProfile />
        </div>
    );   
    
}

export default Profile;