import React from 'react';





function GroupPage(param) {

    const groupClick = (e) => {
        param.onChange(e.target.id);
    }

    // Array of users Objects with param:
    // id
    // userName
    // name
    // aboutUser
    

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
                    {groups.map((group, index) => <li key={index} id = {index} onClick = {groupClick}>{group.groupName} </li> )}
                </ul>
            </div>
        </div>
    
    )
}

export default GroupPage;