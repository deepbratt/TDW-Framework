import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
// import Slider from '@material-ui/core/Slider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import InputField from '../../components/InputField';
import FilterAccordion from '../../components/Accordion';
import {
  Carfilters,
  productsFiltersData
} from '../../Utils/constants/language/en/filtersData';
import { City, State } from '../../Utils/country-state-city/index';
import { fieldNames } from '../../Utils/constants/formsConstants';
import VerticalFilterStyles from './styles';
import DialogBox from '../../components/DialogBox';
import { ICity } from '../../Utils/country-state-city/interface';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { RootState } from '../../redux/store';
import {
  SEE_MORE
} from '../../Utils/constants/language/en/buttonLabels';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';

import { isNumeric } from '../../Utils/regex';
import { useForm } from '../../pages/productListing/useForm';

export interface ProductVerticalFiltersProps {
  filterProps?: any;
}

interface IMinMax {
  min: boolean;
  max: boolean;
}

export interface IRangeFiltersErrorStatus {
  [k: string]: IMinMax;
  price: IMinMax
}

export interface IRangeFiltersError {
  [k: string]: string;
  price: string
}

export interface IMinMaxValues {
  [k: string]: number[] | string[];
  price: number[] | string[]
}

const ProductVerticalFilters: React.FC<ProductVerticalFiltersProps> = ({filterProps}) => {
  const { ADS, CARS } = API_ENDPOINTS;
  const [rangeErrors, setRangeErrors] = useState<IRangeFiltersError>({
    price: ''
  });
  const [rangeErrorsStatus, setRangeErrorsStatus] = useState<IRangeFiltersErrorStatus>({
    price: {
      min: false,
      max: false
    },
    modelYear: {
      min: false,
      max: false
    },
    milage: {
      min: false,
      max: false
    },
    engineCapacity: {
      min: false,
      max: false
    }
  });
  const [citySearchResult, setCitySearchResult] = useState<ICity[]>();
  const [makeSearchResult, setMakeSearchResult] = useState<any>();
  const values = useSelector((state: RootState) => state.carFilters.filters);

  const { filtersCollection, lastAccordion, fontSize, errorMsg } =
    VerticalFilterStyles();
  const {
    CATEGORIES,
    SUB_CATEGORIES,
    PRICE_RANGE,
    MAKE,
    BRAND,
    SALE,
    CITY,  
    COLOR,
  } = productsFiltersData;

  // let priceValues = [
  //   { value: 50000, label: '50K' },
  //   { value: 500000, label: '5 Lakh' },
  //   { value: 1000000, label: '10 Lakh' },
  //   { value: 1500000, label: '15 Lakh' },
  //   { value: 3000000, label: '30 Lakh' },
  //   { value: 5000000, label: '50 Lakh' },
  //   { value: 8000000, label: '80 Lakh' },
  //   { value: 10000000, label: '1 Crore' },
  //   { value: 100000000, label: '5 Crore' },
  //   { value: 100000000, label: '10 Crore' }
  // ];

  const majorCities = ['Karachi', 'Islamabad', 'Lahore', 'Peshawar', 'Quetta'];
  const mainCarTypes = ['Sedan', 'Hatchback', 'Pick Up'];
  const mainColors = ['Black', 'White', 'Red'];
  const cities = City.getCitiesOfCountry('PK');
  const provinces = State.getStatesOfCountry('PK');
  const extractedCityNames = cities?.map((item: any) => item.name);
  let cityNames = [];
  if (extractedCityNames) {
    cityNames.push(...extractedCityNames);
  }
  const {
    handleCheckboxChange,
    // handleSingleCheckBoxChange,
    handleTextBoxSubmit,
    // appliedFilters,
    removeRangeFilter,
    rangeValues,
    setRangeValues,
    citiesWithCars,
    makes,

    bodyColors,
  } = filterProps;

  const handleSearchCities = (e: React.ChangeEvent<HTMLInputElement>) => {
    let result = citiesWithCars?.filter(
      (city: any) =>
        city.city.substr(0, e.target.value.length).toLowerCase() ===
        e.target.value.toLowerCase()
    );
    if (e.target.value === '') {
      result = [];
    }
    setCitySearchResult(result);
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
    setMakeSearchResult(result);
  };


  useEffect(() => {
    // set value of rangeFilters to rangeValues
    setRangeValues({
      price: values.price,
      modelYear: values.modelYear,
      milage: values.milage,
      engineCapacity: values.engineCapacity
    });
    // eslint-disable-next-line
  }, []);


   /*
    generate array containing objects with label and values for modelYears
    between minMaxValues.modelYear[1]:i-e(max) and minMaxValues.modelYear[0]:i-e(min)
    decrementing 1 in each iteration
  */
  // const generateArrayOfYears = (): { value: number; label: string }[] => {
  //   var years = [];
  //   for (
  //     var i = minMaxValues.modelYear[1];
  //     i >= minMaxValues.modelYear[0];
  //     i--
  //   ) {
  //     years.push({ value: i, label: i.toString() });
  //   }
  //   return years;
  // };

  /*
    generate array containing objects with label and values for engineCapacity
    between minMaxValues.engineCapacity[0]:i-e(min) and minMaxValues.engineCapacity[1]:i-e(max)
    incrementing 100 in each iteration
  */
  // const generateEngineCapacityArray = (): {
  //   value: number;
  //   label: string;
  // }[] => {
  //   var engineCapacity = [];
  //   for (
  //     var i = minMaxValues.engineCapacity[0];
  //     i <= minMaxValues.engineCapacity[1];

  //   ) {
  //     engineCapacity.push({ value: i, label: `${i.toString()} cc` });
  //     i = i + 100;
  //   }
  //   return engineCapacity;
  // };

  /*
    generate array containing objects with label and values for milage
    between minMaxValues.milage[0]:i-e(min) and minMaxValues.milage[1]:i-e(max)
    incrementing 10000 in each iteration
  */
  // const generateMilageArray = (): {
  //   value: number;
  //   label: string;
  // }[] => {
  //   var milage = [];
  //   for (
  //     var i = minMaxValues.milage[0];
  //     i <= minMaxValues.milage[1];

  //   ) {
  //     milage.push({ value: i, label: `${i.toString()} kms` });
  //     i = i + 10000;
  //   }
  //   return milage;
  // };

  /*
      Sets minimum and maximum values of price filter
  */
  // DON'T REMOVE, NOT BEING USED 
  // const handlePriceSliderChange = (event: any, newValue: number | number[]) => {
  //   setRangeValues((previousValue: any) => {
  //     previousValue.price = newValue;
  //     return { ...previousValue };
  //   });
  // };
  

  /*
      Sets minimum and maximum values of engine capacity filter
  */
  // DON'T REMOVE, NOT BEING USED 
  // const handleEngineCapacitySliderChange = (
  //   event: any,
  //   newValue: number | number[]
  // ) => {
  //   setRangeValues((previousValue: any) => {
  //     previousValue.engineCapacity = newValue;
  //     return { ...previousValue };
  //   });
  // };

  /*
    Sets minimum and maximum values of model year filter
  */
  // DON'T REMOVE, NOT BEING USED 
  // const handleModelYearSliderChange = (
  //   event: any,
  //   newValue: number | number[]
  // ) => {
  //   setRangeValues((previousValue: any) => {
  //     previousValue.modelYear = newValue;
  //     return { ...previousValue };
  //   });
  // };

  /*
    Sets minimum and maximum values of milage filter
  */
  // DON'T REMOVE, NOT BEING USED 
  // const handleMilageSliderChange = (
  //   event: any,
  //   newValue: number | number[]
  // ) => {
  //   setRangeValues((previousValue: any) => {
  //     previousValue.milage = newValue;
  //     return { ...previousValue };
  //   });
  // };

  /*  
      Sets minimum value of range filters if value
      is less than maximum value clears maximum value if otherwise
  */
  const handleRangeFromInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isNumeric(event.target.value)) {
      let newValue: (number | string)[] = [...rangeValues[event.target.name]];
      // check if new values is greater than maximum values don't check if max value is empty
      if (newValue[1] < Number(event.target.value) && newValue[1] !== '') {
        // set range errors if min value is greater than max value
        setRangeErrors((previousValue: IRangeFiltersError) => {
          previousValue[event.target.name] =
            'Minimum value should be less than maximum value';
          return { ...previousValue };
        });
        setRangeErrorsStatus((previousValue: IRangeFiltersErrorStatus) => {
          previousValue[event.target.name].min = true;
          return { ...previousValue };
        });
      } else {
        // clear min, max value error if min value is less than max value
        setRangeErrorsStatus((previousValue: IRangeFiltersErrorStatus) => {
          previousValue[event.target.name] = { min: false, max: false };
          return { ...previousValue };
        });
        setRangeErrors((previousValue: IRangeFiltersError) => {
          previousValue[event.target.name] = '';
          return { ...previousValue };
        });
      }
      newValue[0] = event.target.value;
      setRangeValues((previousValue: any) => {
        previousValue[event.target.name] = newValue;
        return { ...previousValue };
      });
    }
  };

  /*  
    Sets maximum value of range filters if value
    is greater than minimum value clears minimum value if otherwise
  */
  const handleRangeToInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isNumeric(event.target.value)) {
      let newValue: (number | string)[] = [...rangeValues[event.target.name]];
      // check if new values is less than minimum values don't check if new target value is empty
      if (
        newValue[0] > Number(event.target.value) &&
        event.target.value !== ''
      ) {
        // set range errors if max value is less than min value
        setRangeErrors((previousValue: IRangeFiltersError) => {
          previousValue[event.target.name] =
            'Maximum value should be greater than minimum value';
          return { ...previousValue };
        });
        setRangeErrorsStatus((previousValue: IRangeFiltersErrorStatus) => {
          previousValue[event.target.name].max = true;
          return { ...previousValue };
        });
      } else {
        // clear min, max value error if max value is greater than min value
        setRangeErrorsStatus((previousValue: IRangeFiltersErrorStatus) => {
          previousValue[event.target.name] = {
            min: false,
            max: false
          };
          return { ...previousValue };
        });
        setRangeErrors((previousValue: IRangeFiltersError) => {
          previousValue[event.target.name] = '';
          return { ...previousValue };
        });
      }
      newValue[1] = event.target.value;
      setRangeValues((previousValue: any) => {
        previousValue[event.target.name] = newValue;
        return { ...previousValue };
      });
    }
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>, fieldName: string) => {
    if (
      e.key === 'Enter' &&
      Object.values(rangeErrors).every((x) => x === '')
    ) {
      handleTextBoxSubmit(fieldName);
    }
  }

  const handleRangeFiltersOnBlur = (e: React.FocusEvent<HTMLInputElement>, fieldName: string) => {
    if (Object.values(rangeErrors).every((x) => x === '')) {
      handleTextBoxSubmit(fieldName);
    }
  }

  return (
    <div>
      {/* {appliedFilters !== {} && (
        <Grid style={{ padding: '0 0 5px 20px' }} container spacing={1}>
          {Object.entries(values).map(([keys, values], index) => (
            <AppliedFilters
              key={uuidv4()}
              values={values}
              keys={keys}
              removeRangeFilter={removeRangeFilter}
            />
          ))}
        </Grid>
      )} */}
      {/* {filtersData &&
        filtersData.map((filter: any) => (
          <FilterAccordion key={uuidv4()} title={filter.title}>
            {filter.value &&
              filter.value.map((item: any) => (
                <FormControlLabel classes={{label: fontSize}}
                  key={uuidv4()}
                  control={
                    <Checkbox
                      name={filter.name}
                      checked={values[filter.name].indexOf(item.data) > -1}
                      onChange={(e) => handleCheckboxChange(e, item.data)}
                      color="primary"
                      size="small"
                    />
                  }
                  label={item.data}
                />
              ))}
          </FilterAccordion>
        ))} */}
      {/* <FilterAccordion title={KEYWORDS} expanded hideExpandIcon={true}>
        <InputField  classes={{root: textFieldRoot}}
          name={fieldNames.keywords}
          label="Search by Keywords"
          placeholder="Eg. Honda In Lahore"
          value={keywords}
          errors={errors.keywords}
          onChange={handleTextBoxChange}
          handleClick={() => handleTextBoxSubmit('keywords')}
        />
      </FilterAccordion> */}
      <FilterAccordion title={CATEGORIES}>
        <FormGroup>
          {makes
            .filter((item: any, index: number) => index <= 4)
            .map((type: any) => (
              <FormControlLabel
                classes={{ label: fontSize }}
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
                <Grid item xs={12}>
                  <InputField
                    name="make"
                    variant="filled"
                    label="Search"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleMakesModelSearch(e, makes)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {makeSearchResult && makeSearchResult.length > 0 && (
                    <Typography variant="h4" gutterBottom>
                      {'Search Result'}
                    </Typography>
                  )}
                  {makeSearchResult &&
                    makeSearchResult.map((item: any) => {
                      return (
                        <FormControlLabel
                          classes={{ label: fontSize }}
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
                        classes={{ label: fontSize }}
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
      <FilterAccordion title={SUB_CATEGORIES}>
        <FormGroup>
          {makes
            .filter((item: any, index: number) => index <= 4)
            .map((type: any) => (
              <FormControlLabel
                classes={{ label: fontSize }}
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
                <Grid item xs={12}>
                  <InputField
                    name="make"
                    variant="filled"
                    label="Search"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleMakesModelSearch(e, makes)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {makeSearchResult && makeSearchResult.length > 0 && (
                    <Typography variant="h4" gutterBottom>
                      {'Search Result'}
                    </Typography>
                  )}
                  {makeSearchResult &&
                    makeSearchResult.map((item: any) => {
                      return (
                        <FormControlLabel
                          classes={{ label: fontSize }}
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
                        classes={{ label: fontSize }}
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
      <FilterAccordion title={PRICE_RANGE}>
        <Grid container direction="column">
          <Grid item container spacing={1}>
            <Grid item xs={6}>
              <InputField
                label="Min"
                name={fieldNames.price}
                value={rangeValues.price[0]}
                error={rangeErrorsStatus.price.min}
                onChange={handleRangeFromInputChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  handleRangeFiltersOnBlur(e, fieldNames.price)
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleEnterPress(e, fieldNames.price)
                }
                // DON'T REMOVE, NOT BEING USED
                // options={priceValues}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                name={fieldNames.price}
                label="Max"
                value={rangeValues.price[1]}
                error={rangeErrorsStatus.price.max}
                onChange={handleRangeToInputChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  handleRangeFiltersOnBlur(e, fieldNames.price)
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleEnterPress(e, fieldNames.price)
                }
                // InputProps={{
                //   endAdornment: (
                //       <Button
                //         className={btn}
                //         color="primary"
                //         variant="contained"
                //         onClick={() => handleTextBoxSubmit(fieldNames.price)}
                //       >
                //         GO
                //       </Button>
                //     </InputAdornment>
                //   )
                // }}
              />
            </Grid>
            {rangeErrors.price !== '' && (
              <Grid className={errorMsg} item xs={12}>
                <InfoOutlinedIcon color="inherit" fontSize="small" />
                <Typography
                  style={{ marginLeft: '5px' }}
                  variant="caption"
                  color="inherit"
                >
                  {rangeErrors.price}
                </Typography>
              </Grid>
            )}
          </Grid>
          {/* 
            DON'T REMOVE, NOT BEING USED 
          */}
          {/* <Grid item>
            <Slider
              classes={{ markLabel: markLabel }}
              marks={priceValues}
              step={null}
              value={[rangeValues.price[0], rangeValues.price[1]]}
              min={minMaxValues.price[0]}
              max={minMaxValues.price[1]}
              onChange={handlePriceSliderChange}
            />
          </Grid> */}
        </Grid>
      </FilterAccordion>
      <FilterAccordion title={BRAND}>
        <FormGroup>
          {makes
            .filter((item: any, index: number) => index <= 4)
            .map((type: any) => (
              <FormControlLabel
                classes={{ label: fontSize }}
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
                <Grid item xs={12}>
                  <InputField
                    name="make"
                    variant="filled"
                    label="Search"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleMakesModelSearch(e, makes)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {makeSearchResult && makeSearchResult.length > 0 && (
                    <Typography variant="h4" gutterBottom>
                      {'Search Result'}
                    </Typography>
                  )}
                  {makeSearchResult &&
                    makeSearchResult.map((item: any) => {
                      return (
                        <FormControlLabel
                          classes={{ label: fontSize }}
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
                        classes={{ label: fontSize }}
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
      <FilterAccordion title={MAKE}>
        <FormGroup>
          {makes
            .filter((item: any, index: number) => index <= 4)
            .map((type: any) => (
              <FormControlLabel
                classes={{ label: fontSize }}
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
                <Grid item xs={12}>
                  <InputField
                    name="make"
                    variant="filled"
                    label="Search"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleMakesModelSearch(e, makes)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {makeSearchResult && makeSearchResult.length > 0 && (
                    <Typography variant="h4" gutterBottom>
                      {'Search Result'}
                    </Typography>
                  )}
                  {makeSearchResult &&
                    makeSearchResult.map((item: any) => {
                      return (
                        <FormControlLabel
                          classes={{ label: fontSize }}
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
                        classes={{ label: fontSize }}
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
      <FilterAccordion title={SALE}>
        <FormGroup>
          {makes
            .filter((item: any, index: number) => index <= 4)
            .map((type: any) => (
              <FormControlLabel
                classes={{ label: fontSize }}
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
        </FormGroup>
      </FilterAccordion>
      <FilterAccordion title={CITY}>
        <FormGroup>
          {citiesWithCars
            .filter((item: any, index: number) => index <= 4)
            .map((city: any) => (
              <FormControlLabel
                classes={{ label: fontSize }}
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
                <Grid item xs={12}>
                  <InputField
                    variant="filled"
                    label="Search"
                    onChange={handleSearchCities}
                  />
                </Grid>
                <Grid item xs={12}>
                  {citySearchResult && citySearchResult.length > 0 && (
                    <Typography variant="h4" gutterBottom>
                      {'Search Result'}
                    </Typography>
                  )}
                  {citySearchResult &&
                    citySearchResult.map((city: any) => {
                      return (
                        <FormControlLabel
                          classes={{ label: fontSize }}
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
                        classes={{ label: fontSize }}
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

      <FilterAccordion title={COLOR}>
        <FormGroup>
          {bodyColors &&
            bodyColors
              .filter((item: any) => mainColors.indexOf(item.name) > -1)
              .map((type: any) => (
                <FormControlLabel
                  classes={{ label: fontSize }}
                  key={uuidv4()}
                  control={
                    <Checkbox
                      name={fieldNames.color}
                      checked={values.bodyColor.indexOf(type.name) > -1}
                      onChange={(e) => handleCheckboxChange(e, type.name)}
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
                          backgroundColor: type.code,
                          border: '0.2px solid grey',
                          marginRight: '7px'
                        }}
                      />
                      <Typography>{type.name}</Typography>
                    </div>
                  }
                />
              ))}
          <FormControlLabel
            classes={{ label: fontSize }}
            key={uuidv4()}
            control={
              <Checkbox
                name={fieldNames.color}
                checked={values.bodyColor.indexOf('Other Colors') > -1}
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
              {bodyColors &&
                bodyColors.map((type: any) => (
                  <Grid key={uuidv4()} item xs={12} md={6}>
                    <FormControlLabel
                      classes={{ label: fontSize }}
                      control={
                        <Checkbox
                          name={fieldNames.color}
                          checked={values.bodyColor.indexOf(type.name) > -1}
                          onChange={(e) => handleCheckboxChange(e, type.name)}
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
                              backgroundColor: type.code,
                              border: '0.2px solid grey',
                              marginRight: '7px'
                            }}
                          />
                          <Typography>{type.name}</Typography>
                        </div>
                      }
                    />
                  </Grid>
                ))}
              <Grid item xs={12}>
                <FormControlLabel
                  classes={{ label: fontSize }}
                  key={uuidv4()}
                  control={
                    <Checkbox
                      name={fieldNames.color}
                      checked={values.bodyColor.indexOf('Other Colors') > -1}
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
      {/* <MapSearch/> */}
    </div>
  );
};

export default ProductVerticalFilters;
