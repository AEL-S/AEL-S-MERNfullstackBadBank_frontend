import React from 'react';
import Card from 'react-bootstrap/Card';
// import {useState, useEffect} from 'react';


function Home() {
  return (
    <div className="card border-warning mb-3"  style={{ width: "22rem" }}>
      <img src="bad_bank.png"
        className="card-img-top" alt="Illustrated bank building" />
      <Card.Title>Welcome to the Bad Bank
      </Card.Title>
      <div className="card-body">
        <p className="card-text">If you care about security, we may not be the bank for you. Otherwise, check out our services by using the navigation bar above.
          <br />
          <br/>
          Just kidding... due to new management, we've actually started authenticating accounts. 
          <br />
          <br/>
          You're welcome.</p>
      </div>
    </div>
  )
}


export default Home;