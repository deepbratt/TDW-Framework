import { useState } from "react";
import { IData, MoreOptions } from "../../../Utils/types";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setQueryParams } from "../../../../../redux/reducers/queryParamsSlice";
import { RootState } from "../../../../../redux/store";
const useHook = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const {queryParams} = useSelector((state:RootState)=>state.queryParams)
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    model: "",
    city: "",
    min: 0,
    max: 0,
    area: "",
    version: "",
    yearFrom: "",
    yearTo: "",
    engine: "",
    engineCapacityFrom: 0,
    engineCapacityTo: 0,
    mileageFrom: "0",
    mileageTo: "0",
    allBody: "",
    allColors: "",
    registered: "",
    assemblyTypes: "",
    transmissionTypes: "",
    adWithPics: "",
    sellerType: "",
    adTypes: "",
  });
  const [moreOp, setMoreOp] = useState<MoreOptions>({
    allBody: "",
    allColors: "",
    registered: "",
    assemblyTypes: "",
    transmissionTypes: "",
    adWithPics: "",
    sellerType: "",
    adTypes: "",
  });


  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };




  const handleFilters = (items : IData): void => {
    let combined = {...data, ...moreOp}
    dispatch(setQueryParams(combined))
    history.push('/cars')
  };

  const handleMoreChange = (e: any) => {
    const { value, name } = e.target;
    let val = value;
    setMoreOp({
      ...moreOp,
      [name]: val,
    });
    setData({
      ...data,
      [name]: val,
    })
  };

  const handleAdvanceFilters = (moreOptions : any , items : any) => {
    handleFilters(items)
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
