import React from "react";
import { Outlet } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="Header-container">
      <div className="Header-context">
        <Outlet />
      </div>
    </header>
  );
}

export default Header;
