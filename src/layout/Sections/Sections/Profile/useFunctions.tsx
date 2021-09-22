import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../../redux/reducers/authSlice';
import { getAllData } from '../../../../Utils/API/API';
import { API_ENDPOINTS } from '../../../../Utils/API/endpoints';
import {
  updateUser,
  accountVerify,
  deleteData,
  getData
} from '../../../../Utils/hooks/actions';

const Actions = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const dataLimit = 10;
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [responseMessage, setResponseMessage] = useState({
    status: '',
    message: ''
  });

  const loadAllData = async (url: string, param: number | string) => {
    setIsLoading(true);
    await getData(url, param)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 'success') {
          setData(response.data.result);
        } else {
          return 'error';
        }
      })
      .catch((error: any) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const fetchData = (endpoint: string ,pageValue = page) => {
    setIsLoading(true)
    getAllData(
      `${endpoint}`
    ).then((response) => {
      setIsLoading(false)
      if (response && response.data && response.status === 'success') {
        window.scrollTo(0, 0);
        setPage(pageValue);
        let totalPages = Math.ceil(response.totalCount / dataLimit);
        setPageCount(totalPages);
        setData(response.data.result);
      } else {
        let msg = response.message
          ? response.message
          : response.response
          ? response.response
          : 'Network Error';
        setOpen(true);
        setResponseMessage({ message: msg, status: 'error' });
      }
    });
  };

  const updateProfile = async (
    url: string,
    data: any,
    date: any,
    Image: any
  ) => {
    setIsLoading(true);
    console.log(date);
    var formData = new FormData();
    if (Image) {
      formData.append('image', Image);
    }
    if (data.firstName) {
      formData.append('firstName', data.firstName);
    }
    if (data.lastName) {
      formData.append('lastName', data.lastName);
    }
    if (data.gender) {
      formData.append('gender', data.gender);
    }
    if (data.city) {
      formData.append('city', data.city);
    }
    if (date) {
      formData.append('dateOfBirth', date + '');
    }

    await updateUser(url, formData)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        if (response && response.status === 'success') {
          setOpen(true);
          setResponseMessage({
            status: 'success',
            message: response.message
          });
          dispatch(updateUserData({ data: response.result }));
        } else {
          console.log('error message');
          setOpen(true);
          setResponseMessage({
            status: 'error',
            message: response.message
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('catch', error);
        setOpen(true);
        setResponseMessage({
          status: 'error',
          message: error.message
        });
      });
  };

  const changePassword = async (url: string, data: any) => {
    setIsLoading(true);

    await updateUser(url, {
      passwordCurrent: data.currentPassword,
      password: data.newPassword,
      passwordConfirm: data.confirmPassword
    })
      .then((response) => {
        setIsLoading(false);
        if (response.status === 'success') {
          console.log(response);
          setOpen(true);
          setResponseMessage({
            status: 'success',
            message: response.message
          });
        } else {
          setOpen(true);
          console.log(response);
          setResponseMessage({
            status: 'error',
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

  const changeNumberOrEmail = async (
    url: string,
    data: any,
    setChangeToVerification: any
  ) => {
    setIsLoading(true);

    await updateUser(url, data)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 'success') {
          setChangeToVerification(false);
          dispatch(updateUserData({ data: response.result }));
          setOpen(true);
          setResponseMessage({
            status: 'success',
            message: response.message
          });
        } else {
          setOpen(false);
          setChangeToVerification(true);
          setResponseMessage({
            status: 'error',
            message: response.message
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setOpen(true);
        setChangeToVerification(false);
        setResponseMessage({
          status: 'error',
          message: error.message
        });
      });
  };

  const accountVerification = async (
    url: string,
    token: string,
    setCheck: any
  ) => {
    setIsLoading(true);

    await accountVerify(url, token)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 'success') {
          setCheck(true);
          setOpen(true);
          setResponseMessage({
            status: 'success',
            message: response.message
          });
        } else {
          setOpen(true);
          setCheck(false);
          setResponseMessage({
            status: 'error',
            message: response.message
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setOpen(true);
        setCheck(false);
        setResponseMessage({
          status: 'error',
          message: error.message
        });
      });
  };

  const removeData = async (url: string, id: string) => {
    setIsLoading(true);
    setOpen(false);
    await deleteData(url, id)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 'success') {
          let filteredArray = data.filter((item: any) => item._id !== id);
          setData(filteredArray);
          setOpen(true);
          setResponseMessage({
            status: 'success',
            message: response.message
          });
        } else {
          setOpen(true);
          setResponseMessage({
            status: 'error',
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
    removeData,
    updateProfile,
    changePassword,
    changeNumberOrEmail,
    accountVerification,
    responseMessage,
    open,
    isLoading,
    setOpen,
    loadAllData,
    data,
    fetchData,
    pageCount,
    page,
    dataLimit
  };
};

export default Actions;
