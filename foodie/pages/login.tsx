import React, { ChangeEvent } from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = () => {
    try {
    } catch (e) {}
  };

  return (
    <form>
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
      <button>Login</button>
      <div>
        <p>Don't have an account?</p>
        <Link href="/register">
          <button>Register</button>
        </Link>
      </div>
      <Link href="/forgotPassword">
        <button>Forgot Password?</button>
      </Link>
    </form>
  );
};

export default Login;
