import { useForm } from "./useForm";
import { useHistory } from "react-router";
import Toast from "../../components/Toast";
import { routes } from "../../routes/paths";
import {
  Typography,
  LinearProgress,
  Grid,
  Card,
  Button,
} from "@material-ui/core";
import InputField from "../../components/InputField";
import { fieldNames } from "../../Utils/constants/formsConstants";
import {
  CONTINUE,
  SIGNUP,
} from "../../Utils/constants/language/en/buttonLabels";
import GlobalStyles from "../../globalStyles";
import PasswordField from "../../components/InputField/PasswordField";

const SignupWithMobile = () => {
  const { loginFormGrid, formCard, formStyle, loginbtn } = GlobalStyles();
  const history = useHistory();
  const {
    values,
    errors,
    handleInputChange,
    handleMobileSubmit,
    loading,
    alertOpen,
    setAlertOpen,

    responseMessage,
  } = useForm();

  const handleAlertClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  return (
    <Grid
      className={loginFormGrid}
      container
      justify="center"
      alignContent="center"
    >
      <Grid item xs={4}>
        {loading && <LinearProgress color="secondary" />}
        <Card className={formCard}>
          <Typography variant="h6" gutterBottom>
            {SIGNUP}
          </Typography>

          <form className={formStyle} onSubmit={handleMobileSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <InputField
                  id="input-first-name"
                  name={fieldNames.firstName}
                  fullWidth
                  variant="outlined"
                  label="First Name"
                  value={values.firstName}
                  error={errors.firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  id="input-last-name"
                  name={fieldNames.lastName}
                  fullWidth
                  variant="outlined"
                  label="Last Name"
                  value={values.lastName}
                  error={errors.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  id="input-mobile"
                  name={fieldNames.mobile}
                  fullWidth
                  variant="outlined"
                  label="Number"
                  value={values.mobile}
                  error={errors.mobile}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordField
                  id="input-password"
                  name={fieldNames.password}
                  fullWidth
                  variant="outlined"
                  label="Password"
                  value={values.password}
                  error={errors.password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordField
                  id="input-confirm-password"
                  name={fieldNames.confirmPassword}
                  placeholder="Re-enter your password"
                  label="Confirm Password"
                  fullWidth
                  variant="outlined"
                  value={values.confirmPassword}
                  error={errors.confirmPassword}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={loginbtn}
                  fullWidth
                  disabled={loading}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  {CONTINUE}
                </Button>
              </Grid>
            </Grid>
            {responseMessage.status === "success" &&
              history.push(routes.verification + "/phone")}
          </form>
        </Card>
      </Grid>
      {responseMessage && (
        <Toast
          open={alertOpen}
          onClose={handleAlertClose}
          type={responseMessage.status}
          message={responseMessage.message}
        />
      )}
    </Grid>
  );
};

export default SignupWithMobile;
