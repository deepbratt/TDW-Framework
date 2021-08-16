import { useState } from "react";
import { fieldNames, messages } from "../constants/formsConstants";
import { isEmailValid, isPhoneValid } from "../regex";

const useValidation = (values: any) => {
  const [errors, setErrors] = useState(values);
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
  return {
    validate,
    errors,
    setErrors,
  };
};

export default useValidation;
