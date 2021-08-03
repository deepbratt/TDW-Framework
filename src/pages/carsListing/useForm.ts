import React, { useState } from "react";
import { fieldNames, messages } from "../../Utils/constants/formsConstants";

const initialValues: any = {
  categories: "",
  priceFrom: 0,
  priceRange: [0, 50000000],
  priceTo: 0,
};

export const useForm = (validateOnChange = true) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [priceRange, setPriceRange] = useState([
    initialValues.priceFrom,
    initialValues.priceTo,
  ]);
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
    resetForm,
    validate,
    handleSubmit,
    // isLoading,
    // responseMessage,
    priceRange,
    setPriceRange,
  };
};
