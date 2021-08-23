import { useState } from "react";
import moment from "moment";
import { numberReg } from "../../Utils/sidebarText";
import {Colors} from "../../Utils/color.constants"
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
const useHooks = () => {
  const {red} = Colors
  const {user} = useSelector((state:RootState)=>state.auth)
  // const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [date, setDate] = useState("");
  const [val, setVal] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender || "",
    country: user.country || "",
    city: user.city || "",
    userName: user.username || "",
    email: user.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [number, setNumber] = useState("");

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setVal({
      ...val,
      [name]: value,
    });
  };

  const NumericOnly = (e: any) => {
    let preval = e.target.value;
    if (e.target.value === "" || numberReg.test(e.target.value))
      return setNumber(preval);
    else e.target.value = preval.substring(0, preval.length - 1);
  };

  const handleChangeDate = (e: any) => {
    setDate(e.target.value);
  };

  const errorMessage = (err: string) => {
    return (
      <div style={{ color: red, margin: "15px 0px 0px 10px" }}>{err}</div>
    );
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
  };
};

export default useHooks;
