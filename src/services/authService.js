import axios from "axios";
import { BASE_URL } from "../constants/apiUrl";
import { REGISTER, LOGIN } from "../constants/apiEndpoints";

export const authService = {
  register: (data) => {
    return axios.post(`${BASE_URL}${REGISTER}`, data);
  },
  login: (data) => {
    return axios.post(`${BASE_URL}${LOGIN}`, data);
  },
};
