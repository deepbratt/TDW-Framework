import { useForm } from "./useForm";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { Grid, Card, Button } from "@material-ui/core";
import { PhoneAndroidRounded } from "@material-ui/icons";
import InputField from "../../components/InputField";
import { fieldNames } from "../../Utils/constants/formsConstants";
import {
  SIGNIN,
  SIGNUP,
  CONTINUE_WITH_PHONE,
  CONTINUE_WITH_GOOGLE,
  CONTINUE_WITH_FACEBOOK,
  SIGNIN_USING_ACCOUNT,
  DONOT_HAVE_ACCOUNT,
  FORGOT_PASS,
} from "../../Utils/constants/language/en/buttonLabels";
import GlobalStyles from "../../globalStyles";

const Login = () => {
  const { loginFormGrid, formCard, buttonWrap, formStyle, loginbtn } =
    GlobalStyles();
  const { values, errors, handleInputChange, handleSubmit } = useForm();

  return (
    <Grid
      className={loginFormGrid}
      container
      justify="center"
      alignContent="center"
    >
      <Grid item xs={4}>
        <Card className={formCard}>
          <Typography variant="h6" gutterBottom>
            {SIGNIN}
          </Typography>
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<PhoneAndroidRounded />}
          >
            {CONTINUE_WITH_PHONE}
          </Button>
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<PhoneAndroidRounded />}
          >
            {CONTINUE_WITH_GOOGLE}
          </Button>
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<PhoneAndroidRounded />}
          >
            {CONTINUE_WITH_FACEBOOK}
          </Button>
          <form className={formStyle} onSubmit={handleSubmit}>
            <Typography variant="body2" gutterBottom>
              {SIGNIN_USING_ACCOUNT}
            </Typography>
            <InputField
              id="input-name"
              name={fieldNames.email}
              fullWidth
              variant="outlined"
              placeholder="Email"
              value={values.email}
              error={errors.email}
              onChange={handleInputChange}
            />
            <InputField
              id="input-password"
              name={fieldNames.password}
              type="password"
              fullWidth
              variant="outlined"
              placeholder="Password"
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
              variant="contained"
              color="secondary"
              type="submit"
            >
              {SIGNIN}
            </Button>
            {/* {responseMessage && (
              <Typography color="error" variant="subtitle1">
                {responseMessage}
              </Typography>
            )} */}
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
