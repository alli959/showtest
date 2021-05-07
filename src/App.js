import React, { useState, useEffect } from 'react';
import UserPage from './components/UserPage';
import GroupPage from './components/GroupPage';


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
  const [activeTab, setActiveTab] = useState(1)



  //Check for active TAB for the view
  const isActive = (number) => {
    if(number == activeTab) {
      return {'background':'#9eaeb3',
              'border-width':'5px',  
              'border-style':'groove'};
    }
    else {
      return {'background':'#3f5b63'}
    }
  }

  //Check witch TAB is active
  const checkTab = () => {
    if(activeTab == 1) {
      return(
        <div>
           <UserPage user = {user} />
        </div>
      )
    }
    else {
      return(
        <div>
          <GroupPage group = {group} />
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
                <button className = "userTab" style = {isActive(1)} onClick={() =>setActiveTab(1)}>Users</button>
                <button className = "groupTab" style = {isActive(2)} onClick={() =>setActiveTab(2)}>Groups</button>
              </div>
            </div>
              {checkTab()}
            </div>
      </div>
  );
}

export default App;