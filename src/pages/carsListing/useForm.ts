import { RootState } from '../../redux/store';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import { getAllData } from '../../Utils/API/API';
import useValidation from '../../Utils/hooks/useValidation';
import { ICarCard } from '../../Utils/interfaces/products.interface';
import { extractError, getKeyValue } from '../../Utils/helperFunctions';
import {
  removeArrayFilter,
  setArrayFilter,
  setFilter,
  resetFilters,
  removeFilter
} from '../../redux/reducers/carFiltersSlice';
import { IMinMaxValues } from '../../sections/VerticalCarFilters';

const initialValues: any = {
  province: [],
  city: [],
  registrationCity: [],
  make: [],
  model: [],
  transmission: [],
  assembly: [],
  engineType: [],
  bodyColor: [],
  bodyType: [],
  sellerType: [],
  adType: [],
  sort: '',
  condition: '',
  keyword: ''
};

const initialRangeValues: IMinMaxValues = {
  price: ['', ''],
  modelYear: ['', ''],
  milage: ['', ''],
  engineCapacity: ['', '']
};
interface IData {
  data: {
    result: ICarCard[];
  };
  totalCount: number;
}

export const useForm = (validateOnChange = true) => {
  const dispatch = useDispatch();
  const carFilters = useSelector(
    (state: RootState) => state.carFilters.filters
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const {
    ADS,
    CARS,
    FILTER,
    CITIES_WITH_CARS,
    MAKE,
    MODEL,
    BODY_TYPES,
    CAR_COLORS
  } = API_ENDPOINTS;
  const [page, setPage] = useState(1);
  const [modalPage, setModalPage] = useState(100);
  const [citiesWithCars, setCitiesWithCars] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [bodyTypes, setBodyTypes] = useState<any>([]);
  const [bodyColors, setBodyColors] = useState<any>([]);
  const [keywords, setKeywords] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modelsLoading, setModelsLoading] = useState(false);
  const [pageCount, setPageCount] = useState<number>(1);
  const [modalPageCount, setModalPageCount] = useState<number>(0);
  const [responseData, setResponseData] = useState<IData | null>();
  const [result, setResult] = useState<ICarCard[] | []>([]);
  const { validate, errors, setErrors } = useValidation(carFilters);

  const [rangeValues, setRangeValues] = useState<IMinMaxValues>({
    price: ['', ''],
    modelYear: ['', ''],
    milage: ['', ''],
    engineCapacity: ['', '']
  });

  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [page]);

  const handlePageChange = (e: any, value: any) => {
    setPage(value);
    getAllCars(value);
  };

  const getFiltersValues = (keys: string, values: string[]) => {
    if (keys === 'make') {
      getModels();
    } else if (keys === 'province') {
      getCitiesWithCars();
    }
  };

  const getAllCars = async (getPage?: number) => {
    let params = '';
    if (getPage) {
      params = `?limit=20&page=${getPage.toString()}`;
    } else {
      params = `?limit=20&page=${page.toString()}`;
    }
    // eslint-disable-next-line
    Object.entries(carFilters).map(([keys, values]: any) => {
      if (values !== initialValues[keys]) {
        if (typeof values === typeof [] && !(keys in initialRangeValues)) {
          // eslint-disable-next-line
          values.map((value: string) => {
            params += `&${keys}=${value}`;
          });
          if (values.length > 0) {
            getFiltersValues(keys, values);
          }
        } else if (keys in initialRangeValues) {
          if (values[0] !== initialRangeValues[keys][0]) {
            params += `&${keys}[gte]=${values[0]}`;
          }
          if (values[1] !== initialRangeValues[keys][1]) {
            params += `&${keys}[lte]=${values[1]}`;
          }
        } else {
          params += `&${keys}=${values}`;
        }
      }
    });
    setIsLoading(true);
    await getAllData(ADS + CARS + params)
      .then((response) => {
        setIsLoading(false);
        if (response && response && response.status === 'success') {
          setResponseData(response);
          setPageCount(
            response.totalCount < 10 ? 1 : Math.ceil(response.totalCount / 20)
          );
          setResult(response.data.result);
          setResponseMessage({
            status: response.status,
            message: response.message
          });
        } else {
          setResponseData(null);
          setResult([]);
          setIsLoading(false);
          setResponseMessage(extractError(response));
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        setResponseMessage({
          status: error.status,
          message: error.message
        });
      });
  };

  const getCitiesWithCars = async () => {
    let param = '?sort=city';
    if (carFilters.province.length > 0) {
      // eslint-disable-next-line
      carFilters.province.map((item: string) => {
        param += '&province=' + item;
      });
    }
    await getAllData(ADS + CARS + FILTER + CITIES_WITH_CARS + param)
      .then((response) => {
        if (response && response && response.status === 'success') {
          setCitiesWithCars(response.data.result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getMakes = async () => {
    let param = '?sort=name';
    await getAllData(ADS + CARS + MAKE + param)
      .then((response) => {
        if (response && response && response.status === 'success') {
          setMakes(response.data.result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getBodyTypes = () => {
    let param = '?sort=bodyType';
    getAllData(ADS + CARS + BODY_TYPES + param).then((response) => {
      if (response && response && response.status === 'success') {
        setBodyTypes(response.data.result);
      } else {
        console.error(response);
      }
    });
  };

  const getBodyColors = () => {
    let param = '?sort=name';
    getAllData(ADS + CARS + CAR_COLORS + param).then((response) => {
      if (response && response && response.status === 'success') {
        setBodyColors(response.data.result);
      } else {
        console.error(response);
      }
    });
  };

  const getModels = async () => {
    setModelsLoading(true);
    let param = `?limit=${modalPage}&sort=name`;
    if (carFilters.make.length > 0) {
      // eslint-disable-next-line
      carFilters.make.map((item: any) => {
        let selectedMake: any = makes.filter((make: any) => make.name === item);
        if (selectedMake.length > 0) {
          param += '&make_id=' + selectedMake[0].make_id;
        }
      });
    }
    await getAllData(ADS + CARS + MODEL + param).then((response) => {
      if (response && response && response.status === 'success') {
        setModels(response.data.result);
        setModalPageCount(response.total);
        setModelsLoading(false);
      }
    });
  };

  useEffect(() => {
    getCitiesWithCars();
    getMakes();
    getModels();
    getBodyTypes();
    getBodyColors();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getModels();
    // eslint-disable-next-line
  }, [modalPage, carFilters.make, makes]);

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
    // eslint-disable-next-line
  }, []);

  const handleModalPage = () => {
    setModalPage(modalPage + 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'condition' && value === 'any') {
      let filter = {
        name: name,
        value: ''
      };
      dispatch(setFilter(filter));
    } else {
      let filter = {
        name: name,
        value: value
      };
      dispatch(setFilter(filter));
    }
    if (validateOnChange) validate({ [name]: value });
  };

  const handleTextBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeywords(value);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterName: string
  ) => {
    let filter = {
      name: e.target.name,
      value: filterName
    };
    if (e.target.checked) {
      dispatch(setArrayFilter(filter));
    } else {
      dispatch(removeArrayFilter(filter));
    }
  };

  const handleSingleCheckBoxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;
    let filter = {
      name: name,
      value: checked
    };
    dispatch(setFilter(filter));
  };

  const removeRangeFilter = (filterName: string) => {
    let tempVal: any = rangeValues;
    tempVal[filterName] = initialRangeValues[filterName];
    setRangeValues(tempVal);
    dispatch(
      removeFilter({ name: filterName, value: initialRangeValues[filterName] })
    );
  };

  const resetForm = () => {
    setKeywords('');
    setRangeValues({
      price: ['', ''],
      modelYear: ['', ''],
      milage: ['', ''],
      engineCapacity: ['', '']
    });
    setErrors({});
    dispatch(resetFilters());
  };

  const handleSubmit = () => {
    getAllCars();
  };

  const handleTextBoxSubmit = (name: string) => {
    let filter = {
      name: name,
      value: getKeyValue(rangeValues)(name)
    };
    dispatch(setFilter(filter));
  };

  useEffect(() => {
    setIsLoading(true);
    setResult([]);
    getAllCars(1);
    // eslint-disable-next-line
  }, [carFilters, user]);

  return {
    errors,
    setErrors,
    page,
    pageCount,
    modalPage,
    modalPageCount,
    handleModalPage,
    result,
    keywords,
    setResult,
    handlePageChange,
    handleInputChange,
    handleCheckboxChange,
    handleSingleCheckBoxChange,
    handleTextBoxChange,
    handleTextBoxSubmit,
    removeRangeFilter,
    resetForm,
    validate,
    handleSubmit,
    isLoading,
    responseData,
    responseMessage,
    getAllCars,
    rangeValues,
    setRangeValues,
    citiesWithCars,
    alertOpen,
    setAlertOpen,
    makes,
    models,
    bodyTypes,
    bodyColors,
    setResponseMessage,
    modelsLoading,
  };
};
