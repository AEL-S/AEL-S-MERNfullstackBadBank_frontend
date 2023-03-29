import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './Redux/store';
import UserContext from '../src/components/context';
// import {AuthProvider} from './context/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <UserContext.Provider value={[]}>
  <React.StrictMode>
    {/* <AuthProvider> */}
    <App />
    {/* </AuthProvider> */}
  </React.StrictMode>
  </UserContext.Provider>
  // {/* </Provider> */}
);


