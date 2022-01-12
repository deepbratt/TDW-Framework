import Grid from "@material-ui/core/Grid"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import { Colors } from '../../../Utils/color.constants';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CustomButton from '../../../../../components/CustomButton';
import InputField from '../../../../../components/InputField';
import useStyles from './useStyles';
import { City } from '../../../../../Utils/country-state-city/index';
import {
  carModels,
  versions,
  moreBtn,
  array,
  searchBtn,
  engine
} from '../../../Utils/usedCarsContent';

const SearchFilterContext = ({
  data,
  setData,
  isChecked,
  setIsChecked,
  handleChange,
  handleFilters
}: any) => {
  const { optionsBtn, grid, btnGrid, select, inputStyle } = useStyles();
  const city = City.getCitiesOfCountry('PK');
  const { white, blue } = Colors;

  return (
    <Grid container spacing={1}>
      <Grid className={grid} item xs={12} spacing={1}>
        <Grid style={{ marginTop: '30px' }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[6]}
          </InputLabel>
          <Select
            value={data.make}
            onChange={(e) => {
              handleChange(e);
            }}
            name="make"
            className={select}
          >
            {Object.keys(carModels).map((key, index: number) => (
              <MenuItem key={`make ${index}`} value={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid style={{ marginTop: '30px' }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[7]}
          </InputLabel>
          <Select
            value={data.city}
            name="city"
            onChange={(e) => {
              handleChange(e);
            }}
            className={select}
          >
            {city &&
              city.map((data: any, index: number) => {
                return (
                  <MenuItem key={index} value={data.name}>
                    {data.name}
                  </MenuItem>
                );
              })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[8]}
          </InputLabel>
          <InputField
            className={inputStyle}
            name="min"
            value={data.min}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[12]}
          </InputLabel>
          <InputField
            name="max"
            className={inputStyle}
            value={data.max}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[0]}
          </InputLabel>
          <Select
            value={data.area}
            onChange={(e) => {
              handleChange(e);
            }}
            name="area"
            className={select}
          >
            {city &&
              city.map((data: any, index: number) => {
                return (
                  <MenuItem key={index} value={data.name}>
                    {data.name}
                  </MenuItem>
                );
              })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[1]}
          </InputLabel>
          <Select
            value={data.version}
            onChange={(e) => {
              handleChange(e);
            }}
            name="version"
            className={select}
          >
            {versions.map((data, index) => {
              return (
                <MenuItem key={`version ${index}`} value={data.value}>
                  {data.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[2]}
          </InputLabel>
          <InputField
            className={inputStyle}
            name="yearFrom"
            value={data.yearFrom}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[9]}
          </InputLabel>
          <InputField
            className={inputStyle}
            name="yearTo"
            value={data.yearTo}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[3]}
          </InputLabel>
          <Select
            value={data.engine}
            onChange={(e) => {
              handleChange(e);
            }}
            name="engine"
            className={select}
          >
            {engine.map((data, index) => {
              return (
                <MenuItem key={`engine ${index}`} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[4]}
          </InputLabel>
          <InputField
            className={inputStyle}
            name="engineCapacityFrom"
            value={data.engineCapacityFrom}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[11]}
          </InputLabel>
          <InputField
            className={inputStyle}
            name="engineCapacityTo"
            value={data.engineCapacityTo}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[5]}
          </InputLabel>
          <InputField
            className={inputStyle}
            name="mileageFrom"
            value={data.mileageFrom}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {array[10]}
          </InputLabel>
          <InputField
            className={inputStyle}
            name="mileageTo"
            value={data.mileageTo}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid style={{ marginTop: '80px' }} item lg={3} sm={6} xs={9}>
          {!isChecked && setIsChecked && (
            <CustomButton
              handleClick={() => {
                setIsChecked(true);
              }}
              endIcon={<ArrowDropDownIcon />}
              styles={optionsBtn}
            >
              {moreBtn}
            </CustomButton>
          )}
        </Grid>
        <Grid className={btnGrid} item lg={2} xs={10} sm={6}>
          {!isChecked && (
            <CustomButton
              variant="contained"
              style={{ background: white, color: blue }}
              handleClick={() => handleFilters(data)}
            >
              {searchBtn}
            </CustomButton>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchFilterContext;
