import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./search-header.css";

function SearchHeader() {
  const { updateUsers } = useAppContext();
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate("/favorites");
  };

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
        onClick={() => redirectUser()}
      />
    </div>
  );
}

export default SearchHeader;
