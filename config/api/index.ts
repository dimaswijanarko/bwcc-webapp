import axios from "axios";

const API = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://bwcc.inovasialfatih.com/api/public/'
});

export default API;