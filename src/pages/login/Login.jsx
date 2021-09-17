import React from 'react';
import style from './login.module.scss';

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>SING IN</h1>
        <form action="">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />           
          <button>LOG IN</button>
          <a className={style.linkForgot}>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className={style.linkForgot}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
