import React, { Dispatch, SetStateAction } from "react";
import { UserType } from "./types/user-type";

export default interface AppContextType {
  users: UserType[] | undefined;
  setUsers: Dispatch<SetStateAction<UserType[] | undefined>>;
}

export const defaultValue: AppContextType = {
  users: undefined,
  setUsers: () => {
    /* Mock */
  },
};

export const AppContext = React.createContext<AppContextType>(defaultValue);
