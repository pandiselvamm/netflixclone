import firebase from 'firebase/app';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDSFU0WJC02DKXXXKGTkk_rL-0ElTi82gQ",
    authDomain: "netflix-clone-1fd0e.firebaseapp.com",
    projectId: "netflix-clone-1fd0e",
    storageBucket: "netflix-clone-1fd0e.appspot.com",
    messagingSenderId: "565277226321",
    appId: "1:565277226321:web:3c3cc1c2ddf03624c80f70",
    measurementId: "G-6EES3TCKL0"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export { storage, firebase as default };