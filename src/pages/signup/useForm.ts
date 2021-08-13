import { useState } from "react";
import { handleGoogleAuth } from "../../Utils/API/API";
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
  const { USERS, SIGNUP_WITH_EMAIL, SIGNUP_WITH_MOBILE, GOOGLE_AUTH } =
    API_ENDPOINTS;
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
    await addRequest(USERS + SIGNUP_WITH_EMAIL, requestBody);
  };

  const handleMobileSubmit = async (e: any) => {
    e.preventDefault();

    let requestBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.mobile,
      password: values.password,
      passwordConfirm: values.confirmPassword,
    };
    console.log("requestBody", requestBody);
    await addRequest(USERS + SIGNUP_WITH_MOBILE, requestBody);
  };

  const handleGoogleSubmit = async () => {
    await handleGoogleAuth().then(async (response) => {
      let requestBody = {
        googleId: response.id,
        displayName: response.name,
        firstName: response.given_name,
        lastName: response.family_name,
        image: response.picture,
        email: response.email,
      };
      console.log("request body", requestBody);
      await addRequest(USERS + GOOGLE_AUTH, requestBody);
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("btn clicked", values);
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
    handleMobileSubmit,
    handleGoogleSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseStatus,
    responseMessage,
  };
};
