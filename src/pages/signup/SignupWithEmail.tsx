import { useForm } from "./useForm";
import { Typography, LinearProgress } from "@material-ui/core";
import { Grid, Card, Button } from "@material-ui/core";
import InputField from "../../components/InputField";
import { fieldNames } from "../../Utils/constants/formsConstants";
import {
  CONTINUE,
  SIGNUP,
} from "../../Utils/constants/language/en/buttonLabels";
import GlobalStyles from "../../globalStyles";
import useApi from "../../Utils/hooks/useApi";
import { Redirect } from "react-router";
import { routes } from "../../routes/paths";
import Toast from "../../components/Toast";

const SignupWithEmail = () => {
  const { loginFormGrid, formCard, formStyle, loginbtn } = GlobalStyles();
  const {
    values,
    errors,
    handleInputChange,
    handleEmailSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseStatus,
    responseMessage,
  } = useForm();

  const handleAlertClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
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

          <form className={formStyle} onSubmit={handleEmailSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <InputField
                  id="input-first-name"
                  name={fieldNames.firstName}
                  fullWidth
                  variant="outlined"
                  placeholder="First Name"
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
                  placeholder="Last Name"
                  value={values.lastName}
                  error={errors.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  id="input-email"
                  name={fieldNames.email}
                  fullWidth
                  variant="outlined"
                  placeholder="Email"
                  value={values.email}
                  error={errors.email}
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
                  placeholder="Password"
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

            {responseStatus === "success" && (
              <Redirect to={routes.verification} />
            )}
          </form>
        </Card>
      </Grid>
      {responseMessage && (
        <Toast
          open={alertOpen}
          onClose={handleAlertClose}
          severity={responseStatus}
          message={responseMessage}
        />
      )}
    </Grid>
  );
};

export default SignupWithEmail;
