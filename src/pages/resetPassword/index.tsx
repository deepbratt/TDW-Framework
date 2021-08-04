import { Grid, Card, Button, Typography } from "@material-ui/core";
import GlobalStyles from "../../globalStyles";
import InputField from "../../components/InputField";
import { fieldNames } from "../../utils/constants/formsConstants";
import { useForm } from "./useForm";
import {
  ACCOUNT_RECOVERY,
  RESET_PASSWORD,
} from "../../utils/constants/language/en/buttonLabels";

const ResetPassword = () => {
  const { values, errors, handleInputChange, responseMessage, handleSubmit } =
    useForm("token here");

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
              variant="contained"
              color="secondary"
              type="submit"
            >
              {RESET_PASSWORD}
            </Button>
            {responseMessage && (
              <Typography color="error" variant="subtitle1">
                {responseMessage}
              </Typography>
            )}
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ResetPassword;
