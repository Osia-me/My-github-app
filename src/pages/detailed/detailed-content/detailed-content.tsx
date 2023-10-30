import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import handleRemoveItem from "../../../helpers/handleRemoveItem";
import "./detailed-content.css";
import { formBio } from "../../../helpers/formBio";

function DetailedContent() {
  const { user, favourites, setFavourites } = useAppContext();

  return (
    <div className="Detailed-content-container">
      {user ? (
        <div className="Detailed-content-card">
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="Detailed-content-avatar"
          />
          <div className="Detailed-content-info">
            <p className="Detailed-content-name">{user.name}</p>
            <a
              href={user.html_url}
              className="Detailed-content-link"
              target="_blank"
              rel="noreferrer"
            >
              @{user.login}
            </a>
            <p className="Detailed-content-bio">{formBio(user.bio)}</p>
            <div className="Detailed-content-subinfo">
              <div>
                <p className="Detailed-content-numbers">{user.followers}</p>
                <p className="Detailed-content-small">FOLLOWERS</p>
              </div>
              <div>
                <p className="Detailed-content-numbers">{user.following}</p>
                <p className="Detailed-content-small">FOLLOWING</p>
              </div>
              <div>
                <p className="Detailed-content-numbers">{user.public_repos}</p>
                <p className="Detailed-content-small">REPOS</p>
              </div>
            </div>
          </div>
          {favourites?.includes(user.id) ? (
            <AiFillStar
              className="Detailed-content-star"
              fill="orange"
              onClick={() =>
                setFavourites(handleRemoveItem(user.id, favourites))
              }
            />
          ) : (
            <AiOutlineStar
              className="Detailed-content-star"
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
