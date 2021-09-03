import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
// import { setAppliedFilters, setFilter } from "../../redux/reducers/carFiltersSlice";
import { getAllData } from '../../Utils/API/API';
import useValidation from '../../Utils/hooks/useValidation';
import { ICarCard } from '../../Utils/interfaces/products.interface';
import { RootState } from '../../redux/store';
import { setShortlistCars } from '../../redux/reducers/shortlistCarsSlice';
// import { useParams } from "react-router";

const initialValues: any = {
  province: [],
  city: [],
  registrationCity: [],
  make: [],
  model: [],
  transmission: [],
  assembly: [],
  engineType: [],
  color: [],
  bodyType: [],
  pictureAvailability: false,
  videoAvailability: false,
  sellerType: [],
  adType: [],
  sort: '',
  condition: ''
};

const initialRangeValues: any = {
  priceRange: [0, 50000000],
  yearRange: [1940, 2021],
  mileageRange: [0, 500000],
  engineCapacityRange: [0, 5000]
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
  // const routeParams = useSelector(
  //   (state: RootState) => state.queryParams.queryParams
  // );
  const { ADS, CARS, FILTER, CITIES_WITH_CARS, MAKE, MODEL } = API_ENDPOINTS;
  const [page, setPage] = useState(1);
  const [citiesWithCars, setCitiesWithCars] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState<number>(1);
  const [values, setValues] = useState({ ...initialValues });
  const [responseData, setResponseData] = useState<IData | null>();
  const [result, setResult] = useState<ICarCard[] | []>([]);
  const [queryParams, setQueryParams] = useState<string>('');
  const { validate, errors, setErrors } = useValidation(values);
  const shortListCars = useSelector(
    (state: RootState) => state.shortlistCars.shortlistCars
  );
  const [rangeValues, setRangeValues] = useState<any>({
    priceRange: [0, 50000000],
    yearRange: [1940, 2021],
    mileageRange: [0, 500000],
    engineCapacityRange: [0, 5000]
  });
  const [appliedFilters, setAppliedFilters] = useState<any>({
    province: [],
    city: [],
    registrationCity: [],
    make: [],
    model: [],
    transmission: [],
    assembly: [],
    engineType: [],
    color: [],
    bodyType: [],
    sellerType: [],
    adType: []
  });
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  // * We'll use later
  // useEffect(() => {
  //   let newValues = values;
  //   let newPriceRange = priceRange;
  //   let newYearRange = yearRange;
  //   let newMileageRange = mileageRange;
  //   let newEngineCapacityRange = engineCapacityRange;
  //   let newAppliedFilters = appliedFilters;

  //   console.log('routes params', routeParams);
  //   if ('city' in routeParams && routeParams['city'] !== '') {
  //     newValues.city.push(routeParams['city']);
  //     newAppliedFilters.push('city');
  //   }
  //   if ('area' in routeParams && routeParams['area'] !== '') {
  //     newValues.registrationCity.push(routeParams['area']);
  //     newAppliedFilters.push('registrationCity');
  //   }
  //   if ('engine' in routeParams && routeParams['engine'] !== '') {
  //     newValues.engineType.push(routeParams['engine']);
  //     newAppliedFilters.push('engineType');
  //   }
  //   if ('allBody' in routeParams && routeParams['allBody'] !== '') {
  //     newValues.bodyType.push(routeParams['allBody']);
  //     newAppliedFilters.push('bodyType');
  //   }
  //   if ('assemblyTypes' in routeParams && routeParams['assemblyTypes'] !== '') {
  //     newValues.assembly.push(routeParams['assemblyTypes']);
  //     newAppliedFilters.push('assembly');
  //   }
  //   if ('transmissionTypes' in routeParams && routeParams['transmissionTypes'] !== '') {
  //     newValues.transmission.push(routeParams['transmissionTypes']);
  //     newAppliedFilters.push('transmission');
  //   }
  //   if ('allColors' in routeParams && routeParams['allColors'] !== '') {
  //     newValues.color.push(routeParams['allColors']);
  //     newAppliedFilters.push('color');
  //   }
  //   if ('sellerType' in routeParams && routeParams['sellerType'] !== '') {
  //     newValues.sellerType.push(routeParams['sellerType']);
  //     newAppliedFilters.push('sellerType');
  //   }
  //   if ('adWithPics' in routeParams) {
  //     newValues.pictureAvailability = routeParams['adWithPics'];
  //     newAppliedFilters.push('pictureAvailability');
  //   }
  //   if ('min' in routeParams && routeParams['min'] !== '') {
  //     newPriceRange[0] = routeParams['min'] as number;
  //     newAppliedFilters.push('priceRange');
  //   }
  //   if ('max' in routeParams && routeParams['max'] !== '') {
  //     newPriceRange[1] = routeParams['max'] as number;
  //     if (!newAppliedFilters.includes('priceRange')) {
  //       newAppliedFilters.push('priceRange');
  //     }
  //   }
  //   if ('yearFrom' in routeParams && routeParams['yearFrom'] !== '') {
  //     newYearRange[0] = routeParams['yearFrom'] as number;
  //     newAppliedFilters.push('yearRange');
  //   }
  //   if ('yearTo' in routeParams && routeParams['yearTo'] !== '') {
  //     newYearRange[1] = routeParams['yearTo'] as number;
  //     if (!newAppliedFilters.includes('yearRange')) {
  //       newAppliedFilters.push('yearRange');
  //     }
  //   }
  //   if ('mileageFrom' in routeParams && routeParams['mileageFrom'] !== '') {
  //     newMileageRange[0] = routeParams['mileageFrom'] as number;
  //     newAppliedFilters.push('mileageRange');
  //   }
  //   if ('mileageTo' in routeParams && routeParams['mileageTo'] !== '') {
  //     newMileageRange[1] = routeParams['mileageTo'] as number;
  //     if (!newAppliedFilters.includes('mileageRange')) {
  //       newAppliedFilters.push('mileageRange');
  //     }
  //   }
  //   if (
  //     'engineCapacityFrom' in routeParams &&
  //     routeParams['engineCapacityFrom'] !== ''
  //   ) {
  //     newEngineCapacityRange[0] = routeParams['engineCapacityFrom'] as number;
  //     newAppliedFilters.push('engineCapacityRange');
  //   }
  //   if (
  //     'engineCapacityTo' in routeParams &&
  //     routeParams['engineCapacityTo'] !== ''
  //   ) {
  //     newEngineCapacityRange[1] = routeParams['engineCapacityTo'] as number;
  //     if (!newAppliedFilters.includes('engineCapacityRange')) {
  //       newAppliedFilters.push('engineCapacityRange');
  //     }
  //   }
  //   setValues(newValues);
  //   setPriceRange(newPriceRange);
  //   setYearRange(newYearRange);
  //   setMileageRange(newMileageRange);
  //   setEngineCapacityRange(newEngineCapacityRange);
  //   setAppliedFilters(newAppliedFilters);
  //   dispatch(emptyQueryParams());
  //   // eslint-disable-next-line
  // }, []);

  const handlePageChange = (e: any, value: any) => {
    setPage(value);
  };

  // eslint-disable-next-line
  function inArray(needle: string, haystack: []) {
    var length = haystack.length;
    for (var i = 0; i < length; i++) {
      if (haystack[i] === needle) return true;
    }
    return false;
  }

  const getAllCars = async () => {
    let params = `?limit=10&page=${page.toString()}`;
    if ('sort' in appliedFilters) {
      params += '&sort=' + values.sort;
    }
    if ('condition' in appliedFilters) {
      params += '&condition=' + values.condition;
    }
    if ('keywords' in appliedFilters) {
      params += '&keyword=' + keywords;
    }
    if ('priceRange' in appliedFilters) {
      if (rangeValues.priceRange[0] !== 0) {
        params += '&price[gte]=' + rangeValues.priceRange[0];
      }
      if (rangeValues.priceRange[1] !== initialRangeValues.priceRange[1]) {
        params += '&price[lte]=' + rangeValues.priceRange[1];
      }
    }
    if ('yearRange' in appliedFilters) {
      params += '&modelYear[gte]=' + rangeValues.yearRange[0];
      if (rangeValues.yearRange[1] !== initialRangeValues.yearRange[1]) {
        params += '&modelYear[lte]=' + rangeValues.yearRange[1];
      }
    }
    if ('mileageRange' in appliedFilters) {
      if (rangeValues.mileageRange[0] !== 0) {
        params += '&milage[gte]=' + rangeValues.mileageRange[0];
      }
      if (rangeValues.mileageRange[1] !== initialRangeValues.mileageRange[1]) {
        params += '&milage[lte]=' + rangeValues.mileageRange[1];
      }
    }
    if ('engineCapacityRange' in appliedFilters) {
      if (
        rangeValues.engineCapacityRange[0] !==
        initialRangeValues.engineCapacityRange[0]
      ) {
        params += '&engineCapacity[gte]=' + rangeValues.engineCapacityRange[0];
      }
      if (
        rangeValues.engineCapacityRange[1] !==
        initialRangeValues.engineCapacityRange[1]
      ) {
        params += '&engineCapacity[lte]=' + rangeValues.engineCapacityRange[1];
      }
    }
    if (values.province !== []) {
      values.province.map((item: string) => {
        params += '&province=' + item;
      });
    }
    if (values.city !== []) {
      values.city.map((item: string) => {
        params += '&city=' + item;
      });
    }
    if (values.registrationCity !== []) {
      values.registrationCity.map((item: string) => {
        params += '&registrationCity=' + item;
      });
    }
    if (values.make !== []) {
      values.make.map((item: string) => {
        params += '&make=' + item;
      });
    }
    if (values.model !== []) {
      values.model.map((item: string) => {
        params += '&model=' + item;
      });
    }
    if (values.transmission !== []) {
      values.transmission.map((item: string) => {
        params += '&transmission=' + item;
      });
    }
    if (values.engineType !== []) {
      values.engineType.map((item: string) => {
        params += '&engineType=' + item;
      });
    }
    if (values.assembly !== []) {
      values.assembly.map((item: string) => {
        params += '&assembly=' + item;
      });
    }
    if (values.color !== []) {
      values.color.map((item: string) => {
        params += '&bodyColor=' + item;
      });
    }
    if (values.bodyType !== []) {
      values.bodyType.map((item: string) => {
        params += '&bodyType=' + item;
      });
    }
    if (values.sellerType !== []) {
      values.sellerType.map((item: string) => {
        params += '&sellerType=' + item;
      });
    }
    // * Not being used right now
    // if (values.pictureAvailability === true) {
    //   params += '&imageStatus=' + values.pictureAvailability;
    // }
    // if(appliedFilters.indexOf("videoAvailability") > -1) {
    //   params+="&videoAvailability="+values.videoAvailability
    // }
    console.log('queryParams', params);
    setQueryParams(params);
    await getAllData(ADS + CARS + params)
      .then((response) => {
        console.log('response', response);
        setIsLoading(false);
        if (response.status === 'success') {
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

  const getCitiesWithCars = async () => {
    let param = '?';
    if (values.province !== []) {
      values.province.map((item: string) => {
        param += '&province=' + item;
      });
    }
    await getAllData(ADS + CARS + FILTER + CITIES_WITH_CARS + param)
      .then((response) => {
        if (response.status === 'success') {
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
        if (response.status === 'success') {
          setMakes(response.data.result);
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  const getModels = async () => {
    let param = '?';
    if (values.make !== []) {
      values.make.map((item: any) => {
        let selectedMake: any = makes.filter((make: any) => make.name === item);
        console.log('make selected', selectedMake);
        if (item === selectedMake[0].name) {
          param += '&make_id=' + selectedMake[0].make_id;
        }
      });
    }
    await getAllData(ADS + CARS + MODEL + param)
      .then((response) => {
        if (response.status === 'success') {
          setModels(response.data.result);
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  useEffect(() => {
    getCitiesWithCars();
    getMakes();
    getModels();
    // eslint-disable-next-line
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange) validate({ [name]: value });
    if (values[name] !== value) {
      setAppliedFilters((previousFilters: any) => {
        previousFilters[name] = value;
        return { ...previousFilters };
      });
    }
  };

  const handleTextBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeywords(value);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterName: string
  ) => {
    let temp = values[e.target.name];
    if (e.target.checked) {
      temp.push(filterName);
    } else {
      temp = temp.filter((item: string) => item !== filterName);
    }
    setValues({ ...values, [e.target.name]: temp });
    if (e.target.name === 'province') {
      getCitiesWithCars();
    }
    if (e.target.name === 'make') {
      getModels();
    }
    if (e.target.checked) {
      setAppliedFilters((previousFilters: any) => {
        if (!previousFilters[e.target.name].includes(filterName)) {
          previousFilters[e.target.name].push(filterName);
        }
        return { ...previousFilters };
      });
    } else {
      getAllCars();
    }

    if (!e.target.checked) {
      removeFilterItem(filterName, e.target.name);
    }
  };

  const handleSingleCheckBoxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;

    setValues({
      ...values,
      [name]: checked
    });
    if (validateOnChange) validate({ [name]: checked });
    if (e.target.checked) {
      setAppliedFilters((previousFilters: any) => {
        previousFilters[e.target.name] = e.target.checked;
        return { ...previousFilters };
      });
    }
    if (!e.target.checked) {
      removeFilter(name);
    }
  };

  const removeRangeFilter = (filterName: string) => {
    let newAppliedFilter = { ...appliedFilters };
    delete newAppliedFilter[filterName];
    setAppliedFilters(newAppliedFilter);
    let tempVal: any = rangeValues;
    tempVal[filterName] = initialRangeValues[filterName];
    setRangeValues(tempVal);
  };

  const removeFilterItem = (filterName: string, keys: string) => {
    let newAppliedFilter = { ...appliedFilters };
    newAppliedFilter[keys] = appliedFilters[keys].filter(
      (filter: string) => filter !== filterName
    );
    setAppliedFilters(newAppliedFilter);
    let tempVal: any = values;
    tempVal[keys] = values[keys].filter(
      (filter: string) => filter !== filterName
    );
    setValues(tempVal);
    if (keys === 'province') {
      getCitiesWithCars();
    }
    if (keys === 'make') {
      getModels();
    }
  };

  const removeFilter = (filterName: string) => {
    let newAppliedFilter = { ...appliedFilters };
    delete newAppliedFilter[filterName];
    setAppliedFilters(newAppliedFilter);
    let tempVal: any = values;
    tempVal[filterName] = initialValues[filterName];
    setValues(tempVal);
    if (filterName === 'keywords') {
      setKeywords('');
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = () => {
    getAllCars();
  };

  const handleTextBoxSubmit = (name: any) => {
    setAppliedFilters((previousFilters: any) => {
      previousFilters[name] = rangeValues[name];
      return { ...previousFilters };
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getAllCars();
    // eslint-disable-next-line
  }, [page, values, appliedFilters]);

  function ItemExists(itemId: string) {
    let newshortListCars = shortListCars
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
    let newItems = shortListCars;
    newItems = newItems.filter((item: ICarCard) => item._id !== itemId);
    dispatch(setShortlistCars(newItems));
    setAlertOpen(true);
    setResponseMessage({
      status: 'success',
      message: 'Car removed'
    });
  };

  useEffect(() => {
    console.log('shortlist Cars', shortListCars);
  }, [shortListCars]);

  return {
    values,
    setValues,
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
    appliedFilters,
    removeFilter,
    removeFilterItem,
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
    models
  };
};
