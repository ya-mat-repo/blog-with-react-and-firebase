import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div className="loginWrapper">
      <p className="loginButtonLabel">ログインして始める</p>
      <button className="loginButton" onClick={loginInWithGoogle}>
        Googleでログイン
      </button>
    </div>
  );
};

export default Login;
