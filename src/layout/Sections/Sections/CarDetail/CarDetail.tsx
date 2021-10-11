import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './useStyles';
import { Colors } from '../../Utils/color.constants';
import {
  ACTIVE,
  INACTIVE,
  REQUEST_APPOINTMENT,
  SOLD,
  UNSOLD
} from '../../../../Utils/constants/language/en/buttonLabels';
import EditOutlined from '@material-ui/icons/EditOutlined';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { routes } from '../../../../routes/paths';
import { updateData } from '../../../../Utils/API/API';
import { API_ENDPOINTS } from '../../../../Utils/API/endpoints';
import Toast from '../../../../components/Toast';
import Loader from '../../../../components/Loader';
import ConfirmationDialog from '../../../../components/ConfirmationDialog';
import {
  SOLD_HERE_DIALOG_MESSAGE,
  SOLD_HERE_DIALOG_OK,
  SOLD_HERE_DIALOG_REJECT,
  SOLD_HERE_DIALOG_TITLE
} from '../../../../Utils/constants/language/en/addEditCarTexts';
import { Box, IconButton } from '@material-ui/core';
import { Favorite, LocationOnOutlined, Phone } from '@material-ui/icons';
import { addToFavs, removeFavs } from '../../../../Utils/hooks/endpoints';
import Actions from '../../../../pages/carDetail/useFunctions';
import LoginModal from '../../../../pages/login/LoginModal';
import CarInformation from './CarInformation';
import AppointmentForm from '../../../../components/AppointmentForm';

const CarDetail: React.FC<any> = ({
  Title,
  location,
  rating,
  mainButton,
  numButton,
  array,
  locIcon,
  ratIcon,
  mailIcon,
  numbIcon,
  desc,
  price,
  paragraph,
  modelYear,
  engineType,
  mileage,
  transmission,
  createdBy,
  data
}) => {
  const history = useHistory();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [isSold, setIsSold] = useState(data.isSold);
  const [isActive, setIsActive] = useState(data.active);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(data.isFav);
  const [toastType, setToastType] = useState('');
  const [signinModal, setSigninModal] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState(false);
  const { addFavs, open, setOpen, responseMessage } = Actions();
  const { root, sub, type, numBtn, icon, btn } = useStyles();
  const { navyBlue } = Colors;
  const defaultMarginTop = '50px';
  const toggleSold = (soldHere: boolean = false) => {
    let soldUnsold = isSold
      ? API_ENDPOINTS.MARK_UNSOLD
      : API_ENDPOINTS.MARK_SOLD;
    if (!isSold && soldHere) {
      // api to add the car amount in sold on tezdealz collection
    }
    if (openDialog) {
      setOpenDialog(false);
    }
    let requestBody = { soldByUs: soldHere };
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${soldUnsold}/${data._id}`,
      !isSold ? requestBody : undefined
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setIsSold(!isSold);
        setToastMessage(response.data.message);
        setToastType('success');
      } else {
        console.log(response);
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };
  const toggleActive = () => {
    let activeInactive = isActive
      ? API_ENDPOINTS.MARK_INACTIVE
      : API_ENDPOINTS.MARK_ACTIVE;
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${activeInactive}/${data._id}`
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setIsActive(!isActive);
        setToastMessage(response.data.message);
        setToastType('success');
      } else {
        console.log(response);
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };

  const toggleFavourite = (itemId: string) => {
    if (user._id) {
      addFavs(isFavorite ? removeFavs : addToFavs, itemId);
      setIsFavorite(!isFavorite);
    } else {
      setSigninModal(true);
    }
  };

  return (
    <Grid container style={{ display: 'inline-block' }}>
      <Grid className={root} container item xs={12}>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={12}
            container
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box>
              <Typography variant="h2">{Title}</Typography>
              <Box display="flex" alignItems="center" className={sub}>
                <LocationOnOutlined fontSize="small" />
                <Typography variant="subtitle1">
                  {/* <img width="20px" src={locIcon} alt="" /> */}
                  {location}
                </Typography>
              </Box>
            </Box>
            {user?._id === createdBy?._id ? null : (
              <IconButton
                onClick={() => toggleFavourite(data._id)}
                className={btn}
              >
                {isFavorite ? (
                  <Favorite color="primary" />
                ) : (
                  <Favorite style={{ color: 'white' }} />
                )}
              </IconButton>
            )}
          </Grid>
          <Grid item xs={12} style={{ marginTop: defaultMarginTop }}>
            <Typography style={{ color: navyBlue }} variant="h2">
              PKR {price?.toLocaleString()}
            </Typography>
          </Grid>
          {isLoggedIn && user._id === createdBy._id ? (
            <Grid
              item
              xs={12}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: defaultMarginTop
              }}
              justifyContent="space-between"
            >
              <Button
                color="primary"
                variant="contained"
                onClick={
                  isSold ? () => toggleSold() : () => setOpenDialog(true)
                }
              >
                {isSold ? UNSOLD : SOLD}
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={() => toggleActive()}
              >
                {isActive ? INACTIVE : ACTIVE}
              </Button>
              <Button
                color="primary"
                variant="contained"
                endIcon={<EditOutlined />}
                onClick={() =>
                  history.push(
                    routes.addEditCar.substr(
                      0,
                      routes.addEditCar.lastIndexOf('/') + 1
                    ) + data._id
                  )
                }
              >
                Edit
              </Button>
            </Grid>
          ) : null}
          {/* <Grid item xs={12} style={{ marginTop: defaultMarginTop }}>
            <CarDescription description={data?.description} />
          </Grid> */}
          <Grid item xs={12} style={{ marginTop: defaultMarginTop }}>
            <CarInformation data={data} />
          </Grid>
          <Grid
            style={{ display: 'flex', marginTop: defaultMarginTop }}
            justifyContent="space-between"
            item
            lg={12}
            xs={12}
          >
            <Box className={type}>
              <img className={icon} src={array?.yearIcon} alt="" width="30px" />
              <Typography
                style={{ paddingTop: '10px', fontWeight: 600 }}
                variant="subtitle1"
              >
                {modelYear}
              </Typography>
            </Box>
            <Box className={type}>
              <img className={icon} src={array?.mileageIcon} alt="" />
              <Typography
                style={{ paddingTop: '10px', fontWeight: 600 }}
                variant="subtitle1"
              >
                {mileage?.toLocaleString()}
              </Typography>
            </Box>
            <Box className={type}>
              <img className={icon} src={array?.petrolIcon} alt="" />
              <Typography
                style={{ paddingTop: '10px', fontWeight: 600 }}
                variant="subtitle1"
              >
                {engineType}
              </Typography>
            </Box>
            <Box className={type}>
              <img className={icon} src={array?.typeIcon} alt="" />
              <Typography
                style={{ paddingTop: '10px', fontWeight: 600 }}
                variant="subtitle1"
              >
                {transmission}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              className={numBtn}
              startIcon={<Phone />}
              onClick={() => setAppointmentForm(true)}
            >
              {REQUEST_APPOINTMENT}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ConfirmationDialog
        handleConfirmation={() => toggleSold(true)}
        handleRejection={() => toggleSold(false)}
        open={openDialog}
        message={SOLD_HERE_DIALOG_MESSAGE}
        title={SOLD_HERE_DIALOG_TITLE}
        confirmBtnLabel={SOLD_HERE_DIALOG_OK}
        rejectBtnLabel={SOLD_HERE_DIALOG_REJECT}
      />
      <AppointmentForm
        open={appointmentForm}
        handleClose={() => setAppointmentForm(false)}
        fullName={user.firstName ? `${user.firstName} ${user.lastName}` : ''}
        phone={user.phone}
        handleSubmit={(name, number) => null}
      />
      <LoginModal
        openModal={signinModal}
        closeModal={() => setSigninModal(false)}
      />
      <Toast
        message={toastMessage}
        type={toastType}
        open={openToast}
        onClose={() => setOpenToast(false)}
      />
      <Loader open={isLoading} isBackdrop={true} />
      <Toast
        open={open}
        type={responseMessage.status}
        message={responseMessage.message}
        onClose={() => setOpen(false)}
      />
    </Grid>
  );
};

export default CarDetail;
