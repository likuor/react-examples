// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAf0DuYBAgnkzx84wziRJ_2Ij674mzcZO0',
  authDomain: 'blog-post-7bbcc.firebaseapp.com',
  projectId: 'blog-post-7bbcc',
  storageBucket: 'blog-post-7bbcc.appspot.com',
  messagingSenderId: '363063501993',
  appId: '1:363063501993:web:ad0ce36f75698d165b35b8',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);
