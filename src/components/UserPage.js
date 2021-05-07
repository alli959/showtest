import React from 'react';




function UserPage(param) {



    const UserClick = (e) => {
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




    return (
        <div className = "UserPage">
            <div className = "Names">
                <ul>
                    {users.map((user, index) => <li key={index} id = {index} onClick = {UserClick}>{user.name} </li> )}
                </ul>
            </div>
        </div>

)
}

export default UserPage;