import React from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Login(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
  

      return (
  <div className="card border-warning mb-3"  style={{ width: "22rem" }}>
            <Card.Title>Login
            </Card.Title>
            <div className="card-body">
            <Card.Body>
                  {status}
                  {show ?
                  <LoginForm setShow={setShow} setStatus={setStatus} /> :
                  <LoginMsg setShow={setShow} setStatus={setStatus} />
                  }
       </Card.Body>
            </div>
          </div>
  
  )}
//   may need to remove button here
  function LoginMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-warning" 
        onClick={() => props.setShow(true)}>
          Authenticate again
      </button>
    </>);
  }
  
  function LoginForm(props){
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
 
           const onSubmit = async (e) => {
          // onSubmit = (event) => {
            e.preventDefault();
            // test: adding firebase here
            // fire.auth().signInWithEmailAndPassword(email, password)
            // .catch((error) => {
            //   console.error('Incorrect email or password');
            // });
          // }
            // test over
            const configuration = {
              method: "post",
              // url: "http://localhost:3100/api/auth/login",
              // changing below to get rid of auth part since i cant get auth to work yet
              url: "http://localhost:3100/api/login",
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
      onClick={onSubmit}>Login</button>
      {/* // onClick={handle}>Login</button> */}
     
    </>);
  }

  export default Login;




