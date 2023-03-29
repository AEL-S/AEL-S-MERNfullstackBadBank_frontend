import React from 'react';
// import { useState, useEffect } from 'react';
// import AuthContext from '../context/AuthProvider';
// import UserContext from './context.js';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
// import axios from '../api/axios';
// import fire from '../fire';


function Login(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
    // const ctx = React.useContext(UserContext);
    // const { setAuth } = useContext(AuthContext);
    // setAuth is showing up as undefined


// not sure this should go here, or where it should go(should it go in create account instead?)
// create a token
// const createToken = async () => {
//   const user = fire.auth().currentUser;
//   const token = user && (await user.getIdToken());
//   const payloadHeader = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   return payloadHeader;
// }
// // fetches the current user
// export const addToPhonebook = async (name, number) => {
//   const header = await createToken();
//   const payload = {
//     name,
//     number,
//   }
//   try {
//     const res = await axios.post(url, payload, header);
//     return res.data;
// } catch (e) {
//     console.error(e);
//   }
// };
// export const getPhonebookEntries = async () => {
//   const header = await createToken();
// try {
//     const res = await axios.get(url, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// }

// end of test

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
//   may need to remove button here, not sure why its here
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
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);
  


    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password])

    // function handle(){
        // const handleSubmit = async (e) => {
            // const handle = async (e) => {
            //         e.preventDefault();
            //         try {
            //             const response = await axios.post(LOGIN_URL,
            //                 JSON.stringify({ email, password }),
            //                 {
            //                     headers: { 'Content-Type': 'application/json' },
            //                     // withCredentials: true
            //                      withCredentials: false
            //                     //  changing below to false to see if it will change cors error - update..it worked.still getting 404 becuase i ahvent set up route
            //                 }
            //             );
            //             console.log(JSON.stringify(response?.data));
            //             //console.log(JSON.stringify(response));
            //             const accessToken = response?.data?.accessToken;
            //             const roles = response?.data?.roles;
            //             setAuth({ email, password, roles, accessToken });
            //             setEmail('');
            //             setPassword('');
            //             setSuccess(true);
            //         } catch (err) {
            //             if (!err?.response) {
            //                 setErrMsg('No Server Response');
            //             } else if (err.response?.status === 400) {
            //                 setErrMsg('Missing Username or Password');
            //             } else if (err.response?.status === 401) {
            //                 setErrMsg('Unauthorized');
            //             } else {
            //                 setErrMsg('Login Failed');
            //             }
            //             // errRef.current.focus();
            //         }
            //     }
          // ------------------------- test


          // handleInputChange = (event) => {
          //   const { value, name } = event.target;
          //   this.setState({
          //     [name]: value
          //   });
          // }
        
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
             
            // -------------
            // go back to below if test fails
            // fetch('/api/authenticate', {
            //  *  fetch('/api/auth/login', {
                // changing this route to try to find what will work in frontend
                // fetch('/api/withAuth/login', {
            //  * method: 'POST',
              // body: JSON.stringify(this.state),
              // *body: JSON.stringify
              
              // *({email, password}),
              // *headers: {
                // *'Content-Type': *'application/json'
              // *}
            // *})
            // update - i believe this.props.history is what is making the login not work in react.
          //   .then(res => {
          //     if (res.status === 200) {
          //     //  token.push('/');
          //     //  testing above...
          //       this.props.history.push('/');
          //     } else {
          //       const error = new Error(res.error);
          //       throw error;
          //     }
          //   })
          //   .catch(err => {
          //     console.error(err);
          //     alert('Error logging in please try again');
          //   });
          // }

          // test auth done ------------------

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




