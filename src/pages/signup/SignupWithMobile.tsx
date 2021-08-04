import { useForm } from "./useForm";
import { Typography } from "@material-ui/core";
import { Grid, Card, Button } from "@material-ui/core";
import InputField from "../../components/InputField";
import { fieldNames } from "../../utils/constants/formsConstants";
import {
  CONTINUE,
  SIGNUP,
} from "../../utils/constants/language/en/buttonLabels";
import GlobalStyles from "../../globalStyles";

const SignupWithMobile = () => {
  const { loginFormGrid, formCard, formStyle, loginbtn } = GlobalStyles();
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
            {SIGNUP}
          </Typography>

          <form className={formStyle} onSubmit={handleSubmit}>
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
                <InputField
                  id="input-password"
                  name={fieldNames.password}
                  type="password"
                  fullWidth
                  variant="outlined"
                  label="Password"
                  value={values.password}
                  error={errors.password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  id="input-confirm-password"
                  name={fieldNames.confirmPassword}
                  type="password"
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
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  {CONTINUE}
                </Button>
              </Grid>
            </Grid>

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

export default SignupWithMobile;
