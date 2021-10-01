import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import PinInput from "react-pin-input";
import { useState } from "react";
import CustomButton from "../../../../../components/CustomButton";
import {
  num,
  message,
  pin,
  err,
  code,
  buttonText,
  mainBtn,
  regex,
  heading,
} from "../../../Utils/Text";
import { Colors } from "../../../Utils/color.constants";
import { useStyles } from "../../PinVerfication/useStyles";
import Actions from "../useFunctions";
import { verifyNumber } from "../../../../../Utils/hooks/endpoints";
import Toast from "../../../../../components/Toast";

const Verification = ({slicedNumber} : any) => {
  const { accountVerification,open,setOpen,responseMessage} = Actions();
  const { container, btn, text } = useStyles();
  const [val, setVal] = useState<string>("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const { grey } = Colors;
  const onSubmit = (): void => {
    if (!val || val === "" || val === undefined) {
      setError(true);
    } else {
      accountVerification(verifyNumber,val,setCheck)
      setError(false);
    }
  };

  const handleAlertClose = () => {
    setOpen(false);
  };

  const sliced = slicedNumber.toString().slice(slicedNumber.length - 3)

  return (
    <Grid container>
      <Grid className={container} item xs={12}>
        {check ? (
          <Typography style={{ marginBottom: "40px" }} variant="h2">
            {heading}
          </Typography>
        ) : (
          <>
            <Typography variant="subtitle1">
            {message} <span style={{ fontWeight: "bolder" }}>{`${num}${sliced}`}</span>
          </Typography> 
            <PinInput
              length={4}
              onChange={(value: string) => setVal(value)}
              inputMode="numeric"
              style={{ padding: "10px", marginBottom: "10px" }}
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
              <button className={btn}>
                <span className={text}>{buttonText}</span>
              </button>
            </Typography>
          </>
        )}
      </Grid>
      <Toast
        open={open}
        type={responseMessage.status}
        onClose={handleAlertClose}
        message={responseMessage.message}
      />
    </Grid>
  );
};

export default Verification;
