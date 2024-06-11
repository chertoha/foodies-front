import axios from "axios";
const BASE_URL = "https://";

export const authSignUpAPI = async data => {
  const response = await axios.post(`${BASE_URL}/`, data);
  return response;
};

export const authSignInAPI = async data => {
  const response = await axios.post(`${BASE_URL}/`, data);
  return response;
};

export const authLogOutAPI = async token => {
  const response = await axios.post(`${BASE_URL}/`, token);
  return response;
};
