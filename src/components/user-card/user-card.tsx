import React from "react";
import { UserType } from "../../types/user-type";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./user-card.css";
import { useAppContext } from "../../hooks/use-app-context";

type UserCardType = {
  user: UserType;
};

function UserCard({ user }: UserCardType) {
  const { setFavourites, favourites } = useAppContext();
  const formBio = (bio: string) => {
    if (!bio || (bio && bio.length <= 45)) {
      return bio;
    }
    return `${bio.slice(0, 45)} ...`;
  };

  const handleRemoveItem = (userId: number) => {
    const index = favourites.findIndex((id) => id === userId);
    const temperary = [...favourites];
    temperary.splice(index, 1);
    setFavourites(temperary);
  };

  return (
    <div className="UserCard-container">
      <img src={user.avatar_url} alt="Avatar" className="UserCard-avatar" />
      <div className="UserCard-info">
        <p>@{user.login}</p>
        <p className="UserCard-bio">{formBio(user.bio)}</p>
      </div>
      {favourites?.includes(user.id) ? (
        <AiFillStar
          className="UserCard-star"
          fill="orange"
          onClick={() => handleRemoveItem(user.id)}
        />
      ) : (
        <AiOutlineStar
          className="UserCard-star"
          onClick={() => setFavourites((prev: number[]) => [user.id, ...prev])}
        />
      )}
    </div>
  );
}

export default UserCard;
