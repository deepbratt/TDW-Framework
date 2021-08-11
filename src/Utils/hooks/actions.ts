import axios from "axios";

const BASE_URL = "http://api.tezdealz.com/v1";
const axiosInstance = axios.create({
  baseURL: BASE_URL,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});

export const getData = async (url: string) => {
  try {
    let result = await axiosInstance.get(url);
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

export const updataData = async (url: string, id: string, data: any) => {
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

export const deleteData = async (url: string, id: string) => {
  try {
    let result = await axiosInstance.patch(`${url}/${id}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
