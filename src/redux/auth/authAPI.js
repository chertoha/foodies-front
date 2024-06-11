import axios from "axios";

export const authSignUpAPI = async data => {
  const response = await axios.post(``, data);
  return response;
};

export const authSignInAPI = async data => {
  const response = await axios.post(``, data);
  return response;
};

export const authLogOutAPI = async token => {
  const response = await axios.post(``, token);
  return response;
};
