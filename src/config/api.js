import axios from "axios";

export const API_CONTACT = axios.create({
  baseURL: process.env.REACT_APP_API,
});
