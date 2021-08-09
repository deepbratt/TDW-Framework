import { useState } from "react";
import { getAllData } from "../API/getAllData";

const useApi = (endpoint: string) => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [responseStatus, setResponseStatus] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const getAll = async () => {
    setLoading(true);
    await getAllData(endpoint)
      .then((response) => {
        setLoading(false);
        setResponseStatus(response.status);
        setResponseMessage(response.message);
      })
      .catch((error) => {
        setLoading(false);
        setResponseStatus(error.status);
        setResponseMessage(error.message);
      });
  };

  return {
    getAll,
    loading,
    setLoading,
    responseData,
    setResponseData,
    responseStatus,
    setResponseStatus,
    responseMessage,
    setResponseMessage,
  };
};

export default useApi;
