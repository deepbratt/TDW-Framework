import { useEffect, useReducer, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import CarAdditionalInformation from '../../sections/CarAdditionalInformation';
import CarInformationForm from '../../sections/CarInformationForm/CarInformationForm';
import UploadPhotosForm from '../../sections/UploadPhotosForm';
import { City, State } from '../../Utils/country-state-city/index';
import { IState } from '../../Utils/country-state-city/interface';
import { useCallback } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  addData,
  addFormData,
  deleteData,
  getAllData,
  updateFormData
} from '../../Utils/API/API';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import Sizes from '../../Utils/themeConstants';
import { NEED_ASSISTANCE } from '../../Utils/constants/language/en/addEditCarTexts';
import { paths } from '../../routes/paths';

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value
  };
};

const initialFieldValues = {
  city: '',
  carModel: '',
  carMake: '',
  modelYear: '',
  modelVersion: '',
  modelVersionDisplayName: '',
  bodyColor: '',
  bodyType: '',
  bodyCondition: '',
  registeredIn: '',
  mileage: '',
  price: '',
  registrationNo: '',
  description: '',
  engineType: '',
  engineCapacity: '',
  transmission: '',
  assembly: '',
  sellerType: '',
  images: [],
  selectedImage: "",
  features: [],
  province: '',
  location: { coordinates: { lat: '', long: '' }, address: '' }
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
  description: false
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
  sellerType: false
};

const useAddEditCar = () => {
  const history = useHistory();
  const size = Sizes();
  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();
  const formRef = useRef<any>(null);
  const { user } = useSelector((state: RootState) => state.auth);
  const [assistanceDialog, setAssistanceDialog] = useState(false);
  const [helpComingDialog, setHelpComingDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [phoneRequiredDialog, setPhoneRequiredDialog] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [formData, setFormData] = useReducer(formReducer, initialFieldValues);
  const [activeStep, setActiveStep] = useState(0);
  const [images, setImages] = useState<Array<any>>([]);
  const [featuresArray, setFeaturesArray] = useState<Array<any>>([]);
  const [bodyTypesArray, setBodyTypesArray] = useState<Array<any>>([]);
  const [bodyColorArray, setBodyColorArray] = useState<Array<any>>([]);
  const [requireError, setRequireError] = useState({
    ...initialRequireError,
    ...initialRequireError_2
  });

  const updateImagesState = (img: any) => {
    setImages(img);
    setFormData({ name: 'images', value: img });
  };
  const handleChange = (event: any) => {
    setFormData({
      name: event.target.name,
      value:
        event.target.name === 'image'
          ? event.target.files[0]
          : event.target.value
    });
    if (event.target.value === '') {
      setRequireError({
        ...requireError,
        [event.target.name]: true
      });
    } else {
      setRequireError({
        ...requireError,
        [event.target.name]: false
      });
    }
    event.target.value = event.target.name === 'image' && null;
  };

  const handleChangeSelect = (name: string, value: any) => {
    setFormData({ name: name, value: value });
    if (value === '') {
      setRequireError({
        ...requireError,
        [name]: true
      });
    } else {
      setRequireError({
        ...requireError,
        [name]: false
      });
    }
  };
  const handleChangeSelectKeyValue = (
    name: string,
    value: any,
    displayName: string,
    displayValue: any
  ) => {
    setFormData({ name: name, value: value });
    setFormData({ name: displayName, value: displayValue });
    if (value === '') {
      setRequireError({
        ...requireError,
        [name]: true
      });
    } else {
      setRequireError({
        ...requireError,
        [name]: false
      });
    }
  };
  const ComponentContent = [
    <CarInformationForm
      formData={formData}
      handleChange={handleChange}
      requireError={requireError}
      handleChangeSelect={handleChangeSelect}
      setFormData={setFormData}
      bodyColorArray={bodyColorArray}
      handleChangeSelectKeyValue={handleChangeSelectKeyValue}
    />,
    <UploadPhotosForm
      images={images}
      updateImagesState={updateImagesState}
      formData={formData}
      setFormData={setFormData}
      // key={images.length}
      requireError={requireError.images}
    />,
    <CarAdditionalInformation
      formData={formData}
      handleChange={handleChange}
      handleChangeSelect={handleChangeSelect}
      requireError={requireError}
      setFormData={setFormData}
      bodyTypesArray={bodyTypesArray}
      featuresArray={featuresArray}
    />
  ];

  const getColors = () => {
    setIsLoading(true);
    getAllData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.CAR_COLORS}`
    )
      .then((response: any) => {
        if (response && response.data && response.status === 'success') {
          let result = response.data.result;
          let temp: any[] = [];
          result.forEach((element: any) => {
            temp.push(element.name);
          });
          setBodyColorArray(temp);
        } else {
          setToastMessage(
            response && response.message ? response.message : 'Network Error'
          );
          setToastType('error');
          setToastOpen(true);
        }
      })
      .then(() => setIsLoading(false));
  };

  const getFeaturesAndBodyTypes = () => {
    // get colors
    getColors();
    // get features
    getAllData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.CAR_FEATURES}`
    )
      .then((response) => {
        if (response && response.status === 'success') {
          let result = response.data.result;
          let featureName = result.map((el: any) => el.name);
          setFeaturesArray(featureName);
        } else {
          setToastMessage(
            response && response.message ? response.message : 'Network Error'
          );
          setToastType('error');
          setToastOpen(true);
        }
      })
      .then(() => setIsLoading(false));
    // get bodyTypes
    getAllData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.BODY_TYPES}`
    )
      .then((response) => {
        if (response && response.status === 'success') {
          let result = response.data.result;
          let bodyTypesName = result.map((el: any) => el.bodyType);
          setBodyTypesArray(bodyTypesName);
        } else {
          setToastMessage(
            response && response.message ? response.message : 'Network Error'
          );
          setToastType('error');
          setToastOpen(true);
        }
      })
      .then(() => setIsLoading(false));
  };

  const profileRedirect = () => {
    history.push('/dashboard/profile');
  };

  const needAssistance = (needed: boolean = false) => {
    if (needed) {
      setIsLoading(true);
      let body = { description: NEED_ASSISTANCE };
      addData(`${API_ENDPOINTS.TICKETS}${API_ENDPOINTS.AD_TICKETS}`, body).then(
        (response) => {
          if (response && response.data && response.data.status === 'success') {
            setToastMessage(response.data.message);
            setToastType('success');
            setToastOpen(true);
            setHelpComingDialog(true);
          } else {
            setToastMessage(
              response && response.message ? response.message : 'Network Error'
            );
            setToastType('error');
            setToastOpen(true);
          }
          setIsLoading(false);
        }
      );
    }
    setAssistanceDialog(false);
  };

  const getData = useCallback(() => {
    setIsLoading(true);
    getAllData(`${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}/${id}`)
      .then((response) => {
        if (response && response.data && response.status === 'success') {
          let result = response.data.result;
          if (result.createdBy._id !== user._id) {
            history.push(pathname.substr(0, pathname.lastIndexOf('/')));
            return;
          }
          let FieldValues = formData;
          FieldValues = {
            city: result.city,
            carModel: result.model,
            carMake: result.make,
            modelVersion: result.version,
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
            sellerType: result.sellerType,
            selectedImage: result.selectedImage
              ? result.selectedImage
              : result.image[0]
              ? result.image[0]
              : '',
            location: { coordinates: { lat: '', long: '' }, address: '' }
          };
          Object.keys(FieldValues).forEach((key) => {
            setFormData({ name: key, value: FieldValues[key] });
          });
          setImages(FieldValues.images);
        } else {
          if (response.data) {
            setToastMessage(response.data.message);
            setToastType('error');
            setToastOpen(true);
            history.push(pathname.substr(0, pathname.lastIndexOf('/')));
          } else {
            setToastMessage('Network Error');
            setToastType('error');
            setToastOpen(true);
            history.push(pathname.substr(0, pathname.lastIndexOf('/')));
          }
        }
      })
      .then(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    if (!user.phone) {
      setPhoneRequiredDialog(true);
    }
    if (id) {
      getFeaturesAndBodyTypes();
      getData();
    } else {
      getFeaturesAndBodyTypes();
    }
  }, [getData, id]);

  const allFalse = (obj: any) => {
    for (var o in obj) {
      if (obj[o]) return false;
    }
    return true;
  };
  const handleDeleteAd = () => {
    setIsLoading(true);
    setDeleteDialog(false);
    deleteData(`${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}/${id}`).then(
      (response) => {
        setIsLoading(false);
        if (response && response.data && response.data.status === 'success') {
          setToastMessage(response.data.message);
          setToastType('success');
          setToastOpen(true);
          history.push(paths.dashboard + '/ads');
        } else {
          if (!response.response) {
            setToastMessage('Network Error');
            setToastType('error');
            setToastOpen(true);
          } else {
            setToastMessage(response.data.message);
            setToastType('error');
            setToastOpen(true);
          }
        }
      }
    );
  };

  const checkValidation = (validationObject: object) => {
    let flagRequireError = Object.assign({}, validationObject);
    Object.keys(validationObject).forEach((key) => {
      if (formData[key] === '' || formData[key] === 'null' || !formData[key]) {
        setRequireError((requiredError) => {
          return { ...requiredError, [key]: true };
        });
        flagRequireError = { ...flagRequireError, [key]: true };
      } else {
        setRequireError((requiredError) => {
          return { ...requiredError, [key]: false };
        });
      }
    });
    return allFalse(flagRequireError);
  };

  const addEditData = async (formBody: any) => {
    let result: any;
    if (id) {
      let carId = id ? '/' + id : '';
      result = await updateFormData(
        `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${carId}`,
        formBody
      );
    } else {
      result = await addFormData(
        `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}`,
        formBody
      );
    }
    return result;
  };

  const formValidated = (stepToValidate: number) => {
    let stepValidatation = stepToValidate;
    if (stepValidatation === 0) {
      if (!checkValidation(initialRequireError)) {
        return false;
      } else {
        let cityData = City.getCitiesOfCountry('PK');
        let cityInformation = cityData?.filter(
          (city: any) => city.name === formData.city
        );
        let provinceInformation: IState | undefined;
        if (cityInformation) {
          provinceInformation = State.getStateByCodeAndCountry(
            cityInformation[0].stateCode,
            'PK'
          );
          setFormData({
            name: 'location',
            value: {
              coordinate: {
                lat: cityInformation[0].latitude,
                long: cityInformation[0].longitude
              },
              address: `${formData.city}, ${provinceInformation?.name}`
            }
          });
          setFormData({ name: 'province', value: provinceInformation?.name });
        }
      }
    } else if (stepValidatation === 1) {
      let secondStepValidated = images.length > 0;
      // console.log(images.length > 0 && images.length < 21);
      setRequireError((requiredError) => {
        return { ...requiredError, images: !secondStepValidated };
      });
      if (!secondStepValidated) {
        return false; //uncomment this line to put make images mandatory/required
      }
    } else {
      if (!checkValidation(initialRequireError_2)) {
        return false;
      }
    }
    return true;
  };

  const appendImages = async (fd: any) => {
    debugger;
    let StringUrls = 0;
    const arrayOfImages = formData.images.filter(
      (item: any) => item !== formData.selectedImage
    );
    if(formData.selectedImage){
      fd.append('selectedImage', formData.selectedImage);
    }else{
      fd.append('selectedImage', arrayOfImages[0]);
      arrayOfImages.splice(0, 1);
    }
    for (let i = 0; i < arrayOfImages.length; i++) {
      debugger;
      if (typeof arrayOfImages[i] === typeof 'string') {
        fd.append('image[' + StringUrls + ']', arrayOfImages[i]);
        StringUrls++;
      } else {
        fd.append('image',arrayOfImages[i])
      }
    }
  };

  const submitForm = async (isPublished: any) => {
    debugger;
    let fd = new FormData();
    fd.append('country', 'Pakistan');
    fd.append('city', formData.city);
    fd.append('province', formData.province);
    fd.append('location.address', formData.location.address);
    fd.append('location.coordinates[0]', formData.location.coordinate.long);
    fd.append('location.coordinates[1]', formData.location.coordinate.lat);
    fd.append('model', formData.carModel);
    fd.append('make', formData.carMake);
    fd.append('version', formData.modelVersion);
    fd.append('transmission', formData.transmission);
    fd.append('assembly', formData.assembly);
    fd.append('registrationCity', formData.registeredIn);
    fd.append('bodyColor', formData.bodyColor);
    fd.append('milage', formData.mileage);
    fd.append('condition', formData.bodyCondition);
    fd.append('description', formData.description);
    fd.append('bodyType', formData.bodyType);
    fd.append('engineType', formData.engineType);
    fd.append('engineCapacity', formData.engineCapacity);
    fd.append('regNumber', formData.registrationNo);
    fd.append('sellerType', formData.sellerType);
    fd.append('modelYear', formData.modelYear);
    for (let i = 0; i < formData.features.length; i++) {
      fd.append('features', formData.features[i]);
    }
    fd.append('price', formData.price);
    fd.append('isPublished', isPublished);
    setIsLoading(true);
    await appendImages(fd);
    console.table(Object.fromEntries(fd));
    addEditData(fd).then((response) => {
      setIsLoading(false);
      if (response && response.data && response.data.status === 'success') {
        setToastMessage(response.data.message);
        setToastType('success');
        setToastOpen(true);
        let fieldValues: any = initialFieldValues;
        Object.keys(fieldValues).forEach((key) => {
          setFormData({ name: key, value: fieldValues[key] });
        });
        setImages([]);
        if (id) {
          history.push(pathname.substr(0, pathname.lastIndexOf('/')));
        }
        setActiveStep(0);
      } else {
        let msg =
          response &&
          response.response &&
          response.response.data &&
          response.response.data.message
            ? response.response.data.message
            : response.response
            ? response.response
            : 'Network Error';
        setToastMessage(msg);
        setToastType('error');
        setToastOpen(true);
      }
    });
  };

  const resetForm = () => {
    let fieldValues: any = initialFieldValues;
    Object.keys(fieldValues).forEach((key) => {
      setFormData({ name: key, value: fieldValues[key] });
    });
    setImages([]);
    history.push('/dashboard/ads');
  };

  const handleStepChange = (step: number) => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
    if (step > activeStep) {
      let error = false;
      for (let i = activeStep; i < step; i++) {
        if (!formValidated(i)) {
          setActiveStep(i);
          error = true;
        }
      }
      if (error) return;
    }
    setActiveStep(step);
  };

  const handleNext = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
    if (!formValidated(activeStep)) {
      return;
    }
    if (activeStep === 2) {
      submitForm(false);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePublish = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
    if (!formValidated(activeStep)) {
      return;
    }
    if (activeStep === 2) {
      submitForm(true);
      return;
    }
  };

  const handleBack = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const lgMdSmPx = (lgMd: string, sm: string) => {
    return size.desktop || size.tablet ? lgMd : sm;
  };

  return {
    handleStepChange,
    resetForm,
    setActiveStep,
    activeStep,
    handleBack,
    handleNext,
    handlePublish,
    formData,
    handleChange,
    images,
    setImages,
    ComponentContent,
    requireError,
    id,
    handleDeleteAd,
    formRef,
    isLoading,
    toastMessage,
    toastOpen,
    setToastOpen,
    toastType,
    setDeleteDialog,
    deleteDialog,
    lgMdSmPx,
    profileRedirect,
    phoneRequiredDialog,
    setPhoneRequiredDialog,
    setHelpComingDialog,
    helpComingDialog,
    assistanceDialog,
    needAssistance,
    setAssistanceDialog
  };
};

export default useAddEditCar;

// White Hatchback Civic Imported for sale in Islamabad.
