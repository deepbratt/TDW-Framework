import axios from 'axios';
import { store } from '../../redux/store';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + localStorage.getItem('caroktajwt')
    // Authorization: 'Bearer ' + storeState.auth.token
  }
});

// const getHeaders = async()=>{
//   const storeState = await store.getState()
//   let headers= {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     Authorization: 'Bearer ' + localStorage.getItem('caroktajwt')
//   }
//   let tokenLocal = await localStorage.getItem('caroktajwt')
//   let JWT = await storeState.auth.token
//   console.log('jwt=', JWT)
//   console.log('local token=', tokenLocal)
//   console.log('local token=', JWT ? JWT : tokenLocal)
//   axiosInstance.defaults.headers.common['Authorization']="Bearer "+JWT? JWT+"" : tokenLocal+""
//   return headers
// }

axiosInstance.interceptors.request.use(function (config) {
  const token = store.getState().auth.token;
  const localToken = localStorage.getItem('caroktajwt');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  } else {
    config.headers.Authorization = 'Bearer ' + localToken;
  }

  return config;
});

export const addData = async (endpoint: string, requestBody?: object) => {
  try {
    const result = await axiosInstance.post(endpoint, requestBody);
    return result.data;
  } catch (error: any) {
    return {
      status: 'error',
      message: 'Network Error'
    };
  }
};

export const getData = async (url: string, param: number | string) => {
  // // let headers  = await getHeaders()
  try {
    let result = await axiosInstance.get(`${url}${param}`);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getSingleData = async (url: string, id: string) => {
  // let headers  = await getHeaders()
  try {
    let result = await axiosInstance.get(`${url}/${id}`);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const addToFav = async (url: string, id: string) => {
  // let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}/${id}`);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const updateData = async (url: string, id: string, data: any) => {
  // let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}/${id}`, data);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const updateUser = async (url: string, data: any) => {
  // let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}`, data);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const accountVerify = async (url: string, token: string) => {
  // let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}${token}`);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const deleteData = async (url: string, id: string) => {
  // let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}/${id}`);
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const isLoggedIn = async (url: string) => {
  // let headers  = await getHeaders()
  try {
    let result = await axiosInstance.get(url);
    return result.data;
  } catch (error: any) {
    return error;
  }
};
