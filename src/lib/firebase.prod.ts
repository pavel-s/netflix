import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyC7bHMNeJjf0Q-CduyDxR8j3GXttrc-jjI',
  authDomain: 'netflix-b4c0b.firebaseapp.com',
  projectId: 'netflix-b4c0b',
  storageBucket: 'netflix-b4c0b.appspot.com',
  messagingSenderId: '643440479000',
  appId: '1:643440479000:web:1baa9cb92d0710d91cac6d',
};

firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase); // add test data to database

export type TFirebase = typeof firebase;

export default firebase;
