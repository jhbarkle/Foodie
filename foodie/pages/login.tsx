import React, { ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { auth, logInWithEmailAndPassword } from '../firebase-lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Router from 'next/router';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginCheck = () => {
    if (!email || !password) {
      console.log('error');
      setLoginError('Invalid Email or Password');
    } else {
      logInWithEmailAndPassword(email, password);
    }
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      Router.push(`/dashboard/${user.uid}/home`);
    }
  }, [user, loading]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        name="email"
        onChange={inputEmail}
      />
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        name="password"
        onChange={inputPassword}
      />
      <h4>{loginError}</h4>
      <button onClick={loginCheck}>Login</button>
      <div>
        <p>Don't have an account?</p>
        <Link href="/register">
          <button>Register</button>
        </Link>
      </div>
      <Link href="/forgotPassword">
        <button>Forgot Password?</button>
      </Link>
    </div>
  );
};

export default Login;
