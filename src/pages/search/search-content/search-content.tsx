import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import "./search-content.css";

function SearchContent() {
  const { users } = useAppContext();

  return (
    <div className="Search-content-container">
      {users ? (
        <div>
          {users.map((user) => (
            <div>{user.login}</div>
          ))}
        </div>
      ) : (
        <div>No search results ...</div>
      )}
    </div>
  );
}

export default SearchContent;
