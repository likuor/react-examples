import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from './features/user/userSlice';

export default function Signup() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const newUser = { email, password };
    console.log('here', password);
    dispatch(signUp(newUser));
  };
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
  //       updateUser(currentUser)
  //     );
  //     return () => unsubscribe();
  //   }, []);
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='emailInput'>Email</label>
          <input type='email' ref={emailInputRef} />
        </div>
        <label htmlFor='passwordInput'>Password</label>
        <input type='password' ref={passwordInputRef} />
        <div>
          <button>Sign up!</button>
        </div>
      </form>
    </div>
  );
}
