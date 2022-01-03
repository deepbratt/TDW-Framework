import { useEffect, useState } from 'react';
import moment from 'moment';
import { Colors } from '../../Utils/color.constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const useHooks = () => {
  const { red } = Colors;
  const { user } = useSelector((state: RootState) => state.auth);
  // const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [date, setDate] = useState(
    user.dateOfBirth
      ? moment(new Date(user.dateOfBirth)).format('YYYY-MM-DD')
      : ''
  );
  const [Img, setImg] = useState<string>(user.image ? user.image : '');
  const [val, setVal] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender || '',
    country: user.country || '',
    city: user.city || '',
    userName: user.username || '',
    email: user.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    about: user.about ? user.about : '',
    description: user.description ? user.description : '',
  });
  const [number, setNumber] = useState<string | number | any>();

  useEffect(() => {
    setNumber(user.phone ? user.phone.slice(3) : '');
  }, [user.phone]);
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setVal({
      ...val,
      [name]: value
    });
  };

  const NumericOnly = (e: any) => {
    let preval = e.target.value;
    if (
      preval === 'e' ||
      preval.length === 11 ||
      (preval.length === 1 && parseInt(preval) === 0)
    ) {
      return;
    }
    setNumber(preval);
  };

  const handleChangeDate = (e: any) => {
    setDate(e.target.value);
  };

  const errorMessage = (err: string) => {
    return <div style={{ color: red, margin: '15px 0px 0px 10px' }}>{err}</div>;
  };

  return {
    val,
    handleChange,
    handleChangeDate,
    date,
    number,
    NumericOnly,
    errorMessage,
    setVal,
    setNumber,
    Img,
    setImg
  };
};

export default useHooks;
