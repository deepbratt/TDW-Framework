import { useState } from 'react';
import {
  Grid,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  IconButton
} from '@material-ui/core';
import FilterAccordion from '../../components/Accordion';
import {
  Carfilters,
  CarFiltersData
} from '../../Utils/constants/language/en/filtersData';
import { City, State } from 'country-state-city';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import InputFieldWithButton from '../../components/InputField/InputFieldWithButton';
import InputField from '../../components/InputField';
import { fieldNames } from '../../Utils/constants/formsConstants';
import VerticalFilterStyles from './styles';
import DialogBox from '../../components/DialogBox';
import { ICity } from 'country-state-city/dist/lib/interface';
import { APPLIED_FILTERS } from '../../Utils/constants/language/en/buttonLabels';
import PriceInput from './PriceInput';
import NumberInput from './NumberInput';

export interface CarFiltersProps {
  filterProps: any
}

const CarFilters: React.FC<CarFiltersProps> = ({filterProps}) => {
  const [searchResult, setSearchResult] = useState<ICity[]>();
  const {} = VerticalFilterStyles();
  const {
    KEYWORDS,
    PRICE_RANGE,
    YEAR,
    // MAKE,
    PROVINCE,
    CITY,
    REGISTRATION_CITY,
    MILEAGE,
    TRANSMISSION,
    ENGINE_TYPE,
    ENGINE_CAPACITY,
    COLOR,
    BODY_TYPE,
    // PICTURE_AVAILABILITY,
    // VIDEO_AVAILABILITY,
    SELLER_TYPE,
    AD_TYPE
  } = CarFiltersData;

  const majorCities = ['Karachi', 'Islamabad', 'Lahore', 'Peshawar', 'Quetta'];
  const mainCarTypes = ['Sedan', 'Hatchback', 'Pick Up'];
  const mainColors = ['Black', 'White', 'Red'];
  const cities = City.getCitiesOfCountry('PK');
  const provinces = State.getStatesOfCountry('PK');
  const extractedCityNames = cities?.map((item) => item.name);
  let cityNames = [];
  if (extractedCityNames) {
    cityNames.push(...extractedCityNames);
  }
  const {
    values,
    errors,
    handleTextBoxChange,
    handleCheckboxChange,
    handleSingleCheckBoxChange,
    keywords,
    handleTextBoxSubmit,
    appliedFilters,
    removeFilter,
    priceRange, setPriceRange,
    yearRange, setYearRange,
    mileageRange, setMileageRange,
    engineCapacityRange, setEngineCapacityRange,
  } = filterProps;

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let result = City.getCitiesOfCountry('PK')?.filter(
      (city: ICity) =>
        city.name.substr(0, e.target.value.length).toLowerCase() ===
        e.target.value.toLowerCase()
    );
    if (e.target.value === '') {
      result = [];
    }
    setSearchResult(result);
  };

  return (
    <div>
      {appliedFilters.length > 0 && (
        <FilterAccordion title={APPLIED_FILTERS}>
          <Grid container spacing={1}>
            {appliedFilters.map((filter: any) => (
              <Grid
                key={`filter-${filter}`}
                item
                container
                justifyContent="space-between"
                xs={12}
              >
                <Typography variant="body2">{filter}</Typography>
                <IconButton size="small" onClick={() => removeFilter(filter)}>
                  <HighlightOffRoundedIcon color="secondary" fontSize="small" />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </FilterAccordion>
      )}
      <FilterAccordion title={KEYWORDS}>
        <InputFieldWithButton
          name={fieldNames.keywords}
          label="Keywords"
          placeholder="Eg. Honda In Lahore"
          value={keywords}
          errors={errors.keywords}
          onChange={handleTextBoxChange}
          handleClick={() => handleTextBoxSubmit("keywords")}
        />
      </FilterAccordion>
      <FilterAccordion title={PRICE_RANGE}>
        <Grid container direction="column">
          <Grid item container spacing={1}>
            <Grid item xs={5}>
              <InputField
                name={fieldNames.priceFrom}
                label="From"
                value={priceRange[0]}
                errors={errors.priceFrom}
                type="number"
                InputProps={{
                  inputComponent: PriceInput as any,
                }}
                onChange={(e: any) => {
                  let temp = priceRange;
                  temp[0] = e.target.value;
                  setPriceRange([...temp]);
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <InputFieldWithButton
                name={fieldNames.priceTo}
                label="To"
                errors={errors.priceTo}
                value={priceRange[1]}
                type="number"
                InputProps={{
                  inputComponent: PriceInput as any,
                }}
                onChange={(e: any) => {
                  let temp = priceRange;
                  temp[1] = e.target.value;
                  setPriceRange([...temp]);
                }}
                 handleClick={() => handleTextBoxSubmit("priceRange")}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Slider
              value={[priceRange[0], priceRange[1]]}
              min={0}
              max={5000000}
              onChange={(event: any, newValue: number | number[]) => {
                setPriceRange(newValue);
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
              value={yearRange[0]}
              errors={errors.yearFrom}
              type="number"
              InputProps={{
                inputComponent: NumberInput as any,
              }}
              onChange={(e: any) => {
                let temp = yearRange;
                temp[0] = e.target.value;
                setYearRange([...temp]);
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <InputFieldWithButton
              name={fieldNames.yearTo}
              label="To"
              value={yearRange[1]}
              errors={errors.yearTo}
              type="number"
                InputProps={{
                  inputComponent: NumberInput as any,
                }}
              onChange={(e: any) => {
                let temp = yearRange;
                temp[1] = e.target.value;
                setYearRange([...temp]);
              }}
              handleClick={() => handleTextBoxSubmit("yearRange")}
            />
          </Grid>
        </Grid>
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
                    onChange={(e) => handleCheckboxChange(e, 'city')}
                    name={city}
                    color="secondary"
                  />
                }
                label={city}
              />
            ))}
          <DialogBox title="Select Cities">
            <Grid style={{ display: 'flex' }} container>
              <Grid xs={12}>
                <InputField
                  variant="filled"
                  label="Search"
                  onChange={handleSearchInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  {'Search Result'}
                </Typography>
                {searchResult &&
                  searchResult.map((city: ICity) => {
                    return (
                      <FormControlLabel
                        key={`city-${city.name}`}
                        control={
                          <Checkbox
                            checked={values.city.indexOf(city.name) > -1}
                            onChange={(e) => handleCheckboxChange(e, 'city')}
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
              {provinces.map((province) => (
                <Grid item xs={12}>
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
            <Grid style={{ display: 'flex' }} container>
              <Grid xs={12}>
                <InputField
                  variant="filled"
                  label="Search"
                  onChange={handleSearchInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  {'Search Result'}
                </Typography>
                {searchResult &&
                  searchResult.map((city: ICity) => {
                    return (
                      <FormControlLabel
                        key={`city-${city.name}`}
                        control={
                          <Checkbox
                            checked={values.registrationCity.indexOf(city.name) > -1}
                            onChange={(e) => handleCheckboxChange(e, 'registrationCity')}
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
              {provinces.map((province) => (
                <Grid item xs={12}>
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
                            checked={values.registrationCity.indexOf(city.name) > -1}
                            onChange={(e) => handleCheckboxChange(e, "registrationCity")}
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
              value={mileageRange[0]}
              errors={errors.mileageFrom}
              type="number"
              InputProps={{
                inputComponent: NumberInput as any,
              }}
              onChange={(e: any) => {
                let temp = mileageRange;
                temp[0] = e.target.value;
                setMileageRange([...temp]);
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <InputFieldWithButton
              name={fieldNames.mileageTo}
              label="To"
              value={mileageRange[1]}
              errors={errors.mileageTo}
              type="number"
              InputProps={{
                inputComponent: NumberInput as any,
              }}
              onChange={(e: any) => {
                let temp = mileageRange;
                temp[1] = e.target.value;
                setMileageRange([...temp]);
              }}
              handleClick={() => handleTextBoxSubmit("mileageRange")}
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
              value={engineCapacityRange[0]}
              errors={errors.engineCapacityFrom}
              type="number"
              InputProps={{
                inputComponent: NumberInput as any,
              }}
              onChange={(e: any) => {
                let temp = engineCapacityRange;
                temp[0] = e.target.value;
                setEngineCapacityRange([...temp]);
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <InputFieldWithButton
              name={fieldNames.engineCapacityTo}
              label="To"
              value={engineCapacityRange[1]}
              errors={errors.engineCapacityTo}
              type="number"
              InputProps={{
                inputComponent: NumberInput as any,
              }}
              onChange={(e: any) => {
                let temp = engineCapacityRange;
                temp[1] = e.target.value;
                setEngineCapacityRange([...temp]);
              }}
              handleClick={() => handleTextBoxSubmit("engineCapacityRange")}
              />
            
          </Grid>
        </Grid>
            </FilterAccordion>
      <FilterAccordion title={COLOR}>
        <FormGroup>
          {Carfilters.COLOR.filter((item) =>
            mainColors.includes(item.text)
          ).map((type) => (
            <FormControlLabel
              key={`color-type-${type.text}`}
              control={
                <Checkbox
                  checked={values.color.indexOf(type.text) > -1}
                  onChange={(e) => handleCheckboxChange(e, "color")}
                  name={type.text}
                  color="secondary"
                  size="small"
                />
              }
              label={
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      borderRadius: "50%",
                      maxWidth: "20px",
                      maxHeight: "20px",
                      minWidth: "20px",
                      minHeight: "20px",
                      backgroundColor: type.hex,
                      border: "0.2px solid grey",
                      marginRight: "7px",
                    }}
                  />
                  <Typography>{type.text}</Typography>
                </div>
              }
            />
          ))}
          <FormControlLabel
            key={`color-type-other`}
            control={
              <Checkbox
                checked={values.color.indexOf("Other") > -1}
                onChange={(e) => handleCheckboxChange(e, "color")}
                name="Other"
                color="secondary"
                size="small"
              />
            }
            label={
              <div style={{ display: "flex" }}>
                <Typography>Other Colors</Typography>
              </div>
            }
          />

          <DialogBox title="Select Color">
            <Grid container spacing={2}>
              {Carfilters.COLOR.map((type) => (
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    key={`color-type-${type.text}`}
                    control={
                      <Checkbox
                        checked={values.color.indexOf(type.text) > -1}
                        onChange={(e) => handleCheckboxChange(e, "color")}
                        name={type.text}
                        color="secondary"
                        size="small"
                      />
                    }
                    label={
                      <div style={{ display: "flex" }}>
                        <span
                          style={{
                            borderRadius: "50%",
                            maxWidth: "20px",
                            maxHeight: "20px",
                            minWidth: "20px",
                            minHeight: "20px",
                            backgroundColor: type.hex,
                            border: "0.2px solid grey",
                            marginRight: "7px",
                          }}
                        />
                        <Typography>{type.text}</Typography>
                      </div>
                    }
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <FormControlLabel
                  key={`color-type-other`}
                  control={
                    <Checkbox
                      checked={values.color.indexOf("Other") > -1}
                      onChange={(e) => handleCheckboxChange(e, "color")}
                      name="Other"
                      color="secondary"
                      size="small"
                    />
                  }
                  label={
                    <div style={{ display: "flex" }}>
                      <Typography>Other Colors</Typography>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </DialogBox>
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={BODY_TYPE}>
        <FormGroup>
          {Carfilters.BODY_TYPE.filter((item) =>
            mainCarTypes.includes(item.text)
          ).map((type) => (
            <FormControlLabel
              key={`body-type-${type.text}`}
              control={
                <Checkbox
                  checked={values.bodyType.indexOf(type.text) > -1}
                  onChange={(e) => handleCheckboxChange(e, "bodyType")}
                  name={type.text}
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
                    alt={type.text}
                  />
                  <Typography>{type.text}</Typography>
                </div>
              }
            />
          ))}

          <DialogBox title="Select Body Type">
            <Grid container spacing={2}>
              {Carfilters.BODY_TYPE.map((type) => (
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    key={`body-type-${type.text}`}
                    control={
                      <Checkbox
                        checked={values.bodyType.indexOf(type.text) > -1}
                        onChange={(e) => handleCheckboxChange(e, "bodyType")}
                        name={type.text}
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
                          alt={type.text}
                        />
                        <Typography>{type.text}</Typography>
                      </div>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </DialogBox>
        </FormGroup>
      </FilterAccordion> 
      {/* <FilterAccordion title={PICTURE_AVAILABILITY}>
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
      </FilterAccordion> */}
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
      <FilterAccordion title={AD_TYPE}>
        <FormGroup>
          {Carfilters.AD_TYPE.map((type) => (
            <FormControlLabel
              key={`ad-type-${type}`}
              control={
                <Checkbox
                  checked={values.adType.indexOf(type) > -1}
                  onChange={(e) => handleCheckboxChange(e, "adType")}
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