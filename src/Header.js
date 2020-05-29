import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return ( <div className="container container-header">
        {
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">BoulderBikeTour</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="gallery">Gallery</Nav.Link>
              <Nav.Link href="location">Location</Nav.Link>
              <Nav.Link href="contest">Contest</Nav.Link>
              <Nav.Link href="askus">Ask Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        }
    <div><hr /></div></div>
    );
  }
}


export default Header;
