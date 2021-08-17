import { useForm } from "./useForm";
import { useHistory, useParams } from "react-router";
import Toast from "../../components/Toast";
import { routes, paths } from "../../routes/paths";
import {
  Grid,
  LinearProgress,
  Card,
  Button,
  Typography,
} from "@material-ui/core";
import GlobalStyles from "../../globalStyles";
import InputField from "../../components/InputField";
import CodeVerification from "../../sections/CodeVerification";
import { fieldNames } from "../../Utils/constants/formsConstants";
import {
  ACCOUNT_RECOVERY,
  RESET_PASS_LINK_MESSAGE,
  ENTER_YOUR_EMAIL_PASS_MESSAGE,
  CONTINUE,
} from "../../Utils/constants/language/en/buttonLabels";
import ResetPassword from "../resetPassword";
import PinInput from "react-pin-input";

const ForgetPassword = () => {
  const { token } = useParams<any>();
  const history = useHistory();
  const {
    values,
    errors,
    handleInputChange,
    pin,
    setPin,
    handleSubmit,
    loading,
    alertOpen,
    setAlertOpen,
    responseMessage,
    resetLinkMessage,
  } = useForm();
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
        {token ? (
          <ResetPassword />
        ) : resetLinkMessage ? (
          <Typography
            style={{ margin: "20px 0" }}
            color="secondary"
            align="center"
            variant="h4"
          >
            {RESET_PASS_LINK_MESSAGE}
          </Typography>
        ) : (
          <>
            {loading && <LinearProgress color="secondary" />}
            <Card className={formCard}>
              <Typography variant="h3" gutterBottom>
                {ACCOUNT_RECOVERY}
              </Typography>
              {responseMessage.status === "success" ? (
                <CodeVerification pin={pin} setPin={setPin} />
              ) : (
                <form className={formStyle} onSubmit={handleSubmit}>
                  <Typography variant="body2" gutterBottom>
                    {ENTER_YOUR_EMAIL_PASS_MESSAGE}
                  </Typography>
                  <InputField
                    id="input-data"
                    name={fieldNames.data}
                    fullWidth
                    variant="outlined"
                    label="Email/Phone Number"
                    value={values.data}
                    error={errors.data}
                    required
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
                    {CONTINUE}
                  </Button>
                </form>
              )}
            </Card>
          </>
        )}
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

export default ForgetPassword;
