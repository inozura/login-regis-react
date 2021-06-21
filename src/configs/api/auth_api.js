// const BASE_URL = process.env.BASE_URL;
import axios from 'axios'

const BASE_URL = 'http://94.103.87.212';

export const loginAPI = async (value) => {
  try {
    const data = new FormData();
    data.set('username', value.email);
    data.set('password', value.password);

    const fetchApi = await axios.post(`${BASE_URL}/api/auth/login`, data);
    return fetchApi;
  } catch (err) {
    return err.response;
  }
}

export const registerAPI = async (data) => {
  try {
    await axios.post(`${BASE_URL}/api/auth/signup`, data)
      .then(res => res);
  } catch (err) {
    return err;
  }
}