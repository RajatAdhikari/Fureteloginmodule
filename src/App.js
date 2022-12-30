 import React, { Component } from 'react'
 import './App.css';
 // import firebase from './firebase';
 import firebase from "./firebaseConfig"

   setUpRecaptcha= () => {
     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
       'size': 'invisible',
       'callback': (response) => {
         // reCAPTCHA solved, allow signInWithPhoneNumber.
         this.onSignInSubmit();
       },
     }
//     );
   };
   onSignInSubmit = (event) => {
     event.preventDefault();
     this.setUpRecaptcha();
     var phoneNumber = "+919643063811";
 var appVerifier = window.recaptchaVerifier;
 firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
     .then((confirmationResult) => {
       // SMS sent. Prompt user to type the code from the message, then sign the
       // user in with confirmationResult.confirm(code).
       window.confirmationResult = confirmationResult; 
       var code = window.prompt("Enter otp");
 confirmationResult.confirm(code).then((result) => {
   // User signed in successfully.
   var user = result.user;

   // ...
   console.log("user is signed in");
 }).catch((error) => {
   // User couldn't sign in (bad verification code?)
   // ...
 });
       // ...
     }).catch((error) => {
       // Error; SMS not sent
       // ...
     });
   };
 export default class App extends Component {
   render() {
     return (
       <div>
        <div className="App">
       <div className="container">
       <div className="row justify-content-center align-items-center">
       <div className="col-sm-6 text-left">
       <h2>Phone login</h2>
       <form onSubmit={this.onSignInSubmit}>
         <div id="recptcha-container"></div>
         <div class="form-group"> 
           <label for="exampleInputEmail1">phone number</label>
           <input type="number" class="form-control"/>
         </div>
         <button type="submit" class="btn btn-primary">
           Submit
         </button>
       </form>
       </div>
       </div>
       </div>
     </div> 
       </div>
     )
   }
 }






























