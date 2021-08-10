import { useState } from "react";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import { fieldNames, messages } from "../../Utils/constants/formsConstants";
import useApi from "../../Utils/hooks/useApi";
import { isEmailValid, isPhoneValid } from "../../Utils/regex";

const initialValues: any = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
};

export const useForm = (validateOnChange = false) => {
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
  const [isLoading, setIsLoading] = useState(false);
  // const [responseMessage, setResponseMessage] = useState("");

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
    if (fieldNames.mobile in fieldValues) {
      temp.mobile =
        fieldValues.mobile.trim() === ""
          ? messages.isRequired
          : isPhoneValid(fieldValues.mobile)
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
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      passwordConfirm: values.confirmPassword,
    };
    console.log("requestBody", requestBody);
    await addRequest(API_ENDPOINTS.USERS.SIGNUP.WITH_EMAIL, requestBody);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("btn clicked", values);
    if (validate()) {
      setIsLoading(true);
      console.log(values);
      let requestBody = {
        email: values.email,
        password: values.password,
      };
      console.log("requestBody", requestBody);
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
    handleEmailSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseStatus,
    responseMessage,
  };
};
