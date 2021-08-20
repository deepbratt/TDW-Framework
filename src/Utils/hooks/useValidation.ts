import { useState } from "react";
import { fieldNames } from "../constants/formsConstants";
import { validateEmail, validateName, validatePassword, validatePhone, validateConfirmPassword } from "../functions/validations";

const useValidation = (values: any) => {
  const [errors, setErrors] = useState(values);
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if (fieldNames.email in fieldValues) {
      temp.email = validateEmail(fieldValues.email)
    }
    if (fieldNames.firstName in fieldValues) {
      temp.firstName = validateName(fieldValues.firstName)
    }
    if (fieldNames.lastName in fieldValues) {
      temp.firstName = validateName(fieldValues.lastName)
    }
    if (fieldNames.mobile in fieldValues) {
      temp.mobile =validatePhone(fieldValues.mobile)
    }
    // if (fieldNames.data in fieldValues) {
    //   if (isEmailValid(fieldNames.data)) {
    //     temp.data = "";
    //   } else if (isPhoneValid(fieldValues.data)) {
    //     temp.data = "";
    //   } else {
    //     temp.data = messages.notValid;
    //   }
    // }
    if (fieldNames.password in fieldValues) {
      temp.password = validatePassword(fieldValues.password)
    }
    if (fieldNames.confirmPassword in fieldValues) {
      temp.confirmPassword = validateConfirmPassword(fieldValues.confirmPassword, fieldValues.password)
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
