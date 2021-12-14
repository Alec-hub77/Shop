import React from 'react';
import { useState } from 'react';
import './login.scss';
import { useDispatch } from 'react-redux';
import { login } from './../../redux/apiCalls';
import { useHistory } from 'react-router';


const Login = () => {
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, {username, password})
        history.push('/')
    }

  return (
    <div className="login">
      <div className="container">
        <center><h2>Login</h2></center>
        <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} >LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
