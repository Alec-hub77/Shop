import React, { useState } from 'react';
import style from './login.module.scss';
import { login } from './../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector((state) => state.user)

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, {username, password})
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>SING IN</h1>
        <form action="">
          <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />           
          <button onClick={handleLogin} disabled={isFetching}>LOG IN</button>
          {error && <span style={{color: 'red'}}>Something went wrong...</span>}
          <a className={style.linkForgot}>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className={style.linkForgot}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
