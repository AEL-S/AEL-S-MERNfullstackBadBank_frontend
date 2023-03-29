
import React from 'react';
// - og starter code below: -
// const Route       = ReactRouterDOM.Route;
// const Link        = ReactRouterDOM.Link;
// const HashRouter  = ReactRouterDOM.HashRouter;

import {
  HashRouter,
    Route,
    Link,
  } from "react-router-dom";



// const UserContext = React.createContext(null);

const UserContext = React.createContext({users : [{
  name:'',
  email:'',
  password:'',
  balance:0,
  deposit:[0],
  withdraw:[0],
}]})



function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );    
}

export default UserContext;

export {Card, Route, Link, HashRouter};