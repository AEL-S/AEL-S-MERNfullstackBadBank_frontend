// create account page functional - still figuring out how to implement auth 

import React from 'react';
import axios from 'axios';
import UserContext from '../components/context';
import Card from 'react-bootstrap/Card';
import balance from '../components/balance'

function CreateAccount(){ 
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
   
    return(
      <Card className="card border-warning mb-3"  style={{ width: "22rem" }}>
           <Card.Title>Create Account
           </Card.Title>
           <div className="card-body">
            <Card.Body>
                  {status}
                  {show ?
                  <CreateAccountForm setShow={setShow} setStatus={setStatus} /> :
                  <CreateAccountMsg setShow={setShow} setStatus={setStatus} />
                  }
       </Card.Body>
                  </div>
    </Card>
    );
}

function CreateAccountMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-warning" 
        onClick={() => props.setShow(true)}>Add another account</button>
    </>);
  }
  
  function CreateAccountForm(props){
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
  
    function handle(){
      console.log(name,email,password, balance);
      ctx.users.push({name, email, password, balance});
      props.setShow(false);

    const configuration = {
        method: "post",
        url: "http://localhost:3100/api/createaccount",
        data: {
            name,
            email,
            password,
            balance,
            // added balance here *
        },
      };
  // make the API call
  axios(configuration)
  .then((result) => {console.log(result);})
  .catch((error) => {console.log(error);})
  props.setShow(false);
    }
   
    return (<>
  
      Name<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter name" 
        value={name} 
        onChange={e => setName(e.currentTarget.value)} /><br/>
  
      Email address<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        value={password} 
        onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-warning" 
        onClick={handle}>Create Account</button>
  
    </>);
  }

  export default CreateAccount;
  // export {CreateAccount, name, email, password, balance};
