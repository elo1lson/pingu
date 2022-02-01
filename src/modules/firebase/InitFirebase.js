/* Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let fire = async () => {
	const firebaseConfig = {
		apiKey: "AIzaSyDaBjQQgDmon2dlHr-QmquI8tKIbuzXV1Q",
		authDomain: "stellar-62f9f.firebaseapp.com",
		databaseURL: "https://stellar-62f9f-default-rtdb.firebaseio.com",
		projectId: "stellar-62f9f",
		storageBucket: "stellar-62f9f.appspot.com",
		messagingSenderId: "82409429792",
		appId: "1:82409429792:web:09de1d8e52cc428bec1545",
		measurementId: "G-H4T8B74CK1"
	}
};
try {
	const app = initializeApp(firebaseConfig);
	console.log("Firebase Conectada")
} catch (e) {
	console.log(e)
}
const analytics = getAnalytics(app);
module.exports = fire
*/
