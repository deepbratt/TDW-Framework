import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import { addData } from '../../Utils/API/API';
import useValidation from '../../Utils/hooks/useValidation';
import { extractError } from '../../Utils/helperFunctions';
import { fieldNames } from '../../Utils/constants/formsConstants';
import { isTypeAlphaSpace } from '../../Utils/regex';
import {
  setToastMessage,
  setAlertOpen
} from '../../redux/reducers/responseMessageSlice';

const initialValues: any = {
  firstName: '',
  lastName: '',
  username: '',
  method: '',
  password: '',
  confirmPassword: ''
};

export const useForm = (validateOnChange = true) => {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [continueWith, setContinueWith] = useState('');
  const { validate, error, errors, setErrors } = useValidation(values);

  const { USERS, SIGNUP } = API_ENDPOINTS;
  const dispatch = useDispatch();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContinueWith(event.target.value);
    setValues({
      ...values,
      method: ''
    });
    setErrors({
      ...errors,
      method: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === fieldNames.firstName && !isTypeAlphaSpace(value)) {
      return;
    }

    setValues({
      ...values,
      [name]: value
    });
    if (name === 'confirmPassword') {
      if (validateOnChange)
        validate({ [name]: value, password: values.password }, continueWith);
    } else {
      if (validateOnChange) validate({ [name]: value }, continueWith);
    }
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value[0] !== '0' && value[0] !== '+') {
      let newValues = values;
      newValues.method = value;
      setValues(newValues);
      if (validateOnChange) validate({ [name]: '+92' + value }, continueWith);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let newValues = {
      firstName: values.firstName,
      lastName: values.lastName,
      method: '+92' + values.method,
      username: values.username,
      password: values.password,
      confirmPassword: values.confirmPassword
    };

    if (validate(newValues, continueWith)) {
      let requestBody = {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        data: continueWith === 'mobile' ? '+92' + values.method : values.method,
        password: values.password,
        passwordConfirm: values.confirmPassword
      };
      setIsLoading(true);
      await addData(USERS + SIGNUP, requestBody)
        .then((response) => {
          setIsLoading(false);
          if (response && response.data && response.data.status === 'success') {
            dispatch(setAlertOpen());
            dispatch(
              setToastMessage({
                type: 'success',
                message: response.data.message
              })
            );
          } else {
            dispatch(setAlertOpen());
            let extractedMsg = extractError(response);
            dispatch(
              setToastMessage({
                type: extractedMsg.status,
                message: extractedMsg.message
              })
            );
          }
        })
        .catch((error) => {
          setIsLoading(false);
          dispatch(setAlertOpen());
          let extractedMsg = extractError(error);
          dispatch(
            setToastMessage({
              type: extractedMsg.status,
              message: extractedMsg.message
            })
          );
        });
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handlePhoneInputChange,
    resetForm,
    validate,
    handleSubmit,
    isLoading,
    continueWith,
    handleRadioChange
  };
};
