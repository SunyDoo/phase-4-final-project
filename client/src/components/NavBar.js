import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand>Sunil's BlogSpot</Navbar.Brand>
      <Container>
        <NavLink to="/" exact style={{ color: "black" }}>
          Home Page
        </NavLink>
        <NavLink to="/blogs" exact style={{ color: "black" }}>
          Blogs
        </NavLink>
        <NavLink to="/createpost" exact style={{ color: "black" }}>
          Create Post
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBar;
