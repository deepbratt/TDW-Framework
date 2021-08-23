import React, { useState, useEffect, useCallback } from "react";
import {useDispatch,  useSelector} from "react-redux";
import useApi from "../../Utils/hooks/useApi";
import { API_ENDPOINTS } from "../../Utils/API/endpoints";
import { setAppliedFilters, setFilter } from "../../redux/reducers/carFiltersSlice";
import { Console } from "console";

const initialValues: any = {
  keywords: "",
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
  // sortingOptions: "",
};

export const useForm = (validateOnChange = true) => {
  const dispatch = useDispatch();
  const appliedFiltersFromStore = useSelector((state: any) => state.persistedReducer.carFilters.appliedFilters);
  const { ADS, CARS } = API_ENDPOINTS;
  const {
    loading,
    alertOpen,
    setAlertOpen,
    responseMessage,
    responseData,
    getAll,
  } = useApi();
  const [values, setValues] = useState(initialValues);
  const [page, setPage] = useState(1);
  const [keywords, setKeywords] = useState("");
  const [errors, setErrors] = useState(initialValues);
  const [appliedFilters, setAppliedFilters] = useState<string[]>(appliedFiltersFromStore);

  const handlePageChange = (e: any, value: any) => {
    setPage(value);
  };

  function inArray(needle: string, haystack: []) {
    var length = haystack.length;
    for (var i = 0; i < length; i++) {
      if (haystack[i] === needle) return true;
    }
    return false;
  }

  const getAllCars = useCallback(async (appliedFilters: any) => {
    let params = new URLSearchParams();
    params.append("limit", "10");
    params.append("page", page.toString());
    if(inArray("keywords", appliedFilters)) {
      console.log("values keywords in handler", keywords)
      params.append("keywords", keywords)
    }else{
      params.delete("keywords")
    }
    if(inArray("pictureAvailability", appliedFilters)) {
      params.append("pictureAvailability",values.pictureAvailability )
    }else{
      params.delete("pictureAvailability")
    }
    if(inArray("videoAvailability", appliedFilters)) {
      params.append("videoAvailability",values.videoAvailability )
    }else{
      params.delete("videoAvailability")
    }
    if(inArray("sortingOptions", appliedFilters)) {
      params.append("sort",values.sortingOptions )
    }else{
      params.delete("sort")
    }
    
   
    values.city.forEach((city: any) => {
      if(inArray("city", appliedFilters)) {
       params.append("city",city )
      }else{
        params.delete("city")
      }
    })
    values.province.forEach((province: any) => {
      console.log("filter", inArray("province", appliedFilters))
      if(inArray("province", appliedFilters)) {
        params.append("province",province )
      }else{
        params.delete("province")
      }
    })
    values.registrationCity.forEach((registrationCity: any) => {
      if(inArray("registrationCity", appliedFilters)) {
       params.append("registrationCity",registrationCity )
      }else{
        params.delete("registrationCity")
      }
    })
    values.transmission.forEach((transmission: any) => {
      if(inArray("transmission", appliedFilters)) {
        params.append("transmission",transmission )
      }else{
        params.delete("transmission")
      }
    })
    values.engineType.forEach((engineType: any) => {
      if(inArray("engineType", appliedFilters)) {
        params.append("engineType",engineType )
      }else{
        params.delete("engineType")
      }
    })
    values.color.forEach((color: any) => {
      if(inArray("color", appliedFilters)) {
      params.append("color",color )
      }else{
        params.delete("color")
      }
    })
    values.bodyType.forEach((bodyType: any) => {
      if(inArray("bodyType", appliedFilters)) {
        params.append("bodyType",bodyType )
      }else{
        params.delete("bodyType")
      }
    })
    values.sellerType.forEach((sellerType: any) => {
      if(inArray("sellerType", appliedFilters)) {
        params.append("sellerType",sellerType )
      }else{
        params.delete("sellerType")
      }
    })
    values.adType.forEach((adType: any) => {
      if(inArray("adType", appliedFilters)) {
        params.append("adType",adType )
      }else{
        params.delete("adType")
      }
    })

    console.log("queryParams", params);
    await getAll(ADS + CARS+"?"+params);
  }, []);

  useEffect(() => {
    console.log("page", page);
  },[page]);

  useEffect(() => {
    console.log("keywords", keywords);
  },[keywords]);

  useEffect(() => {
    getAllCars(appliedFilters);
  }, [appliedFilters, getAllCars, values, page]);

  useEffect(() => {
    dispatch(setFilter(values));
  }, [values]);

  useEffect(() => {
    console.log("appliedFilters", appliedFilters);
    dispatch(setAppliedFilters(appliedFilters));
  }, [appliedFilters]);


  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
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
  }

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterName: string
  ) => {
    let temp = values[filterName];
    if (e.target.checked) {
      temp.push(e.target.name);
    } else {
      temp = temp.filter((item: string) => item !== e.target.name);
      console.log("temp", temp)
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
      [name]: checked,
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
    console.log("filter name", filterName);
    let tempVal: any = values;
    tempVal[filterName] = initialValues[filterName];
    if (typeof tempVal[filterName] === typeof [""]) {
      tempVal[filterName] = [];
    }
    console.log(
      "tempVal",
      tempVal,
      tempVal[filterName],
      initialValues,
      typeof filterName
    );
    setValues(tempVal);
    // setValues({ ...values, [filterName]: initialValues[filterName] });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = async () => {
    console.log("btn clicked", values);
  };

  const handleTextBoxSubmit = (name: any, value: any) => {
    if (!appliedFilters.includes(name)) {
        setAppliedFilters([...appliedFilters, name]);
      }
    if(keywords === ""){     
      setErrors({...errors, [name]: "This Field is required"})
    }
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    page,
    handlePageChange,
    handleInputChange,
    handleCheckboxChange,
    handleSingleCheckBoxChange,
    handleTextBoxChange,
    keywords, setKeywords,
    handleTextBoxSubmit,
    appliedFilters,
    setAppliedFilters,
    removeFilter,
    resetForm,
    validate,
    handleSubmit,
    loading,
    responseData,
    alertOpen,
    setAlertOpen,
    responseMessage,
  };
};
