import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const logo = <FontAwesomeIcon icon={faShip} className="styleLogo" />;
  return (
    <div className="header">
      <div className="header-logo">{logo} WATERBOAT</div>
      <div className="header-nav">
        <NavLink className="header-nav-link" to="/Homepage">
          HOME
        </NavLink>
        <NavLink className="header-nav-link" to="/AddBooking">
          BOOK NOW
        </NavLink>
        <NavLink className="header-nav-link" to="/BookingList">
          BOOKING LIST
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
