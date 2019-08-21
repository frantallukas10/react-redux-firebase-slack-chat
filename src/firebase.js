import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
const projectName = 'react-slack-c690e';
const apiKey = 'AIzaSyDl7z5x2EI-iBOl5P_yFfDxfReNDjgFI-4';
const messagingSenderId = '403156411808';
const appId = '1:403156411808:web:d7d5d911a57501a3';

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
