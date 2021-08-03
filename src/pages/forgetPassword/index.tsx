import { useForm } from "./useForm";
import { Grid, Card, Button, Typography } from "@material-ui/core";
import GlobalStyles from "../../globalStyles";
import InputField from "../../components/InputField";
import { fieldNames } from "../../utils/constants/formsConstants";

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
            Account Recovery
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
                  Enter your Account Email or Account Number to reset your password:
                </Typography>
                <InputField
                  id="input-email"
                  name={fieldNames.email}
                  fullWidth
                  variant="outlined"
                  placeholder="Email/Number"
                  value={values.email}
                  error={errors.email}
                  onChange={handleInputChange}
                />

                <Button
                  className={loginbtn}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  type="submit"
                  onClick={() =>
                    setResetLinkMessage(
                      "Reset password link sent to entered email"
                    )
                  }
                >
                  Continue
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
