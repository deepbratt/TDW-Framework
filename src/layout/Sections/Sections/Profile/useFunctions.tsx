import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, updateUserData } from '../../../../redux/reducers/authSlice';
import {
  updateUser,
  accountVerify,
  deleteData,
  getData
} from '../../../../Utils/hooks/actions';

const Actions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState(false);
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
      });
  };

  const updateProfile = async (
    url: string,
    data: any,
    date: any,
    Image: any
  ) => {
    setIsLoading(true);
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
    if (data.date) {
      formData.append('dateOfBirth', data.date);
    }

    await updateUser(url, formData)
      .then((response) => {
        console.log('UpdateUserFunction', response);

        if (response.status === 'success') {
          setIsLoading(false);
          setOpen(true);
          setResponseMessage({
            status: 'success',
            message: response.message
          });
          console.log('[Login Dispatcher]', response.result);
          dispatch(updateUserData({ data: response.result }));
        } else {
          setOpen(true);
          setResponseMessage({
            status: 'error',
            message: response.message
          });
        }
      })
      .catch((error) => {
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
        if (response.status === 'success') {
          setIsLoading(false);
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
        setOpen(true);
        setResponseMessage({
          status: 'error',
          message: error.message
        });
      });
  };

  const changeNumber = async (
    url: string,
    number: any,
    setChangeToVerification: any
  ) => {
    setIsLoading(true);

    await updateUser(url, { phone: number })
      .then((response) => {
        if (response.status === 'success') {
          setIsLoading(false);
          setChangeToVerification(false);
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
        if (response.status === 'success') {
          setIsLoading(false);
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
        if (response.status === 'success') {
          let filteredArray = data.filter((item: any) => item._id !== id);
          setIsLoading(false);
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
    changeNumber,
    accountVerification,
    responseMessage,
    open,
    isLoading,
    setOpen,
    loadAllData,
    data
  };
};

export default Actions;
