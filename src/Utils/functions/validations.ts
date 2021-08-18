import { messages } from "../constants/formsConstants";
import {
  isEmailValid,
  isNameValid,
  isPasswordValid,
  isPhoneValid,
} from "../regex";

export const validateEmail = (fieldValue: string) => {
    return fieldValue.trim() === ""
    ? messages.isRequired
    : isEmailValid(fieldValue)
    ? ""
    : messages.notValid;
}

export const validatePhone = (fieldValue: string) => {
    return fieldValue.trim() === ""
    ? messages.isRequired
    : isPhoneValid(fieldValue)
    ? ""
    : messages.notValid;
}
export const validateName = (fieldValue: string) => {
    return fieldValue.trim() === ""
    ? messages.isRequired
    : isNameValid(fieldValue)
    ? ""
    : messages.notValid;
}

export const validatePassword = (fieldValue: string) => {
    return fieldValue.trim() === ""
    ? messages.isRequired
    : isPasswordValid(fieldValue)
    ? ""
    : messages.notValid;
}

export const validateConfirmPassword = (fieldValue: string, password: string) => {
    return  fieldValue.trim() === ""
      ? messages.isRequired
      : fieldValue === password
      ? ""
      : messages.notMatch;
}