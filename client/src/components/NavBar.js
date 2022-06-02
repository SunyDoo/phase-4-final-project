import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

function NavBar({ currentUser, setCurrentUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  return (
    <Navbar>
      <Navbar.Brand>Sunil's BlogSpot</Navbar.Brand>
      <Container>
        <NavLink
          to="/"
          exact
          style={{ color: "black" }}
          onClick={handleLogoutClick}
        >
          Logout
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
