import { useEffect, useState } from 'react';
import useValidation from '../../Utils/hooks/useValidation';

export interface IProductInfo {
  title: string;
  city: string;
  category: string;
  subCategory: string;
  listingPrice: string;
  sellingPrice: string;
  description: string;
  brand: string;
  make: string;
  model: string;
  modelNo: string,
  modelYear: string;
  color: string;
  additionalDescription: string;
}

const initialValues: IProductInfo = {
  title: '',
  city: '',
  category: '',
  subCategory: '',
  listingPrice: '',
  sellingPrice: '',
  description: '',
  brand: '',
  make: '',
  model: '',
  modelNo: '',
  modelYear: '',
  color: '',
  additionalDescription: ''
};

export const useForm = (validateOnChange = false) => {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState(initialValues);
  const [images, setImages] = useState<Array<any>>([]);
  const { validate, errors, setErrors } = useValidation(values);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

  const handleImageCapture = (e: any) => {
    e.preventDefault();
    let oneMb = 1024 * 1024;
    let temp = [...images];
    let imageFiles = e.target.files;
    let sizeError = false;
    let arrayLengthError = false;
    for (let i = 0; i < imageFiles.length; i++) {
      let imageSize = imageFiles[i].size;
      if (imageSize > 5 * oneMb) {
        sizeError = true;
        break;
      } else {
        if (temp.length > 19) {
          arrayLengthError = true;
          break;
        }
        temp.push(imageFiles[i]);
      }
    }
    setImages(temp);
  }

  const removeImage = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    let temp = [...images];
    temp.splice(index, 1);
    setImages(temp);
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append('title', values.title);
    formData.append('city', values.city);
    formData.append('category', values.category);
    formData.append('subCategory', values.subCategory);
    formData.append('listingPrice', values.listingPrice);
    formData.append('sellingPrice', values.sellingPrice);
    formData.append('description', values.description);
    formData.append('brand', values.brand);
    formData.append('make', values.make);
    formData.append('model', values.model);
    formData.append('modelNo', values.modelNo);
    formData.append('modelYear', values.modelYear);
    formData.append('color', values.color);
    formData.append('additionalDescription', values.additionalDescription);
    // for (let i = 0; i < images.length; i++) {
    //   if (typeof images[i] === typeof 'string') {
    //     fd.append('image[' + StringUrls + ']', images[i]);
    //     StringUrls++;
    //   } else {
    //     fd.append('image', images[i]);
    //   }
    // }
    console.table(Object.fromEntries(formData));
    handleNext();
  }

  const resetForm = () => {
    setValues({
      title: '',
      city: '',
      category: '',
      subCategory: '',
      listingPrice: '',
      sellingPrice: '',
      description: '',
      brand: '',
      make: '',
      model: '',
      modelNo: '',
      modelYear: '',
      color: '',
      additionalDescription: ''
    });
    setErrors({});
  };

  return {
    values,
    setValues,
    images,
    removeImage,
    errors,
    setErrors,
    activeStep,
    handleNext,
    handleBack,
    handleReset,
    setActiveStep,
    handleInputChange,
    handleImageCapture,
    handlePhoneInputChange,
    resetForm,
    validate,
    handleSubmit
  };
};
