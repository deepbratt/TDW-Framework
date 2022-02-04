import { useState } from 'react';
import { addToFav } from '../../Utils/hooks/actions';
import { ICarCard } from '../../Utils/interfaces/products.interface';
import {
  addToFavs,
  getSingleCar,
  removeFavs
} from '../../Utils/hooks/endpoints';
import { useEffect } from 'react';
import { getAllData, updateData, deleteData } from '../../Utils/API/API';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import useShortListCars from '../../Utils/hooks/useShortListCars';
import { paths } from '../../routes/paths';
import history from '../../routes/history';

const Actions = (Id?: string | '') => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { shortlistCars } = useSelector(
    (state: RootState) => state.shortlistCars
  );
  const { removeShortListItem, shortListItem } = useShortListCars();
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(false);
  const [signinModal, setSigninModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [obj, setObj] = useState<ICarCard>();
  const [open, setOpen] = useState(false);
  const [featuresArray, setFeaturesArray] = useState<Array<any>>([]);
  const [carFeatures, setCarFeatures] = useState<Array<any>>([]);
  const [isSold, setIsSold] = useState(obj?.isSold);
  const [isActive, setIsActive] = useState(obj?.active);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [toastType, setToastType] = useState('');
  const [breadCrumbData, setBreadCrumData] = useState([
    {
      path: paths.cars,
      label: 'Products'
    },
    {
      path: paths.carDetail + '/' + Id,
      label: `Product Details`
    }
  ]);
  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  useEffect(() => {
    if (Id) {
      getFeatures();
      setObj(undefined);
      loadSingleData(getSingleCar, Id);
    }
  }, [user]);

  useEffect(() => {
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
    setCarFeatures(temp);
  };

  const getFeatures = () => {
    getAllData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.CAR_FEATURES}`
    )
      .then((response) => {
        if (response && response.data && response.status === 'success') {
          let result = response.data.result;
          // let featureName = result.map((el: any) => el.name);
          setFeaturesArray(result);
        } else {
          let msg = !response
            ? 'Network Error'
            : response.response
            ? response.response
            : response.message
            ? response.message
            : 'Network Error';
          console.error(msg);
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
          setIsFavorite(response.data.result.isFav);
          setIsActive(response.data.result.active);
          setIsSold(response.data.result.isSold);
        } else {
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

  const toggleSold = (soldHere: boolean = false) => {
    let soldUnsold = isSold
      ? API_ENDPOINTS.MARK_UNSOLD
      : API_ENDPOINTS.MARK_SOLD;
    if (!isSold && soldHere) {
      // api to add the car amount in sold on tezdealz collection
    }
    if (openDialog) {
      setOpenDialog(false);
    }
    let requestBody = { soldByUs: soldHere };
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${soldUnsold}/${obj?._id}`,
      !isSold ? requestBody : undefined
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setIsSold(!isSold);
        setToastMessage(response.data.message);
        setToastType('success');
      } else {
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };

  const toggleActive = () => {
    let activeInactive = isActive
      ? API_ENDPOINTS.MARK_INACTIVE
      : API_ENDPOINTS.MARK_ACTIVE;
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${activeInactive}/${obj?._id}`
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setIsActive(!isActive);
        setToastMessage(response.data.message);
        setToastType('success');
      } else {
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };

  const publishAd = () => {
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.PUBLISH_AD}${obj?._id}`
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setToastMessage(response.data.message);
        setToastType('success');
      } else {
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };

  const deleteAd = () => {
    setIsLoading(true);
    deleteData(`${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}/${obj?._id}`).then(
      (response: any) => {
        if (response && response.data && response.data.status === 'success') {
          setToastMessage(response.data.message);
          setToastType('success');
          history.push(paths.cars);
        } else {
          setToastMessage(response.message);
          setToastType('error');
        }
        setOpenToast(true);
        setIsLoading(false);
      }
    );
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

  const handleAddToShortListItem = (item: any) => {
    setOpen(true);
    let shortListResponse = shortListItem(item);
    setResponseMessage(shortListResponse);
  };
  const handleRemoveShortListItem = (itemId: string) => {
    setOpen(true);
    let shortListResponse = removeShortListItem(itemId);
    setResponseMessage(shortListResponse);
  };

  const toggleFavourite = (itemId: string = '') => {
    if (user._id) {
      addFavs(isFavorite ? removeFavs : addToFavs, itemId);
      setIsFavorite(!isFavorite);
    } else {
      setSigninModal(true);
    }
  };

  const toggleShortListCar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (shortlistCars.filter((item) => item._id === obj?._id).length > 0) {
      handleRemoveShortListItem(obj?._id ? obj._id : '');
    } else {
      handleAddToShortListItem(obj);
    }
  };

  useEffect(() => {
    if (obj) {
      let newBreadCrumData = [...breadCrumbData];
      newBreadCrumData[
        breadCrumbData.length - 1
      ].label = `${obj.make} ${obj.model} ${obj.modelYear}`;
      setBreadCrumData(newBreadCrumData);
    }
    // eslint-disable-next-line
  }, [obj]);

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
    carFeatures,
    signinModal,
    setSigninModal,
    isFavorite,
    setIsFavorite,
    toggleFavourite,
    toggleShortListCar,
    breadCrumbData,
    toggleActive,
    toggleSold,
    toastType,
    isSold,
    isActive,
    setOpenToast,
    toastMessage,
    openToast,
    publishAd,
    deleteAd
  };
};

export default Actions;
