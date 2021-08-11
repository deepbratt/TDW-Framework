import axios from "axios";

const BASE_URL = "http://api.tezdealz.com/v1";
const axiosInstance = axios.create({
  baseURL: BASE_URL,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyZGF0YSI6eyJpZCI6IjYxMDM3NWVkNmI4OTdhMDAxZDg2NGNhMSJ9LCJpYXQiOjE2MjgyNTc0NDMsImV4cCI6NjgxMjI1NzQ0M30.zx_XQmGyd3ruA371egoR137PAvIuFT7CkbqqnP7igUY`,
  },
});

const useApi = (url: string) => {
  const getData = async () => {
    try {
      let result = await axiosInstance.get(url);
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  };

  const getSingleData = async (id: string) => {
    try {
      let result = await axiosInstance.get(`${url}/${id}`);
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  };

  const addToFav = async (id: string) => {
    try {
      let result = await axiosInstance.patch(`${url}/${id}`);
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  };

  const updataData = async (id: string, data: any) => {
    try {
      let result = await axiosInstance.patch(`${url}/${id}`, data);
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  };

  const deleteData = async (id: string) => {
    try {
      let result = await axiosInstance.patch(`${url}/${id}`);
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  };

  return { getSingleData, addToFav, deleteData, updataData, getData };
};

export default useApi;
