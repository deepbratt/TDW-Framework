import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { login } from '../../redux/reducers/authSlice';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import useValidation from '../../Utils/hooks/useValidation';
import { addData } from '../../Utils/API/API';
import { extractError } from '../../Utils/helperFunctions';
import {
  setToastMessage,
  setAlertOpen
} from '../../redux/reducers/responseMessageSlice';

const initialValues: any = {
  data: '',
  password: ''
};

export const useForm = (validateOnChange = false) => {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const { validate, errors, setErrors } = useValidation(values);

  const { USERS, LOGIN } = API_ENDPOINTS;
  const { type, message } = useSelector(
    (state: RootState) => state.responseMessage
  );
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
    if (type === 'success') {
      dispatch(login(responseData));
    }
    //eslint-disable-next-line
  }, [message]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate(values)) {
      let requestBody = {
        data: values.data,
        password: values.password
      };
      setIsLoading(true);
      await addData(USERS + LOGIN, requestBody).then((response) => {
        setIsLoading(false);
        if (response && response.data && response.data.status === 'success') {
          dispatch(setAlertOpen());
          dispatch(
            setToastMessage({
              type: 'success',
              message: response.data.message
            })
          );
          setResponseData(response.data);
          dispatch(
            setToastMessage({
              type: response.data.status,
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
        setIsLoading(false);
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
    isLoading
  };
};
