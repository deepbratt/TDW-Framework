import { Grid, TextField } from "@material-ui/core";
import {
  emailText,
  email,
  cancelButtonText,
  buttonText,
} from "../../Utils/sidebarText";
import CustomButton from "../../../../components/CustomButton";
import useHooks from "./useHooks";
import { useStyles } from "./useStyles";
import { useForm } from "react-hook-form";
import Actions from "./useFunctions";
import { addMyPhone } from "../../../../Utils/hooks/endpoints";
import Toast from "../../../../components/Toast";
import Verification from "./VerificationInput";
import { useState } from "react";
const RegexInputs = () => {
  const {changeNumber,setOpen,responseMessage,open} = Actions()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    handleChange,
    val,
    number,
    NumericOnly,
    errorMessage,
    setNumber,
  } = useHooks();
  const [changeToVerification, setChangeToVerification] = useState(false);
  const { select, root, btnBox, cancelButton, button } = useStyles();

  const onSubmit = (): void => {
    // setNumber("");
    changeNumber(addMyPhone, number,setChangeToVerification);
  };

  const handleAlertClose = () => {
    setOpen(false);
  };

  const handleCancel = (): void => {
    setNumber("");
  };

  let isLoggedInWithEmail = true;
  let isLoggedInWithNumber = false;

  return (
    <Grid item xs={12} className={root}>
      <Grid
        item
        style={{ display: "flex", flexFlow: "wrap", marginTop: "20px" }}
        xs={12}
      >
        {changeToVerification ? (
          <Verification response={responseMessage} slicedNumber={number && number} />
        ) : (
          <>
            <Grid style={{ margin: "30px 10px" }} item lg={5} xs={12}>
              <TextField
                {...register("email", { pattern: email })}
                className={select}
                label="Email"
                name="email"
                value={val.email}
                onChange={(e) => handleChange(e)}
                variant="outlined"
                disabled={isLoggedInWithEmail ? true : false}
              />
              {errors.email &&
                errors.email.type === "pattern" &&
                errorMessage(emailText)}
            </Grid>
            <Grid style={{ margin: "30px 10px" }} item lg={5} xs={12}>
              <TextField
                className={select}
                name="number"
                value={number}
                onChange={(e) => NumericOnly(e)}
                label="Mobile Number"
                variant="outlined"
                disabled={!isLoggedInWithNumber ? false : true}
              />
            </Grid>
            {val.email || number ? (
              <Grid
                style={{ marginLeft: "10px" }}
                item
                lg={2}
                xs={12}
                className={btnBox}
              >
                <CustomButton
                  styles={button}
                  variant="contained"
                  handleClick={handleSubmit(onSubmit)}
                >
                  {buttonText}
                </CustomButton>
              </Grid>
            ) : null}
            {val.email || number ? (
              <Grid item lg={2} xs={12} className={btnBox}>
                <CustomButton
                  styles={cancelButton}
                  variant="contained"
                  handleClick={() => handleCancel()}
                >
                  {cancelButtonText}
                </CustomButton>
              </Grid>
            ) : null}
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

export default RegexInputs;
