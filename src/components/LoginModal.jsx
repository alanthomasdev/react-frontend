import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

function LoginModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useAuth();

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) return alert('Enter a valid email');
    if (!password) return alert('No Password entered');

    try {
      await loginUser(email, password);
      alert('Login Successful');
      onClose();
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 998,
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '400px',
          backgroundColor: 'white',
          padding: '10px',
          zIndex: 999,
          boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <h3>Login</h3>
          <button onClick={onClose} style={{ fontSize: '18px', background: 'none', border: 'none' }}>✕</button>
        </div>

        <div style={{ padding: '20px', flex: 1 }}>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              marginTop: '20px',
              width: '100%',
              height: '40px',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              marginTop: '20px',
              width: '100%',
              height: '40px',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              marginTop: '20px',
              padding: '10px',
              width: '100%',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
