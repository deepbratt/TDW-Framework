import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useApi from "../../Utils/hooks/useApi";
import { login } from "../../redux/reducers/authSlice";
import { handleGoogleAuth } from "../../Utils/API/API";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import useValidation from "../../Utils/hooks/useValidation";

const initialValues: any = {
  data: "",
  password: "",
};

export const useForm = (validateOnChange = false) => {
  const { USERS, GOOGLE_AUTH } = API_ENDPOINTS;
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

  useEffect(() => {
    if (responseMessage.status === "success") {
      dispatch(login(responseData));
    }
  }, [responseMessage]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate()) {
      let requestBody = {
        data: values.data,
        password: values.password,
      };
      console.log("requestBody", requestBody);
      // await addRequest(USERS , requestBody);
    }
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
    handleSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    handleGoogleSubmit,
    responseMessage,
  };
};
