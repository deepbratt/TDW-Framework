import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './useStyles';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import AppointmentForm from '../../../../components/AppointmentForm';
import { CarInspectionHeading, CarInspectionText, ScheduleAppointment } from "../../../../Utils/constants/language/Text";

const FixAppointment: React.FC<any> = ({ createInspectionAppointment, carData }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [appointmentForm, setAppointmentForm] = useState(false);
  const { mailBtn } = useStyles();
  return (
    <Grid container style={{ padding: "20px 25px 0" }}>
      <Typography variant="h2" style={{ color: "#053361" }}>{CarInspectionHeading}</Typography>
      <Grid container style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px"
      }} >
        <p style={{ 
          color: '#05409D', 
          textAlign: "center",
          fontFamily: 'Roboto',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '25px',
          }}>
          {CarInspectionText}
        </p>
        <Button
          className={mailBtn}
          startIcon={<PhoneCallbackIcon />}
          style={{ margin: "20px" }}
          onClick={() => setAppointmentForm(true)}
        >
          {ScheduleAppointment}
        </Button>
      </Grid>
      <AppointmentForm
        open={appointmentForm}
        handleClose={() => setAppointmentForm(false)}
        user={user}
        carData={carData}
        handleSubmit={createInspectionAppointment}
      />
    </Grid>
  )
}

export default FixAppointment;
