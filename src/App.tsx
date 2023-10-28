import React, { useState } from "react";
import Header from "./components/header/header";
import Context from "./components/context/context";
import AppContextType, { AppContext } from "./App-context";
import { UserType } from "./types/user-type";

function App() {
  const [users, setUsers] = useState<UserType[] | undefined>();

  const appContextValue: AppContextType = {
    users,
    setUsers,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <Header />
      <Context />
    </AppContext.Provider>
  );
}

export default App;
