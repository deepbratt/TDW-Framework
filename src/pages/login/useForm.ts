import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/authSlice';
import { handleGoogleAuth } from '../../Utils/API/API';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import useValidation from '../../Utils/hooks/useValidation';
import { addData } from '../../Utils/API/API';
import { extractError } from '../../Utils/helperFunctions';

const initialValues: any = {
  data: '',
  password: ''
};

export const useForm = (validateOnChange = false) => {
  const [values, setValues] = useState(initialValues);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const { validate, errors, setErrors } = useValidation(values);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  const { USERS, LOGIN } = API_ENDPOINTS;
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  useEffect(() => {
    if (responseMessage.status === 'success') {
      dispatch(login(responseData));
    }
    //eslint-disable-next-line
  }, [responseMessage]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate(values)) {
      let requestBody = {
        data: values.data,
        password: values.password
      };
      setIsLoading(true);
      await addData(USERS + LOGIN, requestBody).then((response) => {
        console.log('data', response);
        console.log('response.data', response.data);
        console.log('response.message', response.message);
        console.log('response.response', response.response);
        setIsLoading(false);
        if (response && response.data && response.data.status === 'success') {
          setAlertOpen(true);
          setResponseData(response.data);
          setResponseMessage({
            status: response.data.status,
            message: response.data.message
          });
        } else {
          setAlertOpen(true);
          setResponseMessage(extractError(response));
        }
        setIsLoading(false);
      });
    }
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
    });
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
    responseMessage
  };
};
