import { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addData } from '../../Utils/API/API';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value
  };
};

const initialFieldValues = {
  email: '',
  phone: '',
  description: ''
};

const initialRequireError = {
  email: false,
  phone: false,
  description: false
};

const useTechHelpInputDialog = (
  setHelpComingDialog: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setToastType: React.Dispatch<React.SetStateAction<string>>,
  setToastMessage: React.Dispatch<React.SetStateAction<string>>,
  handleRejection: () => void
) => {
  const helperText = 'This field is required';
  const [formData, setFormData] = useReducer(formReducer, initialFieldValues);
  const { user } = useSelector((state: RootState) => state.auth);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const [requireError, setRequireError] = useState(initialRequireError);

  // functions
  const handleChange = (event: any) => {
    setFormData({
      name: event.target.name,
      value:
        event.target.name === 'image'
          ? event.target.files[0]
          : event.target.value
    });
    event.target.value = event.target.name === 'image' && null;
  };

  const allFalse = (obj: any) => {
    for (var o in obj) {
      if (obj[o]) return false;
    }
    return true;
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

  // APIs
  const handleSubmit = () => {
    if (!checkValidation(initialRequireError)) {
      return false;
    }
    let body = {
      email: formData.email,
      phone: formData.phone,
      description: formData.description
    };
    setIsLoading(true)
    handleRejection()
    addData(`${API_ENDPOINTS.TICKETS}${API_ENDPOINTS.TECH_TICKETS}`, body).then(response=>{
        if(response && response.data && response.data.status==="success"){
            setToastMessage(response.data.message);
            setToastType("success");
            setToastOpen(true);
            setHelpComingDialog(true)
        }else{
            let msg = response.response
            ? response.response
            : response.message
            ? response.message
            : "Network Error";
          setToastMessage(msg);
          setToastType("error");
          setToastOpen(true);
        }
        setIsLoading(false)
    })
  };

  // useEffects

  useEffect(() => {
    if (isLoggedIn && user) {
      setFormData({ name: 'email', value: user.email });
      setFormData({ name: 'phone', value: user.phone });
    }
  }, [isLoggedIn, user]);

  // return
  return {
    formData,
    handleChange,
    isLoggedIn,
    requireError,
    handleSubmit,
    helperText
  };
};

export default useTechHelpInputDialog;
