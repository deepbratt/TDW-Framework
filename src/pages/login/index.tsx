import { useForm } from './useForm';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import Toast from '../../components/Toast';
import { routes, paths } from '../../routes/paths';
import Grid, { GridSize } from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import InputField from '../../components/InputField';
import { fieldNames } from '../../Utils/constants/formsConstants';
import {
  SIGNIN,
  SIGNUP,
  // CONTINUE_WITH_GOOGLE,
  // CONTINUE_WITH_FACEBOOK,
  SIGNIN_USING_ACCOUNT,
  DONOT_HAVE_ACCOUNT,
  FORGOT_PASS
} from '../../Utils/constants/language/en/buttonLabels';
// import GoogleIcon from "../../assets/icons/googleIcon.png";
// import FacebookIcon from "../../assets/icons/fbIcon.png";
import GlobalStyles from '../../globalStyles';
// import { handleFacebookAuth } from "../../Utils/API/API";
import PasswordField from '../../components/InputField/PasswordField';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
interface LoginProps {
  formColLg?: boolean | GridSize | undefined;
  formColMd?: boolean | GridSize | undefined;
  formColXs?: boolean | GridSize | undefined;
  loginCallback?: () => void;
}

const Login = ({
  formColLg = 4,
  formColMd = 8,
  formColXs = 10,
  loginCallback = undefined
}: LoginProps) => {
  const history = useHistory();
  const {
    loginFormGrid,
    formCard,
    // buttonWrap,
    formStyle,
    loginbtn
  } = GlobalStyles();
  const {
    values,
    errors,
    isLoading,
    alertOpen,
    handleSubmit,
    setAlertOpen,
    responseMessage,
    handleInputChange
    // handleGoogleSubmit,
  } = useForm();

  const handleAlertClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <Grid
      className={loginFormGrid}
      container
      justifyContent="center"
      alignContent="center"
    >
      <MetaTags
        title={PageMeta.login.title}
        description={PageMeta.login.description}
        canonical={PageMeta.login.canonical}
        keywords={PageMeta.login.keywords}
      />
      <Grid item xs={formColXs} md={formColMd} lg={formColLg}>
        {isLoading && <LinearProgress color="secondary" />}
        <Card className={formCard}>
          <Typography variant="h6" gutterBottom>
            {SIGNIN}
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
          </Button> */}
          <form className={formStyle} onSubmit={handleSubmit}>
            <Typography variant="body2" gutterBottom>
              {SIGNIN_USING_ACCOUNT}
            </Typography>
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
              <NavLink to={paths.forgotPassword}>{FORGOT_PASS}</NavLink>
            </Typography>

            <Typography
              style={{ margin: '30px 0' }}
              align="center"
              variant="body2"
              component="h6"
              gutterBottom
            >
              {DONOT_HAVE_ACCOUNT}{' '}
              <NavLink to={routes.signup}>{SIGNUP}</NavLink>
            </Typography>

            <Button
              className={loginbtn}
              fullWidth
              disabled={isLoading}
              variant="contained"
              color="secondary"
              type="submit"
            >
              {SIGNIN}
            </Button>
            {responseMessage.status === 'success' && !loginCallback
              ? history.push(routes.home)
              : responseMessage.status === 'success' && loginCallback && loginCallback()}
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

export default Login;
