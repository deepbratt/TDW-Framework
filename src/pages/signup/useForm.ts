import { useState, useEffect } from 'react';
import { handleGoogleAuth } from '../../Utils/API/API';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import useApi from '../../Utils/hooks/useApi';
import { addData } from '../../Utils/API/API';
import useValidation from '../../Utils/hooks/useValidation';
import { extractError } from '../../Utils/helperFunctions';

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
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [continueWith, setContinueWith] = useState('');
  const { validate, errors, setErrors } = useValidation(values);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  const { addRequest } = useApi();
  const { USERS, GOOGLE_AUTH, SIGNUP } = API_ENDPOINTS;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContinueWith(event.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
    if (name === 'confirmPassword') {
      if (validateOnChange)
        validate(
          { [name]: value, password: values.password },
          continueWith
        );
    } else {
      if (validateOnChange) validate({ [name]: value }, continueWith);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleGoogleSubmit = async () => {
    await handleGoogleAuth().then(async (response) => {
      let requestBody = {
        googleId: response.id,
        displayName: response.name,
        firstName: response.given_name,
        lastName: response.family_name,
        image: response.picture,
        email: response.email
      };
      console.log('request body', requestBody);
      await addRequest(USERS + GOOGLE_AUTH, requestBody);
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate(values, continueWith)) {
      let requestBody = {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        data: values.method,
        password: values.password,
        passwordConfirm: values.confirmPassword
      };
      setIsLoading(true);
      console.log('requestBody', requestBody);
      await addData(USERS + SIGNUP, requestBody)
        .then((response) => {
          setIsLoading(false);
          if (response && response.data && response.data.status === 'success') {
            setAlertOpen(true);
            setResponseMessage({
              status: response.data.status,
              message: response.data.message
            });
          } else {
            setAlertOpen(true);
            setResponseMessage(extractError(response));
          }
        })
        .catch((error) => {
          setIsLoading(false);
          setAlertOpen(true);
          setResponseMessage({
            status: error.status,
            message: error.message
          });
        });
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    validate,
    handleSubmit,
    handleGoogleSubmit,
    isLoading,
    alertOpen,
    setAlertOpen,
    responseMessage,
    continueWith,
    handleRadioChange
  };
};
