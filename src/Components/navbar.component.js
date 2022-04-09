import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class NavbarComp extends React.Component {
  render() {
    return (
      <>
        <Navbar bg='primary' variant='light' expand='lg'>
          <Container>
            <Navbar.Brand href='/'>WeatherApp</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/weather'>Weather</Nav.Link>
                <Nav.Link href='/aboutus'>AboutUs</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
