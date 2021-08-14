import { useHistory } from "react-router";
import Toast from "../../components/Toast";
import { routes } from "../../routes/paths";
import {
  Grid,
  LinearProgress,
  Card,
  Button,
  Typography,
} from "@material-ui/core";
import GlobalStyles from "../../globalStyles";
import InputField from "../../components/InputField";
import { fieldNames } from "../../Utils/constants/formsConstants";
import { useForm } from "./useForm";
import {
  ACCOUNT_RECOVERY,
  RESET_PASSWORD,
} from "../../Utils/constants/language/en/buttonLabels";

const ResetPassword = () => {
  const history = useHistory();
  const {
    values,
    errors,
    handleInputChange,
    handleSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    
    responseMessage,
  } = useForm("token here");

  const { loginFormGrid, formStyle, formCard, loginbtn } = GlobalStyles();

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
          <Typography align="center" variant="h2" gutterBottom>
            {ACCOUNT_RECOVERY}
          </Typography>
          <form className={formStyle} onSubmit={handleSubmit}>
            <InputField
              id="input-password"
              name={fieldNames.password}
              type="password"
              fullWidth
              variant="outlined"
              placeholder="Enter your password"
              label="Password"
              value={values.password}
              error={errors.password}
              onChange={handleInputChange}
            />

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
            <Button
              className={loginbtn}
              fullWidth
              disabled={loading}
              variant="contained"
              color="secondary"
              type="submit"
            >
              {RESET_PASSWORD}
            </Button>
            {responseMessage.status === "success" && history.push(routes.resetPassword)}
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

export default ResetPassword;
