import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  add,
  remove,
  fetchTodos,
  fetchTodosFromFirebase,
  addToFirebase,
  removeFromFirebase,
} from './features/todo/todoSlice';
import { auth } from '../BlogPosts/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { updateUser } from './features/user/userSlice';
import Signup from './Signup';
import SignIn from './SignIn';
// import { actions } from './features/todo/todoSlice';
export default function Todo() {
  const { list, isLoading, isError, message } = useSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: list.length + 1,
      title: inputRef.current.value,
    };
    dispatch(addToFirebase(newTask));
  };

  useEffect(() => {
    dispatch(fetchTodosFromFirebase());
  }, [dispatch]);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (message) {
    return <h2>{message}</h2>;
  }

  if (isError) {
    return <h2>Failed to load data!</h2>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Signup />
      <SignIn />
      <form onSubmit={handleSubmit}>
        <label htmlFor='taskInput'>New Task:</label>
        <input type='text' ref={inputRef} />
        <button>Submit</button>
      </form>
      <ul>
        {list.map((task) => (
          <li key={task.id}>
            <button onClick={() => dispatch(removeFromFirebase(task.id))}>
              X
            </button>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
