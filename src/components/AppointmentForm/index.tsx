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
  fullName?: string;
  phone?: string;
  handleSubmit: (name: string, number: number | string) => void;
}
const AppointmentForm = ({
  open,
  handleClose,
  fullName,
  phone,
  handleSubmit
}: AppointmentFormProps) => {
  const [number, setNumber] = useState<string|number>("");
  const [name, setName] = useState("");
  const [error, setError] = useState({name:false, number:false})
  useEffect(()=>{
    setNumber(phone?.slice(3, phone.length) || '')
    setName(fullName || "")
  },[open])
  const onSubmit = () => {
    let tempError = error
    if(!name){
        tempError.name = true
        setError({...tempError, name:true})
    }else{
        tempError.name=false
        setError({...tempError, name:false})
    }
    if(!phone){
        tempError.number = true
        setError({...tempError, number:true})
    }else{
        tempError.number = false
        setError({...tempError, number:false})
    }
    if(tempError.name || tempError.number){
        return
    }
    handleSubmit(name, number);
    handleClose();
  };
  const onClose = () =>{
      setName("")
      setNumber("")
    setError({name:false, number:false})  
    handleClose()
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{AppointmentFormTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{AppointmentFormDescription}</DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              label="Full Name"
              placeholder={"John Doe"}
              disabled={fullName ? true : false}
              fullWidth
              required
              error={error.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              label="Mobile Number"
              disabled={phone ? true : false}
              fullWidth
              type="tel"
              placeholder={'3XXXXXXXXX'}
              InputProps={{ startAdornment: <span>+92&nbsp;</span> }}
              required
              error={error.number}
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
