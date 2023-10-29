import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import "./search-header.css";

function SearchHeader() {
  const { updateUsers } = useAppContext();

  return (
    <div className="Search-header-content">
      <AiOutlineSearch />
      <input
        className="Search-header-input"
        type="search"
        placeholder="Search for GitHub users ..."
        onChange={(e) => updateUsers(e.target.value)}
      />
      <AiOutlineStar
        className="Search-header-star"
        onClick={() => console.log("CLICK")}
      />
    </div>
  );
}

export default SearchHeader;
