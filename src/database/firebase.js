const firebase = require("firebase/app")

const config = require("../config.js");

try {
  firebase.initializeApp(config.firebase)
  console.log("Firebase logada")
} catch (e) {
  console.log(e)
}