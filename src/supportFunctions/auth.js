//const base64 = require("base-64");
const getToken = () => {
  return window.localStorage.getItem("token");
};

const setToken = (token) => {
  window.localStorage.setItem("token", token);
};

const removeToken = () => {
  window.localStorage.removeItem("token");
};

const getPayload = () => {
  const token = getToken();
  if (!token) return;
  const splitToken = token.split(".");
  return JSON.parse(atob(splitToken[1]));
};

const getUserId = () => {
  const payload = getPayload();
  return payload && payload.sub;
};

export { setToken, removeToken, getPayload, getUserId, getToken };
