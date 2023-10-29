import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Content from "./components/content/content";
import AppContextType, { AppContext } from "./App-context";
import { UserType } from "./types/user-type";
import { GitHubSearchUsersApi } from "./api";
import SearchHeader from "./pages/search/search-header/search-header";
import SearchContent from "./pages/search/search-content/search-content";
import FavouritesHeader from "./pages/favorites/favorites-header/favorites-header";
import FavoritesContent from "./pages/favorites/favorites-content/favorites-content";

function App() {
  const [users, setUsers] = useState<UserType[] | undefined>();
  const [favourites, setFavourites] = useState<number[]>([]);

  const updateUsers = (query: string) => {
    GitHubSearchUsersApi.getUsers(query).then((result) =>
      setUsers(result?.map((userData: { data: any }) => userData.data))
    );
  };

  console.log("favourites", favourites);

  const appContextValue: AppContextType = {
    users,
    updateUsers,
    favourites,
    setFavourites,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<SearchHeader />} />
          <Route path="favorites" element={<FavouritesHeader />} />
          <Route path="detailed" element={<div>Detailed</div>} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<SearchContent />} />
          <Route path="favorites" element={<FavoritesContent />} />
          <Route path="detailed" element={<div>Detailed</div>} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
