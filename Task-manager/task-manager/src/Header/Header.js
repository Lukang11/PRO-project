import './HeaderStyle.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Bee from './logo.png';

function Header() {
  return (
    <>
      <Navbar bg='dark' variant='dark' className='nav'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={Bee} width='60' height='60' alt='TM'></img>
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/pricing'>Pricing</Nav.Link>
            <Nav.Link href='#test'>Test</Nav.Link>
          </Nav>
          <Button className='navButton' variant='secondary' href='/login'>
            Sign in
          </Button>{' '}
          <Button className='navButton' variant='secondary' href='/register'>
            Sign up
          </Button>{' '}
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
