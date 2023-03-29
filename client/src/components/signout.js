import React from 'react';
// import { useState, useEffect } from 'react';
import axios from 'axios';
// import axios from '../api/axios';
// import AuthContext from '../context/AuthProvider';
// import UserContext from './context.js';
import Card from 'react-bootstrap/Card';

// will need to tweak this form/ look up how to set up sign out
function SignOut(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
    // const ctx = React.useContext(UserContext);

// this is for firebase but i dont know where to put it 
// const signOut = () => {
//   fire.auth().signOut()
// };
// --------------------

    return (
<div className="card border-warning mb-3"  style={{ width: "22rem" }}>
            <Card.Title>Sign Out
            </Card.Title>
            <div className="card-body">
            <Card.Body>
                  {status}
                  {show ?
                  <SignOutForm setShow={setShow} setStatus={setStatus} /> :
                  <SignOutMsg setShow={setShow} setStatus={setStatus} />
                  }
       </Card.Body>
            </div>
          </div>

)}

//   may need to remove button here, not sure why its here
function SignOutMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-warning" 
        onClick={() => props.setShow(true)}>
          Authenticate again
      </button>
    </>);
  }
  
  function SignOutForm(props){
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);
  


    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password])



const onSubmit = async (e) => {
    // onSubmit = (event) => {
      e.preventDefault();
      const configuration = {
        method: "post",
        // url: "http://localhost:3100/api/auth/login",
        // changing below to get rid of auth part since i cant get auth to work yet
        url: "http://localhost:3100/api/signout",
        data: {
            email,
            password,
        },
      };
      axios(configuration)
      .then((result) => {console.log(result);})
      .catch((error) => {console.log(error);})
      props.setShow(false);
        }

return (<>
  
    Email<br/>
    <input type="email" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/>
      {/* // onChange={this.handleInputChange}/> */}
        {/* required */}
      <br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/>
      {/* // onChange={this.handleInputChange} */}
        {/* required */}
      
      <br/>

    <button type="submit" className="btn btn-warning" 
    onClick={onSubmit}>Sign Out</button>
    {/* // onClick={handle}>Login</button> */}
   
  </>);
}

export default SignOut;