import { axiosInstance } from "./axios";

export const addData = async (endpoint: string, requestBody: object) => {
  try {
    const result = await axiosInstance.post(endpoint, requestBody);
    return result;
  } catch (error) {
    return error;
  }
};