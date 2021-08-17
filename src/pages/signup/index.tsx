import { NavLink, useHistory } from "react-router-dom";
import Toast from "../../components/Toast";
import {
  Grid,
  LinearProgress,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import {
  OR,
  SIGNIN,
  SIGNUP,
  CONTINUE_WITH_GOOGLE,
  CONTINUE_WITH_FACEBOOK,
  ALREADY_HAVE_ACCOUNT,
} from "../../Utils/constants/language/en/buttonLabels";
import GoogleIcon from "../../assets/icons/googleIcon.png";
import FacebookIcon from "../../assets/icons/fbIcon.png";
import GlobalStyles from "../../globalStyles";
import { routes } from "../../routes/paths";
import { handleFacebookAuth } from "../../Utils/API/API";
import InputField from "../../components/InputField";
import { fieldNames } from "../../Utils/constants/formsConstants";
import { CONTINUE } from "../../Utils/constants/language/en/buttonLabels";
import PasswordField from "../../components/InputField/PasswordField";
import { useForm } from "./useForm";

const Signup = () => {
  const history = useHistory();
  const { loginFormGrid, formCard, buttonWrap, formStyle, loginbtn } =
    GlobalStyles();
  const {
    handleGoogleSubmit,
    loading,
    // alertOpen,
    // setAlertOpen,
    handleInputChange,
    handleSubmit,
    values,
    errors,
    responseMessage,
  } = useForm();

  // const handleAlertClose = (
  //   event: React.SyntheticEvent | React.MouseEvent,
  //   reason?: string
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setAlertOpen(false);
  // };

  return (
    <Grid
      className={loginFormGrid}
      container
      justify="center"
      alignContent="center"
    >
      <Grid item xs={10} md={6} lg={4}>
        {loading && <LinearProgress color="secondary" />}
        <Card className={formCard}>
          <Typography variant="h6" gutterBottom>
            {SIGNUP}
          </Typography>
          {/* <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<img src={GoogleIcon} alt="google-icon" />}
            onClick={() => handleGoogleSubmit()}
          >
            {CONTINUE_WITH_GOOGLE}
          </Button>
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<img src={FacebookIcon} alt="facebook-icon" />}
            onClick={() => handleFacebookAuth()}
          >
            {CONTINUE_WITH_FACEBOOK}
          </Button>
          <Typography
            style={{ fontSize: "24px", marginTop: "10px" }}
            align="center"
            variant="body1"
          >
            {OR}
          </Typography> */}
          <form className={formStyle} onSubmit={handleSubmit}>
            <Grid container spacing={1}  justifyContent="center">
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
                  id="input-username"
                  name={fieldNames.username}
                  fullWidth
                  variant="outlined"
                  label="Username"
                  value={values.username}
                  error={errors.username}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  id="input-data"
                  name={fieldNames.data}
                  fullWidth
                  variant="outlined"
                  label="Email/Phone Number"
                  value={values.data}
                  error={errors.data}
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
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  fullWidth
                  variant="outlined"
                  value={values.confirmPassword}
                  error={errors.confirmPassword}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item container xs={12} justifyContent="center">
                <Typography
                  style={{ margin: "30px 0" }}
                  align="center"
                  variant="body2"
                  component="h6"
                  gutterBottom
                >
                  {ALREADY_HAVE_ACCOUNT}{" "}
                  <NavLink to={routes.login}>{SIGNIN}</NavLink>
                </Typography>
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
            {responseMessage.status === "success" && history.push(routes.login)}
          </form>
        </Card>
        {responseMessage.status === "success" && history.push(routes.home)}
      </Grid>
      {/* {responseMessage && (
        <Toast
          open={alertOpen}
          onClose={handleAlertClose}
         type={responseMessage.status}
          message={responseMessage.message}
        />
      )} */}
    </Grid>
  );
};

export default Signup;
