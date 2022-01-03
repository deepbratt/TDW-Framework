import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { useForm } from 'react-hook-form';
import useHooks from '../useHooks';
import { useStyles } from '../useStyles';
import Actions from '../useFunctions';
import { updateMe } from '../../../../../Utils/hooks/endpoints';
import Toast from '../../../../../components/Toast';
import Loader from '../../../../../components/Loader';
import MetaTags from '../../../../../components/MetaTags';
import PageMeta from '../../../../../Utils/constants/language/en/pageData';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { paths, Title } from '../../../Utils/sidebarText';
import SideBar from '../ProfileSidebar/Sidebar';
import { RootState } from '../../../../../redux/store';

const About: React.FC = () => {
  const { heading, box, button } = useStyles();
  const { handleSubmit } = useForm();
  const { isLoading, updateProfile, setOpen, open, responseMessage } =
    Actions();
    const { user } = useSelector((state: RootState) => state.auth);
  const { handleChange, val, setVal, number } = useHooks();

  const handleAlertClose = () => {
    setOpen(false);
  };

  const onSubmit = (): void => {
    setVal({
      firstName: val.firstName,
      lastName: val.lastName,
      gender: val.gender,
      country: val.country,
      city: val.city,
      userName: val.userName,
      email: val.email,
      currentPassword: val.currentPassword,
      about: val.about,
      description: val.description,
      newPassword: '',
      confirmPassword: ''
    });
    let phone = '+92' + number;
    let numberOrEmaildata =
      user.phone !== phone ? { phone: phone } : { email: val.email };
    let data = { ...val, ...numberOrEmaildata };
    updateProfile(updateMe, data);
  };

  return (
    <Grid style={{ display: 'flex' }} container>
      <MetaTags
        title={PageMeta.about.title}
        canonical={PageMeta.about.canonical}
      />
      <Loader open={isLoading} isBackdrop={true} />
      <Paper elevation={4} className={box}>
        <section className={heading}>
          <Hidden mdUp>
            <SideBar Title={Title} sidebar={paths} />
          </Hidden>
          <Typography variant="h3">About</Typography>
        </section>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Divider style={{ width: '0' }} />
          </Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              name="about"
              value={val.about}
              onChange={(e) => handleChange(e)}
              label="About"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item lg={6} xs={12}>
            <TextField
              multiline
              rows={4}
              name="description"
              value={val.description}
              onChange={(e) => handleChange(e)}
              label="Description"
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className={button}
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Update
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

export default About;
