import PinInput from "react-pin-input";
import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import CustomTitle from "../../../../components/CustomTitle/CustomTitle";
import CustomButton from "../../../../components/CustomButton";
import { Colors } from "../../Utils/color.constants";
import { useStyles } from "./useStyles";
import {
  title,
  message,
  code,
  buttonText,
  mainBtn,
  err,
  pin,
  num,
  regex,
  icon
} from "../../Utils/Text";

const VerificationContext = () => {
  const [val, setVal] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { white, grey } = Colors;
  const { root, Icon, container, btn, text } = useStyles();
  const number = Number(val);
  const onSubmit = (): void => {
    if (!val || val === "" || val === undefined) {
      setError(true);
    } else {
      console.log(typeof number);
      setError(false);
    }
  };


  return (
        <>
          <Grid className={root} item  xs={12}>
            <img className={Icon} src={icon} alt="icon" />
            <Grid item xs={12}>
              <CustomTitle color={white} text={title} />
            </Grid>
          </Grid>
          <Grid className={container} item xs={12}>
            <Typography variant="subtitle1">
              {message} <span style={{ fontWeight: "bolder" }}>{num}</span>
            </Typography>
            <PinInput
              length={4}
              onChange={(value : string) => setVal(value)}
              inputMode="numeric"
              style={{ padding: "10px" , marginBottom: "10px"}}
              inputStyle={!error ? pin : err}
              autoSelect={true}
              regexCriteria={regex}
            />
            <CustomButton onClick={() => onSubmit()}>{mainBtn}</CustomButton>
            <Typography
              style={{ color: grey, marginTop: "20px" }}
              variant="subtitle1"
            >
              {code}
              <button  className={btn}>
                <span className={text}>{buttonText}</span>
              </button>
            </Typography>
          </Grid>
        </> 
  );
};

export default VerificationContext;
