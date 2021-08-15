import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import CarAdditionalInformation from "./CarAdditionalInformation";
import CarInformationForm from "./CarInformationForm";
import UploadPhotosForm from "./UploadPhotosForm";
import { City, State } from "country-state-city";
import { IState } from "country-state-city/dist/lib/interface";
import { addEditCarApi, deleteCarAd, getCarById } from "./api";
import { useCallback } from "react";
import { useRef } from "react";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const initialFieldValues = {
  city: "",
  carModel: "",
  carMake: "",
  modelYear: "",
  bodyColor: "",
  bodyType: "",
  bodyCondition: "",
  registeredIn: "",
  mileage: "",
  price: "",
  registrationNo: "",
  description: "",
  engineType: "",
  engineCapacity: "",
  transmission: "",
  assembly: "",
  images: [],
  features: [],
  province: "",
  location: { coordinates: { lat: "", long: "" }, address: "" },
};

// validating step 1
const initialRequireError = {
  city: false,
  carModel: false,
  carMake: false,
  modelYear: false,
  bodyColor: false,
  registeredIn: false,
  mileage: false,
  price: false,
  registrationNo: false,
  description:false
};

// step 2 validation is on the go

// validating step 3
const initialRequireError_2 = {
  engineType: false,
  engineCapacity: false,
  transmission: false,
  bodyCondition: false,
  bodyType: false,
  assembly: false,
  images: false,
};

const useAddEditCar = () => {
  const { id } = useParams<{ id: string }>();
  const formRef = useRef<any>(null)
  const [formData, setFormData] = useReducer(formReducer, initialFieldValues);
  const [activeStep, setActiveStep] = useState(0);
  const [images, setImages] = useState<Array<any>>([]);
  const [requireError, setRequireError] = useState({
    ...initialRequireError,
    ...initialRequireError_2,
  });
  const updateImagesState = (img: any) => {
    setImages(img);
    setFormData({ name: "images", value: img });
  };
  const handleChange = (event: any) => {
    setFormData({
      name: event.target.name,
      value:
        event.target.name === "image"
          ? event.target.files[0]
          : event.target.value,
    });
    event.target.value = event.target.name === "image" && null;
  };
  const handleChangeSelect = (name: string, value: any) => {
    setFormData({ name: name, value: value });
  };
  const ComponentContent = [
    <CarInformationForm
      formData={formData}
      handleChange={handleChange}
      requireError={requireError}
      handleChangeSelect={handleChangeSelect}
    />,
    <UploadPhotosForm
      images={images}
      updateImagesState={updateImagesState}
      key={images.length}
      requireError={requireError.images}
    />,
    <CarAdditionalInformation
      formData={formData}
      handleChange={handleChange}
      requireError={requireError}
      setFormData={setFormData}
    />,
  ];

  const getData = useCallback(()=>{
    getCarById(id).then(response=>{
      if(response.data.status==="success"){
        let result = response.data.data.result
        console.log(result)
        let FieldValues = formData
        FieldValues = {
          city: result.city,
          carModel: result.model,
          carMake: result.make,
          modelYear: result.modelYear,
          bodyColor: result.bodyColor,
          bodyType: result.bodyType,
          bodyCondition: result.condition,
          registeredIn: result.registrationCity,
          mileage: result.milage,
          price: result.price,
          registrationNo: result.regNumber,
          description: result.description,
          engineType: result.engineType,
          engineCapacity: result.engineCapacity,
          transmission: result.transmission,
          assembly: result.assembly,
          images: result.image,
          features: result.features,
          province: result.province,
          location: { coordinates: { lat: "", long: "" }, address: "" },
        };
        Object.keys(FieldValues).forEach((key)=>{
          setFormData({name:key, value: FieldValues[key]})
        })
        setImages(FieldValues.images)
      }else{
        console.log(response)
      }
    })
  },[id])

  useEffect(() => {
    console.log("car add edit ", id);
    getData()
  }, [getData, id]);
  useEffect(() => {
    console.log("images", images);
  }, [images]);

  const allFalse=(obj: any)=> {
    for (var o in obj) {
      if (obj[o]) return false;
    }
    return true;
  }
  const handleDeleteAd=()=> {
    deleteCarAd(id)
  }

  const checkValidation=(validationObject: object)=> {
    let flagRequireError = Object.assign({}, validationObject);
    Object.keys(validationObject).forEach((key) => {
      if (formData[key] === "" || formData[key] === "null" || !formData[key]) {
        setRequireError((requireError) => {
          return { ...requireError, [key]: true };
        });
        flagRequireError = { ...flagRequireError, [key]: true };
      } else {
        setRequireError((requireError) => {
          return { ...requireError, [key]: false };
        });
      }
    });
    return allFalse(flagRequireError);
  }

  const handleNext = () => {
    formRef.current.scrollIntoView({behavior:'smooth'})
    if (activeStep === 0) {
      if (!checkValidation(initialRequireError)) {
        return;
      } else {
        let cityData = City.getCitiesOfCountry("PK");
        let cityInformation = cityData?.filter(
          (city) => city.name === formData.city
        );
        let provinceInformation: IState | undefined;
        if (cityInformation) {
          provinceInformation = State.getStateByCodeAndCountry(
            cityInformation[0].stateCode,
            "PK"
          );
          setFormData({
            name: "location",
            value: {
              coordinate: {
                lat: cityInformation[0].latitude,
                long: cityInformation[0].longitude,
              },
              address: `${formData.city}, ${provinceInformation?.name}`,
            },
          });
          setFormData({ name: "province", value: provinceInformation?.name });
        }
      }
    } else if (activeStep === 1) {
      let secondStepValidated = images.length > 0;
      setRequireError((requireError) => {
        return { ...requireError, images: !secondStepValidated };
      });
      if (!secondStepValidated) {
        return;
      }
    } else {
      if (!checkValidation(initialRequireError_2)) {
        return;
      }
    }

    if (activeStep === 2) {
      console.log("submit following data: ");
      console.log(formData);
      let fd = new FormData();
      fd.append("country", "Pakistan");
      fd.append("city", formData.city);
      fd.append("province", formData.province);
      fd.append("location.address", formData.location.address);
      fd.append("location.coordinate.lat", formData.location.coordinate.lat);
      fd.append("location.coordinate.long", formData.location.coordinate.long);
      let StringUrls = 0
      for (let i = 0; i < formData.images.length; i++) {
        if(typeof formData.images[i] === typeof "string"){
          fd.append("image["+StringUrls+"]", images[i]);
          StringUrls++
        }else{
          fd.append("image", images[i]);
        }
      }
      fd.append("model", formData.carModel);
      fd.append("make", formData.carMake);
      fd.append("transmission", formData.transmission);
      fd.append("assembly", formData.assembly);
      fd.append("registrationCity", formData.registeredIn);
      fd.append("bodyColor", formData.bodyColor);
      fd.append("milage", formData.mileage);
      fd.append("condition", formData.bodyCondition);
      fd.append("description", formData.description);
      fd.append("bodyType", formData.bodyType);
      fd.append("engineType", formData.engineType);
      fd.append("engineCapacity", formData.engineCapacity);
      fd.append("regNumber", formData.registrationNo);
      // fd.append("date", new Date(formData.modelYear).toISOString());
      fd.append("modelYear", formData.modelYear);
      // fd.append("features", formData.features);
      for (let i = 0; i < formData.features.length; i++) {
        fd.append("features", formData.features[i]);
      }
      fd.append("price", formData.price);
      console.table(Object.fromEntries(fd));
      addEditCarApi(fd, id ? id : "").then((response) => {
        if (response) {
          console.log("response", response);
        } else {
          console.log("error", response);
        }
      });
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    formRef.current.scrollIntoView({behavior:'smooth'})
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return {
    setActiveStep,
    activeStep,
    handleBack,
    handleNext,
    formData,
    handleChange,
    images,
    setImages,
    ComponentContent,
    requireError,
    id,
    handleDeleteAd,
    formRef
  };
};

export default useAddEditCar;
