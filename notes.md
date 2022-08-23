# Firebase Auth

- 1:Create a new project

- 2:Create a web app

- 3: initialize Auth

```js
import { getAuth } from 'firebase/auth';
const auth = getAuth(app);
```

## Email authentication

- 4: update user everytime state changed

```js
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
    setUser(currentUser)
  );
  return () => unsubscribe();
}, []);
```

- 5: call functions depending on event handlers

```js
createUserWithEmailAndPassword(auth, email, password);
signOut();
SignInWithEmailAndPassword(auth, email, password);
```

6:New Component Protected Route

```js
ProtectedRoute = ({children}) => {
const{user} = useContext(UserContext)
if(!user) return <Navigate to='/'>
return children
}
```

---

## Google Authentication

```js
GoogleAuthProvider();
signInWithPopup(auth, provider);
logout();
```
