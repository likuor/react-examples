import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signIn, signOut, signInGoogle } from './features/user/userSlice';

export default function Signup() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const user = { email, password };
    dispatch(signIn(user));
  };
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
  //       updateUser(currentUser)
  //     );
  //     return () => unsubscribe();
  //   }, []);
  return (
    <div>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='emailInput'>Email</label>
          <input type='email' ref={emailInputRef} />
        </div>
        <label htmlFor='passwordInput'>Password</label>
        <input type='password' ref={passwordInputRef} />
        <div>
          <button>Sign in!</button>
        </div>
      </form>
      <button onClick={() => dispatch(signInGoogle())}>
        Sign in with Google
      </button>
      <div>
        <button onClick={() => dispatch(signOut())}>Sign out!</button>
      </div>
    </div>
  );
}
