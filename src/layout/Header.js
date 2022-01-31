import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { color } from "@mui/system";
const Header = () => {
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="#home">CRM Ticket</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <Link
              to="/dashboard"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "black",
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/tickets"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "black",
              }}
            >
              Tickets
            </Link>
            <Link
              to="/logout"
              style={{
                paddingLeft: 13,
                textDecoration: "none",
                color: "black",
              }}
            >
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
