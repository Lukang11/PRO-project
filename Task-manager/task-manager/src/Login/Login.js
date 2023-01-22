import "./Login.css"
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

axios.defaults.headers.common = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json'
};

const Login = () => {
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5001/api/login', { login, password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        window.location = '/';
      })
      .catch((error) => {
        setError('Nieprawidłowa nazwa użytkownika lub hasło');
        console.log(error.message);
      });
  };

  return (
    <div className='login'>
      <Card>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <label>
              Login:
              <br></br>
              <input type="text" value={login} onChange={(event) => setlogin(event.target.value)} required/>
            </label>
            <br></br>
            <label>
              Hasło:
              <br></br>
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
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