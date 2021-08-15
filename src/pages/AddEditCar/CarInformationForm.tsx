import {
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import SelectComponent from "./SelectComponent";
import { City } from "country-state-city";
import addEditCarData from "../../Utils/constants/language/en/addEditCarData";
import { Colors } from "../../Utils/constants/colors/colors";
import SelectInputComponent from "./SelectInputComponent";
import {NO_REGISTRATION_DISPLAY} from "../../Utils/constants/language/en/addEditCarTexts"

interface CarInformationFormProps {
  formData: any;
  handleChange: (event: any) => void;
  requireError: any;
  handleChangeSelect: any;
}

const CarInformationForm = ({
  formData,
  handleChange,
  requireError,
  handleChangeSelect,
}: CarInformationFormProps) => {
  const classes = useStyles();
  const cities = City.getCitiesOfCountry("PK");
  const extractedCityNames = cities?.map((item) => item.name);
  let cityNames = [];
  if (extractedCityNames) {
    cityNames.push(...extractedCityNames);
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6}>
        <SelectInputComponent
          dataArray={cityNames}
          name={"city"}
          className={classes.selectFields}
          value={formData.city}
          label={addEditCarData.fields.selectCity.label}
          required
          error={requireError.city}
          helperText={requireError.city ? addEditCarData.requiredFieldText : ""}
          handleChangeSelect={handleChangeSelect}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <SelectComponent
          menuItem={addEditCarData.fields.carMake.menu}
          name={"carMake"}
          className={classes.selectFields}
          value={formData.carMake}
          label={addEditCarData.fields.carMake.label}
          required
          error={requireError.carMake}
          helperText={
            requireError.carMake ? addEditCarData.requiredFieldText : ""
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <SelectInputComponent
          dataArray={cityNames}
          name={"registeredIn"}
          className={classes.selectFields}
          value={formData.registeredIn}
          label={addEditCarData.fields.registeredIn.label}
          required
          error={requireError.registeredIn}
          helperText={
            requireError.registeredIn ? addEditCarData.requiredFieldText : ""
          }
          handleChangeSelect={handleChangeSelect}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <SelectComponent
          menuItem={addEditCarData.fields.carModel.menu}
          name={"carModel"}
          className={classes.selectFields}
          value={formData.carModel}
          label={addEditCarData.fields.carModel.label}
          required
          error={requireError.carModel}
          helperText={
            requireError.carModel ? addEditCarData.requiredFieldText : ""
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <SelectComponent
          menuItem={addEditCarData.fields.modelYear.menu}
          name={"modelYear"}
          className={classes.selectFields}
          value={formData.modelYear}
          label={addEditCarData.fields.modelYear.label}
          required
          error={requireError.modelYear}
          helperText={
            requireError.modelYear ? addEditCarData.requiredFieldText : ""
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <SelectComponent
          menuItem={addEditCarData.fields.bodyColor.menu}
          name={"bodyColor"}
          className={classes.selectFields}
          value={formData.bodyColor}
          label={addEditCarData.fields.bodyColor.label}
          required
          error={requireError.bodyColor}
          helperText={
            requireError.bodyColor ? addEditCarData.requiredFieldText : ""
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          type="number"
          name={"mileage"}
          className={classes.selectFields}
          value={formData.mileage}
          label={addEditCarData.fields.mileage.label}
          required
          error={requireError.mileage}
          helperText={
            requireError.mileage ? addEditCarData.requiredFieldText : ""
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          name={"price"}
          type="number"
          className={classes.selectFields}
          value={formData.price}
          label={addEditCarData.fields.price.label}
          required
          error={requireError.price}
          helperText={
            requireError.price ? addEditCarData.requiredFieldText : ""
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          name={"registrationNo"}
          type="text"
          className={classes.selectFields}
          value={formData.registrationNo}
          label={addEditCarData.fields.registrationNo.label}
          required
          error={requireError.registrationNo}
          helperText={
            requireError.registrationNo ? addEditCarData.requiredFieldText : ""
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Typography variant="h3" color="primary">
          {NO_REGISTRATION_DISPLAY}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-multiline-static"
          label={addEditCarData.fields.description.label}
          multiline
          name="description"
          required
          rows={4}
          placeholder={addEditCarData.fields.description.defaultValue}
          style={{ width: "100%" }}
          value={formData.description}
          onChange={handleChange}
          error={requireError.registrationNo}
          helperText={
            requireError.registrationNo ? addEditCarData.requiredFieldText : ""
          }
        />
      </Grid>
    </Grid>
  );
};
export default CarInformationForm;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sterik: {
      color: "red",
    },
    selectFields: {
      width: "100%",
    },
    inputLabel: {
      fontSize: "16px",
      color: Colors.textPrimary,
    },
  })
);
