import React from 'react';
import styles from './login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className={styles.inputField} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className={styles.inputField}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
