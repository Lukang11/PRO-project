import "./Register.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Register() {
    const [formData, setFormData] = useState({
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
            // Wyślij dane formularza do serwera i zarejestruj użytkownika
            // ...
            setSuccess(true);
        } catch (error) {
            // Obsłuż błąd
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
                <div className="register">
                <Card>
                    <Card.Body>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">E-mail:</label>
                                <br></br>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <br></br>
                                <label htmlFor="password">Password:</label>
                                <br></br>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {error && <p>{error}</p>}
                                <div className="regiserButtonContainer">
                                    <Button variant="primary" type="submit" className="registerButton">Sign up</Button>
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
