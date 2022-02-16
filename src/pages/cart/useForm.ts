import { useState } from 'react';
import useValidation from '../../Utils/hooks/useValidation';

const initialValues: any = {
  firstName: '',
  lastName: '',
  address: '',
  mobile: '',
  city: '',
  province: '',
  zipCode: ''
};

export const useForm = (validateOnChange = false) => {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState(initialValues);
  const { validate, errors, setErrors } = useValidation(values);

  const handleNext = () => {
    if (
      activeStep === 1 &&
      validate({ ...values, mobile: '+92' + values.mobile })
    ) {
      handleSubmit();
      console.log('Submitted');
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } 
    if (activeStep !== 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value[0] !== '0' && value[0] !== '+') {
      setValues({
        ...values,
        [name]: value
      });
      if (validateOnChange) validate({ [name]: '+92' + value }, 'mobile');
    }
  };

  const resetForm = () => {
    setValues({
      firstName: '',
      lastName: '',
      address: '',
      mobile: '',
      city: '',
      province: '',
      zipCode: ''
    });
    setErrors({});
  };

  const handleSubmit = async () => {
    console.log('Submitted');
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    activeStep,
    handleNext,
    handleBack,
    handleReset,
    setActiveStep,
    handleInputChange,
    handlePhoneInputChange,
    resetForm,
    validate,
    handleSubmit
  };
};
