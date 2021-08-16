import { useState } from "react";
import { fieldNames, messages } from "../constants/formsConstants";
import {
  isEmailValid,
  isNameValid,
  isPasswordValid,
  isPhoneValid,
} from "../regex";

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
    if (fieldNames.firstName in fieldValues) {
      temp.firstName =
        fieldValues.firstName.trim() === ""
          ? messages.isRequired
          : isNameValid(fieldValues.firstName)
          ? ""
          : messages.notValid;
    }
    if (fieldNames.lastName in fieldValues) {
      temp.lastName =
        fieldValues.lastName.trim() === ""
          ? messages.isRequired
          : isNameValid(fieldValues.lastName)
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
    if (fieldNames.data in fieldValues) {
      if (isEmailValid(fieldNames.data)) {
        temp.data = "";
      } else if (isPhoneValid(fieldValues.data)) {
        temp.data = "";
      } else {
        temp.data = messages.notValid;
      }
    }
    if (fieldNames.password in fieldValues) {
      temp.password =
        fieldValues.password.trim() === ""
          ? messages.isRequired
          : isPasswordValid(fieldValues.password)
          ? ""
          : messages.notValid;
    }
    if (fieldNames.confirmPassword in fieldValues) {
      temp.confirmPassword =
        fieldValues.confirmPassword.trim() === ""
          ? messages.isRequired
          : fieldValues.confirmPassword === fieldValues.password
          ? ""
          : messages.notMatch;
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
