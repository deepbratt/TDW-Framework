import { useState } from "react";
import { useHistory } from "react-router-dom";
export interface Data {
  model: string;
  cities: string;
  min: string;
  max: string;
}

interface IParams {
  [key: string]: number | string;
}

export const useHooks = () => {
  const history = useHistory();
  const [val, setVal] = useState<Data>({
    model: "",
    cities: "",
    min: "",
    max: "",
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setVal({
      ...val,
      [name]: value,
    });
  };

  //   action filter

  const params: IParams = {
    model: val.model,
    city: val.cities.replace(/ /g, ""),
    min: val.min,
    max: val.max,
  };

  const queries = Object.keys(params)
    .map((filter: string) => {
      if (params[filter] || Number.isInteger(params[filter])) {
        return `${filter}=${params[filter]}`;
      }
      return "";
    })
    .filter((item) => item)
    .join("&");

  const handleNavigation = () => {
    history.push(`/cars?${queries}`);
  };

  return {
    setVal,
    val,
    handleChange,
    handleNavigation,
  };
};
