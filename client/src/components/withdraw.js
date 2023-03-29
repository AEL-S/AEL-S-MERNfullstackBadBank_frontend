import React from 'react';
import Card from 'react-bootstrap/Card';
import UserContext from '../components/context';


function Withdraw(){
    const ctx = React.useContext(UserContext); 
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [withdraw, setWithdraw]    = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const [newBalance, setNewBalance] = React.useState(ctx.users[0].balance);
    const [disabled, setDisabled] = React.useState(true);
  
      const validate = amount => {
      if(amount <= 0) {
        setStatus('Error: Please enter a valid withdrawl amount');
        setTimeout(() => setStatus(''),4000);
        disabled(true);
        return false;
      }
  
      if(amount > 0) {
        setDisabled(false)
      }
      if (isNaN(withdraw)) {
        setStatus('Error: Please enter a valid number');
        setTimeout(() => setStatus(''),4000);
        return false;
      }
      if (amount * 1 > newBalance || amount * 1 > balance) {
        setStatus('Error: Insufficient funds available');
        setTimeout(() => setStatus(''),4000);
        return false;
      }
      return true;
    }
  

    // below would be handleWithdraw.... need axios call somewhere around here
    const withdrawCash = amount => {
    if (!validate(amount)) return;
    ctx.users.push({balance})
    setBalance(newBalance * 1 - withdraw * 1)
    setNewBalance(balance * 1 - withdraw * 1)
    setShow(false);
    }
    
    function clearForm(){
      setWithdraw('');
      setShow(true);
    }
  
  React.useEffect(() => {
    if (!withdraw || withdraw > balance) {
        setDisabled(true);
    }
    else {
        setDisabled(false);
    }
}, [withdraw, balance]);

  return (   
    <Card className="card border-warning mb-3"  style={{width: "22rem" }}>
    <Card.Title>Withdraw</Card.Title>
   <Card.Body>
    {status}
    {show ? (  
            <>
      Balance: ${balance}
      <br/>
      <br/>
      Withdraw Amount<br/>
               
    <input type="input" 
    className="form-control" id="withdraw" placeholder="Enter amount to withdraw" value={withdraw} 
    onChange={e => {
    validate(e.currentTarget.value);
    setWithdraw(e.currentTarget.value)}} /><br/>
                 <button type="submit" className="btn btn-warning" onClick={(withdrawCash)} disabled={disabled} >Withdraw</button>
                </>
                ):(
                  <>
                  <h5>Success</h5>
                  You have withdrawn: ${withdraw}<br/>
                  Your new balance is: ${newBalance}<br/>
                 <button type="submit" className="btn btn-warning" onClick={clearForm}>Get more cash</button>
                 </>
                )}
                    </Card.Body>
                  </Card>
      )
    }

      export default Withdraw;
