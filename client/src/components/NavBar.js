import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand>Sunil's BlogSpot</Navbar.Brand>
      <Container>
        <NavLink to="/" exact style={{ color: "white" }}>
          Login
        </NavLink>
        <NavLink to="/blogs" exact style={{ color: "white" }}>
          Blogs
        </NavLink>
        <NavLink to="/users" exact style={{ color: "white" }}>
          Users
        </NavLink>
        <NavLink to="/createpost" exact style={{ color: "white" }}>
          Create Post
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBar;
