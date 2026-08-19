'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/admin',
      });

      if (!res?.ok || res.error) {
        setError('Invalid credentials');
      } else {
        router.replace(res.url || '/admin');
        router.refresh();
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-card']}>
        <div className={styles['login-header']}>
          <h1 className={styles['login-title']}>Admin Access</h1>
          <p className={styles['login-subtitle']}>Welcome back to Marediasoft Portal</p>
        </div>

        <form onSubmit={handleSubmit} className={styles['login-form']}>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles['login-input']}
              placeholder="admin@marediasoft.com"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles['login-input']}
              placeholder="••••••••"
              required
            />
          </div>

          {error && <div className={styles['login-error']}>{error}</div>}

          <button type="submit" disabled={loading} className={styles['login-button']}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <p className={styles['login-footer']}>Secure encrypted portal access.</p>
      </div>
    </div>
  );
}
