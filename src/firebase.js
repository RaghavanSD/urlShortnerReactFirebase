import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage


const firebaseConfig = {
  apiKey: "AIzaSyCU3bmQPwxPEbeDf3dKOzcXNZShZ_Xe8DQ",
  authDomain: "urlshortner-6b3cc.firebaseapp.com",
  projectId: "urlshortner-6b3cc",
  storageBucket: "urlshortner-6b3cc.appspot.com",
  messagingSenderId: "708849097406",
  appId: "1:708849097406:web:0e190cd0e8a25f13fa5cef",
  measurementId: "G-TNSFGJCLW2"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app?.firestore();
