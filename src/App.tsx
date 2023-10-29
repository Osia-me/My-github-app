import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Content from "./components/content/content";
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
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<div>Search</div>} />
          <Route path="favourites" element={<div>Favourites</div>} />
          <Route path="detailed" element={<div>Detailed</div>} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<div>Search</div>} />
          <Route path="favourites" element={<div>Favourites</div>} />
          <Route path="detailed" element={<div>Detailed</div>} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
