const loadAllData = async (
  setIsLoading: any,
  setData: any,
  loadData: () => Promise<any>
) => {
  setIsLoading(true);
  await loadData()
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
  setIsLoading: any,
  setData: any,
  loadData: (id: string) => Promise<any>,
  id: string
) => {
  setIsLoading(true);
  await loadData(id)
    .then((response) => {
      setIsLoading(false);
      if (response.status === "success") {
        setData(response.data.result);
      } else {
        return "error";
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const addFavs = async (
  loadData: (id: string) => Promise<any>,
  id: string,
  setOpen: any,
  setResponseMessage: any,
  setIsLoading: any
) => {
  setIsLoading(true);
  setOpen(false);
  await loadData(id)
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

const removeData = async (
  setIsLoading: any,
  setData: any,
  loadData: (id: string) => Promise<any>,
  id: string,
  setOpen: any,
  setResponseMessage: any,
  data: any
) => {
  setIsLoading(true);
  setOpen(false);
  await loadData(id)
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

export { loadSingleData, addFavs, loadAllData, removeData };
