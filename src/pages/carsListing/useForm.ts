import React, { useState, useEffect } from 'react';
// import {useDispatch,  useSelector} from "react-redux";
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
// import { setAppliedFilters, setFilter } from "../../redux/reducers/carFiltersSlice";
import { getAllData } from '../../Utils/API/API';
import useValidation from '../../Utils/hooks/useValidation';
import { ICarCard } from '../../Utils/interfaces/products.interface';
// import { useParams } from "react-router";

const initialValues: any = {
  keywords: '',
  // priceFrom: 0,
  // priceTo: 0,
  // priceRange: [0, 50000000],
  // yearFrom: 0,
  // yearTo: 0,
  // yearRange: [1900, 2021],
  province: [],
  city: [],
  mileageFrom: 0,
  mileageTo: 0,
  registrationCity: [],
  // mileageRange: [0, 1000000],
  transmission: [],
  engineType: [],
  // engineCapacityFrom: 0,
  // engineCapacityTo: 0,
  // engineCapacityRange: [600, 30000],
  color: [],
  bodyType: [],
  pictureAvailability: false,
  videoAvailability: false,
  sellerType: [],
  adType: [],
  sort: '',
  condition: ""
};

interface IData {
  data: {
    result: ICarCard[];
  };
  totalCount: number
}

export const useForm = (validateOnChange = true) => {
  // const dispatch = useDispatch();
  // const {city} = useParams<any>();
  // const appliedFiltersFromStore = useSelector((state: any) => state.persistedReducer.carFilters.appliedFilters);
  const { ADS, CARS } = API_ENDPOINTS;
  const [values, setValues] = useState(initialValues);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [keywords, setKeywords] = useState('');
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<IData>();
  const [result, setResult] = useState<ICarCard[]>([]);
  const [queryParams, setQueryParams] = useState<string>('');
  const { validate, errors, setErrors } = useValidation(values);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

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

  const getAllCars = async (appliedFilters: any) => {
    let params = `limit=10&page=${page.toString()}`;
    if (appliedFilters.indexOf('sort') > -1) {
      params += '&sort=' + values.sort;
    }
    if (appliedFilters.indexOf('condition') > -1) {
      params += '&condition=' + values.condition;
    }
    if (appliedFilters.indexOf('keywords') > -1) {
      params += '&keyword=' + keywords;
    }
    if (appliedFilters.indexOf('province') > -1) {
      values.province.map((item: string) => {
        params += '&province=' + item;
      });
    }
    if (appliedFilters.indexOf('city') > -1) {
      values.city.map((item: string) => {
        params += '&city=' + item;
      });
    }
    if (appliedFilters.indexOf('registrationCity') > -1) {
      values.registrationCity.map((item: string) => {
        params += '&registrationCity=' + item;
      });
    }
    if (appliedFilters.indexOf('transmission') > -1) {
      values.transmission.map((item: string) => {
        params += '&transmission=' + item;
      });
    }
    if (appliedFilters.indexOf('engineType') > -1) {
      values.engineType.map((item: string) => {
        params += '&engineType=' + item;
      });
    }
    if (appliedFilters.indexOf('color') > -1) {
      values.color.map((item: string) => {
        params += '&color=' + item;
      });
    }
    if (appliedFilters.indexOf('bodyType') > -1) {
      values.bodyType.map((item: string) => {
        params += '&bodyType=' + item;
      });
    }
    if (appliedFilters.indexOf('sellerType') > -1) {
      values.sellerType.map((item: string) => {
        params += '&sellerType=' + item;
      });
    }
    if (appliedFilters.indexOf('adType') > -1) {
      values.adType.map((item: string) => {
        params += '&adType=' + item;
      });
    }
    // if(appliedFilters.indexOf("pictureAvailability") > -1) {
    //   params+="&pictureAvailability="+values.pictureAvailability
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
          setPageCount(response.totalCount < 10 ? 1 : Math.round(response.totalCount / 10));
          setResult(response.data.result);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange) validate({ [name]: value });
    if (values[name] !== value) {
      if (!appliedFilters.includes(name)) {
        setAppliedFilters([...appliedFilters, name]);
      }
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
    let temp = values[filterName];
    if (e.target.checked) {
      temp.push(e.target.name);
    } else {
      temp = temp.filter((item: string) => item !== e.target.name);
      console.log('temp', temp);
    }
    setValues({ ...values, [filterName]: temp });
    if (e.target.checked) {
      if (!appliedFilters.includes(filterName)) {
        setAppliedFilters([...appliedFilters, filterName]);
      }
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
    let tempVal: any = values;
    tempVal[filterName] = initialValues[filterName];
    if (typeof tempVal[filterName] === typeof ['']) {
      tempVal[filterName] = [];
    }
    setValues(tempVal);
    // setValues({ ...values, [filterName]: initialValues[filterName] });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = () => {
    getAllCars(appliedFilters);
  };

  const handleTextBoxSubmit = (name: any, value: any) => {
    if (!appliedFilters.includes(name)) {
      setAppliedFilters([...appliedFilters, name]);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getAllCars(appliedFilters);
    // eslint-disable-next-line
  }, [values, page, appliedFilters]);

  return {
    values,
    setValues,
    errors,
    setErrors,
    page,
    pageCount,
    result,
    setResult,
    handlePageChange,
    handleInputChange,
    handleCheckboxChange,
    handleSingleCheckBoxChange,
    handleTextBoxChange,
    keywords,
    setKeywords,
    handleTextBoxSubmit,
    appliedFilters,
    setAppliedFilters,
    removeFilter,
    resetForm,
    validate,
    handleSubmit,
    isLoading,
    responseData,
    responseMessage,
    getAllCars
  };
};
