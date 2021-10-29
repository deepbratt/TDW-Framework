import { useState } from 'react';
import { fieldNames, messages } from '../constants/formsConstants';
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
  validateConfirmPassword,
  validateData
} from '../functions/validations';

const useValidation = (values: any) => {
  const [errors, setErrors] = useState(values);
  const [error, setError] = useState(false);
  const validate = (fieldValues = values, method?: string) => {
    let temp = { ...errors };

    if (fieldNames.email in fieldValues) {
      temp.email = validateEmail(fieldValues.email);
    }
    if (fieldNames.firstName in fieldValues) {
      temp.firstName = validateName(fieldValues.firstName);
    }
    if (fieldNames.lastName in fieldValues) {
      temp.lastName = validateName(fieldValues.lastName);
    }
    if (fieldNames.mobile in fieldValues) {
      temp.mobile = validatePhone(fieldValues.mobile);
    }
    if (fieldNames.data in fieldValues) {
      temp.data = validateData(fieldValues.data);
    }
    if (fieldNames.method in fieldValues) {
      if (method === 'mobile') {
        temp.method = validatePhone(fieldValues.method);
      } else if (method === 'email') {
        temp.method = validateEmail(fieldValues.method);
      }
    }
    if (fieldNames.username in fieldValues) {
      temp.username =
        fieldValues.username.trim().length >= 5 ? '' : messages.username;
    }
    if (fieldNames.password in fieldValues) {
      temp.password = validatePassword(fieldValues.password);
    }
    if (fieldNames.confirmPassword in fieldValues) {
      temp.confirmPassword = validateConfirmPassword(
        fieldValues.confirmPassword,
        fieldValues.password
      );
    }

    setErrors({
      ...temp
    });

    return Object.values(temp).every((x) => x === '');
  };
  return {
    error,
    validate,
    errors,
    setErrors
  };
};

export default useValidation;
