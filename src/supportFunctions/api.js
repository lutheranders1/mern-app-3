import axios from "axios";
import { getToken } from "./auth";

//const baseURL = "http://localhost:5000";
const fetchAllMovies = async () => {
  const config = {
    method: "get",
    url: "https://salty-crag-11243.herokuapp.com/api/movies",
    headers: {},
  };
  const response = await axios(config);
  return response.data;
};

const fetchOneMovie = async (id) => {
  const config = {
    method: "get",
    url: `/api/movies/${id}`,
    headers: {},
  };
  const response = await axios(config);
  return response.data;
};

const deleteMovie = async (id) => {
  const config = {
    method: "delete",
    url: `https://salty-crag-11243.herokuapp.com/api/movies/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };
  const response = await axios(config);
  return response.data;
};

const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data);

  const response = await axios(config);
  return response.data;
};

const login = async (data) => {
  return makeAxiosRequest("/login", data);
};

const register = (data) => {
  return makeAxiosRequest("/register", data);
};

const getAxiosRequestConfig = (requestUrl, data, method = "post") => {
  const config = {
    method,
    url: `https://salty-crag-11243.herokuapp.com/api${requestUrl}`,
    headers: {
      Authorization: `${getToken()}`,
      "Content-Type": "application/json",
    },
    data,
  };
  return config;
};

export {
  fetchAllMovies,
  fetchOneMovie,
  deleteMovie,
  login,
  register,
  getAxiosRequestConfig,
};
