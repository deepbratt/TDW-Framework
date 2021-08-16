import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useApi from "../../Utils/hooks/useApi";
import { isEmailValid } from "../../Utils/regex";
import { login } from "../../redux/reducers/authSlice";
import { handleGoogleAuth } from "../../Utils/API/API";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import { fieldNames, messages } from "../../Utils/constants/formsConstants";

const initialValues: any = {
  email: "",
  mobile: "",
  password: "",
};

export const useForm = (validateOnChange = true) => {
  const { USERS, LOGIN_WITH_EMAIL, LOGIN_WITH_MOBILE, GOOGLE_AUTH } = API_ENDPOINTS;
  const dispatch = useDispatch();
  const {
    loading,
    alertOpen,
    setAlertOpen,
    responseData,
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

  useEffect(() => {
    if (responseMessage.status === "success") {
      dispatch(login(responseData));
    }
  }, [responseMessage]);

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
    handleGoogleSubmit,
    responseMessage,
  };
};
