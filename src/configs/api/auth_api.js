// const BASE_URL = process.env.BASE_URL;
import axios from 'axios'

const BASE_URL = 'http://94.103.87.212';

export const login = async (data) => {
  console.log('data', data);
    await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      body: data,
    }).then(res => res.json())
    .catch(err => err)
}