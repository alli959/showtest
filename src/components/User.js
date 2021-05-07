import React, { useState, useEffect } from 'react';




function User(param) {

    const GroupsInUser = () => {
        if(param.groups){
            return(

                <ul>
                    {groups.map((group, index) => <li key={index} id = {group.id-1}>{group.name} </li> )}
                </ul>
                )
        }
    }


    // Array of users Objects with param:
        // id
        // userName
        // name
        // aboutUser

    const user = param.user;

    // Array of group Objects with param:
        // id
        // groupName
        // groupDescription

    const groups = param.groups;



    return (
        <div className = "User">
            <div className = "UserContent">

                    <img src = "blank-profile-picture.png" className = "ProfilePic"></img>
                    <h1 className = "userName">User Name</h1>
                    <p>{user.userName}</p>
                    <h1 className = "name">Name</h1>
                    <p>{user.name}</p>
                    <div className = "aboutUser">
                        <h1>About User</h1>
                        <p>{user.aboutUser}</p>                        
                    </div>
                    <h1>Groups</h1>
                    {GroupsInUser}
            </div>
        </div>

)
}

export default User;