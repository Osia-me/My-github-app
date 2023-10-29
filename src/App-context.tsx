import React from "react";
import { UserType } from "./types/user-type";

export default interface AppContextType {
  users: UserType[] | undefined;
  updateUsers: (query: string) => void;
}

export const defaultValue: AppContextType = {
  users: undefined,
  updateUsers: () => {
    /* Mock */
  },
};

export const AppContext = React.createContext<AppContextType>(defaultValue);
