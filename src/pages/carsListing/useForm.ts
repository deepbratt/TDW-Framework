import React, { useState } from "react";
import { fieldNames, messages } from "../../utils/constants/formsConstants";

const initialValues: any = {
  categories: "",
  priceFrom: 0,
  priceTo: 0,
  priceRange: [0, 50000000],
  yearFrom: 0,
  yearTo: 0,
  yearRange: [1900, 2021],
  mileageFrom: 0,
  mileageTo: 0,
  mileageRange: [600, 30000],
  sellerType: [],
  transmission: [],
  city: [],
  withPicture: false,
  withVideo: false,
};

export const useForm = (validateOnChange = true) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  // const [responseMessage, setResponseMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if (fieldNames.categories in fieldValues) {
      temp.categories =
        fieldValues.categories.length === 0 ? messages.isRequired : "";
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

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterName: string
  ) => {
    let temp = values[filterName];
    if (e.target.checked) {
      temp.push(e.target.name);
    } else {
      temp = temp.filter((item: string) => item !== e.target.name);
    }
    // console.log(e.target.name)
    setValues({ ...values, [filterName]: temp });
    console.log(temp);
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = async () => {
    console.log("btn clicked", values);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleCheckboxChange,
    resetForm,
    validate,
    handleSubmit,
    // isLoading,
    // responseMessage,
  };
};
