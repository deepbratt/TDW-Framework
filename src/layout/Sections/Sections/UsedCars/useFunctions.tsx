import { useState } from "react";
import {deleteData,getData,addToFav} from "../../../../Utils/hooks/actions"
import { useEffect } from "react";

const Actions = (url? : string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [responseMessage, setResponseMessage] = useState({
      status: "",
      message: "",
    });

    
  useEffect(() => {
   if(url){
    loadAllData(url,1);
   }
}, []);



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

      const addFavs = async (url: string, Id: string) => {
        setIsLoading(true);
        setOpen(false);
        await addToFav(url, Id)
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
            setIsLoading(false);
            setOpen(true);
            setResponseMessage({
              status: "error",
              message: error.message,
            });
          })}
    
      const removeData = async (
        url: string,
        id: string,
      ) => {
        setIsLoading(true);
        setOpen(false);
        await deleteData(url, id)
          .then((response) => {
            setIsLoading(false);
            if (response.status === "success") {
              let filteredArray = data.filter((item: any) => item._id !== id);
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
            setIsLoading(false);
            setOpen(true);
            setResponseMessage({
              status: "error",
              message: error.message,
            });
          });
      };

      return {
        addFavs,
        removeData,
        responseMessage,
        open,
        isLoading,
        setOpen,
        loadAllData,
        data
      };
}

export default Actions;
