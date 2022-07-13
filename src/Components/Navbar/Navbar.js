import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = ({ setIsAuth, isAuth }) => {
  return (
    <Navbar bg="dark" variant="dark" className="myNavbar">
      <Container fluid>
        <Navbar.Brand href="#home">React Router</Navbar.Brand>
        <Nav className="me-auto myLinks">
          <NavLink
            to="/"
            className={(navLink) =>
              navLink.isActive ? "selectedLink" : "navLink"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={(navLink) =>
              navLink.isActive ? "selectedLink" : "navLink"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={(navLink) =>
              navLink.isActive ? "selectedLink" : "navLink"
            }
          >
            About
          </NavLink>
        </Nav>

        {/* For Login ( private route ) */}
        <Form className="d-flex">
          <Button variant="outline-light" onClick={() => setIsAuth(!isAuth)}>
            {isAuth ? "Logout" : "Login"}
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavBar;
