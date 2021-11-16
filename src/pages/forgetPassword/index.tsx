import { useForm } from "./useForm";
import { useParams } from "react-router";
import Toast from "../../components/Toast";
import Grid from "@material-ui/core/Grid"
import LinearProgress from "@material-ui/core/LinearProgress"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
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
import MetaTags from "../../components/MetaTags";
import PageMeta from "../../Utils/constants/language/en/pageData";

const ForgetPassword = () => {
  const { token } = useParams<any>();
  const {
    values,
    errors,
    handleInputChange,
    pin,
    setPin,
    handleSubmit,
    isLoading,
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
      justifyContent="center"
      alignContent="center"
    >
      <MetaTags
        title={PageMeta.forgotPassword.title}
        canonical={PageMeta.forgotPassword.canonical}
      />
      <Grid item xs={10} md={8} lg={4}>
        {token ? (
          <ResetPassword token={pin} />
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
            {isLoading && <LinearProgress color="secondary" />}
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
                    disabled={isLoading}
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
