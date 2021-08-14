import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYVd5OIeR52BqsWw2WNRbnGkIBoa3SGGs",
  authDomain: "tezdealz-3f505.firebaseapp.com",
  projectId: "tezdealz-3f505",
  storageBucket: "tezdealz-3f505.appspot.com",
  messagingSenderId: "202707505931",
  appId: "1:202707505931:web:57c0ea199c9aaeb25a880e",
  measurementId: "G-C7L2WNTK3E",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
