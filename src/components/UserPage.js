import React, { useState, useEffect } from 'react';
import {Card, CardTitle} from 'react-mdl';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";




function UserPage(User) {
    let {id} = useParams();
    
    return (
        <div className = "Card_contact" style = {{display: 'flex'}}>
            </div>

)
}

export default withRouter(UserPage);