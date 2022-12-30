import * as firebase from "firebase";
 
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAOjx3uzcCAsgawq1fh-8UTTHZvt8DFwV4",
    authDomain: "phone-login-5428e.firebaseapp.com",
    projectId: "phone-login-5428e",
    storageBucket: "phone-login-5428e.appspot.com",
    messagingSenderId: "775924829649",
    appId: "1:775924829649:web:88b6a62602d6d6e98de4f0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default firebaseConfig;