import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p className="site-name">&copy; WATERBOAT {new Date().getFullYear()}</p>

      <div className="nav-footer">
        <NavLink className="nav-footer-link" to="/">
          More Info
        </NavLink>
        <NavLink className="nav-footer-link" to="/">
          About us
        </NavLink>
        <NavLink className="nav-footer-link" to="/">
          Contact us
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
