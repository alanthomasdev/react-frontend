import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

function LoginModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const { loginUser } = useAuth();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

    const handleSubmit = async () => {
    if (!validateEmail(email)) {
      alert('Enter a valid email');
      return;
    }
    if (!password) {
      alert('No Password entered');
      return;
    }

    try {
    //   const response = await axios.post('http://localhost:3000/login', { email, password });

      await loginUser(email, password);
      alert('Login Successful');
      handleClose();
    } catch (err) {
      alert('Invalid credentials');
      console.error(err);
    }
  };


  return (
    <>
      <button
        onClick={handleShow}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Launch Login
      </button>

      {show && (
        <>
          <div
            onClick={handleClose}
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
              top: '0px',
              right: '0px',
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '50px',
                width: '100%',
                padding: '5px 10px',
              }}
            >
              <h3 style={{ margin: 0 }}>Login</h3>
              <button
                onClick={handleClose}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <input
                placeholder="Email"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
                style={{
                  height: '40px',
                  padding: '10px',
                  marginTop: '20px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
              <input
                placeholder="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                style={{
                  height: '40px',
                  padding: '10px',
                  marginTop: '20px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  marginTop: '20px',
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LoginModal;
