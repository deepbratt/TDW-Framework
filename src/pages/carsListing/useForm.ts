import React, { useState, useEffect, useCallback } from "react";
import { getAllData } from "../../Utils/API/API";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import useValidation from "../../Utils/hooks/useValidation";
import { ICarCard } from "../../Utils/interfaces/products.interface";

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

interface IData {
  data: {
    result: ICarCard[]
  }
}

export const useForm = (validateOnChange = true) => {
  const { ADS, CARS } = API_ENDPOINTS;
  const [values, setValues] = useState(initialValues);
  const [appliedFilters, setAppliedFilters] = useState<any>([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<IData>();
  const { validate, errors, setErrors } = useValidation(values);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  function inArray(needle: string, haystack: []) {
    var length = haystack.length;
    for (var i = 0; i < length; i++) {
      if (haystack[i] === needle) return true;
    }
    return false;
  }

  const getAllCars = useCallback(async () => {
    let queryParams = `?limit=10&page=1${
      inArray("keywords", appliedFilters) ? "&keyword=" + values.keywords : ""
    }${appliedFilters.map((key: any) =>
      inArray(key, appliedFilters)
        ? typeof values[key] === typeof []
          ? values[key].map((filter: any) => `&${key}=${filter}`)
          : null
        : null
    )}`;

    console.log("queryParams", queryParams);
    await getAllData(ADS + CARS, queryParams)
    .then((response) => {
      console.log('response', response);
      setIsLoading(false);
      if (response.status === 'success') {
        setAlertOpen(true);
        setResponseData(response);
        setResponseMessage({
          status: response.status,
          message: response.message
        });
      } else {
        setIsLoading(false);
        setAlertOpen(true);
        setResponseMessage({
          status: 'error',
          message: response.message
        });
      }
    })
    .catch((error) => {
      setIsLoading(false);
      console.log('Error log', error);
      setAlertOpen(true);
      setResponseMessage({
        status: error.status,
        message: error.message
      });
    });
  }, []);

  useEffect(() => {
    getAllCars();
  }, [values, appliedFilters, getAllCars]);

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
    isLoading,
    responseData,
    alertOpen,
    setAlertOpen,
    responseMessage,
  };
};
