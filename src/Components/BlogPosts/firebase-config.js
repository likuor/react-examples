// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuZe1oECsAuV9rlIvVba8gzRx12WnnZ-A',
  authDomain: 'blog-posts-example-9cef4.firebaseapp.com',
  projectId: 'blog-posts-example-9cef4',
  storageBucket: 'blog-posts-example-9cef4.appspot.com',
  messagingSenderId: '793946168585',
  appId: '1:793946168585:web:ce346320fe65e84b0e47d8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);
