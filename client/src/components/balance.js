import React from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';

import UserContext from '../components/context';


function Balance(){
  const ctx = React.useContext(UserContext);
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
    // const [user, setUser] = React.useState('');
  
    const user = UserContext
    // change above later

    return (
        <Card className="card border-warning mb-3"  style={{ width: "22rem" }}>
        <Card.Title>Balance
        </Card.Title>
        <div className="card-body">
            <Card.Body>
                  {status}
                  {show ?
          <BalanceForm 
          user={ctx.users}
          setShow={setShow} setStatus={setStatus}
          // setBalance={setBalance}
          // added user props and set balance above - update - they threw undefined errors
          /> :
          <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
          <h4 style={{paddingTop: '10px'}}>Current Balance is ${user.balance}</h4>
          {/* added h4 above */}
       </Card.Body>
                  </div>
    </Card>
    );
}
  
  
  
  function BalanceMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-warning" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          Check balance again
      </button>
    </>);
  }
  
  function BalanceForm(props){
 
    const [email, setEmail]   = React.useState('');
    const [password, setPassword] = React.useState('');
  
// i dont think email will work here. I need to find a way to target specific data
  // axios call works, but cant do anything with it without being able to target data
  function handle(){
// axios call below
  const configuration = {
    method: "get",
    url: 'http://localhost:3100/api/balance',
    data: {
      email,
      password,
        // balance,
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
  
      Email<br/>
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
        onClick={handle}>
          Check Balance
      </button>
  
    </>);
   
    }

export default Balance;
