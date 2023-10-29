import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import UserCard from "../../../components/user-card/user-card";
import "./search-content.css";

function SearchContent() {
  const { users } = useAppContext();

  return (
    <div className="Search-content-container">
      {users ? (
        <div className="Search-content-card">
          {users.map((user, key) => (
            <React.Fragment key={`user-${key}`}>
              <UserCard key={`user-${key}`} user={user} />
              <hr className={"Search-content-hr"} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div>No search results ...</div>
      )}
    </div>
  );
}

export default SearchContent;
