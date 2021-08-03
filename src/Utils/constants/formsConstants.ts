export const messages = {
  isRequired: "This field is required.",
  notValid: "Input value is not Valid",
  notMatch: "Password doesn't match",
  password: "Password must be 8 charactors long",
};

export const fieldNames = {
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  mobile: "mobile",
  password: "password",
  confirmPassword: "confirmPassword",
  categories: "categories",
  priceFrom: "priceFrom",
  priceTo: "priceTo",
  yearFrom: "yearFrom",
  yearTo: "yearTo",
  mileageFrom: "mileageFrom",
  mileageTo: "mileageTo",
};

const regName = /^(?=.{3,40}$)[a-zA-Z]+(?:[-'. ][a-zA-Z]+)*$/;
const regTypeName = /^(?=.{0,40}$)[a-zA-Z '.-]*$/;
// const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const regPhone =
  /^[+]?[0-9]{1}[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}[-\s.]?[0-9]{3,6}$/;
const regTypePhone = /^[+0-9 ]*$/;
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isNameValid = (name: string) => {
  return regName.test(name);
};
export const isTypeAlphaSpace = (name: string) => {
  return regTypeName.test(name);
};
export const isPhoneValid = (phone: string) => {
  return regPhone.test(phone);
};
export const isTypeNumPlusBracket = (phone: string) => {
  return regTypePhone.test(phone);
};
export const isEmailValid = (email: string) => {
  return regEmail.test(email);
};
