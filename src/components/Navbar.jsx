import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import SearchBar from "./SearchBar";
import "./Nav.css";
function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="nav__left">
        <img className="nav__logo" src={logo} alt="Лого сайта" />
      </Link>

      <SearchBar />
      <div className="nav__user">
        <Link to="/profile" style={{ display: "flex", alignItems: "center" }}>
          <img className="nav__user-avatar" src="https://i.pinimg.com/564x/de/9e/c4/de9ec4a15471907668ae183025d6cf7b.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
