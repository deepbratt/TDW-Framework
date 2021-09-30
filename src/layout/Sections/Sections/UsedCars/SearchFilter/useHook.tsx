import { useState, useEffect } from 'react';
import { IData, MoreOptions } from '../../../Utils/types';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setQueryParams } from '../../../../../redux/reducers/queryParamsSlice';

const useHook = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    make: '',
    city: '',
    min: '',
    max: '',
    area: '',
    version: '',
    yearFrom: '',
    yearTo: '',
    engine: '',
    engineCapacityFrom: '',
    engineCapacityTo: '',
    mileageFrom: '',
    mileageTo: '',
    allBody: '',
    allColors: '',
    registered: '',
    assemblyTypes: '',
    transmissionTypes: '',
    adWithPics: '',
    sellerType: '',
    adTypes: ''
  });
  const [moreOp, setMoreOp] = useState<MoreOptions>({
    allBody: '',
    allColors: '',
    registered: '',
    assemblyTypes: '',
    transmissionTypes: '',
    adWithPics: true,
    sellerType: '',
    adTypes: ''
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleFilters = () => {
    let combined = { ...data, ...moreOp };
    console.log('combined', combined);
    dispatch(setQueryParams(combined));
    history.push('/cars');
  };

  const handleMoreChange = (e: any) => {
    const { value, name } = e.target;
    let val = value;
    setMoreOp({
      ...moreOp,
      [name]: val
    });
    setData({
      ...data,
      [name]: val
    });
  };

  useEffect(() => {
    console.log('Data', data);
  }, [data]);

  const handleAdvanceFilters = () => {
    handleFilters();
  };

  return {
    isChecked,
    setIsChecked,
    data,
    setData,
    moreOp,
    setMoreOp,
    handleFilters,
    handleChange,
    handleAdvanceFilters,
    handleMoreChange
  };
};

export default useHook;
