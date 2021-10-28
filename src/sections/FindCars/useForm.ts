import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setFilters } from '../../redux/reducers/carFiltersSlice';
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

  useEffect(() => {
    console.log('value', values);
  }, [values]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const handleChangeSelect = (name: string, value: any) => {
    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues({
      make: '',
      model: '',
      bodyType: [],
      priceFrom: '',
      priceTo: ''
    });
    console.log("reset form")
    setErrors({});
  };

  const getBodyTypes = async () => {
    setIsLoading(true);
    await getAllData(ADS + CARS + BODY_TYPES+"?sort=bodyType").then((response) => {
      setIsLoading(false);
      if (response && response && response.status === 'success') {
        setResponseData(response.data.result);
      }
    });
  };

  const getMakes = async () => {
    setIsLoading(true);
    let param = '?sort=name';
    await getAllData(ADS + CARS + MAKE + param).then((response) => {
      setIsLoading(false);
      if (response && response && response.status === 'success') {
        setMakes(response.data.result);
      }
    });
  };

  const getModels = async () => {
    setIsLoading(true);
    let param = '?sort=name';
    if (values.make) {
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
    if(values.make){
      getModels();
    }
  }, [values.make]);

  const setBodyType = (value: string) => {
    let newValues = values;
    if (newValues.bodyType.includes(value)) {
      newValues.bodyType = values.bodyType.filter(
        (item: string) => item !== value
      );
    } else {
      newValues.bodyType = [...newValues.bodyType, value];
    }
    setValues((previouseState: any) => {
      previouseState = newValues;
      return { ...previouseState };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let queryParams = {
      make: values.make === '' ? [] : [values.make],
      model: values.model === '' ? [] : [values.model],
      bodyType: values.bodyType,
      price: [
        values.priceFrom === '' ? 0 : parseInt(values.priceFrom),
        values.priceTo === '' ? 50000000 : parseInt(values.priceTo)
      ]
    };
    resetForm();
    handlePageChange(queryParams);
  };

  const handlePageChange = (queryParams: object) => {
    dispatch(setFilters(queryParams));
    history.push(paths.cars);
  };

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, []);

  return {
    values,
    makes,
    models,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleChangeSelect,
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
