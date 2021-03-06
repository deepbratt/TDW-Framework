import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Paper from '@material-ui/core/Paper';
import Divider from "@material-ui/core/Divider"
import { useForm } from 'react-hook-form';
import { newPass, confirmPass, required } from '../../../Utils/sidebarText';
import useHooks from '../useHooks';
import { useStyles } from '../useStyles';
import Actions from '../useFunctions';
import { changeMyPassword } from '../../../../../Utils/hooks/endpoints';
import Toast from '../../../../../components/Toast';
import Loader from "../../../../../components/Loader";
import MetaTags from '../../../../../components/MetaTags';
import PageMeta from '../../../../../Utils/constants/language/en/pageData';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { paths, Title } from '../../../Utils/sidebarText';
import SideBar from '../ProfileSidebar/Sidebar'

const ChangePassword = () => {
  const { heading, box, button } = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const {isLoading, changePassword, setOpen, open, responseMessage } = Actions();
  const { handleChange, val, errorMessage, setVal } = useHooks();

  const handleAlertClose = () => {
    setOpen(false);
  };

  const onSubmit = (): void => {
    changePassword(changeMyPassword, val, setVal);
  };

  return (
    <Grid style={{ display: 'flex' }} container >
      <MetaTags
        title={PageMeta.changePassword.title}
        canonical={PageMeta.changePassword.canonical}
      />
      <Loader open={isLoading} isBackdrop={true} />
      <Paper elevation={4} className={box}>
        <section className={heading}>
          <Hidden mdUp>
              <SideBar Title={Title} sidebar={paths} />
            </Hidden>
          <Typography variant="h3">Change Your Password</Typography>
        </section>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Divider style={{ width: '0' }} />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              {...register('currentPassword', {
                required: true,
                minLength: 8
              })}
              name="currentPassword"
              type="password"
              value={val.currentPassword}
              onChange={(e) => handleChange(e)}
              label="Current Password"
              required
              fullWidth
            />
            {errors.currentPassword &&
              errors.currentPassword.type === 'required' &&
              errorMessage(required)}
            {errors.currentPassword &&
              errors.currentPassword.type === 'minLength' &&
              errorMessage(newPass)}
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              {...register('newPassword', {
                required: true,
                minLength: 8
              })}
              name="newPassword"
              type="password"
              value={val.newPassword}
              onChange={(e) => handleChange(e)}
              label="New Password"
              required
              fullWidth
            />
            {errors.newPassword &&
              errors.newPassword.type === 'required' &&
              errorMessage(required)}
            {errors.newPassword &&
              errors.newPassword.type === 'minLength' &&
              errorMessage(newPass)}
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              {...register('confirmPassword', {
                required: true,
                validate: (value: string) => value === val.newPassword || newPass,
                minLength: 8
              })}
              name="confirmPassword"
              type="password"
              value={val.confirmPassword}
              onChange={(e) => handleChange(e)}
              label="Confirm Password"
              required
              fullWidth
            />
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'required' &&
              errorMessage(required)}
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'validate' &&
              errorMessage(confirmPass)}
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'minLength' &&
              errorMessage(confirmPass)}
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Button
              className={button}
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Change Password
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Toast
        open={open}
        type={responseMessage.status}
        onClose={handleAlertClose}
        message={responseMessage.message}
      />
    </Grid>
  );
};

export default ChangePassword;
