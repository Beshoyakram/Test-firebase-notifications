importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBRfHccsPlNy8lW1ZshgagSUraIq-ynWwc",
    authDomain: "qurran-project.firebaseapp.com",
    projectId: "qurran-project",
    storageBucket: "qurran-project.appspot.com",
    messagingSenderId: "338298222167",
    appId: "1:338298222167:web:ec3273de30db0b8d46d512",
    measurementId: "G-C84VHQ4WLP"
  };
  console.log("asd");
    firebase.initializeApp(firebaseConfig);

//must type this after been live
var messaging = firebase.messaging();
console.log(messaging);
var x =messaging.getToken();
console.log(x);
