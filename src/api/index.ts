import axios from "axios";

const getUsers = async (query: string) => {
  await axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/search/users?q=${query}`)
    .then(function (response) {
      return response;
    })
    .catch((err) => console.log(err));
};

export const GitHubSearchUsersApi = {
  getUsers,
};
