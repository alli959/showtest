import React, { useState, useEffect } from 'react';
import UserPage from './components/UserPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {

  const [user, setUser] = useState(0);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setUser(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
       <Switch>
          <Route path = "/:i" component={() => <UserPage user = {user}/>} />
       </Switch>
    </div>
  );
}

export default App;