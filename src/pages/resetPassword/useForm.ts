import { useState } from "react";
import { fieldNames, messages } from "../../utils/constants/formsConstants";

const initialValues: any = {
  password: "",
  confirmPassword: "",
};

export const useForm = (token: any, validateOnChange = false) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [responseMessage, setResponseMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

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
    console.log("btn clicked", values);
    if (validate()) {
      setIsLoading(true);
      console.log(values, token);
      let requestBody = {
        password: values.password,
        passwordConfirm: values.confirmPassword,
      };
      console.log("request Body", requestBody);
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
    isLoading,
    responseMessage,
  };
};
