import axios from "axios";

const axiosHeaders = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_DEV_TOKEN}`,
    "X-GitHub-Api-Version": "2022-11-28",
  },
};

const getUsers = async (query: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_DEV_BASE_URL}/search/users?q=${query}`,
      axiosHeaders
    )
    .then(function (response) {
      const configArray = response.data.items;
      const urls = configArray.map((userData: { url: any }) => userData.url);
      const userResponse = Promise.all(
        urls.map((url: string) => axios.get(url, axiosHeaders))
      )
        .then((res) => {
          return res;
        })
        .catch((err) => console.log(err));

      return userResponse;
    })
    .catch((err) => console.log(err));
};

export const GitHubSearchUsersApi = {
  getUsers,
};
