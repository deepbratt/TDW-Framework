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

const getHeaders = async()=>{
  let headers= {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + localStorage.getItem('tezdealzjwt')
  }
  let token = await localStorage.getItem('tezdealzjwt')
  headers['Authorization']="Bearer "+token
  return headers
}

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
  let headers  = await getHeaders()
  try {
    let result = await axiosInstance.get(`${url}${param}`, {headers: headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSingleData = async (url: string, id: string) => {
  let headers  = await getHeaders()
  try {
    let result = await axiosInstance.get(`${url}/${id}`, {headers: headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const addToFav = async (url: string, id: string) => {
  let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}/${id}`, {headers: headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateData = async (url: string, id: string, data: any) => {
  let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}/${id}`, data, {headers: headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateUser = async (url: string, data: any) => {
  let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}`, data, {headers: headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};


export const accountVerify = async (url: string, token: string) => {
  let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}${token}`, {headers:headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteData = async (url: string, id: string) => {
  let headers  = await getHeaders()
  try {
    let result = await axiosInstance.patch(`${url}/${id}`, {headers:headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const isLoggedIn = async (url: string) => {
  let headers  = await getHeaders()
  try {
    let result = await axiosInstance.get(url, {headers: headers});
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
