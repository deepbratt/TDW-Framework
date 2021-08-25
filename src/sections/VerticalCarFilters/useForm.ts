import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/reducers/carFiltersSlice';
import useValidation from '../../Utils/hooks/useValidation';

const initialValues: any = {
  keywords: '',
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
  pictureAvailability: false,
  videoAvailability: false,
  sellerType: [],
  adType: [],
  sortingOptions: ''
};

export const useForm = (validateOnChange = true) => {
  const filters = useSelector(
    (state: any) => state.persistedReducer.carFilters
  );
  console.log('filter', filters);
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);
  const { errors, setErrors, validate } = useValidation(values);

  useEffect(() => {
    console.log('values', values);
  }, [values]);

  const handleTextBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
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
    setValues({ ...values, [filterName]: temp });
  };

  const handleSingleCheckBoxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;

    setValues({
      ...values,
      [name]: checked
    });
    dispatch(setFilter({ name, checked }));
    if (validateOnChange) validate({ [name]: checked });
  };

  const handleTextBoxSubmit = (name: any, value: any) => {
    setValues({
      ...values,
      [name]: value
    });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleTextBoxChange,
    handleTextBoxSubmit,
    handleCheckboxChange,
    handleSingleCheckBoxChange
  };
};
