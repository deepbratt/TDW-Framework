import { useEffect, useReducer, useState } from "react";
import CarAdditionalInformation from "./CarAdditionalInformation";
import CarInformationForm from "./CarInformationForm";
import UploadPhotosForm from "./UploadPhotosForm";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const initialFieldValues = {
  city: "",
  carInfo: "",
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
};

const initialAllRequireError = {
  city: false,
  carInfo: false,
  registeredIn: false,
  mileage: false,
  price: false,
  engineType: false,
  engineCapacity: false,
  transmission: false,
  assembly: false,
  images: false,
};

const initialRequireError = {
  city: false,
  carInfo: false,
  registeredIn: false,
  mileage: false,
  price: false,
};

const initialRequireError_2 = {
  engineType: false,
  engineCapacity: false,
  transmission: false,
  assembly: false,
  images: false,
};

const useAddEditCar = () => {
  const [formData, setFormData] = useReducer(formReducer, initialFieldValues);
  const [activeStep, setActiveStep] = useState(0);
  const [images, setImages] = useState<Array<any>>([]);
  const [requireError, setRequireError] = useState(initialAllRequireError);
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
  const ComponentContent = [
    <CarInformationForm
      formData={formData}
      handleChange={handleChange}
      requireError={requireError}
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
    console.log("car add edit - image/photo edited");
  }, [images]);

  function allFalse(obj: any) {
    for (var o in obj) {
      if (obj[o]) return false;
    }
    return true;
  }

  const validateStep1 = () => {
    let flagRequireError = Object.assign({}, initialRequireError);
    if (formData.city === "" || formData.city === "null") {
      setRequireError((requireError) => {
        return { ...requireError, city: true };
      });
      flagRequireError.city = true;
    } else {
      setRequireError((requireError) => {
        return { ...requireError, city: false };
      });
    }

    if (formData.carInfo === "" || formData.carInfo === "null") {
      setRequireError((requireError) => {
        return { ...requireError, carInfo: true };
      });
      flagRequireError.carInfo = true;
    } else {
      setRequireError((requireError) => {
        return { ...requireError, carInfo: false };
      });
    }

    if (formData.mileage === "" || formData.mileage === "null") {
      setRequireError((requireError) => {
        return { ...requireError, mileage: true };
      });
      flagRequireError.mileage = true;
    } else {
      setRequireError((requireError) => {
        return { ...requireError, mileage: false };
      });
    }

    if (formData.registeredIn === "" || formData.registeredIn === "null") {
      setRequireError((requireError) => {
        return { ...requireError, registeredIn: true };
      });
      flagRequireError.registeredIn = true;
    } else {
      setRequireError((requireError) => {
        return { ...requireError, registeredIn: false };
      });
    }

    if (formData.price === "" || formData.price === "null") {
      setRequireError((requireError) => {
        return { ...requireError, price: true };
      });
      flagRequireError.price = true;
    } else {
      setRequireError((requireError) => {
        return { ...requireError, price: false };
      });
    }

    return allFalse(flagRequireError);
  };

  const validateStep3 = () => {
    let flagRequireError = Object.assign({}, initialRequireError_2);
    if (formData.engineType === "" || formData.engineType === "null") {
      setRequireError((requireError) => {
        return { ...requireError, engineType: true };
      });
      flagRequireError.engineType = true;
    } else {
      setRequireError((requireError) => {
        return { ...requireError, engineType: false };
      });
    }

    if (formData.engineCapacity === "" || formData.engineCapacity === "null") {
      setRequireError((requireError) => {
        return { ...requireError, engineCapacity: true };
      });
      flagRequireError.engineCapacity = true;
    } else {
      setRequireError((requireError) => {
        return { ...requireError, engineCapacity: false };
      });
    }

    if (formData.transmission === "" || formData.transmission === "null") {
      setRequireError((requireError) => {
        return { ...requireError, transmission: true };
      });
      flagRequireError.transmission = true;
    } else {
      setRequireError((requireError) => {
        return { ...requireError, transmission: false };
      });
    }

    if (formData.assembly === "" || formData.assembly === "null") {
      setRequireError((requireError) => {
        return { ...requireError, assembly: true };
      });
      flagRequireError.assembly = true;
    } else {
      setRequireError((requireError) => {
        return { ...requireError, assembly: false };
      });
    }

    return allFalse(flagRequireError);
  };

  const handleNext = () => {
    let firstStepValidated = true;
    let secondStepValidated = true;
    let thirdStepValidated = true;
    if (activeStep === 0) {
      firstStepValidated = validateStep1();
    } else if (activeStep === 1) {
      secondStepValidated = images.length > 0;
      setRequireError((requireError) => {
        return { ...requireError, images: !secondStepValidated };
      });
    } else {
      thirdStepValidated = validateStep3();
    }
    if (activeStep === 0 && !firstStepValidated) {
      return;
    }

    if (activeStep === 1 && !secondStepValidated) {
      return;
    }

    if (activeStep === 2 && !thirdStepValidated) {
      return;
    }

    if (activeStep === 2) {
      console.log("submit following data: ");
      console.log(formData);
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
