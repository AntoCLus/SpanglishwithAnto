import React from "react";
//import jwt_decode from "jwt-decode"
import { Link, useNavigate } from "react-router-dom";
import * as jwt_decode from 'jwt-decode';
import "./navBar.css";
// import App from "../App"


function NavBar() {
  const navigate = useNavigate();
  let token;
  let decoded;
  try {
    token = localStorage.getItem("token");

    if (token) {
      decoded = jwt_decode(token);
    }
    console.log("Token:", token);
  console.log("Decoded:", decoded);
  } catch (error) {
    console.log("Invalid token", error);
  }

  function handleLogout() {
    if (token) {
      localStorage.removeItem("token");
      navigate("/login");
      window.location.reload();
    } else {
      return;
    }
  }

  return (
    <>
      {token && decoded ? (
        <nav className="navContainer">
          <div>
          <Link className="links" to="/">{decoded && decoded.email ? decoded.email : 'user'}</Link>
          </div>
          <div>
            { <Link to="/form"></Link> }
            <Link className="links" to="signup">Sign up</Link>
            <Link className="links" to="login">Log in</Link>
            <Link className="links" to="/"></Link>
          </div>
        </nav>
      ) : (
        <nav className="navContainer">
          <div>
          </div>
          <div>
            <Link className="links" to="/form">Add a service</Link>
            <Link className="links" to="/">Service</Link>
            <Link className="links" onClick={handleLogout}>Log out</Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBar;
