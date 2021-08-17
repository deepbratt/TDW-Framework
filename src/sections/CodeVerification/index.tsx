import { useState } from "react";
import PinInput from "react-pin-input";
import { useHistory } from "react-router";
import CustomButton from "../../components/CustomButton";
import { paths } from "../../routes/paths";
import { VERIFY } from "../../Utils/constants/language/en/buttonLabels";
import { regex, pin as pinStyle, err } from "../../layout/Sections/Utils/Text";

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
      history.push(paths.forgotPassword + `/${pin}`);
    }
  };

  return (
    <>
      <PinInput
        length={4}
        onChange={(pin: string) => setPin(pin)}
        inputMode="numeric"
        style={{ padding: "10px", marginBottom: "10px" }}
        inputStyle={err ? pinStyle : err}
        autoSelect={true}
        regexCriteria={regex}
      />
      <CustomButton
        color="secondary"
        disabled={pinError || pin.length !== 4}
        onClick={() => handleSubmit()}
      >
        {VERIFY}
      </CustomButton>
    </>
  );
};

export default CodeVerfication;
