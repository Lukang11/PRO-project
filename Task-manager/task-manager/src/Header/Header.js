import "./HeaderStyle.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img 
                src="/logo.png"
                width="300"
                height="300"
                alt="TM"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#test">Test</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
}
export default Header;