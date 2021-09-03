import { useState } from 'react';
import {
  Grid,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Divider
  // IconButton
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
import { APPLIED_FILTERS } from '../../Utils/constants/language/en/buttonLabels';
import PriceInput from '../../components/InputField/PriceInput';
import NumberInput from '../../components/InputField/NumberInput';
import AppliedFilters from './appliedFilters';
import { Autocomplete } from '@material-ui/lab';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export interface CarFiltersProps {
  filterProps: any;
}

const CarFilters: React.FC<CarFiltersProps> = ({ filterProps }) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [searchResult, setSearchResult] = useState<ICity[]>();
  const {} = VerticalFilterStyles();
  const {
    KEYWORDS,
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
    handleTextBoxChange,
    handleCheckboxChange,
    // handleSingleCheckBoxChange,
    keywords,
    handleTextBoxSubmit,
    appliedFilters,
    removeFilter,
    removeFilterItem,
    removeRangeFilter,
    rangeValues,
    setRangeValues,
    citiesWithCars,
    makes,
    models
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
      <FilterAccordion title={KEYWORDS} expanded hideExpandIcon={true}>
        <InputFieldWithButton
          name={fieldNames.keywords}
          label="Search by Keywords"
          placeholder="Eg. Honda In Lahore"
          value={keywords}
          errors={errors.keywords}
          onChange={handleTextBoxChange}
          handleClick={() => handleTextBoxSubmit('keywords')}
        />
      </FilterAccordion>
      {appliedFilters !== {} && (
        <FilterAccordion title={APPLIED_FILTERS}>
          <Grid container spacing={1}>
            {Object.entries(appliedFilters).map(([keys, values]: any) => (
              <AppliedFilters
                values={values}
                keys={keys}
                removeFilter={removeFilter}
                removeFilterItem={removeFilterItem}
                removeRangeFilter={removeRangeFilter}
              />
            ))}
          </Grid>
        </FilterAccordion>
      )}
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
              min={1940}
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
      <FilterAccordion title={PROVINCE}>
        <FormGroup>
          {provinces.map((province) => (
            <FormControlLabel
              key={`province-${province.name}`}
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
                key={`city-${city.city}`}
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
                          key={`city-${city.city}`}
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
                    <Grid key={`city-${city.city}`} item xs={6}>
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
                key={`city-${city}`}
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
                        key={`city-${city.name}`}
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
                <Grid key={`province-${province}`} item xs={12}>
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
      <FilterAccordion title={MAKE}>
        <FormGroup>
          {makes
            .filter((item: any, index: number) => index <= 4)
            .map((type: any) => (
              <FormControlLabel
                key={`make-type-${type.name}`}
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
                          key={`make-${item.name}`}
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
                    <Grid key={`make-${item.name}`} item xs={6}>
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
                key={`model-type-${type.name}`}
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
                          key={`make-${item.name}`}
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
                    <Grid key={`model-${item.name}`} item xs={6}>
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
      <FilterAccordion title={TRANSMISSION}>
        <FormGroup>
          {Carfilters.TRANSMISSION.map((type) => (
            <FormControlLabel
              key={`transmission-type-${type}`}
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
      <FilterAccordion title={ASSEMBLY}>
        <FormGroup>
          {Carfilters.ASSEMBLY.map((type) => (
            <FormControlLabel
              key={`assembly-type-${type}`}
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
      <FilterAccordion title={ENGINE_TYPE}>
        <FormGroup>
          {Carfilters.ENGINE_TYPE.map((type) => (
            <FormControlLabel
              key={`engine-type-${type}`}
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
              max={5000}
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
      <FilterAccordion title={COLOR}>
        <FormGroup>
          {Carfilters.COLOR.filter((item) =>
            mainColors.includes(item.text)
          ).map((type) => (
            <FormControlLabel
              key={`color-type-${type.text}`}
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
            key={`color-type-other`}
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
                <Grid key={`color-type-${type.text}`} item xs={12} md={6}>
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
                  key={`color-type-other`}
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
      <FilterAccordion title={BODY_TYPE}>
        <FormGroup>
          {Carfilters.BODY_TYPE.filter((item) =>
            mainCarTypes.includes(item.text)
          ).map((type) => (
            <FormControlLabel
              key={`body-type-${type.text}`}
              control={
                <Checkbox
                  name={fieldNames.bodyType}
                  checked={values.bodyType.indexOf(type.text) > -1}
                  onChange={(e) => handleCheckboxChange(e, type.text)}
                  color="primary"
                  size="small"
                />
              }
              label={
                <div style={{ display: 'flex' }}>
                  <img
                    width="60px"
                    style={{ margin: '0 10px' }}
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
                <Grid key={`body-type-${type.text}`} item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={fieldNames.bodyType}
                        checked={values.bodyType.indexOf(type.text) > -1}
                        onChange={(e) => handleCheckboxChange(e, type.text)}
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <div style={{ display: 'flex' }}>
                        <img
                          width="60px"
                          style={{ margin: '0 10px' }}
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
      <FilterAccordion title={SELLER_TYPE}>
        <FormGroup>
          {Carfilters.SELLER_TYPE.map((type) => (
            <FormControlLabel
              key={`seller-type-${type}`}
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
              key={`ad-type-${type}`}
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
    </div>
  );
};

export default CarFilters;
