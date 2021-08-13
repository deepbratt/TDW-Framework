import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import CarAdditionalInformation from "./CarAdditionalInformation";
import CarInformationForm from "./CarInformationForm";
import UploadPhotosForm from "./UploadPhotosForm";
import { City, State } from "country-state-city";
import { IState } from "country-state-city/dist/lib/interface";

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

  useEffect(() => {
    console.log("car add edit ", id);
  }, [id]);

  function allFalse(obj: any) {
    for (var o in obj) {
      if (obj[o]) return false;
    }
    return true;
  }

  function checkValidation(validationObject: object) {
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
      // console.log(formData);
      let fd = new FormData()
      fd.append("country", "Pakistan")
      fd.append("city", formData.city)
      fd.append("province", formData.province)
      fd.append("location", formData.location)
      fd.append("images", formData.images)
      fd.append("model", formData.carModel)
      fd.append("make", formData.carMake)
      fd.append("transmission", formData.transmission)
      fd.append("assembly", formData.assembly)
      fd.append("registrationCity", formData.registeredIn)
      fd.append("bodyColor", formData.bodyColor)
      fd.append("milage", formData.mileage)
      fd.append("condition", formData.bodyCondition)
      fd.append("description", formData.description)
      fd.append("bodyType", formData.bodyType)
      fd.append("engineType", formData.engineType)
      fd.append("date", new Date(formData.modelYear).toISOString())
      fd.append("features", formData.features)
      fd.append("price", formData.price)
      console.table(Object.fromEntries(fd))
      // submit data to backend
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
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
  };
};

export default useAddEditCar;
