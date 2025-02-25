// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAh5Q6LLnw04K3XLZ_AyZN9uapZlsDgrps",
    authDomain: "authentication-niti.firebaseapp.com",
    projectId: "authentication-niti",
    storageBucket: "authentication-niti.appspot.com",
    messagingSenderId: "147399437846",
    appId: "1:147399437846:web:5cd7bcd703fb39e504cf37",
    measurementId: "G-SRW60QVCW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize auth here

// Submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();
    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Logged in successfully!!");
            window.location.href = "index.html"; // Redirect to a protected page
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
