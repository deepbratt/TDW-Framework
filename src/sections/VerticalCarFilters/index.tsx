import {
  Grid,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import FilterAccordion from "../../components/Accordion";
// import {
//   FilterAccordion,
//   InputField,
//   InputFieldWithButton,
// } from "tdw-components-npm";
import {
  Carfilters,
  CarFiltersData,
} from "../../utils/constants/language/en/filtersData";
import { City, State } from "country-state-city";
import InputFieldWithButton from "../../components/InputField/InputFieldWithButton";
import InputField from "../../components/InputField";
import { fieldNames } from "../../utils/constants/formsConstants";
import { useForm } from "../../pages/carsListing/useForm";
import VerticalFilterStyles from "./styles";
import DialogBox from "../../components/DialogBox";
import { useState } from "react";

export interface CarFiltersProps {}

const CarFilters: React.FC<CarFiltersProps> = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {} = VerticalFilterStyles();
  const {
    CATEGORIES,
    PRICE_RANGE,
    YEAR,
    MAKE,
    PROVINCE,
    CITY,
    REGISTRATION_CITY,
    MILEAGE,
    TRANSMISSION,
    ENGINE_TYPE,
    ENGINE_CAPACITY,
    COLOR,
    BODY_TYPE,
    MODEL_CATEGORY,
    PICTURE_AVAILABILITY,
    VIDEO_AVAILABILITY,
    SELLER_TYPE,
  } = CarFiltersData;

  const majorCities = ["Karachi", "Islamabad", "Lahore", "Peshawar", "Quetta"];
  const cities = City.getCitiesOfCountry("PK");
  const provinces = State.getStatesOfCountry("PK");
  const extractedCityNames = cities?.map((item) => item.name);
  let cityNames = [];
  if (extractedCityNames) {
    cityNames.push(...extractedCityNames);
  }
  const {
    values,
    setValues,
    errors,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
  } = useForm(true);
  return (
    <div>
      <FilterAccordion title={CATEGORIES}>
        <InputFieldWithButton
          name={fieldNames.categories}
          placeholder="Eg. Honda In Lahore"
          value={values.categories}
          error={errors.categories}
          onChange={handleInputChange}
          handleClick={handleSubmit}
        />
      </FilterAccordion>
      <FilterAccordion title={PRICE_RANGE}>
        <Grid container direction="column">
          <Grid item container>
            <Grid xs={5}>
              <InputField
                name={fieldNames.priceFrom}
                placeholder="From"
                value={values.priceRange[0]}
                error={errors.priceFrom}
                onChange={(e: any) => {
                  setValues((previousState: any) => {
                    previousState.priceRange[0] = e.target.value;
                    return { ...previousState };
                  });
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <InputFieldWithButton
                name={fieldNames.priceTo}
                placeholder="To"
                value={values.priceRange[1]}
                error={errors.priceTo}
                onChange={(e: any) => {
                  setValues((previousState: any) => {
                    previousState.priceRange[1] = e.target.value;
                    return { ...previousState };
                  });
                }}
                handleClick={handleSubmit}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Slider
              value={[values.priceRange[0], values.priceRange[1]]}
              min={50000}
              max={5000000}
              valueLabelDisplay="auto"
              onChange={(event: any, newValue: number | number[]) => {
                setValues((previousState: any) => {
                  console.log(newValue);
                  previousState.priceRange = newValue as number[];
                  return { ...previousState };
                });
              }}
            />
          </Grid>
        </Grid>
      </FilterAccordion>
      <FilterAccordion title={YEAR}>
        <Grid item container>
          <Grid xs={5}>
            <InputField
              name={fieldNames.yearFrom}
              placeholder="From"
              value={values.yearRange[0]}
              error={errors.yearFrom}
              onChange={(e: any) => {
                setValues((previousState: any) => {
                  previousState.priceRange[0] = e.target.value;
                  return { ...previousState };
                });
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <InputFieldWithButton
              name={fieldNames.yearTo}
              placeholder="To"
              value={values.yearRange[1]}
              error={errors.yearTo}
              onChange={(e: any) => {
                setValues((previousState: any) => {
                  previousState.priceRange[1] = e.target.value;
                  return { ...previousState };
                });
              }}
              handleClick={handleSubmit}
            />
          </Grid>
        </Grid>
      </FilterAccordion>
      <FilterAccordion title={MAKE}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={PROVINCE}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={CITY}>
        <FormGroup>
          {cityNames
            .filter((item) => majorCities.includes(item))
            .map((city) => (
              <FormControlLabel
                key={`city-${city}`}
                control={
                  <Checkbox
                    checked={values.city.indexOf(city) > -1}
                    onChange={(e) => handleCheckboxChange(e, "city")}
                    name={city}
                    color="secondary"
                  />
                }
                label={city}
              />
            ))}
          <Typography variant="button" onClick={() => handleClickOpen()}>
            see more options...
          </Typography>
          <DialogBox
            open={open}
            handleClose={handleClose}
            title="Select Cities"
          >
            <Grid style={{ display: "flex" }} container>
              {provinces.map((province) => (
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" gutterBottom>
                    {province.name}
                  </Typography>
                  {City.getCitiesOfState(
                    province.countryCode,
                    province.isoCode
                  ).map((city) => {
                    return (
                      <FormControlLabel
                        key={`city-${city.name}`}
                        control={
                          <Checkbox
                            checked={values.city.indexOf(city.name) > -1}
                            onChange={(e) => handleCheckboxChange(e, "city")}
                            name={city.name}
                            color="secondary"
                          />
                        }
                        label={city.name}
                      />
                    );
                  })}
                </Grid>
              ))}
            </Grid>
          </DialogBox>
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={REGISTRATION_CITY}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={MILEAGE}>
        <Grid item container>
          <Grid xs={5}>
            <InputField
              name={fieldNames.mileageFrom}
              placeholder="From"
              value={values.mileageRange[0]}
              error={errors.mileageFrom}
              onChange={(e: any) => {
                setValues((previousState: any) => {
                  previousState.mileageRange[0] = e.target.value;
                  return { ...previousState };
                });
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <InputFieldWithButton
              name={fieldNames.mileageTo}
              placeholder="To"
              value={values.mileageRange[1]}
              error={errors.mileageTo}
              onChange={(e: any) => {
                setValues((previousState: any) => {
                  previousState.mileageRange[1] = e.target.value;
                  return { ...previousState };
                });
              }}
              handleClick={handleSubmit}
            />
          </Grid>
        </Grid>
      </FilterAccordion>
      <FilterAccordion title={TRANSMISSION}>
        <FormGroup>
          {Carfilters.TRANSMISSION.map((type) => (
            <FormControlLabel
              key={`transmission-type-${type}`}
              control={
                <Checkbox
                  checked={values.transmission.indexOf(type) > -1}
                  onChange={(e) => handleCheckboxChange(e, "transmission")}
                  name={type}
                  color="secondary"
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={ENGINE_TYPE}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={ENGINE_CAPACITY}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={COLOR}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={BODY_TYPE}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={MODEL_CATEGORY}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={PICTURE_AVAILABILITY}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={VIDEO_AVAILABILITY}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={SELLER_TYPE}>
        <FormGroup>
          {Carfilters.SELLER_TYPE.map((type) => (
            <FormControlLabel
              key={`seller-type-${type}`}
              control={
                <Checkbox
                  checked={values.sellerType.indexOf(type) > -1}
                  onChange={(e) => handleCheckboxChange(e, "sellerType")}
                  name={type}
                  color="secondary"
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </FilterAccordion>
    </div>
  );
};

export default CarFilters;
