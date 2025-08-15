import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/logo.png';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top' style={{ zIndex: 1000 }}>
      <Container>
        <Navbar.Brand href="#home" className='fw-semibold'>
          <Image src={logo} width={65} height={40} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Layanan</Nav.Link>
            <Nav.Link href="#about">Tentang Kami</Nav.Link>
            <Nav.Link href="#testimoni">Testimoni</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;