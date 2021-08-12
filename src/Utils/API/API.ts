import { axiosInstance } from "./axiosInstances";

export const addData = async (endpoint: string, requestBody: object) => {
  try {
    const result = await axiosInstance.post(endpoint, requestBody);
    return result;
  } catch (error) {
    return error;
  }
};

export const getAllData = async (endpoint: string) => {
  try {
    const result = await axiosInstance.get(endpoint);
    return result;
  } catch (error) {
    return error;
  }
};
