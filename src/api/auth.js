import config from "@/config";
import axios from "axios";

async function login({ email, password }) {
  return await axios.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });
}

async function signup(data) {
  return await axios.post(`${config.apiUrl}/api/auth/register`, data);
}

export { login, signup };
