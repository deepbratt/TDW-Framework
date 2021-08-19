const regName = /^(?=.{3,40}$)[a-zA-Z]+(?:[-'. ][a-zA-Z]+)*$/;
const regTypeName = /^(?=.{0,40}$)[a-zA-Z '.-]*$/;
// const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const regPhone =
  /^[+]?[0-9]{1}[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}[-\s.]?[0-9]{3,6}$/;
const regTypePhone = /^[+0-9 ]*$/;
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isNameValid = (name: string) => {
  return regName.test(name);
};
export const isTypeAlphaSpace = (name: string) => {
  return regTypeName.test(name);
};
export const isPhoneValid = (phone: string) => {
  return regPhone.test(phone);
};
export const isTypeNumPlusBracket = (phone: string) => {
  return regTypePhone.test(phone);
};
export const isEmailValid = (email: string) => {
  return regEmail.test(email);
};



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