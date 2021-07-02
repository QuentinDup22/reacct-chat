import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDA5hRFXrwVUd5mc_G7CBrrzGKLxMzajeQ",
    authDomain: "reactnative-chat-91458.firebaseapp.com",
    projectId: "reactnative-chat-91458",
    storageBucket: "reactnative-chat-91458.appspot.com",
    messagingSenderId: "191476151249",
    appId: "1:191476151249:web:bb182bb8a37adca67c26f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db }