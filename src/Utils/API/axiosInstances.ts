import axios from 'axios';

export const BASE_URL = 'https://api.tezdealz.com/v1';

let fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6eyJpZCI6IjYxMWQwOTRlZThjMWJiMDAxZWNmYTRlOSJ9LCJpYXQiOjE2MjkyOTI5MTYsImV4cCI6NjgxMzI5MjkxNn0.gQFD2lGDOWDvncP03J8rLlzsvnfeI2I1a52ltwVBBDQ"

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + localStorage.getItem('tezdealzjwt')
  }
});

export const axiosFormInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + localStorage.getItem('tezdealzjwt')
  }
});
