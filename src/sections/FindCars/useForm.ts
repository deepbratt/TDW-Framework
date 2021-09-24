import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setQueryParams } from '../../redux/reducers/queryParamsSlice';
import { paths } from '../../routes/paths';
import { getAllData } from '../../Utils/API/API';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import useValidation from '../../Utils/hooks/useValidation';

const initialValues: any = {
  make: '',
  model: '',
  bodyType: '',
  priceFrom: '',
  priceTo: ''
};

interface IBodyType {
  _id: string;
  bodyType: string;
  image?: string;
}

export const useForm = (validateOnChange = false) => {
  const [values, setValues] = useState(initialValues);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<IBodyType[]>();
  const { validate, errors, setErrors } = useValidation(values);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  const { ADS, CARS, BODY_TYPES } = API_ENDPOINTS;
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

  const getBodyTypes = async () => {
    await getAllData(ADS + CARS + BODY_TYPES)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 'success') {
          console.log('response', response);
          setResponseData(response.data.result);
          setResponseMessage({
            status: response.status,
            message: response.message
          });
        } else {
          setIsLoading(false);
          setResponseMessage({
            status: 'error',
            message: response.message
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('Error log', error);
        setResponseMessage({
          status: error.status,
          message: error.message
        });
      });
  };

  useEffect(() => {
    getBodyTypes();
  }, []);

  const setBodyType = (value: string) => {
    setValues({
      ...values,
      bodyType: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let queryParams = {
      keywords: values.make + ' ' + values.model,
      bodyType: values.bodyType,
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
    responseMessage,
    responseData,
    setBodyType
  };
};
