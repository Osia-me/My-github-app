import React, { Dispatch, SetStateAction } from "react";
import { UserType } from "./types/user-type";

export default interface AppContextType {
  users: UserType[] | undefined;
  updateUsers: (query: string) => void;
  favourites: Array<number>;
  setFavourites: Dispatch<SetStateAction<any>>;
  user: UserType | undefined;
  setUser: Dispatch<SetStateAction<UserType | undefined>>;
}

export const defaultValue: AppContextType = {
  users: undefined,
  updateUsers: () => {
    /* Mock */
  },
  favourites: [],
  setFavourites: () => {
    /* Mock */
  },
  user: undefined,
  setUser: () => {
    /* Mock */
  },
};

export const AppContext = React.createContext<AppContextType>(defaultValue);
