import { useState } from "react";
import {
  getSingleData,
  addToFav,
} from "../../Utils/hooks/actions";
import {ICarCard} from "../../layout/Sections/Utils/types"
import { getSingleCar} from "../../Utils/hooks/endpoints";
import { useEffect} from "react";


const Actions = ( Id?: string | "") => {
  const [isLoading, setIsLoading] = useState(false);
  const [obj, setObj] = useState<ICarCard>();
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    if(Id){
      loadSingleData(getSingleCar,Id);
    }

  }, []);

  const loadSingleData = async (url: string, Id: string) => {
    setIsLoading(true);
    await getSingleData(url, Id)
      .then((response) => {
        setIsLoading(false);
        if (response.status === "success") {
          setObj(response.data.result);
        } else {
          return "error";
        }
      })
      .catch((error) => {
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
        setOpen(true);
        setResponseMessage({
          status: "error",
          message: error.message,
        });
      });

   
  };





  return {
    responseMessage,
    setResponseMessage,
    loadSingleData,
    addFavs,
    isLoading,
    open,
    setOpen,
    obj,
  };
};

export default Actions;
