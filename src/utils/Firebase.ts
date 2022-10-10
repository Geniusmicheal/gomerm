import accessEnv from '@utils/accessEnv';
import { initializeApp } from "firebase/app";

const initializeFirebaseApp = initializeApp({
	appId: accessEnv('fbAppId'),
	apiKey: accessEnv('fbApiKey'),
	projectId: accessEnv('fbProjectId'),
	authDomain: accessEnv('fbAuthDomain'),
	measurementId: accessEnv('fbMeasurementId'),
	storageBucket: accessEnv('fbStorageBucket'),
	messagingSenderId: accessEnv('fbMessagingSenderId')
})

export default initializeFirebaseApp;

// https://firebase.google.com/docs/web/setup#available-libraries