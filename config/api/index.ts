import axios from "axios";

const API = axios.create({
  baseURL: 'https://bwcc.inovasialfatih.com/api/public/'
});

export default API;