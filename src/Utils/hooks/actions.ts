import {
    getData,
    getSingleData,
    addToFav
  } from "./apiConfig";
  import {getAllData,addData,updateData} from "../API/API"
  
  const Actions = () => {
      // const getAll = async (endpoint: string) => {
    //   setLoading(true);
    //   await getAllData(endpoint)
    //     .then((response) => {
    //       console.log("response", response);
    //       setLoading(false);
    //       setAlertOpen(true);
    //       setResponseMessage({
    //         status: response.data.data.status,
    //         message: response.data.data.message,
    //       });
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //       setLoading(false);
    //       setAlertOpen(true);
    //       setResponseMessage({
    //         status: error.status,
    //         message: error.message,
    //       });
    //     });
    // };
  
    // const addRequest = async (endpoint: string, requestBody?: object) => {
    //   setLoading(true);
    //   await addData(endpoint, requestBody)
    //     .then((response) => {
    //       console.log("response", response);
    //       setLoading(false);
    //       setAlertOpen(true);
    //       setResponseMessage({
    //         status: response.data.data.status,
    //         message: response.data.data.message,
    //       });
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //       setLoading(false);
    //       setAlertOpen(true);
    //       setResponseMessage({
    //         status: error.status,
    //         message: error.message,
    //       });
    //     });
    // };
  
    // const updateRequest = async (endpoint: string, requestBody?: object) => {
    //   setLoading(true);
    //   await updateData(endpoint, requestBody)
    //     .then((response) => {
    //       console.log("response", response);
    //       setLoading(false);
    //       setAlertOpen(true);
    //       setResponseMessage({
    //         status: response.data.data.status,
    //         message: response.data.data.message,
    //       });
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //       setLoading(false);
    //       setAlertOpen(true);
    //       setResponseMessage({
    //         status: error.status,
    //         message: error.message,
    //       });
    //     });
    // };
    const loadAllData = async (
      url: string,
      param: number | string,
      setIsLoading: any,
      setData: any
    ) => {
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
  
    const loadSingleData = async (
      url: string,
      id: string,
      setIsLoading: any,
      setObj: any,
    ) => {
      setIsLoading(true);
      await getSingleData(url, id)
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
  
    const addFavs = async (
      url: string,
      id: string,
      setOpen: any,
      setIsLoading: any,
      setResponseMessage: any
    ) => {
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
  
  
  
    return {
      loadSingleData,
      addFavs,
      loadAllData,
    };
  };
  
  export default Actions;
  