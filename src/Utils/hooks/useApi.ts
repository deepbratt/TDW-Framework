import { useState } from "react";
import { addData } from "../API/API";
import { getAllData } from "../API/getAllData";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [responseStatus, setResponseStatus] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const getAll = async (endpoint: string) => {
    setLoading(true);
    await getAllData(endpoint)
      .then((response) => {
        console.log("response", response);
        setLoading(false);
        setAlertOpen(true);
        setResponseStatus(response.status);
        setResponseMessage(response.message);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setAlertOpen(true);
        setResponseStatus(error.status);
        setResponseMessage(error.message);
      });
  };

  const addRequest = async (endpoint: string, requestBody: object) => {
    setLoading(true);
    await addData(endpoint, requestBody)
      .then((response) => {
        console.log("response", response);
        setLoading(false);
        setAlertOpen(true);
        setResponseStatus(response.data.status);
        setResponseMessage(response.data.message);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setAlertOpen(true);
        setResponseStatus(error.status);
        setResponseMessage(error.message);
      });
  };

  return {
    getAll,
    addRequest,
    loading,
    setLoading,
    alertOpen,
    setAlertOpen,
    responseData,
    setResponseData,
    responseStatus,
    setResponseStatus,
    responseMessage,
    setResponseMessage,
  };
};

export default useApi;
