import { useState } from "react";
import useApi from "../../Utils/hooks/useApi";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import useValidation from "../../Utils/hooks/useValidation";

const initialValues: any = {
  data: "",
};

export const useForm = (validateOnChange = false) => {
  const { USERS, FORGOT_PASSWORD } = API_ENDPOINTS;
  const {
    loading,
    alertOpen,
    setAlertOpen,
    responseMessage,
    addRequest,
    setResponseMessage,
  } = useApi();
  const [values, setValues] = useState(initialValues);
  const [pin, setPin] = useState("");
  const { errors, setErrors, validate } = useValidation(values);
  const [resetLinkMessage, setResetLinkMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate()) {
      // let requestBody = {
      //   data: values.data,
      // };
      // console.log("requestBody", requestBody);
      // await addRequest(USERS + FORGOT_PASSWORD, requestBody).then(() => {
      //   if (responseMessage.status === "success") {
      //     setResetLinkMessage(true);
      //   }
      // });
      setResponseMessage({
        status: "success",
        message: "",
      });
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    pin,
    setPin,
    
    handleInputChange,
    resetForm,
    validate,
    handleSubmit,
    resetLinkMessage,
    setResetLinkMessage,
    loading,
    alertOpen,
    setAlertOpen,
    responseMessage,
  };
};
