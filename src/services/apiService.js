import axios from "axios";
import { BASE_URL } from "../constants/apiUrl";

export const apiService = {
  getCall: (endpoint, token) => {
    return axios.get(`${BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },

  postCall: (endpoint, data, token) => {
    return axios.post(`${BASE_URL}/${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },

  patchCall: (endpoint, data, token) => {
    return axios.patch(`${BASE_URL}/${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },

  putCall: (endpoint, data, token) => {
    return axios.put(`${BASE_URL}/${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },

  deleteCall: (endpoint, token) => {
    return axios.delete(`${BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
};
