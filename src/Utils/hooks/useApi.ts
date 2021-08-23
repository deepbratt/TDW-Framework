import { useState } from "react";
import { addData, getAllData, updateData, handleGoogleAuth } from "../API/API";


const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [responseMessage, setResponseMessage] = useState({
    status: "",
    message: "",
  });

  const getAll = async (endpoint: string) => {
    setLoading(true);
    await getAllData(endpoint)
      .then((response) => {
        console.log("response", response);
        setLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: response.data.data.status,
          message: response.data.data.message,
        });
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: error.status,
          message: error.message,
        });
      });
  };

  const addRequest = async (endpoint: string, requestBody?: object) => {
    setLoading(true);
    await addData(endpoint, requestBody)
      .then((response) => {
        console.log("response", response);
        setLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: response.data.data.status,
          message: response.data.data.message,
        });
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: error.status,
          message: error.message,
        });
      });
  };

  const updateRequest = async (endpoint: string, requestBody?: object) => {
    setLoading(true);
    await updateData(endpoint, requestBody)
      .then((response) => {
        console.log("response", response);
        setLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: response.data.data.status,
          message: response.data.data.message,
        });
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: error.status,
          message: error.message,
        });
      });
  };


  return {
    getAll,
    addRequest,
    updateRequest,
    loading,
    setLoading,
    alertOpen,
    setAlertOpen,
    responseData,
    setResponseData,
    responseMessage,
    setResponseMessage,
  };
};

export default useApi;
