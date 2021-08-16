import { useForm } from "./useForm";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import Toast from "../../components/Toast";
import { routes } from "../../routes/paths";
import {
  Grid,
  LinearProgress,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import InputField from "../../components/InputField";
import { fieldNames } from "../../Utils/constants/formsConstants";
import {
  SIGNIN,
  SIGNUP,
  SIGNIN_USING_ACCOUNT,
  DONOT_HAVE_ACCOUNT,
  FORGOT_PASS,
} from "../../Utils/constants/language/en/buttonLabels";
import GlobalStyles from "../../globalStyles";
import PasswordField from "../../components/InputField/PasswordField";

const LoginWithMobile = () => {
  const history = useHistory();
  const { loginFormGrid, formCard, formStyle, loginbtn } = GlobalStyles();
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
            {SIGNIN}
          </Typography>

          <form className={formStyle} onSubmit={handleMobileSubmit}>
            <Typography variant="body2" gutterBottom>
              {SIGNIN_USING_ACCOUNT}
            </Typography>
            <InputField
              id="input-mobile"
              name={fieldNames.mobile}
              fullWidth
              variant="outlined"
              label="Phone"
              value={values.mobile}
              error={errors.mobile}
              onChange={handleInputChange}
            />
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
            <Typography>
              <NavLink to={"/forgot-password"}>{FORGOT_PASS}</NavLink>
            </Typography>

            <Typography
              style={{ margin: "30px 0" }}
              align="center"
              variant="body2"
              component="h6"
              gutterBottom
            >
              {DONOT_HAVE_ACCOUNT} <NavLink to={"/signup"}>{SIGNUP}</NavLink>
            </Typography>

            <Button
              className={loginbtn}
              fullWidth
              disabled={loading}
              variant="contained"
              color="secondary"
              type="submit"
            >
              {SIGNIN}
            </Button>
            {responseMessage.status === "success" && history.push(routes.home)}
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

export default LoginWithMobile;
