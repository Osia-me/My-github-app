import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Content from "./components/content/content";
import AppContextType, { AppContext } from "./App-context";
import { UserType } from "./types/user-type";
import { GitHubSearchUsersApi } from "./api";
import SearchHeader from "./pages/search/search-header/search-header";
import SearchContent from "./pages/search/search-content/search-content";

function App() {
  const [usersConfig, setUsersConfig] = useState();
  const [users, setUsers] = useState<UserType[] | undefined>();

  const updateUsers = (query: string) => {
    GitHubSearchUsersApi.getUsers(query).then((result) =>
      setUsers(result?.data.items)
    );
  };

  const appContextValue: AppContextType = {
    users,
    updateUsers,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<SearchHeader />} />
          <Route path="favourites" element={<div>Favourites</div>} />
          <Route path="detailed" element={<div>Detailed</div>} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<SearchContent />} />
          <Route path="favourites" element={<div>Favourites</div>} />
          <Route path="detailed" element={<div>Detailed</div>} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
