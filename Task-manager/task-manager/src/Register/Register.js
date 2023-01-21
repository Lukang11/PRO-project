import './Register.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:5001/api/register', formData);
        const { data } = response;
        if (!response.status === 201) {
            throw new Error(data.message);
        }
        setSuccess(true);
    } catch (error) {
        setError(error.message);
    }
};

  return (
    <div>
      {success ? (
        <div>
          <h1>Rejestracja zakończona pomyślnie</h1>
          <p>Możesz się teraz zalogować.</p>
        </div>
      ) : (
        <div className='register'>
          <Card>
            <Card.Body>
              <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor='login'>Username:</label>
                  <br></br>
                  <input
                    type='text'
                    name='login'
                    id='login'
                    value={formData.logn}
                    onChange={handleChange}
                  />
                  <br></br>
                  <label htmlFor='email'>E-mail:</label>
                  <br></br>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <br></br>
                  <label htmlFor='password'>Hasło:</label>
                  <br></br>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {error && <p>{error}</p>}
                  <div className='registerButtonContainer'>
                    <Button
                      variant='primary'
                      type='submit'
                      className='registerButton'>
                      Zarejestruj się
                    </Button>
                  </div>
                </form>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Register;
