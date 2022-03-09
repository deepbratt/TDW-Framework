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
  handleSubmit: (firstName: string, lastName: string, number: number | string, altNumber: number | string, carCity: string, carLocation: string) => void;
}
const AppointmentForm = ({
  open,
  handleClose,
  user,
  carData,
  handleSubmit
}: AppointmentFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carModelYear, setCarModelYear] = useState<string | number>("");
  const [carBodyColor, setCarBodyColor] = useState("");
  const [number, setNumber] = useState<string | number>("");
  const [altNumber, setAltNumber] = useState<string | number>("");
  const [carCity, setCarCity] = useState("");
  const [carProvince, setCarProvince] = useState("");
  const [carAddress, setCarAddress] = useState("");
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    number: false,
    altNumber: false,
    carLocation: {
      city: false,
      address: false
    }
  })
  useEffect(() => {
    setNumber(user.phone?.slice(3, user.phone.length) || '')
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setCarMake(carData.make)
    setCarModel(carData.model)
    setCarModelYear(carData.modelYear)
    setCarBodyColor(carData.bodyColor)
    setCarCity(carData.city)
    setCarProvince(carData.province)
  }, [open])

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
      setError({ ...tempError, number: true })
    } else {
      tempError.number = false
      setError({ ...tempError, number: false })
    }
    if (!carCity) {
      tempError.carLocation.city = true
      setError({
        ...tempError,
        carLocation: {
          city: true,
          address: false
        }
      })
    } else {
      tempError.carLocation.city = false
      setError({
        ...tempError,
        carLocation: {
          city: false,
          address: false
        }
      })
    }
    if (!carAddress) {
      tempError.carLocation.address = true
      setError({
        ...tempError,
        carLocation: {
          city: false,
          address: true
        }
      })
    } else {
      tempError.carLocation.address = false
      setError({
        ...tempError,
        carLocation: {
          city: false,
          address: false
        }
      })
    }
    if (tempError.firstName || tempError.number || tempError.carLocation.city || tempError.carLocation.address) {
      return
    }
    handleSubmit(firstName, lastName, number, altNumber, carCity, carAddress);
    handleClose();
  };

  const onClose = () => {
    setFirstName("")
    setLastName("")
    setNumber("")
    setError({
      firstName: false,
      lastName: false,
      number: false,
      altNumber: false,
      carLocation: {
        city: false,
        address: false
      }
    })
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
          <Grid item xs={6}>
            <TextField
              name="carMake"
              value={carMake}
              onChange={(e) => setCarMake(e.target.value)}
              type="text"
              label="Car Make"
              placeholder={"Honda"}
              disabled={carData.make ? true : false}
              fullWidth
              required
            // error={error.lastName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="carModel"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              type="text"
              label="Car Model"
              placeholder={"Civc"}
              disabled={carData.model ? true : false}
              fullWidth
              required
            // error={error.lastName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="carModelYear"
              value={carModelYear}
              onChange={(e) => setCarModelYear(e.target.value)}
              type="text"
              label="Model year"
              placeholder={"2011"}
              disabled={carData.modelYear ? true : false}
              fullWidth
              required
            // error={error.lastName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="carBodyColor"
              value={carBodyColor}
              onChange={(e) => setCarBodyColor(e.target.value)}
              type="text"
              label="Body Color"
              placeholder={"Body color of your car"}
              disabled={carData.bodyColor ? true : false}
              fullWidth
              required
            // error={error.lastName}
            />
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <TextField
              name="alternativeNumber"
              value={altNumber}
              onChange={(e) => setAltNumber(e.target.value)}
              type="tel"
              title="Alternative Phone Number"
              label="Alternative Mobile Number"
              placeholder={'3XXXXXXXXX'}
              InputProps={{ startAdornment: <span>+92&nbsp;</span> }}
              fullWidth
              error={error.altNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="carCity"
              value={carCity}
              onChange={(e) => setCarCity(e.target.value)}
              type="text"
              title="Car City"
              label="City"
              placeholder={"Enter City of your car."}
              fullWidth
              required
              error={error.carLocation.city}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="carProvince"
              value={carProvince}
              onChange={(e) => setCarProvince(e.target.value)}
              type="text"
              title="Car Province"
              label="Province"
              placeholder={"Enter Province of your car"}
              fullWidth
              required
            // error={error.carLocation.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="carAddress"
              value={carAddress}
              onChange={(e) => setCarAddress(e.target.value)}
              type="text"
              title="Full address of Car"
              label="Full Address"
              placeholder={"Enter full address of your car"}
              fullWidth
              required
              error={error.carLocation.address}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="secondary">{CANCEL}</Button>
        <Button onClick={onSubmit} variant="contained" style={{ backgroundColor: '#092C4C', color: '#FFF ' }}>{SUBMIT}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentForm;
