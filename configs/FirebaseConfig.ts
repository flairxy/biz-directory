// Import the functions you need from the SDKs you need
// npm i @types/firebase  for ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCsdhVz67_mva7tQOraY38uB5NdhuXWzLs',
  authDomain: 'pdreal-d63c6.firebaseapp.com',
  projectId: 'pdreal-d63c6',
  storageBucket: 'pdreal-d63c6.appspot.com',
  messagingSenderId: '608083566999',
  appId: '1:608083566999:web:df1d0ffcc6ad7e85e6a4d2',
  measurementId: 'G-07E9L5FZDS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
