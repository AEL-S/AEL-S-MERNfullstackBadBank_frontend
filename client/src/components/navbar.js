
import React from 'react';


    function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* may change / back to #, not sure - seeing if achange makes an error go away */}
  <a className="navbar-brand" href="#/home">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      {/* <a className="nav-item nav-link active" href="#/login">Login <span className="sr-only">(current)</span></a> */}
      <a className="nav-item nav-link active" href="#/login">Login </a>
      <a className="nav-item nav-link active" href="#/createaccount">Create Account</a>
      <a className="nav-item nav-link" href="#/deposit">Deposit</a>
      <a className="nav-item nav-link" href="#/withdraw">Withdraw</a>
      <a className="nav-item nav-link" href="#/balance">Balance</a>
      <a className="nav-item nav-link" href="#/transfer">Transfer</a>
      <a className="nav-item nav-link" href="#/alldata">AllData</a>
      <a className="nav-item nav-link" href="#/signout">Sign Out</a>
      {/* <a className="nav-item nav-link disabled" href="#">Disabled</a> */}
      {/* i thik i will need to utilize these disabled links for authenciation login/privacy...check into later */}
    </div>
  </div>
</nav>
    )}
    export default NavBar;