import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Grid
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { CANCEL, SUBMIT } from '../../Utils/constants/language/en/buttonLabels';
import {
  AppointmentFormDescription,
  AppointmentFormTitle
} from '../../Utils/constants/language/Text';
interface AppointmentFormProps {
  open: boolean;
  handleClose: () => void;
  user: any;
  carData: any;
  handleSubmit: (firstName: string, lastName: string, number: number | string, carLocation: string) => void;
}
const AppointmentForm = ({
  open,
  handleClose,
  user,
  carData,
  handleSubmit
}: AppointmentFormProps) => {
  const [number, setNumber] = useState<string|number>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [carLocation, setCarLocation] = useState("")
  const [error, setError] = useState({ firstName: false, lastName: false, number: false, carLocation: false })
  useEffect(()=>{
    setNumber(user.phone?.slice(3, user.phone.length) || '')
    setFirstName(user.firstName)
    setLastName(user.lastName)
  },[open])
  const onSubmit = () => {
    let tempError = error
    if (!firstName) {
      tempError.firstName = true
      setError({ ...tempError, firstName: true })
    } else {
      tempError.firstName = false
      setError({ ...tempError, firstName: false })
    }
    if (!lastName) {
      tempError.lastName = true
      setError({ ...tempError, lastName: true })
    } else {
      tempError.lastName = false
      setError({ ...tempError, lastName: false })
    }
    if (!user.phone) {
        tempError.number = true
        setError({...tempError, number:true})
    }else{
        tempError.number = false
        setError({...tempError, number:false})
    }
    if (!carLocation) {
      tempError.carLocation = true
      setError({ ...tempError, carLocation: true })
    } else {
      tempError.carLocation = false
      setError({ ...tempError, carLocation: false })
    }
    if (tempError.firstName || tempError.number || tempError.carLocation) {
        return
    }
    handleSubmit(firstName, lastName, number, carLocation);
    handleClose();
  };
  const onClose = () =>{
    setFirstName("")
    setLastName("")
      setNumber("")
    setError({ firstName: false, lastName: false, number: false, carLocation: false })  
    handleClose()
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{AppointmentFormTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{AppointmentFormDescription}</DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              label="First Name"
              placeholder={"John"}
              disabled={user.firstName ? true : false}
              fullWidth
              required
              error={error.firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              label="Last Name"
              placeholder={"Doe"}
              disabled={user.lastName ? true : false}
              fullWidth
              required
              error={error.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              label="Mobile Number"
              fullWidth
              type="tel"
              placeholder={'3XXXXXXXXX'}
              disabled={user.phone ? true : false}
              InputProps={{ startAdornment: <span>+92&nbsp;</span> }}
              required
              error={error.number}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="carLocation"
              value={carLocation}
              onChange={(e) => setCarLocation(e.target.value)}
              type="text"
              title="Enter full address where you want to get your car inspected"
              label="Full Address"
              placeholder={"Enter full address of your car..."}
              // disabled={fullName ? true : false}
              fullWidth
              required
              error={error.carLocation}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="secondary">{CANCEL}</Button>
        <Button onClick={onSubmit} variant="contained" color="primary">{SUBMIT}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentForm;
