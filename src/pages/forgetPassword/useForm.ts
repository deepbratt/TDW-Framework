import { useState } from "react";
import { addData } from "../../Utils/hooks/actions";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import useValidation from "../../Utils/hooks/useValidation";

const initialValues: any = {
  data: "",
};

export const useForm = (validateOnChange = false) => {
  const [pin, setPin] = useState("");
  const [values, setValues] = useState(initialValues);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { validate, errors, setErrors } = useValidation(values);
  const [resetLinkMessage, setResetLinkMessage] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    status: "",
    message: "",
  });
  const { USERS, FORGOT_PASSWORD } = API_ENDPOINTS;

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
      let requestBody = {
        data: values.data,
      };
      console.log("requestBody", requestBody);
      await addData(USERS + FORGOT_PASSWORD, requestBody)
        .then((response) => {
          console.log("data", response);
          setIsLoading(false);
          if (response.status === "success") {
            setAlertOpen(true);
            setResponseMessage({
              status: response.status,
              message: response.message,
            });
            setResetLinkMessage(true);
          } else {
            setIsLoading(false);
            setAlertOpen(true);
            setResponseMessage({
              status: "error",
              message: response.message,
            });
          }
        })
        .catch((error) => {
          setIsLoading(false);
          setAlertOpen(true);
          setResponseMessage({
            status: "error",
            message: error.message,
          });
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
    alertOpen,
    setAlertOpen,
    responseMessage,
    isLoading,
  };
};
