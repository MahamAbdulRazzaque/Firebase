
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"; 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBrxPbWOZPppsISYzDMCJrWUy_uSR9y-B8",
    authDomain: "sign-up-login-form-c2760.firebaseapp.com",
    projectId: "sign-up-login-form-c2760",
    storageBucket: "sign-up-login-form-c2760.firebasestorage.app",
    messagingSenderId: "531611391005",
    appId: "1:531611391005:web:de034579189ada8a6662f4",
    measurementId: "G-BBB0B2VS1F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app); 

  document.getElementById("signup-form").addEventListener("submit" , (e) => {
    e.preventDefault();

    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    
     createUserWithEmailAndPassword(auth, email, password)     
      .then((userCredential) => {       
        console.log("User signed up:", userCredential.user);      
        alert("Signup successful!");     
    })     
      .catch((error) => {      
        console.error("Error:", error.message);       
        alert("Error: " + error.message);    
    });
 });
  
  
