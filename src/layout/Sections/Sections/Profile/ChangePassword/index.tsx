import { Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { newPass, confirmPass, required } from "../../../Utils/sidebarText";
import useHooks from "../useHooks";
import { useStyles } from "../useStyles";
import Actions from "../useFunctions";
import { changeMyPassword } from "../../../../../Utils/hooks/endpoints";
import CustomButton from "../../../../../components/CustomButton";
import Toast from "../../../../../components/Toast";

const ChangePassword = () => {
  const { select,cancelButton, root,passContainer} = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { changePassword,setOpen,open,responseMessage} = Actions();
  const { handleChange, val, errorMessage,setVal} = useHooks();

  const handleAlertClose = () => {
    setOpen(false);
  };

  const onSubmit = (): void => {
    changePassword(changeMyPassword, val);
  };

  return (
    <Grid item xs={12} className={root}>
      <Grid
        item
        style={{ display: "flex", flexFlow: "wrap",paddingTop: "20px"}}
        xs={12}
      >
        <Grid style={{ margin: "30px 10px" }} item lg={5} xs={12}>
          <TextField
            {...register("currentPassword", {
              required: true,
               minLength: 8
            })}
            className={select}
            name="currentPassword"
            type="password"
            value={val.currentPassword}
            onChange={(e) => handleChange(e)}
            label="Current Password"
            required
            variant="outlined"
          />
          {errors.currentPassword &&
            errors.currentPassword.type === "required" &&
            errorMessage(required)}
          {errors.currentPassword &&
            errors.currentPassword.type === "minLength" &&
            errorMessage(newPass)}
        </Grid>
        <Grid style={{ margin: "30px 10px" }} item lg={5} xs={12}>
          <TextField
            {...register("newPassword", {
              required: true,
              minLength: 8
            })}
            className={select}
            name="newPassword"
            type="password"
            value={val.newPassword}
            onChange={(e) => handleChange(e)}
            label="New Password"
            required
            variant="outlined"
          />
          {errors.newPassword &&
            errors.newPassword.type === "required" &&
            errorMessage(required)}
          {errors.newPassword &&
            errors.newPassword.type === "minLength" &&
            errorMessage(newPass)}
        </Grid>
        <Grid style={{ margin: "30px 10px" }} item lg={5} xs={12}>
          <TextField
            {...register("confirmPassword", {
              required: true,
              validate: (value: string) => value === val.newPassword || newPass,
              minLength: 8
            })}
            className={select}
            name="confirmPassword"
            type="password"
            value={val.confirmPassword}
            onChange={(e) => handleChange(e)}
            label="Confirm Password"
            required
            variant="outlined"
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" &&
            errorMessage(required)}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" &&
            errorMessage(confirmPass)}
             {errors.confirmPassword &&
            errors.confirmPassword.type === "minLength" &&
            errorMessage(confirmPass)}
        </Grid>
        <Grid className={passContainer} item lg={4} xs={12}>
          <CustomButton
            styles={cancelButton}
            variant="contained"
            handleClick={handleSubmit(onSubmit)}
          >
            Change Password
          </CustomButton>
        </Grid>
        <Toast
          open={open}
          type={responseMessage.status}
          onClose={handleAlertClose}
          message={responseMessage.message}
        />
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
