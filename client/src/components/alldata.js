

import React from 'react';
// import axios from 'axios';
import UserContext from './context';
import Card from 'react-bootstrap/Card';

    function AllData() {
      const ctx = React.useContext(UserContext);
       
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
                          )}
                        )}
                    </div>
                  )} 
          

                            
        export default AllData;
    
