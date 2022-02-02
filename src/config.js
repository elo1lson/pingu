module.exports = {
	prefix: process.env.PREFIX,
	token: process.env.TOKEN,
	cor: prompt.env.COLOR,
	firebase: {
		apiKey: process.env.API_KEY,
		authDomain: process.env.PROJECT_ID + ".firebaseapp.com",
		databaseURL: "https://" + process.env.DATABASE_NAME + " .firebaseio.com",
		projectId: process.env.PROJECT_ID,
		storageBucket: process.env.PROJECT_ID + ".appspot.com",
		messagingSenderId: process.env.SENDER_ID,
		appId: process.env.APP_ID,
		measurementId: "G-" + process.env.MEASUREMENT_ID,
	}
}