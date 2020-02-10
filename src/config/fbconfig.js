import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1shf1tl3T4zNEKpA49ob_SCuKGxDugzs",
  authDomain: "proj-manjour.firebaseapp.com",
  databaseURL: "https://proj-manjour.firebaseio.com",
  projectId: "proj-manjour",
  storageBucket: "proj-manjour.appspot.com",
  messagingSenderId: "446987750457",
  appId: "1:446987750457:web:72b823496a1348dc9711e8",
  measurementId: "G-XN461FCL3B"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
