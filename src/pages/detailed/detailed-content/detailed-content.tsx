import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import "./detailed-content.css";

function DetailedContent() {
  const { user } = useAppContext();
  return (
    <div className="Detailed-content-container">
      {user ? (
        <div className="Search-content-card">{user.name}</div>
      ) : (
        <div>No search results ...</div>
      )}
    </div>
  );
}

export default DetailedContent;
