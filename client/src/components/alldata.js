

import React from 'react';
// import axios from 'axios';
import UserContext from './context';
import Card from 'react-bootstrap/Card';
// import { useState } from "react";
// import {useState, useEffect, useContext } from 'react'
// import Button from 'react-bootstrap/Button';


    function AllData() {
      const ctx = React.useContext(UserContext);
        // const [data, setData] = React.useState("");
      
        // React.useEffect(() => {
        //   fetch("/account/all")
        // // fetch("/alldata")
        //     .then((response) => response.json())
        //     .then((data) => {
        //       setData(JSON.stringify(data));
        //       console.log(data);
        //     });
        // }, []);
      

        return (
        // this is brining up errors in console but it is still working
        <div className="row row-cols-auto">
          {ctx.users.map((user) => {return(
         <Card className="card border-warning mb-3" style={{ width: "22rem" }}>
           <Card.Title><h5>All Data in Store: </h5>
           </Card.Title> 
           {/* // eslint-disable-next-line */}
               {/* <h6 className="card-subtitle mb-2 text-muted">{'User' + " " + (ctx.users.indexOf(user) + 1)}</h6>    */}
             {/* {UserContext.data.map((data) => {return(  */}
             <Card.Body> 
             {<p id="two">                
                          Name: {user.name}<br/>
                             Email: {user.email}<br/>
                                Password: {user.password}<br/> 
                                Balance: 0
                                  <br/>
                               
                                </p> 
                              
                                  } 
                                  </Card.Body> 
       </Card>
          )
                                }
          )
                              }
               </div>
                  )} 
          

                            
        export default AllData;
// ---------------------------------------------------------------------
        //  cant figure out why user and users keeps coming up undefined 


// function AllData(){
//     const [data, setData] = React.useState('');    
    // const ctx = React.useContext(UserContext);
    // const [user, setUser] = React.useState('');    
    // const ctx = React.useContext(UserContext);


    // below started throwing an error so I had to comment it out. look into it in the am
    // React.useEffect(() => {
        
    //     // fetch all accounts from API
    //     fetch('/account/all')
    //     // fetch('/api/alldata')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(JSON.stringify(data));                   
    //         });

    // }, []);
    