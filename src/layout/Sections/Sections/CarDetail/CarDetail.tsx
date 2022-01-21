import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './useStyles';
import { SHOW_PHONE } from '../../../../Utils/constants/language/en/buttonLabels';
import { API_ENDPOINTS } from '../../../../Utils/API/endpoints';
import Toast from '../../../../components/Toast';
import Loader from '../../../../components/Loader';
// import ConfirmationDialog from '../../../../components/ConfirmationDialog';
// import {
//   SOLD_HERE_DIALOG_MESSAGE,
//   SOLD_HERE_DIALOG_OK,
//   SOLD_HERE_DIALOG_REJECT,
//   SOLD_HERE_DIALOG_TITLE
// } from '../../../../Utils/constants/language/en/addEditCarTexts';
import { Box } from '@material-ui/core';
import { Phone } from '@material-ui/icons';
import Actions from '../../../../pages/carDetail/useFunctions';
import LoginModal from '../../../../pages/login/LoginModal';
import CarInformation from './CarInformation';
import AppointmentForm from '../../../../components/AppointmentForm';
import { addData } from '../../../../Utils/API/API';

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
  const { user } = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  // const [openDialog, setOpenDialog] = useState(false);
  const [toastType, setToastType] = useState('');
  const [signinModal, setSigninModal] = useState(false);
  // const [appointmentForm, setAppointmentForm] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const { open, setOpen, responseMessage } = Actions();
  const { root, type, numBtn, icon } = useStyles();
  const defaultMarginTop = '20px';

  const handleShowPhone = () => {
    if (!user._id) {
      setSigninModal(true);
    }
    if (showPhone) {
      window.location.href = `tel:${
        data.associatedPhone || data.createdBy.phone
      }`;
      return;
    }
    if (user._id && user._id !== data.createdBy._id) {
      setIsLoading(true);
      addData(
        `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.SHOW_PHONE}/${data._id}`
      ).then((response) => {
        if (response && response.data && response.data.status === 'success') {
          setShowPhone(true);
        } else {
          let msg =
            response && response.response && response.response.data.message
              ? response.response.data.message
              : response.response
              ? response.response
              : 'Network Error';
          setToastMessage(msg);
          setToastType('error');
          setOpenToast(true);
        }
        setIsLoading(false);
      });
      //show phone api
    }
  };

  useEffect(() => {
    setShowPhone(showPhone || user._id === data.createdBy._id);
  }, []);

  return (
    <Grid container style={{ display: 'inline-block' }}>
      <Grid className={root} container item xs={12}>
        <Grid container justifyContent="space-between">
          {/* <Grid item xs={12} style={{ marginTop: defaultMarginTop }}>
            <CarDescription description={data?.description} />
          </Grid> */}
          <Grid item xs={12}>
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
          <Grid item xs={12} style={{ marginTop: defaultMarginTop }}>
            <Button
              fullWidth
              className={numBtn}
              startIcon={<Phone />}
              onClick={handleShowPhone}
            >
              {showPhone
                ? data.associatedPhone || data.createdBy.phone
                : SHOW_PHONE}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* <ConfirmationDialog
        open={openDialog}
        message={SOLD_HERE_DIALOG_MESSAGE}
        title={SOLD_HERE_DIALOG_TITLE}
        confirmBtnLabel={SOLD_HERE_DIALOG_OK}
        rejectBtnLabel={SOLD_HERE_DIALOG_REJECT}
      /> */}
      {/* <AppointmentForm
        open={appointmentForm}
        handleClose={() => setAppointmentForm(false)}
        user={user}
        carData={data}
        handleSubmit={(name, number) => null}
      /> */}
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
