import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAXyNnpMlRowBdXs1lw0e8zuCgZ7KjfQe8',
  authDomain: 'blog-582e7.firebaseapp.com',
  projectId: 'blog-582e7',
  storageBucket: 'blog-582e7.appspot.com',
  messagingSenderId: '807831523965',
  appId: '1:807831523965:web:de141e07cdb6a3222b1714',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
