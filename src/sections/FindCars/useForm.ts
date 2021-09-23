import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setQueryParams } from '../../redux/reducers/queryParamsSlice';
import { paths } from '../../routes/paths';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import useValidation from '../../Utils/hooks/useValidation';

const initialValues: any = {
  make: '',
  model: '',
  priceFrom: '',
  priceTo: ''
};

export const useForm = (validateOnChange = false) => {
  const [values, setValues] = useState(initialValues);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const { validate, errors, setErrors } = useValidation(values);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  const { USERS, LOGIN } = API_ENDPOINTS;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let queryParams = {
      keywords: values.make + " " + values.model,
      priceMin: values.priceFrom,
      priceMax: values.priceTo
    };
    setIsLoading(true);
    console.log('queryParams', queryParams);
    dispatch(setQueryParams(queryParams));
    history.push(paths.cars);
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
    isLoading,
    alertOpen,
    setAlertOpen,
    responseMessage
  };
};
