import "./Login.css"
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/login', { username, password })
      .then((response) => {
        // Jeśli logowanie się powiodło, zapisz token JWT w localStorage
        localStorage.setItem('token', response.data.token);
        // Przekieruj użytkownika do głównej strony
        window.location = '/';
      })
      .catch((error) => {
        setError('Nieprawidłowa nazwa użytkownika lub hasło');
      });
  };

  return (
    <div className='login'>
      <Card>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <label>
              E-mail:
              <br></br>
              <input type="email" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>
            <label>
              Password:
              <br></br>
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            {error && <p className="error">{error}</p>}
            <div className="loginButtonContainer">
              <Button variant="primary" type="submit" className="loginButton">Login</Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>

  );
};

export default Login;
