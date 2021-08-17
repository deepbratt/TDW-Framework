import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/authSlice";
import { handleGoogleAuth } from "../../Utils/API/API";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import useApi from "../../Utils/hooks/useApi";
import { addData } from "../../Utils/hooks/actions";
import useValidation from "../../Utils/hooks/useValidation";

const initialValues: any = {
  firstName: "",
  lastName: "",
  username: "",
  data: "",
  password: "",
  confirmPassword: "",
};

export const useForm = (validateOnChange = false) => {
  const dispatch = useDispatch();
  const { USERS, GOOGLE_AUTH, SIGNUP } = API_ENDPOINTS;
  const { addRequest } = useApi();

  const [alertOpen, setAlertOpen] = useState(false);
  const [responseData, setResponseData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialValues);
  const { validate, errors, setErrors } = useValidation(values);
  const [responseMessage, setResponseMessage] = useState({
    status: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  // useEffect(() => {
  //   if (responseMessage.status === "success") {
  //     dispatch(login(responseData));
  //   }
  // }, [responseMessage]);

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
    if (validate()) {
      let requestBody = {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        data: values.data,
        password: values.password,
        passwordConfirm: values.confirmPassword,
      };
      console.log("requestBody", requestBody);
      await addData(USERS + SIGNUP, requestBody)
        .then((response) => {
          setIsLoading(false);
          if (response.status === "success") {
            console.log("response log", response)
            // setResponseData(response.data);
            setAlertOpen(true);
            setResponseMessage({
              status: response.status,
              message: response.message,
            });
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
    handleInputChange,
    resetForm,
    validate,
    handleSubmit,
    handleGoogleSubmit,
    isLoading,
    alertOpen,
    setAlertOpen,
    responseMessage,
  };
};
