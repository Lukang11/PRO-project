import React from 'react';
import Button from 'react-bootstrap/Button';

function Logout() {

    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    return (
        <Button className='navButton' variant='secondary' onClick={handleLogout()} href='/'>
            Wyloguj się
        </Button>

    );
}

export default Logout;
