import React from 'react';
import {
  // BrowserRouter,
  // Router,
HashRouter,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

// main react file

import NavBar  from './components/navbar';
import Home from './components/home';
import CreateAccount from './components/createaccount'; 
import '../src/index.css';
import Deposit from '../src/components/deposit';
import Withdraw from '../src/components/withdraw';
import Balance from '../src/components/balance';
import AllData from '../src/components/alldata';
// import { ProtectedRoute } from './ProtectedRoute';
import Login from './components/login';
import Transfer from './components/transfer';
import SignOut from './components/signout';

// (working on trying to set up auth and private routes, that way i can build and test api calls for bank functions)
// import ProtectedRoute from "./utils/ProtectedRoute";

import UserContext from '../src/components/context';
// import withAuth from './withAuth';
// import fire from './fire';
// import { AuthContext } from './context/AuthContext';

// function App(){
//   // testing new code - trying auth-
//   const [token, setToken] = useState();

//   if(!token) {
//     return <Login setToken={setToken} />

//   } - this did work but going to try to use sessionstorage - below:
// end of test --------------------


// sessionsstorage test ------
// was told to remove below functions -
// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
// trying to do context - not sure whether its working.
// const [user, setUser] = useState(null);
// firebase test ----------
// const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//     fire.auth().onAuthStateChanged((user) => {
//       return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
//   });
  
//   console.log('logged in?', isLoggedIn);
// //   return (
//     <div className="App">
//       Hello World!
//     </div>
//   );
// }


// test end---------
// const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <React.Fragment>
      <HashRouter>
      {/* <BrowserRouter> */}
      
          <NavBar />
          <UserContext.Provider value={{users:[{name:"testUser", email:"test@mit.edu ", password:"88888888", balance:0 }]}}>
              {/* <div className="container" style={{padding: "20px"}}> */}
              {/* NEED to wrap all components that need to be able to access context --- might need to move around later not sure */}
                <Routes>
              <Route exact path='/home' element={<Home/>} />
            {/* <UserContext.Provider value={value}> */}
            {/* <AuthContext.Provider value={value}> */}
              <Route path='/login' element={<Login/>} />
              <Route path='/createaccount' element={<CreateAccount/>} />
              {/* paths below should be protected */}
              {/* <ProtectedRoute path='/deposit' element={<Deposit/>} /> */}
              {/* <Route element={<ProtectedRoute/>}>
    <Route path="/deposit" element={<Deposit />} />
</Route> */}
          
              <Route path='/deposit' element={<Deposit/>} />
              <Route path='/withdraw' element={<Withdraw/>} />
              <Route path='/balance' element={<Balance/>} />
              <Route path='/transfer' element={<Transfer/>} />
              <Route path='/alldata' element={<AllData/>} />
              <Route path='/signout' element={<SignOut/>} />
              {/* </UserContext.Provider> */}
              {/* </AuthContext.Provider> */}
              </Routes>
              {/* </div> */}
          </UserContext.Provider>
          {/* </div> */}
      </HashRouter>
      {/* </BrowserRouter> */}
      {/* browserrouter does allow changing pages for whatever reason - doesnt work */}
     </React.Fragment>
  );

}
export default App;
