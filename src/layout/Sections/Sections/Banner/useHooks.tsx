import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setQueryParams } from "../../../../redux/reducers/queryParamsSlice";
import { RootState } from "../../../../redux/store";
export interface Data {
  model: string;
  city: string;
  min: string;
  max: string;
}

interface IParams {
  [key: string]: number | string;
}

export const useHooks = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const {queryParams} = useSelector((state:RootState)=>state.queryParams)
  const [val, setVal] = useState<Data>({
    model: "",
    city: "",
    min: "",
    max: "",
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setVal({
      ...val,
      [name]: value,
    });
    dispatch(setQueryParams({
      ...val,
      [name]: value,
    }))
  };


  const handleNavigation = () => {
    history.push(`/cars`);
  };

  return {
    setVal,
    val,
    handleChange,
    handleNavigation,
  };
};
