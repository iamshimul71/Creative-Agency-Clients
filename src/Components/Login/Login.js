import React from 'react'
import * as firebase from "firebase/app";
import firebaseConfig from '../../Components/firebase.config';
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logos/logo.png'
import google from '../../images/google.jpg'
import { useContext } from 'react';
import './Login.css'
const Login = () => {
    const [loggedInUser,setLoggedinUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    

    if(firebase.apps.length===0)
    {
        firebase.initializeApp(firebaseConfig)
    }

    const handleSignIn= ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
           const {displayName,email} = result.user;
           const SignInUser = {name: displayName,email}
           setLoggedinUser(SignInUser)
           history.replace(from)
        
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
    return (
        <div>
            <div>
            <img className="img-size w-25 mt-2 mb-4" src={logo} alt=""/>
            </div>
          <div className="login-size w-50">
              
          
             <button className="btnstyle" onClick={handleSignIn}>
             <img className="google " src={google} alt=""/>
                Continue with google</button>
                <p className="goole-ti">Don't Have an account ? <span className="text-primary"><u>Create an account</u></span> </p>
          </div>
          
    
        </div>
    );
};

export default Login;