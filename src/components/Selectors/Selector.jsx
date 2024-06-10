import { api, BASE_URL, axiosBaseQuery } from "../services/api";

axiosBaseQuery(BASE_URL);
console.log(axiosBaseQuery);

export const Selector = () => {
  return <div>Selector</div>;
};
