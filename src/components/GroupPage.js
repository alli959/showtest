import React, { useState, useEffect } from 'react';
import {Card, CardTitle} from 'react-mdl';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";




function GroupPage(param) {
   // Array of users Objects with param:
        // id
        // userName
        // name
        // aboutUser

        const users = param.user;

        // Array of group Objects with param:
            // id
            // groupName
            // groupDescription
    
        const groups = param.group;
    
    
    
        return (
            <div className = "GroupPage">
                <div className = "Names">
                    {console.log(param)}
                    <ul>
                        {groups.map((group, index) => <li key={index}>{group.groupName} </li> )}
                    </ul>
                </div>
            </div>
    
    )
}

export default GroupPage;