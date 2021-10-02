import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import {
  emailText,
  email,
  cancelButtonText,
  buttonText
} from '../../Utils/sidebarText';
import useHooks from './useHooks';
import { useStyles } from './useStyles';
import { useForm } from 'react-hook-form';
import Actions from './useFunctions';
import { updateMe } from '../../../../Utils/hooks/endpoints';
import Toast from '../../../../components/Toast';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import Loader from "../../../../components/Loader";
const RegexInputs = () => {
  const {isLoading, changeNumberOrEmail, setOpen, responseMessage, open } = Actions();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { handleChange, val, number, NumericOnly, errorMessage, setNumber } =
    useHooks();
  const [changeToVerification, setChangeToVerification] = useState(false);
  const {cancelButton, button } = useStyles();
  const { user } = useSelector((state: RootState) => state.auth);

  const onSubmit = (): void => {
    let phone = "+92"+number
    let data = user.phone !== phone ? { phone: phone } : { email: val.email };
    changeNumberOrEmail(updateMe, data, setChangeToVerification);
  };

  const handleAlertClose = () => {
    setOpen(false);
  };

  const handleCancel = (): void => {
    setNumber('');
  };

  // #static user login status info for now

  return (
    <Grid container spacing={4}>
      <Loader isBackdrop={true} open={isLoading}/>
      {/* {changeToVerification ? (
          <Verification slicedNumber={number && number} />
        ) : ( */}
      <Grid item lg={6} xs={12}>
        <TextField
          {...register('email', { pattern: email })}
          label="Email"
          name="email"
          value={val.email}
          onChange={(e) => handleChange(e)}
          disabled={user.signedUpWithEmail}
          fullWidth
        />
        {errors.email &&
          errors.email.type === 'pattern' &&
          errorMessage(emailText)}
      </Grid>
      <Grid item lg={6} xs={12}>
        <TextField
          name="number"
          value={number}
          onChange={(e) => NumericOnly(e)}
          label="Mobile Number"
          disabled={user.signedUpWithPhone}
          fullWidth
          type="tel"
          placeholder={"3XXXXXXXXX"}
          InputProps={{startAdornment:<span>+92&nbsp;</span>}}
        />
      </Grid>
      {val.email || number ? (
        <Grid item lg={12} xs={12} style={{display:"flex"}}>
          <Button
            className={button}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            {buttonText}
          </Button>
          <Button
            className={cancelButton}
            variant="contained"
            onClick={() => handleCancel()}
            color="primary"
          >
            {cancelButtonText}
          </Button>
        </Grid>
      ) : null}
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
