import { NavLink, useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { Grid, Card, Button } from "@material-ui/core";
import { PhoneAndroidRounded } from "@material-ui/icons";
import {
  SIGNIN,
  SIGNUP,
  CONTINUE_WITH_PHONE,
  CONTINUE_WITH_GOOGLE,
  CONTINUE_WITH_FACEBOOK,
  CONTINUE_WITH_EMAIL,
  ALREADY_HAVE_ACCOUNT,
} from "../../Utils/constants/language/en/buttonLabels";
import GlobalStyles from "../../globalStyles";

const Signup = () => {
  const history = useHistory();
  const { loginFormGrid, formCard, buttonWrap } = GlobalStyles();

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
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<PhoneAndroidRounded />}
            onClick={() => history.push("/signup-with-mobile")}
          >
            {CONTINUE_WITH_PHONE}
          </Button>
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<PhoneAndroidRounded />}
          >
            {CONTINUE_WITH_GOOGLE}
          </Button>
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<PhoneAndroidRounded />}
          >
            {CONTINUE_WITH_FACEBOOK}
          </Button>
          <Button
            className={buttonWrap}
            fullWidth
            variant="outlined"
            startIcon={<PhoneAndroidRounded />}
            onClick={() => history.push("/signup-with-email")}
          >
            {CONTINUE_WITH_EMAIL}
          </Button>
          <Typography
            style={{ margin: "30px 0" }}
            align="center"
            variant="body2"
            component="h6"
            gutterBottom
          >
            {ALREADY_HAVE_ACCOUNT} <NavLink to={"/login"}>{SIGNIN}</NavLink>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Signup;
