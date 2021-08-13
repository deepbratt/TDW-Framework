import React, { useState, useEffect, useCallback } from "react";
import useApi from "../../Utils/hooks/useApi";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
// import { fieldNames, messages } from "../../Utils/constants/formsConstants";

const initialValues: any = {
  keywords: "",
  priceFrom: 0,
  priceTo: 0,
  priceRange: [0, 50000000],
  yearFrom: 0,
  yearTo: 0,
  yearRange: [1900, 2021],
  province: [],
  city: [],
  mileageFrom: 0,
  mileageTo: 0,
  registrationCity: [],
  mileageRange: [0, 1000000],
  transmission: [],
  engineType: [],
  engineCapacityFrom: 0,
  engineCapacityTo: 0,
  engineCapacityRange: [600, 30000],
  color: [],
  bodyType: [],
  pictireAvailability: false,
  videoAvailability: false,
  sellerType: [],
  adType: [],
  sortingOptions: "",
};

export const useForm = (validateOnChange = true) => {
  const { CARS } = API_ENDPOINTS;
  const {
    loading,
    alertOpen,
    setAlertOpen,
    responseStatus,
    responseMessage,
    responseData,
    getAll,
  } = useApi();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [appliedFilters, setAppliedFilters] = useState<any>([]);

  const getAllCars = useCallback(async () => {
    // let queryParams = new URLSearchParams({
    //   keywords: values.keywords,
    //   limit: "2",
    //   page: "1",
    //   city: values.city,
    // });
    let queryParams = `?limit=2&page=1&keywords=${
      values.keywords
    }&${values.city.map((item: any) => `city=${item}`)}&engineType=${
      values.engineTypes
    }`;
    console.log("queryParams", queryParams);
    await getAll(CARS + queryParams);
  }, []);

  useEffect(() => {
    getAllCars();
  }, [getAllCars, values]);

  useEffect(() => {
    console.log("Applied filters", appliedFilters);
  }, [appliedFilters]);

  useEffect(() => {
    console.log("values", values);
  }, [values]);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

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
    if (values[name] !== value) {
      if (!appliedFilters.includes(name)) {
        setAppliedFilters([...appliedFilters, name]);
      }
    }
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
    setValues({ ...values, [filterName]: temp });
    if (e.target.checked) {
      if (!appliedFilters.includes(filterName)) {
        setAppliedFilters([...appliedFilters, filterName]);
      }
    }
    if (!e.target.checked) {
      removeFilter(filterName);
    }
  };

  const handleSingleCheckBoxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;

    setValues({
      ...values,
      [name]: checked,
    });
    if (validateOnChange) validate({ [name]: checked });
    if (e.target.checked) {
      if (!appliedFilters.includes(name)) {
        setAppliedFilters([...appliedFilters, name]);
      }
    }
    if (!e.target.checked) {
      removeFilter(name);
    }
  };

  const removeFilter = (filterName: string) => {
    setAppliedFilters(
      appliedFilters.filter((filter: string) => filter !== filterName)
    );
    console.log("filter name", filterName);
    let tempVal: any = values;
    tempVal[filterName] = initialValues[filterName];
    if (typeof tempVal[filterName] === typeof [""]) {
      tempVal[filterName] = [];
    }
    console.log(
      "tempVal",
      tempVal,
      tempVal[filterName],
      initialValues,
      typeof filterName
    );
    setValues(tempVal);
    // setValues({ ...values, [filterName]: initialValues[filterName] });
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
    handleSingleCheckBoxChange,
    appliedFilters,
    setAppliedFilters,
    removeFilter,
    resetForm,
    validate,
    handleSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseStatus,
    responseMessage,
  };
};
