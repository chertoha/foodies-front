import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

const axiosBaseQuery =
  (baseUrl = "") =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await api({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export { api, BASE_URL, axiosBaseQuery, setAuthHeader, clearAuthHeader };
