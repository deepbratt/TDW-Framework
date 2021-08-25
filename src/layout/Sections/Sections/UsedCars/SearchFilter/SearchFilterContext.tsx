import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  InputBase,
} from "@material-ui/core";
import { Colors } from "../../../Utils/color.constants";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CustomButton from "../../../../../components/CustomButton";
import { IToggle } from "../../../Utils/types";
import useStyles from "./useStyles";
import { City} from "country-state-city";
import {
  carmodel,
  Min,
  Max,
  versions,
  moreBtn,
  array,
  searchBtn,
  engine,
  engineCapacityFrom,
  engineCapacityTo,
  mileageFrom,
  mileageTo,
} from "../../../Utils/usedCarsContent";
import arr from "../../../../../Utils/helperFunctions"
import useHook from "./useHook"

const SearchFilterContext = ({
  setIsChecked,
  isChecked,
  data,
  handleChange,
}: any) => {
  const {handleFilters} = useHook()
  const { optionsBtn, grid, btnGrid, select } = useStyles();
  const city = City.getCitiesOfCountry("PK");
  const { white, blue } = Colors;
  const sliced = arr.slice(arr.indexOf(data.yearFrom), arr.length)
  const trimmed = sliced.filter((e) => e !== data.yearFrom)

  const handleDropdown = () => {
    if(data.yearFrom){
      return trimmed;
    }else{
      return arr;
    }
  }
  return (
    <Grid container>
      <Grid className={grid} item xs={12}>
        <Grid style={{ marginTop: "30px" }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[6]}
          </InputLabel>
          <Select
            value={data.model}
            onChange={(e) => {
              handleChange(e);
            }}
            name="model"
            className={select}
          >
            {carmodel.map((data, index) => {
              return (
                <MenuItem key={`model ${index}`} value={data.value}>
                  {data.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>

        <Grid style={{ marginTop: "30px" }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[7]}
          </InputLabel>
          <Select
            value={data.city}
            onChange={(e) => {
              handleChange(e);
            }}
            name="city"
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
        <Grid style={{ marginTop: "30px" }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[8]}
          </InputLabel>
          <Select
            value={data.min}
            onChange={(e) => {
              handleChange(e);
            }}
            name="min"
            className={select}
          >
            {Min.map((data, index) => {
              return (
                <MenuItem key={`priceRange ${index}`} value={data.value}>
                  {data.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[12]}
          </InputLabel>
          <Select
            value={data.max}
            onChange={(e) => {
              handleChange(e);
            }}
            name="max"
            className={select}
          >
            {Max.map((data, index) => {
              return (
                <MenuItem key={`priceRange ${index}`} value={data.value}>
                  {data.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
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
        <Grid style={{ marginTop: "30px" }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
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
        <Grid style={{ marginTop: "30px" }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[2]}
          </InputLabel>
          <Select
            value={data.yearFrom}
            onChange={(e) => {
              handleChange(e);
            }}
            name="yearFrom"
            defaultValue={data.yearFrom}
            className={select}
          >
            {arr.map((data, index) => {
              return (
                <MenuItem key={`year ${index}`} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[9]}
          </InputLabel>
          <Select
            value={data.yearTo}
            onChange={(e) => {
              handleChange(e);
            }}
            name="yearTo"
            input={<InputBase />}
            className={select}
          >
            {
            handleDropdown().map((data, index) => {
              return (
                <MenuItem key={`year ${index}`} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
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
                <MenuItem key={`engine ${index}`} value={data.value}>
                  {data.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[4]}
          </InputLabel>
          <Select
            value={data.engineCapacityFrom}
            onChange={(e) => {
              handleChange(e);
            }}
            name="engineCapacityFrom"
            className={select}
          >
            {engineCapacityFrom.map((data, index) => {
              return (
                <MenuItem key={`capacity ${index}`} value={data.value}>
                  {data.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[11]}
          </InputLabel>
          <Select
            value={data.engineCapacityTo}
            onChange={(e) => {
              handleChange(e);
            }}
            name="engineCapacityTo"
            className={select}
          >
            {engineCapacityTo.map((data, index) => {
              return (
                <MenuItem key={`capacity ${index}`} value={data.value}>
                  {data.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[5]}
          </InputLabel>
          <Select
            value={data.mileageTo}
            onChange={(e) => {
              handleChange(e);
            }}
            name="mileageTo"
            className={select}
          >
            {mileageTo.map((data, index) => {
              return (
                <MenuItem key={`mileage ${index}`} value={data.value}>
                  {data.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={2} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {array[10]}
          </InputLabel>
          <Select
            value={data.mileageFrom}
            onChange={(e) => {
              handleChange(e);
            }}
            name="mileageFrom"
            className={select}
          >
            {mileageFrom.map((data, index) => {
              return (
                <MenuItem key={`mileage ${index}`} value={data.value}>
                  {data.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: "80px" }} item lg={3} sm={6} xs={9}>
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
