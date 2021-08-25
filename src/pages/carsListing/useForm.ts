import React, { useState, useEffect } from 'react';
import {useDispatch,  useSelector} from "react-redux";
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
// import { setAppliedFilters, setFilter } from "../../redux/reducers/carFiltersSlice";
import { getAllData } from '../../Utils/API/API';
import useValidation from '../../Utils/hooks/useValidation';
import { ICarCard } from '../../Utils/interfaces/products.interface';
import { RootState } from "../../redux/store";
import { emptyQueryParams }  from "../../redux/reducers/queryParamsSlice";
// import { useParams } from "react-router";

const initialValues: any = {
  keywords: '',
  // priceFrom: 0,
  // priceTo: 0,
  priceRange: [0, 50000000],
  // yearFrom: 0,
  // yearTo: 0,
  yearRange: [1940, 2021],
  province: [],
  city: [],
  mileageFrom: 0,
  mileageTo: 0,
  registrationCity: [],
  mileageRange: [0, 1000000],
  transmission: [],
  engineType: [],
  // engineCapacityFrom: 0,
  // engineCapacityTo: 0,
  engineCapacityRange: [600, 30000],
  color: [],
  bodyType: [],
  pictureAvailability: false,
  videoAvailability: false,
  sellerType: [],
  adType: [],
  sort: '',
  condition: ''
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
  const routeParams = useSelector((state: RootState) => state.queryParams.queryParams);
  const { ADS, CARS } = API_ENDPOINTS;
  const [priceRange, setPriceRange] = useState<number[]>([0, 50000000]);
  const [yearRange, setYearRange] = useState<number[]>([1940, 2021]);
  const [mileageRange, setMileageRange] = useState<number[]>([0, 500000]);
  const [engineCapacityRange, setEngineCapacityRange] = useState<number[]>([
    0, 5000
  ]);
  const [values, setValues] = useState({ ...initialValues });
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [keywords, setKeywords] = useState('');
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<IData | null>();
  const [result, setResult] = useState<ICarCard[] | []>([]);
  const [queryParams, setQueryParams] = useState<string>('');
  const { validate, errors, setErrors } = useValidation(values);
  const [shortListItems, setShortListItems] = useState<ICarCard[]>([]);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  useEffect(() => {
    console.log("routes params", routeParams);
     if("city" in routeParams){
       let newValues= values;
       newValues["city"].push(routeParams["city"])
       setValues(newValues);
       setAppliedFilters([...appliedFilters, "city"])
     }
     if("min" in routeParams && routeParams["min"] !== ""){
       let range = priceRange;
       range[0] = routeParams["min"] as number;
       setPriceRange(range);
       setAppliedFilters([...appliedFilters, "priceRange"])
     }
     if("max" in routeParams && routeParams["max"] !== ""){
       let range = priceRange;
       range[1] = routeParams["max"] as number;
       setPriceRange(range);
       if(!appliedFilters.includes("priceRange")){
        setAppliedFilters([...appliedFilters, "priceRange"])
      }    
    }
    dispatch(emptyQueryParams())
    // eslint-disable-next-line
  }, []);

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
    if (appliedFilters.indexOf('priceRange') > -1) {
      if (priceRange[0] !== 0) {
        params += '&price[gte]=' + priceRange[0];
      }
      if (priceRange[1] !== 50000000) {
        params += '&price[lte]=' + priceRange[1];
      }
    }
    if (appliedFilters.indexOf('yearRange') > -1) {
      if (yearRange[0] !== 1940) {
        params += '&modelYear[gte]=' + yearRange[0];
      }
      if (values.yearRange[1] !== 2021) {
        params += '&modelYear[lte]=' + yearRange[1];
      }
    }
    if (appliedFilters.indexOf('mileageRange') > -1) {
      if (mileageRange[0] !== 0) {
        params += '&milage[gte]=' + mileageRange[0];
      }
      if (mileageRange[1] !== 1000000) {
        params += '&milage[lte]=' + mileageRange[1];
      }
    }
    if (appliedFilters.indexOf('engineCapacityRange') > -1) {
      if (engineCapacityRange[0] !== 600) {
        params += '&engineCapacity[gte]=' + engineCapacityRange[0];
      }
      if (engineCapacityRange[1] !== 30000) {
        params += '&engineCapacity[lte]=' + engineCapacityRange[1];
      }
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
    const { name, value } = e.target;
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
      } else {
        getAllCars(appliedFilters);
      }
    }
    if (!e.target.checked) {
      verifyAppliedFilters(filterName);
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
    if (filterName === 'priceRange') {
      setPriceRange(initialValues[filterName]);
    } else if (filterName === 'mileageRange') {
      setMileageRange(initialValues[filterName]);
    } else if (filterName === 'yearRange') {
      setYearRange(initialValues[filterName]);
    } else if (filterName === 'engineCapacityRange') {
      setEngineCapacityRange(initialValues[filterName]);
    } else if (filterName === 'keywords') {
      setKeywords('');
    } else {
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

  const verifyAppliedFilters = (filterName: string) => {
    if (appliedFilters.includes(filterName)) {
      console.log('values', values[filterName]);
      if (values[filterName].length === 1) {
        console.log('All removed');
        removeFilter(filterName);
      }
    }
  };

  const handleTextBoxSubmit = (name: any) => {
    if (!appliedFilters.includes(name)) {
      setAppliedFilters([...appliedFilters, name]);
    } else {
      getAllCars(appliedFilters);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    console.log('appliedFiltr', appliedFilters);
    getAllCars(appliedFilters);
    // eslint-disable-next-line
  }, [page, appliedFilters, values]);

  
  const shortListItem = (newItem: ICarCard) => {
    if (shortListItems.length < 2) {
      setShortListItems([...shortListItems, newItem]);
    }
  };

  const removeShortListItem = (itemId: string) => {
    let newItems = shortListItems;
    newItems = newItems.filter((item: ICarCard) => item._id !== itemId);
    setShortListItems(newItems);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    page,
    pageCount,
    result,
    keywords,
    priceRange,
    setPriceRange,
    yearRange,
    setYearRange,
    mileageRange,
    setMileageRange,
    engineCapacityRange,
    setEngineCapacityRange,
    setResult,
    handlePageChange,
    handleInputChange,
    handleCheckboxChange,
    handleSingleCheckBoxChange,
    handleTextBoxChange,
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
    getAllCars,
    shortListItems, setShortListItems,
    shortListItem, removeShortListItem
  };
};
