import { useForm } from "./useForm";
import { Grid, Card, Button, Typography } from "@material-ui/core";
import GlobalStyles from "../../globalStyles";
import InputField from "../../components/InputField";
import { fieldNames } from "../../utils/constants/formsConstants";
import {
  ACCOUNT_RECOVERY,
  RESET_PASS_LINK_MESSAGE,
  ENTER_YOUR_EMAIL_PASS_MESSAGE,
  CONTINUE,
} from "../../utils/constants/language/en/buttonLabels";

const ForgetPassword = () => {
  const {
    values,
    errors,
    handleInputChange,
    handleSubmit,
    responseMessage,
    resetLinkMessage,
    setResetLinkMessage,
  } = useForm();
  const { loginFormGrid, formStyle, formCard, loginbtn } = GlobalStyles();

  return (
    <Grid
      className={loginFormGrid}
      container
      justify="center"
      alignContent="center"
    >
      <Grid item xs={4}>
        <Card className={formCard}>
          <Typography variant="h3" gutterBottom>
            {ACCOUNT_RECOVERY}
          </Typography>
          {resetLinkMessage ? (
            <Typography
              style={{ margin: "20px 0" }}
              color="secondary"
              align="center"
              variant="h4"
            >
              {resetLinkMessage}
            </Typography>
          ) : (
            <>
              <form className={formStyle} onSubmit={handleSubmit}>
                <Typography variant="body2" gutterBottom>
                  {ENTER_YOUR_EMAIL_PASS_MESSAGE}
                </Typography>
                <InputField
                  id="input-email"
                  name={fieldNames.email}
                  fullWidth
                  variant="outlined"
                  label="Email/Number"
                  value={values.email}
                  error={errors.email}
                  required
                  onChange={handleInputChange}
                />

                <Button
                  className={loginbtn}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  type="submit"
                  onClick={() => setResetLinkMessage(RESET_PASS_LINK_MESSAGE)}
                >
                  {CONTINUE}
                </Button>
                {responseMessage && (
                  <Typography color="error" variant="subtitle1">
                    {responseMessage}
                  </Typography>
                )}
              </form>
            </>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default ForgetPassword;
