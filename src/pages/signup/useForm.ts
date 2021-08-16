import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/authSlice";
import { handleGoogleAuth } from "../../Utils/API/API";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import useApi from "../../Utils/hooks/useApi";
import useValidation from "../../Utils/hooks/useValidation";

const initialValues: any = {
  firstName: "",
  lastName: "",
  data: "",
  password: "",
  confirmPassword: "",
};

export const useForm = (validateOnChange = true) => {
  const dispatch = useDispatch();
  const { USERS, SIGNUP_WITH_EMAIL, SIGNUP_WITH_MOBILE, GOOGLE_AUTH } =
    API_ENDPOINTS;
  const {
    loading,
    alertOpen,
    setAlertOpen,
    responseData,
    responseMessage,
    addRequest,
  } = useApi();
  const [values, setValues] = useState(initialValues);
  const { validate, errors, setErrors } = useValidation(values);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  useEffect(() => {
    if (responseMessage.status === "success") {
      dispatch(login(responseData));
    }
  }, [responseMessage]);

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
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
    let requestBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      data: values.data,
      password: values.password,
      passwordConfirm: values.confirmPassword,
    };
    console.log("requestBody", requestBody);
    // await addRequest(USERS + SIGNUP_WITH_MOBILE, requestBody);
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
    handleGoogleSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseMessage,
  };
};
