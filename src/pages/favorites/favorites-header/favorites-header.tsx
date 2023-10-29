import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./favorites-header.css";

function FavouritesHeader() {
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate("/");
  };

  return (
    <div className="Favourites-header-content">
      <IoMdArrowBack
        className="Favourites-header-back"
        onClick={() => redirectUser()}
      />
      <p className="Favourites-header-text">Favorites</p>
      <AiFillStar className="Favourites-header-star" fill="orange" />
    </div>
  );
}

export default FavouritesHeader;
