import './style.css';

import React, { useState } from 'react'

export default function Main() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input
            type="text"
            placeholder='e-mail'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name=""
            required="" />
          <label>Usuário</label>
        </div>
        <div class="user-box">
          <input
            type="password"
            placeholder='senha'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name=""
            required="" />
          <label>Senha</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}
