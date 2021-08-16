import { useState } from "react";
import useApi from "../../Utils/hooks/useApi";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import useValidation from "../../Utils/hooks/useValidation";

const initialValues: any = {
  password: "",
  confirmPassword: "",
};

export const useForm = (token: any, validateOnChange = false) => {
  const { USERS, FORGOT_PASSWORD } = API_ENDPOINTS;
  const {
    loading,
    alertOpen,
    setAlertOpen,
    responseMessage,
    addRequest,
  } = useApi();
  const [values, setValues] = useState(initialValues);
  const { errors, setErrors, validate } = useValidation(values);

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
        password: values.password,
        passwordConfirm: values.confirmPassword,
      };
      console.log("requestBody", requestBody);
      // await addRequest(USERS + FORGOT_PASSWORD + `/${token}`, requestBody);
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    handleSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseMessage,
  };
};
