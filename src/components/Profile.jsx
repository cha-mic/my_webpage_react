import React, { useEffect, useState } from "react";
import { LinkButton } from "./Linkbutton";

import Data from '../data/profile.json'
import './Profile.css'

export const ReadProfile = () =>{

    /** jsonデータ編集 */
    const cdList_period       = [];
    const cdList_organization = [];
    const cdList_link = [];
    for (var cdNo in Data) {
        const cdStr_period       = Data[cdNo]["period"];
        const cdStr_organization = Data[cdNo]["organization"];
        const cdStr_link         = Data[cdNo]["link"]
        cdList_period.push(cdStr_period);
        cdList_organization.push(cdStr_organization);
        cdList_link.push(cdStr_link);
    }

    const cdList_period_reversed = [...cdList_period].reverse()

    return (
        <div className="profile">
            <h1>Profile</h1>
            {cdList_period_reversed.map((item, index) => (
                <div className="profile-contents">
                    <div className="period">
                        {item}
                    </div>
                    <div className="organization">
                        {cdList_organization[cdList_period_reversed.length - index - 1]}
                    </div>
                    <LinkButton Link = {cdList_link[cdList_period_reversed.length - index - 1]}/>
                </div>
            ))}
        </div>
    );
};

function Profile(){

    return (
        <div className="profile-disp">
            <ReadProfile />
        </div>
    );   
    
}

export default Profile;