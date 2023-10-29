import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import handleRemoveItem from "../../../helpers/handleRemoveItem";
import "./detailed-content.css";

function DetailedContent() {
  const { user, favourites, setFavourites } = useAppContext();

  return (
    <div className="Detailed-content-container">
      {user ? (
        <div className="Search-content-card">
          <img src={user.avatar_url} alt="Avatar" className="UserCard-avatar" />
          <div>
            <p>{user.name}</p>
            <p>{user.login}</p>
            <p>{user.bio}</p>
            <div>
              <p>FOLLOWERS</p>
              <p>FOLLOWING</p>
              <p>REPOS</p>
            </div>
          </div>
          {favourites?.includes(user.id) ? (
            <AiFillStar
              className="UserCard-star"
              fill="orange"
              onClick={() =>
                setFavourites(handleRemoveItem(user.id, favourites))
              }
            />
          ) : (
            <AiOutlineStar
              className="UserCard-star"
              onClick={() =>
                setFavourites((prev: number[]) => [user.id, ...prev])
              }
            />
          )}
        </div>
      ) : (
        <div>No search results ...</div>
      )}
    </div>
  );
}

export default DetailedContent;
