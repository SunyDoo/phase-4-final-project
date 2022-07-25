import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Image
          src="https://t4.ftcdn.net/jpg/04/11/39/77/360_F_411397771_TYwKZCENTf7RJUuxll4tqjrxbkvkAC9U.jpg"
          width="75"
          height="75"
          className="d-inline-block align-top"
          alt="Sunil's Gym Logo"
          roundedCircle
        />
      </Navbar.Brand>
      <Navbar.Brand>Sunil's BlogSpot</Navbar.Brand>
      <Container>
        <NavLink to="/" exact style={{ color: "white" }}>
          Home Page
        </NavLink>
        <NavLink to="/-blogs" exact style={{ color: "white" }}>
          Blogs
        </NavLink>
        <NavLink to="/-createpost" exact style={{ color: "white" }}>
          Create Post
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBar;
