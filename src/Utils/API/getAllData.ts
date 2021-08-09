import { axiosInstance } from "./axios";

export const getAllData = async (endpoint: string) => {
  try {
    const result = await axiosInstance.get(endpoint);
    return result;
  } catch (error) {
    return error;
  }
};