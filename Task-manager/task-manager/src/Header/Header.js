import './HeaderStyle.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Bee from './logo.png';
import Logout from '../Logout/Logout'

function Header({ isLoggedIn, user }) {
  return (
    <>
      <Navbar bg='dark' variant='dark' className='nav'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={Bee} width='60' height='60' alt='TM'></img>
          </Navbar.Brand>
          {isLoggedIn ? (
            <>
              <Nav className='me-auto'>
                <Nav.Link href='/'>Strona główna</Nav.Link>
              </Nav>
              <span className='welcomeMsg'>Witaj, {user}</span>
              <Logout />
            </>
          ) : (
            <>
              <Nav className='me-auto'>
                <Nav.Link href='/'>Strona główna</Nav.Link>
                <Nav.Link href='/pricing'>Cennik</Nav.Link>
              </Nav>
              <Button className='navButton' variant='secondary' href='/register'>
                Zarejestruj się
              </Button>
              <Button className='navButton' variant='secondary' href='/login'>
                Zaloguj się
              </Button>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
}
export default Header;