import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    storageBucket: "STORAGE_BUCKET",
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);