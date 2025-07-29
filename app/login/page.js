'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('user', JSON.stringify({ username }));
      router.push('/dashboard');
    } else {
      setError(data.message || 'Login gagal');
    }
  };

  return (
    <div className="login-body">
      <div className="login-wrapper">
        <div className="login-image">
          <Image
            src="https://infobaik.id/uploads/images/2023/03/image_750x500_6405e64ddf882.jpg"
            alt="Login"
            fill
            className="login-img"
          />
        </div>

        <div className="login-container">
          <h2>Silahkan Login</h2>

          <form onSubmit={handleSubmit}>
            <label><b>Username</b></label>
            <input
              className="login-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label><b>Password</b></label>
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="login-error">{error}</p>}

            <button className="login-button" type="submit">Masuk</button>
          </form>
        </div>
      </div>
    </div>
  );
}
