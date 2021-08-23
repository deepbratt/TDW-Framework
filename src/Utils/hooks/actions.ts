import axios from "axios";

const BASE_URL = "http://api.tezdealz.com/v1";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + localStorage.getItem('tezdealzjwt')
  }
});

export const addData = async (endpoint: string, requestBody?: object) => {
  try {
      const result = await axiosInstance.post(endpoint, requestBody);
    return result.data;
  } 
  
  catch (error) {
    return { 
       status: 'error', message: 'Network Error' };
  }
};

export const getData = async (url: string,param: number | string) => {
  try {
    let result = await axiosInstance.get(`${url}${param}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSingleData = async (url: string, id: string) => {
  try {
    let result = await axiosInstance.get(`${url}/${id}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const addToFav = async (url: string, id: string) => {
  try {
    let result = await axiosInstance.patch(`${url}/${id}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateData = async (url: string, id: string, data: any) => {
  try {
    let result = await axiosInstance.patch(`${url}/${id}`, data);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateUser = async (url: string, data: any) => {
  try {
    let result = await axiosInstance.patch(`${url}`, data);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};


export const accountVerify = async (url: string, token: string) => {
  try {
    let result = await axiosInstance.patch(`${url}${token}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteData = async (url: string, id: string) => {
  try {
    let result = await axiosInstance.patch(`${url}/${id}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const isLoggedIn = async (url: string) => {
  try {
    let result = await axiosInstance.get(url);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
