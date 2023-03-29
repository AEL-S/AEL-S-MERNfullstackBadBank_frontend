import React from 'react';
import Card from 'react-bootstrap/Card';
// import {useState, useEffect } from 'react'
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';
// import balance from './balance';
import UserContext from '../components/context';


function Deposit(){
  const ctx = React.useContext(UserContext);
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
  const [deposit, setDeposit]    = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const [newBalance, setNewBalance] = React.useState(ctx.users[0].balance);
  const [disabled, setDisabled] = React.useState(true);
  // const [user, setUser] = React.useState('');
// might remove below not sure
// let Balance = `Current Account Balance: $ ${ctx.users.newBalance}`;

const validate = amount => {
  if(amount <= 0) {
    setStatus('Error: Cannot deposit negative amount');
    setTimeout(() => setStatus(''),4000);
    disabled(true);
    return false;
}
  if(amount > 0) {
    setDisabled(false)
  }
  if (isNaN(deposit)) {
    setStatus('Error: Please enter a valid number');
    setTimeout(() => setStatus(''),4000);
    return false;
  }
return (true);
  }


  // idea for deposit call:
// const url = 'http://localhost:3100/api';
// export const dataBaseDeposit = (email, password, amount) => {
//   const payload = {
//     email, password, amount,
//   }
//   axios.post(url, payload)
// };


  // need axios call somewhere around here
  const handleDeposit = amount => {
  if (!validate(amount)) return;
  ctx.users.push({balance})
  setBalance(newBalance * 1 + deposit * 1)
  setNewBalance(balance * 1 + deposit * 1)
  setShow(false);
  }

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

	React.useEffect(() => {
	            if (!deposit) {
	                setDisabled(true);
	            }
	            else {
	                setDisabled(false);
	            }
	    }, [deposit]);
	    // console.log('useEffect called')
      
      
      return (   
        <Card className="card border-warning mb-3"  style={{ width: "22rem" }}>
          <Card.Title>Deposit</Card.Title>
         <Card.Body>
          {status}
          {show ? (  
                  <>
            Balance: ${balance}<br/>
            <br/>
            {/* maybe find a way to show current user here */}
            {/* User: ${ctx.users} */}
            Deposit Amount<br/>
                  
      {/* <input type="number"  */}
      <input type="input"
      // min="0" onInput="this.value = Math.abs(this.value)"
       className="form-control" id="deposit" placeholder="Enter amount to deposit" value={deposit} 
      
      onChange={e => {
      validate(e.currentTarget.value);
      setDeposit(e.currentTarget.value);}} /><br/>
                   <button type="submit" className="btn btn-warning" 
                   onClick={(handleDeposit)} 
                   disabled={disabled} >Deposit</button> 
                  </>
                  ):(
                    <>
                    <h5>Success!</h5>
                    You have deposited: ${deposit}<br/>
                    Your
                    current balance is: 
                    ${newBalance}<br/>
                   <button type="submit" className="btn btn-warning" onClick={clearForm}>Make another deposit</button>
                   </>
                  )}
                  </Card.Body>
                  </Card>
      )
    }
    export default Deposit;