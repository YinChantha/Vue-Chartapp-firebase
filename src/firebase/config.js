import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAigb7lFnFEhG8ROTQDWPeGUKSRdVuqMgc",
  authDomain: "project-firebase-25ebc.firebaseapp.com",
  projectId: "project-firebase-25ebc",
  storageBucket: "project-firebase-25ebc.appspot.com",
  messagingSenderId: "232233282822",
  appId: "1:232233282822:web:e86a41417d426e7c968287"
};

  //init
  firebase.initializeApp(firebaseConfig)
  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  export {projectFirestore, timestamp, projectAuth }