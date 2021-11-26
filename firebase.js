const firebase = require("firebase")
var firebaseConfig = {
    apiKey: "AIzaSyDaBjQQgDmon2dlHr-QmquI8tKIbuzXV1Q",
    authDomain: "stellar-62f9f.firebaseapp.com",
    projectId: "stellar-62f9f",
    storageBucket: "stellar-62f9f.appspot.com",
    messagingSenderId: "82409429792",
    appId: "1:82409429792:web:09de1d8e52cc428bec1545",
    measurementId: "G-H4T8B74CK1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  let hora = new Date();
  hora.setHours(hora.getHours() - 3);
	console.log(`| FireBase Conectada - ${hora.getUTCHours()}:${hora.getUTCMinutes()}:${hora.getUTCSeconds()}`)