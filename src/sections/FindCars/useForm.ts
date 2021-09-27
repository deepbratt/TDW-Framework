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
  bodyType: [],
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
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<IBodyType[]>();
  const { validate, errors, setErrors } = useValidation(values);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  const { ADS, CARS, BODY_TYPES, MAKE, MODEL } = API_ENDPOINTS;
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
    setIsLoading(true);
    await getAllData(ADS + CARS + BODY_TYPES).then((response) => {
      setIsLoading(false);
      if (response && response && response.status === 'success') {
        setResponseData(response.data.result);
      }
    });
  };

  const getMakes = async () => {
    setIsLoading(true);
    await getAllData(ADS + CARS + MAKE).then((response) => {
      setIsLoading(false);
      if (response && response && response.status === 'success') {
        setMakes(response.data.result);
      }
    });
  };

  const getModels = async () => {
    setIsLoading(true);
    let param = '?';
    if (values.make !== '') {
      let selectedMake: any = makes.filter(
        (make: any) => make.name === values.make
      );
      param += '&make_id=' + selectedMake[0].make_id;
    }
    await getAllData(ADS + CARS + MODEL + param).then((response) => {
      setIsLoading(false);
      if (response && response && response.status === 'success') {
        setModels(response.data.result);
      }
    });
  };

  useEffect(() => {
    getBodyTypes();
    getMakes();
    getModels();
  }, []);

  useEffect(() => {
    getModels();
  }, [values.make]);

  const setBodyType = (value: string) => {
    let newValues = values;
    if (newValues.bodyType.includes(value)) {
      newValues.bodyType = values.bodyType.filter(
        (item: string) => item !== value
      );
    } else {
      newValues.bodyType.push(value);
    }
    setValues((previouseState: any) => {
      previouseState = newValues;
      return { ...previouseState };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let queryParams = {
      make: values.make,
      model: values.model,
      bodyType: values.bodyType,
      priceMin: values.priceFrom,
      priceMax: values.priceTo
    };
    setIsLoading(true);
    dispatch(setQueryParams(queryParams));
    history.push(paths.cars);
  };

  return {
    values,
    makes,
    models,
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
