import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import fire from '../../lib/Firebase/fire';

function AuthPage({ path }) {
  const { userId } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleGoogleLogin = () => {
    const provider = new fire.auth.GoogleAuthProvider();
    fire.auth().signInWithPopup(provider);
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  if (userId) return <Redirect to="/movies" />;

  return (
    <div className={style.wrapper}>
      <div className={style.authBlock}>
        <div className={style.title}>{path === 'login' ? 'login' : 'signup'}</div>

        <div className={style.inputWrapper}>
          <label htmlFor="email" className={style.label}>
            Username

            <input
              type="text"
              value={email}
              id="email"
              placeholder="email"
              onChange={handleChangeEmail}
            />
          </label>
          {emailError && <p>{emailError}</p>}

          <label htmlFor="password" className={style.label}>
            Password

            <input
              type="password"
              value={password}
              id="password"
              placeholder="password"
              onChange={handleChangePassword}
            />
          </label>
          {passwordError && <p>{passwordError}</p>}
        </div>

        <div className={style.buttonWrapper}>
          {path === 'login' ? (
            <>
              <button type="button" onClick={handleLogin}>login</button>

              <button type="button" onClick={handleGoogleLogin}>google</button>

              <p>
                Don’t have an account?
                <NavLink to="/signup"> Sign Up</NavLink>
              </p>
            </>
          )
            : (
              <>
                <button type="button" onClick={handleSignup}>sign up</button>

                <p>
                  Already have an account?
                  <NavLink to="/login"> Login</NavLink>
                </p>
              </>
            )}
        </div>
      </div>
    </div>
  );
}

AuthPage.defaultProps = {
  path: '',
};

AuthPage.propTypes = {
  path: PropTypes.string,
};

export default AuthPage;
