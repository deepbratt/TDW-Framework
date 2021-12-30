import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './useStyles';
import { Phone } from '@material-ui/icons';

const FixAppointment: React.FC<any> = () => {
  const { mailBtn } = useStyles();
  return (
    <Grid container style={{ display: 'inline-block', padding: "20px" }}>
      <Typography variant="h2">Get your Car Verified with a Carokta certified mechanic</Typography>
      <Button
        // fullWidth
        className={mailBtn}
        startIcon={<Phone />}
        // onClick={handleShowPhone}
      >
        Schedule an Appointment
      </Button>
    </Grid>
  )
}

export default FixAppointment;
