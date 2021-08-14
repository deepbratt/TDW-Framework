import { useState } from "react";
import { addData, getAllData, handleGoogleAuth } from "../API/API";
import {
  getData,
  getSingleData,
  addToFav,
  deleteData,
  updateUser,
} from "./actions";
import { ICarCard } from "../../layout/Sections/Utils/types";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [obj, setObj] = useState<ICarCard>();
  const [open, setOpen] = useState(false);
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
          status: "error",
          message: response.message,
        });
      })
      .catch((error) => {
        console.log("error", error.response);
        setLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: "error",
          message: error.message,
        });
      });
  };

  const addRequest = async (endpoint: string, requestBody: object) => {
    setLoading(true);
    await addData(endpoint, requestBody)
      .then((response) => {
        console.log("response", response);
        setLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: response.data.status,
          message: response.data.message,
        });
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: "error",
          message: error.response.data.message,
        });
      });
  };

  const loadAllData = async (url: string, param: number | string) => {
    setIsLoading(true);
    await getData(url, param)
      .then((response) => {
        setIsLoading(false);
        if (response.status === "success") {
          setData(response.data.result);
        } else {
          return "error";
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const loadSingleData = async (url: string, id: string) => {
    setIsLoading(true);
    await getSingleData(url, id)
      .then((response) => {
        setIsLoading(false);
        if (response.status === "success") {
          setData(response.data.result);
          setObj(response.data.result);
        } else {
          return "error";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addFavs = async (url: string, id: string) => {
    setIsLoading(true);
    setOpen(false);
    await addToFav(url, id)
      .then((response) => {
        setIsLoading(false);
        if (response.status === "fail") {
          setOpen(true);
          setResponseMessage({
            status: "error",
            message: response.message,
          });
        } else {
          setOpen(true);
          setResponseMessage({
            status: "success",
            message: response.message,
          });
        }
      })
      .catch((error) => {
        setOpen(true);
        setResponseMessage({
          status: "error",
          message: error.message,
        });
      });
  };

  const updateProfile = async (
    url: string,
    data: any,
    number: string,
    date: any,
    Image: any
  ) => {
    setIsLoading(true);
    var formData = new FormData();
    {
      Image && formData.append("image", Image);
    }
    {
      data.fullName && formData.append("firstName", data.fullName);
    }
    {
      data.gender && formData.append("gender", data.gender);
    }
    {
      data.city && formData.append("city", data.city);
    }
    {
      data.userName && formData.append("displayName", data.userName);
    }
    {
      date && formData.append("dateOfBirth", date);
    }

    await updateUser(url, formData)
      .then((response) => {
        if (response.status === "success") {
          setIsLoading(false);
          console.log(response);
          setOpen(true);
          setResponseMessage({
            status: "success",
            message: response.message,
          });
        } else {
          setOpen(true);
          console.log(response);
          setResponseMessage({
            status: "error",
            message: response.message,
          });
        }
      })
      .catch((error) => {
        setOpen(true);
        setResponseMessage({
          status: "error",
          message: error.message,
        });
      });
  };

  const changePassword = async (url: string, data: any) => {
    setIsLoading(true);
    var formData = new FormData();
    formData.append("passwordCurrent", data.currentPassword);
    formData.append("password", data.newPassword);
    formData.append("passwordConfirm", data.confirmPassword);

    await updateUser(url, formData)
      .then((response) => {
        if (response.status === "success") {
          setIsLoading(false);
          console.log(response);
          setOpen(true);
          setResponseMessage({
            status: "success",
            message: response.message,
          });
        } else {
          setOpen(true);
          console.log(response);
          setResponseMessage({
            status: "error",
            message: response.message,
          });
        }
      })
      .catch((error) => {
        setOpen(true);
        setResponseMessage({
          status: "error",
          message: error.message,
        });
      });
  };

  const removeData = async (url: string, id: string) => {
    setIsLoading(true);
    setOpen(false);
    await deleteData(url, id)
      .then((response) => {
        if (response.status === "success") {
          let filteredArray = data.filter((item: any) => item._id !== id);
          setIsLoading(false);
          setData(filteredArray);
          setOpen(true);
          setResponseMessage({
            status: "success",
            message: response.message,
          });
        } else {
          setOpen(true);
          setResponseMessage({
            status: "error",
            message: response.message,
          });
        }
      })
      .catch((error) => {
        setOpen(true);
        setResponseMessage({
          status: "error",
          message: error.message,
        });
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
    responseMessage,
    setResponseMessage,
    loadSingleData,
    addFavs,
    loadAllData,
    removeData,
    updateProfile,
    changePassword,
    data,
    setData,
    isLoading,
    open,
    setOpen,
    obj,
  };
};

export default useApi;
