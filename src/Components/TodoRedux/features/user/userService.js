import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../../../BlogPosts/firebase-config';

const provider = new GoogleAuthProvider();

const userService = {
  signUp: async (newUser) => {
    try {
      const { email, password } = newUser;
      console.log(email, password);
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log('error', e.message);
    }
  },
  signIn: async (user) => {
    try {
      const { email, password } = user;
      console.log(email, password);
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log('error', e.message);
    }
  },
  signOut: async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log('error', e.message);
    }
  },
  signInGoogle: async () => {
    try {
      return await signInWithPopup(auth, provider);
    } catch (e) {
      console.log('error', e.message);
    }
  },
};

export default userService;
