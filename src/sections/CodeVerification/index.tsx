import { useState } from "react";
import PinInput from "react-pin-input";
import { useHistory } from "react-router";
import CustomButton from "../../components/CustomButton";
import { paths } from "../../routes/paths";
import { VERIFY } from "../../Utils/constants/language/en/buttonLabels";
import { regex, pin as pinStyle, err } from "../../layout/Sections/Utils/Text";
import { Grid } from "@material-ui/core";

export interface CodeVerficationProps {
  setPin: Function;
  pin: any;
}

const CodeVerfication: React.FC<CodeVerficationProps> = ({ pin, setPin }) => {
  const history = useHistory();
  const [pinError, setPinError] = useState(false);

  const handleSubmit = () => {
    if (pin === undefined || pin.length !== 4) {
      setPinError(true);
    } else {
      setPinError(false);
      history.push(paths.forgotPassword + `/reset-password`);
    }
  };

  return (
    <Grid container justifyContent="center" direction="column">
      <Grid item style={{ display: "flex", justifyContent: "center" }}>
        <PinInput
          length={4}
          onChange={(pin: string) => setPin(pin)}
          inputMode="numeric"
          style={{ padding: "10px", marginBottom: "10px" }}
          inputStyle={err ? pinStyle : err}
          autoSelect={true}
          regexCriteria={regex}
        />
      </Grid>
      <CustomButton
        color="secondary"
        disabled={pinError || pin.length !== 4}
        onClick={() => handleSubmit()}
      >
        {VERIFY}
      </CustomButton>
    </Grid>
  );
};

export default CodeVerfication;
