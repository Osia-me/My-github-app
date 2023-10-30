import React from "react";
import { AppContext } from "../App-context";

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("AppContext is not ready");
  }
  return context;
};
