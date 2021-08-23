import {
  facebookAuthProvider,
  googleAuthProvider
} from '../functions/authMethod';
import socialMediaAuth from '../functions/userAuth';
import { axiosFormInstance, axiosInstance } from './axiosInstances';

export const addData = async (endpoint: string, requestBody?: object) => {
  try {
    const result = await axiosInstance.post(endpoint, requestBody);
    return result;
  } catch (error) {
    return error;
  }
};
export const addFormData = async (endpoint: string, requestBody?: object) => {
  try {
    const result = await axiosFormInstance.post(endpoint, requestBody);
    return result;
  } catch (error) {
    return error;
  }
};

export const updateData = async (endpoint: string, requestBody?: object) => {
  try {
    const result = await axiosInstance.patch(endpoint, requestBody);
    return result;
  } catch (error) {
    return error;
  }
};
export const updateFormData = async (endpoint: string, requestBody?: object) => {
  try {
    const result = await axiosFormInstance.patch(endpoint, requestBody);
    return result;
  } catch (error) {
    return error;
  }
};
export const deleteData = async (endpoint: string) => {
  try {
    const result = await axiosInstance.delete(endpoint);
    return result;
  } catch (error) {
    return error;
  }
};

export const getAllData = async (url: string, param: number | string = "") => {
  try {
    let result = await axiosInstance.get(`${url}${param}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const handleFacebookAuth = async () => {
  const response = await socialMediaAuth(facebookAuthProvider);
  console.log('response', response);
};

export const handleGoogleAuth = async () => {
  try {
    const response = await socialMediaAuth(googleAuthProvider);
    console.log('response', response.additionalUserInfo.profile);
    return response.additionalUserInfo.profile;
  } catch (error) {
    return error;
  }
};
