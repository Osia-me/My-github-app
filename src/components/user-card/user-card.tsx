import React from "react";
import { UserType } from "../../types/user-type";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAppContext } from "../../hooks/use-app-context";
import { useNavigate } from "react-router-dom";
import handleRemoveItem from "../../helpers/handleRemoveItem";
import "./user-card.css";
import { formBio } from "../../helpers/formBio";

type UserCardType = {
  user: UserType;
};

function UserCard({ user }: UserCardType) {
  const { setFavourites, favourites, setUser } = useAppContext();
  const navigate = useNavigate();

  return (
    <div
      className="UserCard-container"
      onClick={() => {
        setUser(user);
        navigate("/detailed");
      }}
    >
      <img src={user.avatar_url} alt="Avatar" className="UserCard-avatar" />
      <div className="UserCard-info">
        <p>@{user.login}</p>
        <p className="UserCard-bio">{formBio(user.bio)}</p>
      </div>
      {favourites?.includes(user.id) ? (
        <AiFillStar
          className="UserCard-star"
          fill="orange"
          onClick={(e) => {
            e.stopPropagation();
            setFavourites(handleRemoveItem(user.id, favourites));
          }}
        />
      ) : (
        <AiOutlineStar
          className="UserCard-star"
          onClick={(e) => {
            e.stopPropagation();
            setFavourites((prev: number[]) => [user.id, ...prev]);
          }}
        />
      )}
    </div>
  );
}

export default UserCard;
