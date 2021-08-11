import { useState } from "react";
import useApi from "../../Utils/hooks/useApi";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import { isEmailValid, isPhoneValid } from "../../Utils/regex";
import { messages, fieldNames } from "../../Utils/constants/formsConstants";

const initialValues: any = {
  email: "",
};

export const useForm = (validateOnChange = false) => {
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
  const [resetLinkMessage, setResetLinkMessage] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if (fieldNames.email in fieldValues) {
      temp.email =
        fieldValues.email.trim() === ""
          ? messages.isRequired
          : isEmailValid(fieldValues.email) || isPhoneValid(fieldValues.email)
          ? ""
          : messages.notValid;
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
        data: values.email,
      };
      console.log("requestBody", requestBody);
      await addRequest(USERS + FORGOT_PASSWORD, requestBody).then(() => {
        if (responseStatus === "success") {
          setResetLinkMessage(true);
        }
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
    resetLinkMessage,
    setResetLinkMessage,
    loading,
    alertOpen,
    setAlertOpen,
    responseStatus,
    responseMessage,
  };
};
