import { RootState } from '../../redux/store';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import { getAllData } from '../../Utils/API/API';
import useValidation from '../../Utils/hooks/useValidation';
import { ICarCard } from '../../Utils/interfaces/products.interface';
import { setShortlistCars } from '../../redux/reducers/shortlistCarsSlice';
import { extractError, getKeyValue } from '../../Utils/helperFunctions';
import {
  removeArrayFilter,
  setArrayFilter,
  setFilter,
  resetFilters,
  removeFilter
} from '../../redux/reducers/carFiltersSlice';

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

const initialRangeValues: any = {
  price: [0, 50000000],
  modelYear: [1971, 2021],
  milage: [0, 500000],
  engineCapacity: [0, 10000]
};
interface IData {
  data: {
    result: ICarCard[];
  };
  totalCount: number;
}

export const useForm = (validateOnChange = true) => {
  const dispatch = useDispatch();
  // const {city} = useParams<any>();
  const carFilters = useSelector(
    (state: RootState) => state.carFilters.filters
  );
  const {user} = useSelector((state:RootState)=>state.auth)
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
  const [citiesWithCars, setCitiesWithCars] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [bodyTypes, setBodyTypes] = useState<any>([]);
  const [bodyColors, setBodyColors] = useState<any>([]);
  const [keywords, setKeywords] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState<number>(1);
  const [responseData, setResponseData] = useState<IData | null>();
  const [result, setResult] = useState<ICarCard[] | []>([]);
  const [queryParams, setQueryParams] = useState<string>('');
  const { validate, errors, setErrors } = useValidation(carFilters);
  const shortListCars = useSelector(
    (state: RootState) => state.shortlistCars.shortlistCars
  );
  const [rangeValues, setRangeValues] = useState<any>({
    price: [0, 50000000],
    modelYear: [1971, 2021],
    milage: [0, 500000],
    engineCapacity: [0, 10000]
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
  };

  const getAllCars = async () => {
    let params = `?limit=9&page=${page.toString()}`;
    Object.entries(carFilters).map(([keys, values]: any) => {
      if (values !== initialValues[keys]) {
        if (typeof values === typeof [] && !(keys in initialRangeValues)) {
          values.map((value: string) => {
            params += `&${keys}=${value}`;
          });
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

    console.log('queryparams', params);
    setQueryParams(params);
    await getAllData(ADS + CARS + params)
      .then((response) => {
        setIsLoading(false);
        if (response && response && response.status === 'success') {
          setResponseData(response);
          setPageCount(
            response.totalCount < 10 ? 1 : Math.ceil(response.totalCount / 10)
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
        console.log('Error log', error);
        setResponseMessage({
          status: error.status,
          message: error.message
        });
      });
  };

  const getCitiesWithCars = async () => {
    let param = '?';
    if (carFilters.province.length > 0) {
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
        console.log('Error', error);
      });
  };

  const getMakes = async () => {
    await getAllData(ADS + CARS + MAKE)
      .then((response) => {
        if (response && response && response.status === 'success') {
          setMakes(response.data.result);
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  const getBodyTypes = () => {
    getAllData(ADS + CARS + BODY_TYPES).then((response) => {
      if (response && response && response.status === 'success') {
        setBodyTypes(response.data.result);
      } else {
        console.log('error', response);
      }
    });
  };

  const getBodyColors = () => {
    getAllData(ADS + CARS + CAR_COLORS).then((response) => {
      console.log(response);
      if (response && response && response.status === 'success') {
        setBodyColors(response.data.result);
      } else {
        console.log('error', response);
      }
    });
  };

  const getModels = async () => {
    let param = '?&sort=name';
    if (carFilters.make.length > 0) {
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
  }, [carFilters.make]);

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let filter = {
      name: name,
      value: value
    };
    dispatch(setFilter(filter));
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
    if (e.target.name === 'province') {
      getCitiesWithCars();
    }
    if (e.target.name === 'make') {
      getModels();
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
    console.log('reset filters');
    setKeywords('');
    setRangeValues({
      price: [0, 50000000],
      modelYear: [1971, 2021],
      milage: [0, 500000],
      engineCapacity: [0, 10000]
    });
    setErrors({});
    dispatch(resetFilters());
  };

  const handleSubmit = () => {
    getAllCars();
  };

  const handleTextBoxSubmit = (name: any) => {
    let filter = {
      name: name,
      value: getKeyValue(rangeValues)(name)
    };
    dispatch(setFilter(filter));
  };

  useEffect(() => {
    console.log('filters', carFilters);
    setIsLoading(true);
    getAllCars();
    // eslint-disable-next-line
  }, [page, carFilters, user]);

  function ItemExists(itemId: string) {
    let newshortListCars = shortListCars;
    return newshortListCars.some(function (item: ICarCard) {
      return item._id === itemId;
    });
  }

  const shortListItem = (newItem: ICarCard) => {
    setAlertOpen(false);
    if (shortListCars.length < 6) {
      if (!ItemExists(newItem._id)) {
        dispatch(setShortlistCars([...shortListCars, newItem]));
        setAlertOpen(true);
        setResponseMessage({ status: 'success', message: 'Car added' });
      } else {
        setAlertOpen(true);
        setResponseMessage({
          status: 'error',
          message: 'Car already selected'
        });
      }
    } else {
      setAlertOpen(true);
      setResponseMessage({
        status: 'error',
        message: "Can't select more than 6 cars"
      });
    }
  };

  const removeShortListItem = (itemId: string) => {
    setAlertOpen(false);
    let newState = shortListCars.filter((item: ICarCard) => {
      return item._id !== itemId;
    });
    dispatch(setShortlistCars(newState));
    setAlertOpen(true);
    setResponseMessage({
      status: 'success',
      message: 'Car removed'
    });
  };

  const clearShortListedCars = () =>{
    let temp : any[] = []
    dispatch(setShortlistCars(temp));
    setAlertOpen(true);
    setResponseMessage({
      status: 'success',
      message: 'Removed all short listed cars'
    });
  }

  return {
    errors,
    setErrors,
    page,
    pageCount,
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
    shortListItem,
    removeShortListItem,
    rangeValues,
    setRangeValues,
    citiesWithCars,
    shortListCars,
    alertOpen,
    setAlertOpen,
    makes,
    models,
    bodyTypes,
    bodyColors,
    clearShortListedCars
  };
};
