import React from 'react';
import Card from 'react-bootstrap/Card';
import UserContext from '../components/context';


function Transfer(){
    // need to work on this page
  const ctx = React.useContext(UserContext);
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [transfer, setTransfer] = React.useState('');
// eslint-disable-next-line
  const [amount, setAmount] = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const [newBalance, setNewBalance] = React.useState(ctx.users[0].balance);
  const [disabled, setDisabled] = React.useState(true);
  // eslint-disable-next-line
  const [user, setUser] = React.useState('');



const validate = amount => {
  if(amount <= 0) {
    setStatus('Error: Cannot transfer cannot be negative amount');
    setTimeout(() => setStatus(''),4000);
    disabled(true);
    return false;
}
  if(amount > 0) {
    setDisabled(false)
  }
  if (isNaN(transfer)) {
    setStatus('Error: Please enter a valid number');
    setTimeout(() => setStatus(''),4000);
    return false;
  }
return (true);
  }

  // idea for transfer call:
// const url = 'http://localhost:3100/api';
// export const dataBaseTransfer = (SrcEmail, DestEmail, password, amount) => {
//   const payload = {
//     SrcEmail, DestEmail, password, amount,
//   }
//   axios.post(url, payload)
// };

  // need axios call somewhere around here
  const handleTransfer = amount => {
  if (!validate(amount)) return;
  ctx.users.push({balance})
  setBalance(newBalance * 1 + amount * 1)
  setNewBalance(balance * 1 + amount * 1)
  setShow(false);
  }

  function clearForm(){
    setTransfer('');
    setShow(true);
  }

	React.useEffect(() => {
	            if (!transfer) {
	                setDisabled(true);
	            }
	            else {
	                setDisabled(false);
	            }
	    }, [transfer]);
	    // console.log('useEffect called')
      
      
      return (   
        <Card className="card border-warning mb-3"  style={{ width: "22rem" }}>
          <Card.Title>Transfer</Card.Title>
         <Card.Body>
          {status}
          {show ? (  
                  <>
            Balance: ${balance}<br/>
            <br/>
            {/* maybe find a way to show current user here */}
            {/* User: ${ctx.users} */}
            Email<br/>
      <input type="email" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/>
        <br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        value={password} 
        onChange={e => setPassword(e.currentTarget.value)}/>
     <br/>
     Transfer Amount
      <input type="input"
       className="form-control" id="transfer" placeholder="Enter amount to transfer" value={amount} 
      onChange={e => {
      validate(e.currentTarget.value);
      setTransfer(e.currentTarget.value);}} />
      <br/>
      Destination account email<br/>
      <input type="email" 
        className="form-control" 
        placeholder="Enter destination account email" 
        // might need to change that value later
        value={email} 
        onChange={e => setPassword(e.currentTarget.value)}/>
        <br/>
                   <button type="submit" className="btn btn-warning" 
                   onClick={(handleTransfer)} 
                   disabled={disabled} >Transfer</button> 
                  </>
                  ):(
                    <>
                    <h5>Success!</h5>
                    You have transferred: ${amount}<br/>
                    Your
                    current balance is: 
                    ${newBalance}<br/>
                   <button type="submit" className="btn btn-warning" onClick={clearForm}>Make another transfer</button>
                   </>
                  )}
                  </Card.Body>
                  </Card>
      )
    }
    export default Transfer;
