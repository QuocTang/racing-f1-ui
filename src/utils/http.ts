import axios from "axios";
import { apiUrl } from "../config/index";

const http = axios.create({
  baseURL: apiUrl,
});

export default http;
