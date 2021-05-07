import React, { useState, useEffect } from 'react';




function UserPage(param) {



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
                    {users.map((user, index) => <li key={index}>{user.name} </li> )}
                </ul>
            </div>
        </div>

)
}

export default UserPage;