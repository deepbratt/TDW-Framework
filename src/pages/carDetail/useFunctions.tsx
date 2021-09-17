import { useState } from 'react';
import { getSingleData, addToFav } from '../../Utils/hooks/actions';
import { ICarCard } from '../../layout/Sections/Utils/types1';
import { getSingleCar } from '../../Utils/hooks/endpoints';
import { useEffect } from 'react';
import { getAllData } from '../../Utils/API/API';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';

const Actions = (Id?: string | '') => {
  const [isLoading, setIsLoading] = useState(false);
  const [obj, setObj] = useState<ICarCard>();
  const [open, setOpen] = useState(false);
  const [featuresArray, setFeaturesArray] = useState<Array<any>>([]);
  const [bodyTypesArray, setBodyTypesArray] = useState<Array<any>>([]);
  const [carFeatures, setCarFeatures] = useState<Array<any>>([]);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  useEffect(() => {
    if (Id) {
      getFeatures();
      loadSingleData(getSingleCar, Id);
    }
  }, []);

  useEffect(() => {
    console.log(featuresArray.length > 0 && obj)
    console.log(obj)
    console.log(featuresArray.length > 0)
    if (featuresArray.length > 0 && obj) {
      makeFeatureArray();
    }
  }, [featuresArray, obj]);

  const makeFeatureArray = () => {
    let temp: Array<any> = [];
    if (obj) {
      temp = featuresArray.filter((item: any) =>
        obj.features?.some((el: any) => item.name === el)
      );
    }
    console.log('temp', temp)
    setCarFeatures(temp);
  };

  const getFeatures = () => {
    getAllData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.CAR_FEATURES}`
    )
      .then((response) => {
        console.log("featressss", response)
        if (response && response.data && response.status === 'success') {
          let result = response.data.result;
          // let featureName = result.map((el: any) => el.name);
          setFeaturesArray(result);
        } else {
          let msg = !response ? "Network Error" : response.response
          ? response.response
          : response.message
          ? response.message
          : 'Network Error';
          console.log("Error", msg)
          setOpen(true);
          setResponseMessage({
            status: 'error',
            message: msg
          });
        }
      })
      .then(() => setIsLoading(false));
  };

  const loadSingleData = async (url: string, Id: string) => {
    setIsLoading(true);
    getAllData(`${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}/${Id}`)
      .then((response) => {
        if (response && response.data && response.status === 'success') {
          setObj(response.data.result);
        } else {
          console.log('error', response);
          setOpen(true);
          let msg =
            response && response.message
              ? response.message
              : 'Something went wrong!!';
          setResponseMessage({
            status: 'error',
            message: msg
          });
        }
      })
      .then(() => setIsLoading(false));
  };

  const addFavs = async (url: string, Id: string) => {
    setIsLoading(true);
    setOpen(false);
    await addToFav(url, Id)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 'fail') {
          setOpen(true);
          setResponseMessage({
            status: 'error',
            message: response.message
          });
        } else {
          setOpen(true);
          setResponseMessage({
            status: 'success',
            message: response.message
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setOpen(true);
        setResponseMessage({
          status: 'error',
          message: error.message
        });
      });
  };

  return {
    responseMessage,
    setResponseMessage,
    loadSingleData,
    addFavs,
    isLoading,
    open,
    setOpen,
    obj,
    featuresArray,
    bodyTypesArray,
    carFeatures
  };
};

export default Actions;
