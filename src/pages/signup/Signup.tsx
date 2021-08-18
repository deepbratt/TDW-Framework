import { useForm } from "./useForm";
import { useHistory } from "react-router";
import Toast from "../../components/Toast";
import { Grid, Button } from "@material-ui/core";
import { routes } from "../../routes/paths";
import InputField from "../../components/InputField";
import { fieldNames } from "../../Utils/constants/formsConstants";
import { CONTINUE } from "../../Utils/constants/language/en/buttonLabels";
import GlobalStyles from "../../globalStyles";
import PasswordField from "../../components/InputField/PasswordField";

const Signup = () => {
  const { formStyle, loginbtn } = GlobalStyles();
  const history = useHistory();
  const {
    values,
    errors,
    loading,
    alertOpen,
    setAlertOpen,
    responseMessage,
    handleSubmit,
    handleInputChange,
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
    <>
      <form className={formStyle} onSubmit={handleSubmit}>
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
            <PasswordField
              id="input-password"
              name={fieldNames.password}
              fullWidth
              variant="outlined"
              placeholder="Password"
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

        {responseMessage.status === "success" && history.push(routes.login)}
      </form>
      {responseMessage && (
        <Toast
          open={alertOpen}
          onClose={handleAlertClose}
          type={responseMessage.status}
          message={responseMessage.message}
        />
      )}
    </>
  );
};

export default Signup;
