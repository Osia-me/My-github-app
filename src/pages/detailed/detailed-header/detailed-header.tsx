import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./detailed-header.css";

function DetailedHeader() {
  const { user } = useAppContext();
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate("/");
  };

  return (
    <div className="Detailed-header-container">
      <IoMdArrowBack
        className="Detailed-header-back"
        onClick={() => redirectUser()}
      />
      <p className="Detailed-header-text">
        {user ? `@${user?.login}` : "No user selected for details"}
      </p>
    </div>
  );
}

export default DetailedHeader;
