import {
  Grid,
  Typography,
  MenuItem,
  TextField,
  Hidden,
  Divider,
} from "@material-ui/core";
import { useState } from "react";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import DatePicker from "./DatePicker";
import { useStyles } from "./useStyles";
import useHooks from "./useHooks";
import SideBar from "./ProfileSidebar/Sidebar";
import CustomButton from "../../../../components/CustomButton";
import ProfileUpload from "./UploadProfile/ProfileUpload";
import RegexInputs from "./RegexInputs";
import {
  paths,
  Title,
  profile,
  profileTitle,
  gender,
  buttonText,
  cancelButtonText,
} from "../../Utils/sidebarText";
import { City } from "country-state-city";
import Actions from "./useFunctions";
import { updateMe } from "../../../../Utils/hooks/endpoints";
import Toast from "../../../../components/Toast";
import ChangePassword from "./ChangePassword";
import MetaTags from "../../../../components/MetaTags";
import PageMeta from "../../../../Utils/constants/language/en/pageData";

const Profile = () => {
  const { updateProfile,open,setOpen,responseMessage} = Actions();

  const city = City.getCitiesOfCountry("PK");
  const {
    root,
    select,
    img,
    heading,
    box,
    button,
    btnBox,
    uploadBtn,
    cancelButton,
  } = useStyles();
  const {
    handleChange,
    val,
    date,
    handleChangeDate,
    setVal,
    Img,
    setImg
  } = useHooks();
  

  const handleAlertClose = () => {
    setOpen(false);
  };

  const onSubmit = (): void => {
    updateProfile(updateMe, val, date, Img);
  };
  

  const handleCancel = (): void => {
    if (!val.currentPassword && !val.confirmPassword && !val.newPassword) {
      setVal({
        firstName: "",
        lastName: "",
        gender: "",
        country: "",
        city: "",
        userName: "",
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <Grid container>
      <MetaTags
        title={PageMeta.profile.title}
        description={PageMeta.profile.description}
        canonical={PageMeta.profile.canonical}
        keywords={PageMeta.profile.keywords}
      />
      <Grid className={box} item xs={12}>
        <section className={heading}>
          <Hidden mdUp>
            <SideBar Title={Title} sidebar={paths} />
          </Hidden>
          <Typography variant="h3">{profileTitle}</Typography>
        </section>
        <Grid className={img} item xs={12}>
          <section style={{ position: "relative" }}>
            <ProfileUpload setImg={setImg} profile={Img ? Img :profile} />
            <section className={uploadBtn}>
              <AddAPhotoIcon />
            </section>
          </section>
        </Grid>
        <Grid container className={root} item xs={12}>
          <Grid item container style={{ display: "flex", flexFlow: "wrap" }} xs={12}>
            <Grid style={{ margin: "30px 10px" }} item lg={5} xs={12}>
              <TextField
                className={select}
                name="firstName"
                value={val.firstName}
                onChange={(e) => handleChange(e)}
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid style={{ margin: "30px 10px" }} item lg={5} xs={12}>
              <TextField
                className={select}
                name="lastName"
                value={val.lastName}
                onChange={(e) => handleChange(e)}
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid style={{ margin: "30px 10px" }} item lg={5} xs={12}>
              <TextField
                className={select}
                select
                name="gender"
                value={val.gender}
                onChange={(e) => handleChange(e)}
                label="Gender"
                variant="outlined"
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid style={{ margin: "30px 10px" }} item lg={5} xs={12}>
              <TextField
                className={select}
                name="userName"
                value={val.userName}
                onChange={(e) => handleChange(e)}
                label="UserName"
                variant="outlined"
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", flexFlow: "wrap" }} xs={12}>
            <Grid style={{ margin: "30px 10px " }} item lg={5} xs={12}>
              <DatePicker date={date} handleChangeDate={handleChangeDate} />
            </Grid>
            <Grid style={{ margin: "30px 10px " }} item lg={5} xs={12}>
              <TextField
                className={select}
                select
                name="city"
                value={val.city}
                onChange={(e) => handleChange(e)}
                label="City"
                variant="outlined"
                defaultValue={val.city}
              >
                {city &&
                  city.map((data: any, index: number) => {
                    return (
                      <MenuItem key={index} value={data.name}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
              </TextField>
            </Grid>
            <Grid item lg={2} xs={12} className={btnBox}>
                <CustomButton
                  styles={button}
                  variant="contained"
                  handleClick={() => onSubmit()}
                >
                  {buttonText}
                </CustomButton>
              </Grid>
               <Grid item lg={2} xs={12} className={btnBox}>
                <CustomButton
                  styles={cancelButton}
                  variant="contained"
                  handleClick={() => handleCancel()}
                >
                  {cancelButtonText}
                </CustomButton>
              </Grid>
          </Grid>
        </Grid>
        <Divider />
        <RegexInputs />
        <Divider />
        <ChangePassword />
      </Grid>
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
