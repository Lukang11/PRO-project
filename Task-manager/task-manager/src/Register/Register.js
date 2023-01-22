import './Register.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import validator from 'validator';

function Register() {
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    name: '',
    surname: '',
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
    const passwordError = checkPasswordStrength(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    const emailError = validator.isEmail(formData.email) ? '' : 'Nieprawidłowy adres email.';
    if (emailError) {
      setError(emailError);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/register', formData);
      const { data } = response;
      if (!response.status === 201) {
        throw new Error(data.message);
      }
      setSuccess(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const checkPasswordStrength = password => {
    if (password.length < 8) {
      return 'Hasło musi mieć co najmniej 8 znaków.';
    }
    if (!/\d/.test(password)) {
      return 'Hasło musi zawierać co najmniej jedną cyfrę.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Hasło musi zawierać co najmniej jedną małą literę.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Hasło musi zawierać co najmniej jedną dużą literę.';
    }
    if (!/[!@#\$%\^&\*]/.test(password)) {
      return 'Hasło musi zawierać co najmniej jeden znak specjalny.';
    }
    return '';
  }

  return (
    <div>
      {success ? (
        <div className='success'>
          <Card>
            <Card.Body>
              <Card.Title><h1>Rejestracja zakończona pomyślnie</h1></Card.Title>
              <Card.Text><p>Możesz się teraz zalogować.</p></Card.Text>
              <div className='registerButtonContainer'>
                <Button
                  variant='primary'
                  type='submit'
                  className='registerButton'
                  href='/login'>
                  Zaloguj się
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className='register'>
          <Card>
            <Card.Body>
              <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor='login'>Login:</label>
                  <br></br>
                  <input
                    type='text'
                    name='login'
                    id='login'
                    value={formData.login}
                    onChange={handleChange}
                    required
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
                    required
                  />
                  <br></br>
                  <label htmlFor='name'>Imie:</label>
                  <br></br>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <br></br>
                  <label htmlFor='surname'>Nazwisko:</label>
                  <br></br>
                  <input
                    type='text'
                    name='surname'
                    id='surname'
                    value={formData.surname}
                    onChange={handleChange}
                    required
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
                    required
                  />
                  {error && <p className='error'>{error}</p>}
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
