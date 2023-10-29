import React from "react";
import { UserType } from "./types/user-type";

export default interface AppContextType {
  users: UserType[] | undefined;
  setUsers: (users: UserType[] | []) => void;
}

export const defaultValue: AppContextType = {
  users: undefined,
  setUsers: () => {
    /* Mock */
  },
};

export const AppContext = React.createContext<AppContextType>(defaultValue);
