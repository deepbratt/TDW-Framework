import { useState } from "react";
import useApi from "../../Utils/hooks/useApi";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import { fieldNames, messages } from "../../Utils/constants/formsConstants";
import { isEmailValid } from "../../Utils/regex";

const initialValues: any = {
  email: "",
  mobile: "",
  password: "",
};

export const useForm = (validateOnChange = false) => {
  const { USERS, LOGIN_WITH_EMAIL, LOGIN_WITH_MOBILE } = API_ENDPOINTS;
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

    if (fieldNames.email in fieldValues) {
      temp.email =
        fieldValues.email.trim() === ""
          ? messages.isRequired
          : isEmailValid(fieldValues.email)
          ? ""
          : messages.notValid;
    }
    if (fieldNames.password in fieldValues) {
      temp.password =
        fieldValues.password.length < 5
          ? "Password must be 8 charactors long"
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

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    let requestBody = {
      email: values.email,
      password: values.password,
    };
    console.log("requestBody", requestBody);
    await addRequest(USERS + LOGIN_WITH_EMAIL, requestBody);
  };

  const handleMobileSubmit = async (e: any) => {
    e.preventDefault();
    let requestBody = {
      phone: values.mobile,
      password: values.password,
    };
    console.log("requestBody", requestBody);
    await addRequest(USERS + LOGIN_WITH_MOBILE, requestBody);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    validate,
    handleEmailSubmit,
    handleMobileSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseStatus,
    responseMessage,
  };
};
