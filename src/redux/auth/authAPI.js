import axios from "axios";
import { api } from "services/api";

export const authSignUpAPI = async data => {
  const response = await api.post(`/users/signup`, data);
  return response.data;
};

export const authSignInAPI = async data => {
  const response = await api.post(`/users/signin`, data);
  return response.data;
};

export const authLogOutAPI = async token => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/users/logout`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
