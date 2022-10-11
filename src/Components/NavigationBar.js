import { Navbar, Container, Nav, NavbarBrand } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <NavbarBrand>COCO CINEMA</NavbarBrand>
          <Nav>
            <Nav.Link href="#Trending">Trending</Nav.Link>
            <Nav.Link>Korea</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
