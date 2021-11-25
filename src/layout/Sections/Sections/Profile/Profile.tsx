import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Hidden from "@material-ui/core/Hidden"
import Divider from "@material-ui/core/Divider"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import DatePicker from './DatePicker';
import { useStyles } from './useStyles';
import useHooks from './useHooks';
import SideBar from './ProfileSidebar/Sidebar';
import ProfileUpload from './UploadProfile/ProfileUpload';
import RegexInputs from './RegexInputs';
import {
  paths,
  Title,
  profile,
  profileTitle,
  gender,
  buttonText,
  cancelButtonText
} from '../../Utils/sidebarText';
import { City } from '../../../../Utils/country-state-city/index';
import Actions from './useFunctions';
import { updateMe } from '../../../../Utils/hooks/endpoints';
import Toast from '../../../../components/Toast';
import ChangePassword from './ChangePassword';
import MetaTags from '../../../../components/MetaTags';
import PageMeta from '../../../../Utils/constants/language/en/pageData';
import Loader from '../../../../components/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import SelectInputComponent from '../../../../components/SelectInputComponent';

const Profile = () => {
  const { updateProfile, open, setOpen, responseMessage, isLoading } =
    Actions();
  const { user } = useSelector((state: RootState) => state.auth);

  const cities = City.getCitiesOfCountry('PK');
  const extractedCityNames = cities?.map((item: any) => item.name);
  let cityNames = [];
  if (extractedCityNames) {
    cityNames.push(...extractedCityNames);
  }
  const { heading, box, button, cancelButton } =
    useStyles();
  const { handleChange, val, date, handleChangeDate, setVal, Img, setImg } =
    useHooks();

  const handleAlertClose = () => {
    setOpen(false);
  };

  const handleChangeSelect = (name: string, value: any) => {
    setVal({
      ...val,
      [name]: value
    });
  };

  const onSubmit = (): void => {
    updateProfile(updateMe, val, date, Img);
    setVal({
      firstName: val.firstName,
      lastName: val.lastName,
      gender: val.gender,
      country: val.country,
      city: val.city,
      userName: val.userName,
      email: val.email,
      currentPassword: val.currentPassword,
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleCancel = (): void => {
    if (!val.currentPassword && !val.confirmPassword && !val.newPassword) {
      setVal({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        gender: user.gender || '',
        country: '',
        city: user.city || '',
        userName: user.username || '',
        email: user.email || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <Grid container>
      <MetaTags
        title={PageMeta.profile.title}
        canonical={PageMeta.profile.canonical}
      />
      <Loader open={isLoading} isBackdrop={true} />
      <Paper elevation={4} className={box}>
        <Grid item xs={12}>
          <section className={heading}>
            <Hidden mdUp>
              <SideBar key={"Profile"} Title={Title} sidebar={paths} />
            </Hidden>
            <Typography variant="h3">
              {profileTitle}
            </Typography>
          </section>
          <Grid container spacing={4}>
            {/* <Grid container spacing={4}></Grid> */}
          <Grid item xs={12} container justifyContent="center">
            <section style={{ position: 'relative' }}>
              <ProfileUpload setImg={setImg} profile={Img ? Img : profile} />
            </section>
          </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                name="firstName"
                value={val.firstName}
                onChange={(e) => handleChange(e)}
                label="First Name"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                name="lastName"
                value={val.lastName}
                onChange={(e) => handleChange(e)}
                label="Last Name"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                select
                name="gender"
                value={val.gender}
                onChange={(e) => handleChange(e)}
                label="Gender"
                fullWidth
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                name="userName"
                value={val.userName}
                onChange={(e) => handleChange(e)}
                label="UserName"
                disabled={true}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <DatePicker date={date} handleChangeDate={handleChangeDate} />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SelectInputComponent
                dataArray={cityNames}
                name={'city'}
                value={val.city}
                label={'City'}
                required
                handleChangeSelect={handleChangeSelect}
              />
            </Grid>
            <Grid item xs={12} style={{display:"flex"}}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onSubmit()}
                className={button}
              >
                {buttonText}
              </Button>
              <Button
                variant="contained"
                onClick={() => handleCancel()}
                color="primary"
                className={cancelButton}
              >
                {cancelButtonText}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12}>
              <RegexInputs />
            </Grid>
            <Grid item xs={12}>
              <Divider style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12}>
              <ChangePassword />
            </Grid>
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

export default Profile;
