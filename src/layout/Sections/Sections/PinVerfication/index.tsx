import PinInput from "react-pin-input";
import { useState } from "react";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
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
  icon,
} from "../../Utils/Text";
import { API_ENDPOINTS } from "../../../../Utils/API/endpoints";
import useApi from "../../../../Utils/hooks/useApi";
import { useHistory } from "react-router";
import { routes, paths } from "../../../../routes/paths";

interface IVerficationProps {
  verificationMethod: string;
}

const VerificationContext = ({ verificationMethod }: IVerficationProps) => {
  const history = useHistory();
  const { USERS, EMAIL_VERIFICATION, PHONE_VERIFICATION } = API_ENDPOINTS;
  const [val, setVal] = useState<string>("");
  const { loading, responseMessage, updateRequest } = useApi();
  const [error, setError] = useState<boolean>(false);
  const { white, grey } = Colors;
  const { root, Icon, container, btn, text } = useStyles();
  const number = Number(val);

  const onSubmit = async () => {
    if (!val || val === "" || val === undefined) {
      setError(true);
    } else {
      console.log(typeof number);
      setError(false);
      await updateRequest(
        USERS + verificationMethod === "phone"
          ? PHONE_VERIFICATION
          : EMAIL_VERIFICATION + "/" + number
      );
    }
  };

  return (
    <Grid container>
      <Grid className={root} item xs={12}>
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
          length={6}
          onChange={(value: string) => setVal(value)}
          inputMode="numeric"
          style={{ padding: "10px", marginBottom: "10px" }}
          inputStyle={!error ? pin : err}
          autoSelect={true}
          regexCriteria={regex}
        />
        <CustomButton
          disabled={loading}
          onClick={() => {
            verificationMethod === "reset-password"
              ? history.push(paths.forgotPassword + `/${number}`)
              : onSubmit();
          }}
        >
          {mainBtn}
        </CustomButton>
        <Typography
          style={{ color: grey, marginTop: "20px" }}
          variant="subtitle1"
        >
          {code}
          <button className={btn}>
            <span className={text}>{buttonText}</span>
          </button>
        </Typography>
        {responseMessage.status === "success" && history.push(routes.login)}
      </Grid>
    </Grid>
  );
};

export default VerificationContext;
