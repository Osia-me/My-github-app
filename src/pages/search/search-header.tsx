import React from "react";
import { Outlet } from "react-router-dom";
import "./header.css";
import { useAppContext } from "../../hooks/use-app-context";

function SearchHeader() {
  const { setUsers } = useAppContext();

  return (
    <header className="Header-container">
      <div className="Header-context">
        <Outlet />
      </div>
    </header>
  );
}

export default SearchHeader;
