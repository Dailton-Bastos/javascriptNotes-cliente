import React from "react";
import { Navbar, Container } from "rbx";
import logoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={logoImage} alt="Logotipo javascript Note" />
          <Navbar.Burger
            className="navbar-burguer burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>

        <Navbar.Menu id="navbar-menu">
          <Navbar.Segment
            as="div"
            className="navbar-item navbar-end"
            align="right"
          >
            Item 1
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}

export default Header;