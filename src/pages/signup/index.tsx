import { NavLink, useHistory } from "react-router-dom";
import Toast from "../../components/Toast";
import {
  Grid,
  LinearProgress,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import { EmailRounded, PhoneAndroidRounded } from "@material-ui/icons";
import {
  SIGNIN,
  SIGNUP,
  CONTINUE_WITH_PHONE,
  CONTINUE_WITH_GOOGLE,
  CONTINUE_WITH_FACEBOOK,
  CONTINUE_WITH_EMAIL,
  ALREADY_HAVE_ACCOUNT,
} from "../../Utils/constants/language/en/buttonLabels";
import GoogleIcon from "../../assets/icons/googleIcon.png";
import FacebookIcon from "../../assets/icons/fbIcon.png";
import GlobalStyles from "../../globalStyles";
import { routes } from "../../routes/paths";
import { handleFacebookAuth, handleGoogleAuth } from "../../Utils/API/API";
import { useForm } from "./useForm";

const Signup = () => {
  const history = useHistory();
  const { loginFormGrid, formCard, buttonWrap } = GlobalStyles();
  const {
    handleGoogleSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseStatus,
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
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<PhoneAndroidRounded />}
            onClick={() => history.push(routes.signupWithMobile)}
          >
            {CONTINUE_WITH_PHONE}
          </Button>
          <Button
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
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<EmailRounded />}
            onClick={() => history.push(routes.signupWithEmail)}
          >
            {CONTINUE_WITH_EMAIL}
          </Button>
          <Typography
            style={{ margin: "30px 0" }}
            align="center"
            variant="body2"
            component="h6"
            gutterBottom
          >
            {ALREADY_HAVE_ACCOUNT} <NavLink to={routes.login}>{SIGNIN}</NavLink>
          </Typography>
        </Card>
        {responseStatus === "success" && history.push(routes.verification)}
      </Grid>
      {responseMessage && (
        <Toast
          open={alertOpen}
          onClose={handleAlertClose}
          type={responseStatus}
          message={responseMessage}
        />
      )}
    </Grid>
  );
};

export default Signup;
