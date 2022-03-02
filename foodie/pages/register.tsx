import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  const inputUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const inputConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const register = () => {
    // Username error check
    if (userName.trim().length < 3) {
      setRegisterError('Username must be more than 3 characters.');
    }
    if (!userName) {
      setRegisterError('Username is required.');
      return;
    }

    // email error check
    if (!email.includes('@') || email.trim().length < 6) {
      setRegisterError('Not a valid email.');
      return;
    }

    // password error check
    if (password.trim().length < 6) {
      setRegisterError('Password should be more than 6 characters.');
      return;
    }

    if (!(password === confirmPassword)) {
      setRegisterError("Passwords don't match.");
      return;
    }

    setRegisterError('Register successfully');
  };

  return (
    <div>
      <input
        type="text"
        name="user-name"
        placeholder="Enter Username"
        value={userName}
        onChange={inputUserName}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={email}
        onChange={inputEmail}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={password}
        onChange={inputPassword}
      />
      <input
        type="password"
        name="confirm-password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={inputConfirmPassword}
      />
      <button onClick={register}>Register</button>
      <h4 className="error">{registerError}</h4>
      <div>
        <p>Already have an account?</p>
        <Link href="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
