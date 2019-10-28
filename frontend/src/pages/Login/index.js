import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const resp = await api.post('/sessions', {
      email
    });

    const { _id } = resp.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (
    <>
      <p>
        Oferaça <strong>spots</strong> para programadores e encontre{' '}
        <strong>talentos</strong> para a sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          placeholder="Seu melhor email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
}
