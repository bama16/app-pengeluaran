// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDMocZM3KWbDDlE7Z1NAKYXe6EW7Rjtdms',
  authDomain: 'expensify-fdc50.firebaseapp.com',
  projectId: 'expensify-fdc50',
  storageBucket: 'expensify-fdc50.firebasestorage.app',
  messagingSenderId: '39286125378',
  appId: '1:39286125378:web:4bc926909bd3fb8ff44edb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;
