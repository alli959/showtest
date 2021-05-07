import React from 'react';




function Group(param) {

    const UsersInGroup = () => {
        if(param.users){
            return(

                <ul>
                    {users.map((user, index) => <li key={index} id = {user.id-1}>{user.name} </li> )}
                </ul>
                )
        }
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

    const group = param.group;



    return (
        <div className = "User">
            <div className = "UserContent">
                    <h1 className = "userName">Group Name</h1>
                    <p>{group.groupName}</p>
                    <div className = "aboutUser">
                        <h1>Group Description</h1>
                        <p>{group.groupDescription}</p>
                    </div>
                    <h1>Users In Group</h1>
                    {UsersInGroup}
            </div>
        </div>

)
}

export default Group;