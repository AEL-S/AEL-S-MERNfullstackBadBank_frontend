// need a way to specify routes to protect on front end so that a user doesn’t have to see this screen when they aren’t logged in.

// redirect them to the login page 


// import React, { Component } from 'react';
// // import  {Redirect}  from 'react-router-dom';
// import { Navigate } from 'react-router-dom';


// export default function withAuth(ComponentToProtect) {
//   return class extends Component {
//     constructor() {
//       super();
//       this.state = {
//         loading: true,
//         // redirect: false,
//         navigate: false,
//       };
//     }
//     componentDidMount() {
//       fetch('/checkToken')
//         .then(res => {
//           if (res.status === 200) {
//             this.setState({ loading: false });
//           } else {
//             const error = new Error(res.error);
//             throw error;
//           }
//         })
//         .catch(err => {
//           console.error(err);
//           // this.setState({ loading: false, redirect: true });
//           this.setState({ loading: false, navigate: true });
//         });
//     }
//     render() {
//       // const { loading, redirect } = this.state;
//       const { loading, navigate } = this.state;
//       if (loading) {
//         return null;
//       }
//       // if (redirect) {
//       //   return <Redirect to="/login" />;
//       if (navigate) {
//         return <useNavigate to="/login" />;
//       }
//       return <ComponentToProtect {...this.props} />;
//     }
//   }
// }