import axios from "axios";
export const Axio = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "X-Custom-Header": "foobar",
    Accept: "application/json",
    "Content-Type": undefined,
  },
});
