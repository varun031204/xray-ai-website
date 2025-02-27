<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: "AIzaSyAfj-Gm5k5K_x3neoKDNo34arfy9W7GYeQ",
    authDomain: "x-ray-ai.firebaseapp.com",
    projectId: "x-ray-ai",
    storageBucket: "x-ray-ai.firebasestorage.app",
    messagingSenderId: "970642208082",
    appId: "1:970642208082:web:80ecf760190d1ac10ef68b",
    measurementId: "G-KMMM61334B"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>