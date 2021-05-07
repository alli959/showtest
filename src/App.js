import React, { useState, useEffect } from 'react';
import UserPage from './components/UserPage';
import GroupPage from './components/GroupPage';
import User from './components/User';
import Group from './components/Group';


function App() {

  //INIT
  const [group, setGroup] = useState(
    [
      {
        "id": "3",
        "groupName": "Group Name3",
        "groupDescription": "asdfasdf"
      }
    ]);


  const [user, setUser] = useState(
    [
      {"id": "1",
        "userName": "asdf1234",
        "name": "asdf",
        "aboutUser": "this is a text about me"
      }
    ]);

  const [userGroup, setUserGroup] = useState(
    [
      {
        "userId": "1",
        "groupId": "1"
      }
    ]);

  
  const [activeTab, setActiveTab] = useState(1)

  const [isUser, setIsUser] = useState(false);
  const [userNr, setUserNr] = useState(0);
  const [isGroup, setIsGroup] = useState(false);
  const [groupNr, setGroupNr] = useState(0);
  


  //User Click
  const userClick = (id) => {
    setIsUser(true);
    setUserNr(id);
    setActiveTab(-1);
    setIsGroup(false);
  }

  //Group Click
  const groupClick = (id) => {
    setIsGroup(true);
    setGroupNr(id);
    setActiveTab(-1);
    setIsUser(false);
  }


  const tabClick = (id) => {
    setIsUser(false);
    setIsGroup(false);
    setActiveTab(id);
  }
  

  //Check for active TAB for the view
  const isActive = (number) => {
    
    if(number == activeTab) {
      return {'background':'#9eaeb3',
              'borderWidth':'5px',  
              'borderStyle':'groove'};
    }
    else {
      return {'background':'#3f5b63'}
    }
  }

  

  //Check witch TAB is active
  const checkTab = () => {
    if(isUser) {
      let temp = [];
      for(var i = 0; i<userGroup.length; i++) {
        if(parseInt(userGroup[i].userId) -1 == userNr) {
          temp.push(group[parseInt(userGroup[i].groupId) -1])
        }
      }
      return (
        <div>
          < User user = {user[userNr]} groups = {temp} />
        </div>
      )
    }

    if(isGroup) {

      let temp = [];
      for(var i = 0; i<userGroup.length; i++) {
        if(parseInt(userGroup[i].groupId) -1 == groupNr) {
          temp.push(user[parseInt(userGroup[i].userId) -1])
        }
      }
      return (
        <div>
          < Group group = {group[groupNr]} users = {temp} />
        </div>
      )
    }

    if(activeTab == 1) {
      return(
        <div>
           <UserPage user = {user} onChange = {userClick} />
        </div>
      )
    }


    else {
      return(
        <div>
          <GroupPage group = {group} onChange = {groupClick} />
        </div>
      )
    }
  }
  
  

  // FETCHING THE DATA
  const getData=()=>{
    fetch('data.json'
    ,{
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log("res",response)
        return response.json();
      })
      .then(function(Data) {
        console.log("myJson",Data);
        setUser(Data.Users);
        setGroup(Data.Groups);
        setUserGroup(Data.UserGroup);
      });
  }
  useEffect( ()=>{
    getData()
  },[])



  //THE MAIN VIEW
  return (
    <div>
        <div className = "Layout">
            <div className = "Header">
              <h1 className = "Logo">
                SHOWDECK
              </h1>
              <div className = "Tabs">
                <button className = "userTab" style = {isActive(1)} onClick={() =>tabClick(1)}>Users</button>
                <button className = "groupTab" style = {isActive(2)} onClick={() =>tabClick(2)}>Groups</button>
              </div>
            </div>
              {checkTab()}
            </div>
      </div>
  );
}

export default App;