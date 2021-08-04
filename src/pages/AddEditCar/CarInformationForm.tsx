import {
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import SelectComponent from "./SelectComponent";
import { City } from "country-state-city";
import addEditCarData from "../../utils/constants/language/en/addEditCarData";
import { Colors } from "../../utils/constants/colors/colors";

interface CarInformationFormProps {
  formData: any;
  handleChange: (event: any) => void;
  requireError: any;
}

const CarInformationForm = ({
  formData,
  handleChange,
  requireError,
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
        <SelectComponent
          menuItem={cityNames}
          name={"city"}
          className={classes.selectFields}
          value={formData.city}
          label={addEditCarData.fields.selectCity.label}
          required
          error={requireError.city}
          helperText={requireError.city ? addEditCarData.requiredFieldText : ""}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <SelectComponent
          menuItem={addEditCarData.fields.carInformation.menu}
          name={"carInfo"}
          className={classes.selectFields}
          value={formData.carInfo}
          label={addEditCarData.fields.carInformation.label}
          required
          error={requireError.carInfo}
          helperText={
            requireError.carInfo ? addEditCarData.requiredFieldText : ""
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <SelectComponent
          menuItem={cityNames}
          name={"registeredIn"}
          className={classes.selectFields}
          value={formData.registeredIn}
          label={addEditCarData.fields.registeredIn.label}
          required
          error={requireError.registeredIn}
          helperText={
            requireError.registeredIn ? addEditCarData.requiredFieldText : ""
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <SelectComponent
          menuItem={addEditCarData.fields.carInformation.menu}
          name={"carInfo"}
          className={classes.selectFields}
          value={formData.carInfo}
          label={addEditCarData.fields.carInformation.label}
          required
          error={requireError.carInfo}
          helperText={
            requireError.carInfo ? addEditCarData.requiredFieldText : ""
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
      <Grid item xs={12}>
        <TextField
          id="standard-multiline-static"
          label={addEditCarData.fields.description.label}
          multiline
          name="description"
          rows={4}
          placeholder={addEditCarData.fields.description.defaultValue}
          style={{ width: "100%" }}
          value={formData.description}
          onChange={handleChange}
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
