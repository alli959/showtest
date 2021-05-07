import React, { useState, useEffect } from 'react';




function UserPage(param) {



    const UserClick = (e) => {
        console.log(e);
        param.onChange(e.target.id);
    }

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

    const groups = param.Groups;



    return (
        <div className = "UserPage">
            <div className = "Names">
                {console.log(param)}
                <ul>
                    {users.map((user, index) => <li key={index} id = {index} onClick = {UserClick}>{user.name} </li> )}
                </ul>
            </div>
        </div>

)
}

export default UserPage;