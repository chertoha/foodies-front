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

api.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmEwMzk2Mjk5MDA5MWY3NTM2ZTdlNiIsImlhdCI6MTcxODI5MzI3NCwiZXhwIjoxNzE4Mzc5Njc0fQ.G3rh70HoHONPtOk6nBAhVhiH56NBkNHMi658EPTwnw8`;

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
