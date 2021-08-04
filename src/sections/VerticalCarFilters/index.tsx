import {
  Grid,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import FilterAccordion from "../../components/Accordion";
import {
  Carfilters,
  CarFiltersData,
} from "../../Utils/constants/language/en/filtersData";
import { City, State } from "country-state-city";
import InputFieldWithButton from "../../components/InputField/InputFieldWithButton";
import InputField from "../../components/InputField";
import { fieldNames } from "../../Utils/constants/formsConstants";
import { useForm } from "../../pages/carsListing/useForm";
import VerticalFilterStyles from "./styles";
import DialogBox from "../../components/DialogBox";

export interface CarFiltersProps {}

const CarFilters: React.FC<CarFiltersProps> = () => {
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
  const mainCarTypes = ["Sedan", "Hatchback", "Pick Up"];
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
    handleSingleCheckBoxChange,
    handleSubmit,
  } = useForm(true);
  return (
    <div>
      <FilterAccordion title={CATEGORIES}>
        <InputFieldWithButton
          name={fieldNames.categories}
          label="Eg. Honda In Lahore"
          value={values.categories}
          error={errors.categories}
          onChange={handleInputChange}
          handleClick={handleSubmit}
        />
      </FilterAccordion>
      <FilterAccordion title={PRICE_RANGE}>
        <Grid container direction="column">
          <Grid item container spacing={1}>
            <Grid item xs={5}>
              <InputField
                name={fieldNames.priceFrom}
                label="From"
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
                label="To"
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
        <Grid item container spacing={1}>
          <Grid item xs={5}>
            <InputField
              name={fieldNames.yearFrom}
              label="From"
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
              label="To"
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
        <InputField label="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={PROVINCE}>
        <FormGroup>
          {provinces.map((province) => (
            <FormControlLabel
              key={`province-${province.name}`}
              control={
                <Checkbox
                  checked={values.province.indexOf(province.name) > -1}
                  onChange={(e) => handleCheckboxChange(e, "province")}
                  name={province.name}
                  color="secondary"
                  size="small"
                />
              }
              label={province.name}
            />
          ))}
        </FormGroup>
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
          <DialogBox title="Select Cities">
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
                            size="small"
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
        <FormGroup>
          {cityNames
            .filter((item) => majorCities.includes(item))
            .map((city) => (
              <FormControlLabel
                key={`city-${city}`}
                control={
                  <Checkbox
                    checked={values.registrationCity.indexOf(city) > -1}
                    onChange={(e) =>
                      handleCheckboxChange(e, "registrationCity")
                    }
                    name={city}
                    color="secondary"
                  />
                }
                label={city}
              />
            ))}

          <DialogBox title="Select Cities">
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
                            size="small"
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
      <FilterAccordion title={MILEAGE}>
        <Grid item container spacing={1}>
          <Grid item xs={5}>
            <InputField
              name={fieldNames.mileageFrom}
              label="From"
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
              label="To"
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
                  size="small"
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={ENGINE_TYPE}>
        <FormGroup>
          {Carfilters.ENGINE_TYPE.map((type) => (
            <FormControlLabel
              key={`engine-type-${type}`}
              control={
                <Checkbox
                  checked={values.engineType.indexOf(type) > -1}
                  onChange={(e) => handleCheckboxChange(e, "engineType")}
                  name={type}
                  color="secondary"
                  size="small"
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={ENGINE_CAPACITY}>
        <Grid item container spacing={1}>
          <Grid item xs={5}>
            <InputField
              name={fieldNames.engineCapacityFrom}
              label="From"
              value={values.engineCapacityRange[0]}
              error={errors.engineCapacityFrom}
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
              name={fieldNames.engineCapacityTo}
              label="To"
              value={values.engineCapacityRange[1]}
              error={errors.engineCapacityTo}
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
      <FilterAccordion title={COLOR}>
        <InputField label="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={BODY_TYPE}>
        <FormGroup>
          {Carfilters.BODY_TYPE.filter((item) =>
            mainCarTypes.includes(item.name)
          ).map((type) => (
            <FormControlLabel
              key={`body-type-${type.name}`}
              control={
                <Checkbox
                  checked={values.bodyType.indexOf(type.name) > -1}
                  onChange={(e) => handleCheckboxChange(e, "bodyType")}
                  name={type.name}
                  color="secondary"
                  size="small"
                />
              }
              label={
                <div style={{ display: "flex" }}>
                  <img
                    width="60px"
                    style={{ margin: "0 10px" }}
                    src={type.icon}
                    alt={type.name}
                  />
                  <Typography>{type.name}</Typography>
                </div>
              }
            />
          ))}

          <DialogBox title="Select Body Type">
            <Grid container spacing={2}>
              {Carfilters.BODY_TYPE.map((type) => (
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    key={`body-type-${type.name}`}
                    control={
                      <Checkbox
                        checked={values.bodyType.indexOf(type.name) > -1}
                        onChange={(e) => handleCheckboxChange(e, "bodyType")}
                        name={type.name}
                        color="secondary"
                        size="small"
                      />
                    }
                    label={
                      <div style={{ display: "flex" }}>
                        <img
                          width="60px"
                          style={{ margin: "0 10px" }}
                          src={type.icon}
                          alt={type.name}
                        />
                        <Typography>{type.name}</Typography>
                      </div>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </DialogBox>
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={MODEL_CATEGORY}>
        <InputField label="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={PICTURE_AVAILABILITY}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.withPicture}
                onChange={handleSingleCheckBoxChange}
                name={fieldNames.pictureAvailability}
                color="secondary"
                size="small"
              />
            }
            label={Carfilters.PICTURE_AVAILABILITY[0]}
          />
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={VIDEO_AVAILABILITY}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.withVideo}
                onChange={handleSingleCheckBoxChange}
                name={fieldNames.videoAvailability}
                color="secondary"
                size="small"
              />
            }
            label={Carfilters.VIDEO_AVAILABILITY[0]}
          />
        </FormGroup>
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
                  size="small"
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
