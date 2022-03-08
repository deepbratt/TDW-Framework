import { useHistory } from "react-router";
import Toast from "../../components/Toast";
import { routes } from "../../routes/paths";
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GlobalStyles from "../../globalStyles";
import { fieldNames } from "../../Utils/constants/formsConstants";
import { useForm } from "./useForm";
import {
  ACCOUNT_RECOVERY,
  RESET_PASSWORD,
} from "../../Utils/constants/language/en/buttonLabels";
import PasswordField from "../../components/InputField/PasswordField";
import MetaTags from "../../components/MetaTags";
import PageMeta from "../../Utils/constants/language/en/pageData";

const ResetPassword = ({ token }: any) => {
  const history = useHistory();

  const {
    values,
    errors,
    handleInputChange,
    handleSubmit,
    isLoading,
    alertOpen,
    setAlertOpen,
    responseMessage,
  } = useForm(token);

  const { formStyle, formCard, loginbtn } = GlobalStyles();

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
    <MetaTags
        title={PageMeta.resetToken.title}
        canonical={PageMeta.resetToken.canonical}
      />
      {isLoading && <LinearProgress color="secondary" />}
      <Card className={formCard}>
        <Typography variant="h3" gutterBottom>
          {ACCOUNT_RECOVERY}
        </Typography>
        <form className={formStyle} onSubmit={handleSubmit}>
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

          <PasswordField
            id="input-confirm-password"
            name={fieldNames.confirmPassword}
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
            disabled={isLoading}
            variant="contained"
            color="secondary"
            type="submit"
          >
            {RESET_PASSWORD}
          </Button>
          {responseMessage.status === "success" && history.push(routes.auth)}
        </form>
      </Card>
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

export default ResetPassword;
