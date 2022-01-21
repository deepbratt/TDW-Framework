import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './useStyles';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import AppointmentForm from '../../../../components/AppointmentForm';

const FixAppointment: React.FC<any> = ({ createInspectionAppointment, carData }) => {
  const { user } = useSelector((state: RootState) => state.auth); 
  const [appointmentForm, setAppointmentForm] = useState(false);
  const { mailBtn } = useStyles();
    return (
    <Grid container style={{
      display: 'flex',
      flexDirection: "column",
      padding: "20px",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Typography variant="h2">Get your Car Verified with a Carokta certified mechanic:</Typography>
      <Button 
        className={mailBtn} 
        startIcon={<PhoneCallbackIcon />}
        style={{ margin: "20px" }} 
        onClick={() => setAppointmentForm(true)}
      >
        Schedule an Appointment
      </Button>
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
