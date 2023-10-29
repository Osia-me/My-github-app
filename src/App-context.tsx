import React, { Dispatch, SetStateAction } from "react";
import { UserType } from "./types/user-type";

export default interface AppContextType {
  users: UserType[] | undefined;
  updateUsers: (query: string) => void;
  favourites: Array<number>;
  setFavourites: Dispatch<SetStateAction<any>>;
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
};

export const AppContext = React.createContext<AppContextType>(defaultValue);
