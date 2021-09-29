import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Grid,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Divider
} from '@material-ui/core';
import FilterAccordion from '../../components/Accordion';
import {
  Carfilters,
  CarFiltersData
} from '../../Utils/constants/language/en/filtersData';
import { City, State } from 'country-state-city';
import InputFieldWithButton from '../../components/InputField/InputFieldWithButton';
import InputField from '../../components/InputField';
import { fieldNames } from '../../Utils/constants/formsConstants';
import VerticalFilterStyles from './styles';
import DialogBox from '../../components/DialogBox';
import { ICity } from 'country-state-city/dist/lib/interface';
import PriceInput from '../../components/InputField/PriceInput';
import NumberInput from '../../components/InputField/NumberInput';
import AppliedFilters from './appliedFilters';
import defaultBodyType from '../../assets/Cars/sedan.png';
// import MapSearch from '../../components/MapSearch/MapSearch';

export interface CarFiltersProps {
  filterProps: any;
}

const CarFilters: React.FC<CarFiltersProps> = ({ filterProps }) => {
  const [searchResult, setSearchResult] = useState<ICity[]>();
  const { filtersCollection, lastAccordion } = VerticalFilterStyles();
  const {
    PRICE_RANGE,
    YEAR,
    MAKE,
    MODEL,
    PROVINCE,
    CITY,
    REGISTRATION_CITY,
    MILEAGE,
    TRANSMISSION,
    ENGINE_TYPE,
    ENGINE_CAPACITY,
    COLOR,
    BODY_TYPE,
    ASSEMBLY,
    // PICTURE_AVAILABILITY,
    // VIDEO_AVAILABILITY,
    SELLER_TYPE
    // AD_TYPE
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
    handleCheckboxChange,
    // handleSingleCheckBoxChange,
    handleTextBoxSubmit,
    appliedFilters,
    removeFilter,
    removeFilterItem,
    removeRangeFilter,
    rangeValues,
    setRangeValues,
    citiesWithCars,
    makes,
    models,
    bodyTypes
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

  const handleSearchCities = (e: React.ChangeEvent<HTMLInputElement>) => {
    let result = citiesWithCars?.filter(
      (city: any) =>
        city.city.substr(0, e.target.value.length).toLowerCase() ===
        e.target.value.toLowerCase()
    );
    if (e.target.value === '') {
      result = [];
    }
    setSearchResult(result);
  };

  const handleMakesModelSearch = (
    e: React.ChangeEvent<HTMLInputElement>,
    makeModelArray: any[]
  ) => {
    let result = makeModelArray?.filter(
      (item: any) =>
        item.name.substr(0, e.target.value.length).toLowerCase() ===
        e.target.value.toLowerCase()
    );
    if (e.target.value === '') {
      result = [];
    }
    setSearchResult(result);
  };

  return (
    <div>
      {appliedFilters !== {} && (
        <Grid style={{ padding: '0 0 5px 20px' }} container spacing={1}>
          {Object.entries(appliedFilters).map(([keys, values], index) => (
            <AppliedFilters
              key={uuidv4()}
              values={values}
              keys={keys}
              removeFilter={removeFilter}
              removeFilterItem={removeFilterItem}
              removeRangeFilter={removeRangeFilter}
            />
          ))}
        </Grid>
      )}
      {/* <FilterAccordion title={KEYWORDS} expanded hideExpandIcon={true}>
        <InputFieldWithButton
          name={fieldNames.keywords}
          label="Search by Keywords"
          placeholder="Eg. Honda In Lahore"
          value={keywords}
          errors={errors.keywords}
          onChange={handleTextBoxChange}
          handleClick={() => handleTextBoxSubmit('keywords')}
        />
      </FilterAccordion> */}
      <div className={filtersCollection}>
        <Typography variant="h3">Basics</Typography>
      </div>
      <FilterAccordion title={PRICE_RANGE}>
        <Grid container direction="column">
          <Grid item container spacing={1}>
            <Grid item xs={5}>
              <InputField
                name={fieldNames.priceFrom}
                label="From"
                value={rangeValues.priceRange[0]}
                errors={errors.priceFrom}
                type="number"
                InputProps={{
                  inputComponent: PriceInput as any
                }}
                onChange={(e: any) => {
                  setRangeValues((previousValue: any) => {
                    previousValue.priceRange[0] = e.target.value as number;
                    return { ...previousValue };
                  });
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <InputFieldWithButton
                name={fieldNames.priceTo}
                label="To"
                value={rangeValues.priceRange[1]}
                errors={errors.priceTo}
                type="number"
                InputProps={{
                  inputComponent: PriceInput as any
                }}
                onChange={(e: any) => {
                  setRangeValues((previousValue: any) => {
                    previousValue.priceRange[1] = e.target.value as number;
                    return { ...previousValue };
                  });
                }}
                handleClick={() => handleTextBoxSubmit('priceRange')}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Slider
              value={[rangeValues.priceRange[0], rangeValues.priceRange[1]]}
              min={0}
              max={5000000}
              onChange={(event: any, newValue: number | number[]) => {
                setRangeValues((previousValue: any) => {
                  previousValue.priceRange = newValue;
                  return { ...previousValue };
                });
              }}
            />
          </Grid>
        </Grid>
      </FilterAccordion>
      <FilterAccordion title={MAKE}>
        <FormGroup>
          {makes
            .filter((item: any, index: number) => index <= 4)
            .map((type: any) => (
              <FormControlLabel
                key={uuidv4()}
                control={
                  <Checkbox
                    name={fieldNames.make}
                    checked={values.make.indexOf(type.name) > -1}
                    onChange={(e) => handleCheckboxChange(e, type.name)}
                    color="primary"
                    size="small"
                  />
                }
                label={type.name}
              />
            ))}
          {makes.length > 5 && (
            <DialogBox title="Select Makes">
              <Grid style={{ display: 'flex' }} container>
                <Grid xs={12}>
                  <InputField
                    variant="filled"
                    label="Search"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleMakesModelSearch(e, makes)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {searchResult && searchResult.length > 0 && (
                    <Typography variant="h4" gutterBottom>
                      {'Search Result'}
                    </Typography>
                  )}
                  {searchResult &&
                    searchResult.map((item: any) => {
                      return (
                        <FormControlLabel
                          key={uuidv4()}
                          control={
                            <Checkbox
                              name={fieldNames.make}
                              checked={values.make.indexOf(item.name) > -1}
                              onChange={(e) =>
                                handleCheckboxChange(e, item.name)
                              }
                              color="primary"
                              size="small"
                            />
                          }
                          label={item.name}
                        />
                      );
                    })}
                </Grid>
                <Divider variant="middle" />
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    {'Makes'}
                  </Typography>
                </Grid>
                {makes.map((item: any) => {
                  return (
                    <Grid key={uuidv4()} item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name={fieldNames.make}
                            checked={values.make.indexOf(item.name) > -1}
                            onChange={(e) => handleCheckboxChange(e, item.name)}
                            color="primary"
                            size="small"
                          />
                        }
                        label={item.name}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </DialogBox>
          )}
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={MODEL}>
        <FormGroup>
          {models
            .filter((item: any, index: number) => index <= 4)
            .map((type: any) => (
              <FormControlLabel
                key={uuidv4()}
                control={
                  <Checkbox
                    name={fieldNames.model}
                    checked={values.model.indexOf(type.name) > -1}
                    onChange={(e) => handleCheckboxChange(e, type.name)}
                    color="primary"
                    size="small"
                  />
                }
                label={type.name}
              />
            ))}
          {models.length > 5 && (
            <DialogBox title="Select Model">
              <Grid style={{ display: 'flex' }} container>
                <Grid xs={12}>
                  <InputField
                    variant="filled"
                    label="Search"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleMakesModelSearch(e, models)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {searchResult && searchResult.length > 0 && (
                    <Typography variant="h4" gutterBottom>
                      {'Search Result'}
                    </Typography>
                  )}
                  {searchResult &&
                    searchResult.map((item: any) => {
                      return (
                        <FormControlLabel
                          key={uuidv4()}
                          control={
                            <Checkbox
                              name={fieldNames.model}
                              checked={values.model.indexOf(item.name) > -1}
                              onChange={(e) =>
                                handleCheckboxChange(e, item.name)
                              }
                              color="primary"
                              size="small"
                            />
                          }
                          label={item.name}
                        />
                      );
                    })}
                </Grid>
                <Divider variant="middle" />
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    {'Models'}
                  </Typography>
                </Grid>
                {models.map((item: any) => {
                  return (
                    <Grid key={uuidv4()} item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name={fieldNames.model}
                            checked={values.model.indexOf(item.name) > -1}
                            onChange={(e) => handleCheckboxChange(e, item.name)}
                            color="primary"
                            size="small"
                          />
                        }
                        label={item.name}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </DialogBox>
          )}
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={MILEAGE}>
        <Grid container direction="column">
          <Grid item container spacing={1}>
            <Grid item xs={5}>
              <InputField
                name={fieldNames.mileageFrom}
                label="From"
                value={rangeValues.mileageRange[0]}
                errors={errors.mileageFrom}
                type="number"
                InputProps={{
                  inputComponent: NumberInput as any
                }}
                onChange={(e: any) => {
                  setRangeValues((previousValue: any) => {
                    previousValue.mileageRange[0] = e.target.value as number;
                    return { ...previousValue };
                  });
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <InputFieldWithButton
                name={fieldNames.mileageTo}
                label="To"
                value={rangeValues.mileageRange[1]}
                errors={errors.mileageTo}
                type="number"
                InputProps={{
                  inputComponent: NumberInput as any
                }}
                onChange={(e: any) => {
                  setRangeValues((previousValue: any) => {
                    previousValue.mileageRange[1] = e.target.value as number;
                    return { ...previousValue };
                  });
                }}
                handleClick={() => handleTextBoxSubmit('mileageRange')}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Slider
              value={[rangeValues.mileageRange[0], rangeValues.mileageRange[1]]}
              min={0}
              max={500000}
              onChange={(event: any, newValue: number | number[]) => {
                setRangeValues((previousValue: any) => {
                  previousValue.mileageRange = newValue;
                  return { ...previousValue };
                });
              }}
            />
          </Grid>
        </Grid>
      </FilterAccordion>
      <FilterAccordion title={YEAR}>
        <Grid container direction="column">
          <Grid item container spacing={1}>
            <Grid item xs={5}>
              <InputField
                name={fieldNames.yearFrom}
                label="From"
                value={rangeValues.yearRange[0]}
                errors={errors.yearFrom}
                type="number"
                InputProps={{
                  inputComponent: NumberInput as any
                }}
                onChange={(e: any) => {
                  setRangeValues((previousValue: any) => {
                    previousValue.yearRange[0] = e.target.value as number;
                    return { ...previousValue };
                  });
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <InputFieldWithButton
                name={fieldNames.yearTo}
                label="To"
                value={rangeValues.yearRange[1]}
                errors={errors.yearTo}
                type="number"
                InputProps={{
                  inputComponent: NumberInput as any
                }}
                onChange={(e: any) => {
                  setRangeValues((previousValue: any) => {
                    previousValue.yearRange[1] = e.target.value as number;
                    return { ...previousValue };
                  });
                }}
                handleClick={() => handleTextBoxSubmit('yearRange')}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Slider
              value={[rangeValues.yearRange[0], rangeValues.yearRange[1]]}
              min={1971}
              max={2021}
              onChange={(event: any, newValue: number | number[]) => {
                setRangeValues((previousValue: any) => {
                  previousValue.yearRange = newValue;
                  return { ...previousValue };
                });
              }}
            />
          </Grid>
        </Grid>
      </FilterAccordion>
      <div className={filtersCollection}>
        <Typography variant="h3">Location</Typography>
      </div>
      <FilterAccordion title={PROVINCE}>
        <FormGroup>
          {provinces.map((province) => (
            <FormControlLabel
              key={uuidv4()}
              control={
                <Checkbox
                  name={fieldNames.province}
                  checked={values.province.indexOf(province.name) > -1}
                  onChange={(e) => handleCheckboxChange(e, province.name)}
                  color="primary"
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
          {citiesWithCars
            .filter((item: any, index: number) => index <= 4)
            .map((city: any) => (
              <FormControlLabel
                key={uuidv4()}
                control={
                  <Checkbox
                    name={fieldNames.city}
                    checked={values.city.indexOf(city.city) > -1}
                    onChange={(e) => handleCheckboxChange(e, city.city)}
                    color="primary"
                  />
                }
                label={city.city}
              />
            ))}

          {citiesWithCars.length > 5 && (
            <DialogBox title="Select Cities">
              <Grid style={{ display: 'flex' }} container>
                <Grid xs={12}>
                  <InputField
                    variant="filled"
                    label="Search"
                    onChange={handleSearchCities}
                  />
                </Grid>
                <Grid item xs={12}>
                  {searchResult && searchResult.length > 0 && (
                    <Typography variant="h4" gutterBottom>
                      {'Search Result'}
                    </Typography>
                  )}
                  {searchResult &&
                    searchResult.map((city: any) => {
                      return (
                        <FormControlLabel
                          key={uuidv4()}
                          control={
                            <Checkbox
                              name={fieldNames.city}
                              checked={values.city.indexOf(city.city) > -1}
                              onChange={(e) =>
                                handleCheckboxChange(e, city.city)
                              }
                              color="primary"
                              size="small"
                            />
                          }
                          label={city.city}
                        />
                      );
                    })}
                </Grid>
                {citiesWithCars.map((city: any) => {
                  return (
                    <Grid key={uuidv4()} item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name={fieldNames.city}
                            checked={values.city.indexOf(city.city) > -1}
                            onChange={(e) => handleCheckboxChange(e, city.city)}
                            color="primary"
                            size="small"
                          />
                        }
                        label={city.city}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </DialogBox>
          )}
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={REGISTRATION_CITY}>
        <FormGroup>
          {cityNames
            .filter((item) => majorCities.includes(item))
            .map((city) => (
              <FormControlLabel
                key={uuidv4()}
                control={
                  <Checkbox
                    name={fieldNames.registrationCity}
                    checked={values.registrationCity.indexOf(city) > -1}
                    onChange={(e) => handleCheckboxChange(e, city)}
                    color="primary"
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
                {searchResult && (
                  <Typography variant="h4" gutterBottom>
                    {'Search Result'}
                  </Typography>
                )}
                {searchResult &&
                  searchResult.map((city: ICity) => {
                    return (
                      <FormControlLabel
                        key={uuidv4()}
                        control={
                          <Checkbox
                            name={fieldNames.registrationCity}
                            checked={
                              values.registrationCity.indexOf(city.name) > -1
                            }
                            onChange={(e) => handleCheckboxChange(e, city.name)}
                            color="primary"
                            size="small"
                          />
                        }
                        label={city.name}
                      />
                    );
                  })}
              </Grid>
              {provinces.map((province) => (
                <Grid key={uuidv4()} item xs={12}>
                  <Typography variant="h4" gutterBottom>
                    {province.name}
                  </Typography>
                  {City.getCitiesOfState(
                    province.countryCode,
                    province.isoCode
                  ).map((city) => {
                    return (
                      <FormControlLabel
                        key={uuidv4()}
                        control={
                          <Checkbox
                            name={fieldNames.registrationCity}
                            checked={
                              values.registrationCity.indexOf(city.name) > -1
                            }
                            onChange={(e) => handleCheckboxChange(e, city.name)}
                            color="primary"
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
      <div className={filtersCollection}>
        <Typography variant="h3">Performance</Typography>
      </div>
      <FilterAccordion title={TRANSMISSION}>
        <FormGroup>
          {Carfilters.TRANSMISSION.map((type) => (
            <FormControlLabel
              key={uuidv4()}
              control={
                <Checkbox
                  name={fieldNames.transmission}
                  checked={values.transmission.indexOf(type) > -1}
                  onChange={(e) => handleCheckboxChange(e, type)}
                  color="primary"
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
              key={uuidv4()}
              control={
                <Checkbox
                  name={fieldNames.engineType}
                  checked={values.engineType.indexOf(type) > -1}
                  onChange={(e) => handleCheckboxChange(e, type)}
                  color="primary"
                  size="small"
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={ENGINE_CAPACITY}>
        <Grid container direction="column">
          <Grid item container spacing={1}>
            <Grid item xs={5}>
              <InputField
                name={fieldNames.engineCapacityFrom}
                label="From"
                value={rangeValues.engineCapacityRange[0]}
                errors={errors.engineCapacityFrom}
                type="number"
                InputProps={{
                  inputComponent: NumberInput as any
                }}
                onChange={(e: any) => {
                  setRangeValues((previousValue: any) => {
                    previousValue.engineCapacityRange[0] = e.target
                      .value as number;
                    return { ...previousValue };
                  });
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <InputFieldWithButton
                name={fieldNames.engineCapacityTo}
                label="To"
                value={rangeValues.engineCapacityRange[1]}
                errors={errors.engineCapacityTo}
                type="number"
                InputProps={{
                  inputComponent: NumberInput as any
                }}
                onChange={(e: any) => {
                  setRangeValues((previousValue: any) => {
                    previousValue.engineCapacityRange[1] = e.target
                      .value as number;
                    return { ...previousValue };
                  });
                }}
                handleClick={() => handleTextBoxSubmit('engineCapacityRange')}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Slider
              value={[
                rangeValues.engineCapacityRange[0],
                rangeValues.engineCapacityRange[1]
              ]}
              min={0}
              max={15000}
              onChange={(event: any, newValue: number | number[]) => {
                setRangeValues((previousValue: any) => {
                  previousValue.engineCapacityRange = newValue;
                  return { ...previousValue };
                });
              }}
            />
          </Grid>
        </Grid>
      </FilterAccordion>
      <div className={filtersCollection}>
        <Typography variant="h3">Style</Typography>
      </div>
      <FilterAccordion title={BODY_TYPE}>
        <FormGroup>
          {bodyTypes
            .filter((item: any) => mainCarTypes.includes(item.bodyType))
            .map((type: any) => (
              <FormControlLabel
                key={uuidv4()}
                control={
                  <Checkbox
                    name={fieldNames.bodyType}
                    checked={values.bodyType.indexOf(type.text) > -1}
                    onChange={(e) => handleCheckboxChange(e, type.bodyType)}
                    color="primary"
                    size="small"
                  />
                }
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      width="60px"
                      style={{ margin: '0 10px' }}
                      src={type.image || defaultBodyType}
                      alt={type.bodyType}
                    />
                    <Typography>{type.bodyType}</Typography>
                  </div>
                }
              />
            ))}

          <DialogBox title="Select Body Type">
            <Grid container spacing={2}>
              {bodyTypes.map((type: any) => (
                <Grid key={uuidv4()} item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={fieldNames.bodyType}
                        checked={values.bodyType.indexOf(type.bodyType) > -1}
                        onChange={(e) => handleCheckboxChange(e, type.bodyType)}
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          width="60px"
                          style={{ margin: '0 10px' }}
                          src={type.image || defaultBodyType}
                          alt={type.bodyType}
                        />
                        <Typography>{type.bodyType}</Typography>
                      </div>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </DialogBox>
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={COLOR}>
        <FormGroup>
          {Carfilters.COLOR.filter((item) =>
            mainColors.includes(item.text)
          ).map((type) => (
            <FormControlLabel
              key={uuidv4()}
              control={
                <Checkbox
                  name={fieldNames.color}
                  checked={values.color.indexOf(type.text) > -1}
                  onChange={(e) => handleCheckboxChange(e, type.text)}
                  color="primary"
                  size="small"
                />
              }
              label={
                <div style={{ display: 'flex' }}>
                  <span
                    style={{
                      borderRadius: '50%',
                      maxWidth: '20px',
                      maxHeight: '20px',
                      minWidth: '20px',
                      minHeight: '20px',
                      backgroundColor: type.hex,
                      border: '0.2px solid grey',
                      marginRight: '7px'
                    }}
                  />
                  <Typography>{type.text}</Typography>
                </div>
              }
            />
          ))}
          <FormControlLabel
            key={uuidv4()}
            control={
              <Checkbox
                name={fieldNames.color}
                checked={values.color.indexOf('Other Colors') > -1}
                onChange={(e) => handleCheckboxChange(e, 'Other Colors')}
                color="primary"
                size="small"
              />
            }
            label={
              <div style={{ display: 'flex' }}>
                <Typography>Other Colors</Typography>
              </div>
            }
          />

          <DialogBox title="Select Color">
            <Grid container spacing={2}>
              {Carfilters.COLOR.map((type) => (
                <Grid key={uuidv4()} item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={fieldNames.color}
                        checked={values.color.indexOf(type.text) > -1}
                        onChange={(e) => handleCheckboxChange(e, type.text)}
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <div style={{ display: 'flex' }}>
                        <span
                          style={{
                            borderRadius: '50%',
                            maxWidth: '20px',
                            maxHeight: '20px',
                            minWidth: '20px',
                            minHeight: '20px',
                            backgroundColor: type.hex,
                            border: '0.2px solid grey',
                            marginRight: '7px'
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
                  key={uuidv4()}
                  control={
                    <Checkbox
                      name={fieldNames.color}
                      checked={values.color.indexOf('Other Colors') > -1}
                      onChange={(e) => handleCheckboxChange(e, 'Other Colors')}
                      color="primary"
                      size="small"
                    />
                  }
                  label={
                    <div style={{ display: 'flex' }}>
                      <Typography>Other Colors</Typography>
                    </div>
                  }
                />
              </Grid>
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
                color="primary"
                size="small"
              />
            }
            label={Carfilters.PICTURE_AVAILABILITY[0]}
          />
        </FormGroup>
      </FilterAccordion> */}
      {/*<FilterAccordion title={VIDEO_AVAILABILITY}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.withVideo}
                onChange={handleSingleCheckBoxChange}
                name={fieldNames.videoAvailability}
                color="primary"
                size="small"
              />
            }
            label={Carfilters.VIDEO_AVAILABILITY[0]}
          />
        </FormGroup>
      </FilterAccordion> */}
      <div className={filtersCollection}>
        <Typography variant="h3">Others</Typography>
      </div>
      <FilterAccordion title={ASSEMBLY}>
        <FormGroup>
          {Carfilters.ASSEMBLY.map((type) => (
            <FormControlLabel
              key={uuidv4()}
              control={
                <Checkbox
                  name={fieldNames.assembly}
                  checked={values.assembly.indexOf(type) > -1}
                  onChange={(e) => handleCheckboxChange(e, type)}
                  color="primary"
                  size="small"
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={SELLER_TYPE} className={lastAccordion}>
        <FormGroup>
          {Carfilters.SELLER_TYPE.map((type) => (
            <FormControlLabel
              key={uuidv4()}
              control={
                <Checkbox
                  name={fieldNames.sellerType}
                  checked={values.sellerType.indexOf(type) > -1}
                  onChange={(e) => handleCheckboxChange(e, type)}
                  color="primary"
                  size="small"
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </FilterAccordion>
      {/* <FilterAccordion title={AD_TYPE}>
        <FormGroup>
          {Carfilters.AD_TYPE.map((type) => (
            <FormControlLabel
              key={uuidv4()}
              control={
                <Checkbox
                  checked={values.adType.indexOf(type) > -1}
                  onChange={(e) => handleCheckboxChange(e, "adType")}
                  name={type}
                  color="primary"
                  size="small"
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
      </FilterAccordion> */}
      {/* <MapSearch/> */}
    </div>
  );
};

export default CarFilters;
