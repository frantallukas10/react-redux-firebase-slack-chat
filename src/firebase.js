import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
const projectName = '';
const apiKey = '';
const messagingSenderId = '';
const appId = '';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: `${projectName}.firebaseapp.com`,
  databaseURL: `https://${projectName}.firebaseio.com`,
  projectId: `${projectName}`,
  storageBucket: `${projectName}.appspot.com`,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
