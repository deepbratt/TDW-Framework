import { useState } from "react";
import useApi from "../../Utils/hooks/useApi";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import { fieldNames, messages } from "../../Utils/constants/formsConstants";

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
    responseStatus,
    responseMessage,
    addRequest,
  } = useApi();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if (fieldNames.password in fieldValues) {
      temp.password = fieldValues.password.length < 5 ? messages.password : "";
    }
    if (fieldNames.confirmPassword in fieldValues) {
      temp.confirmPassword =
        fieldValues.confirmPassword !== fieldValues.password
          ? messages.notMatch
          : "";
    }

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

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
      await addRequest(USERS + FORGOT_PASSWORD + `/${token}`, requestBody);
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    validate,
    handleSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseStatus,
    responseMessage,
  };
};
