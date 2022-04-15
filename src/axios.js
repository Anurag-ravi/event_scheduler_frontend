import axios from "axios";

axios.defaults.xsrfHeaderName = "x-csrftoken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const client = axios.create({
  // baseURL: "https://swc.iitg.ac.in/event-scheduler",
  baseURL: "http://localhost:8000/event-scheduler",
});

export default client;
// export const baseURL = "https://swc.iitg.ac.in";
export const baseURL = "http://localhost:8000";