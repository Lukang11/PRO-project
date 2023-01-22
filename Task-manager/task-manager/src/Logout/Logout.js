import React from 'react';
import Button from 'react-bootstrap/Button';

function Logout() {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <Button className='navButton' variant='secondary' onClick={handleLogout}>
            Wyloguj się
        </Button>

    );
}

export default Logout;
