import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  Grid,
  MenuItem,
  Select,
  InputBase,
  Button
} from "@material-ui/core";
import selectStyles from "./selectStyles";
import Breakpoints from "../../Utils/Breakpoints";

interface IProps {
  setVal: (val: any) => void;
  val: any;
  carModel: string[];
  cities: string[];
  priceRange: string[]
}

const SearchSelect: React.FC<IProps> = ({
  setVal,
  val,
  carModel,
  cities,
  priceRange,
}) => {
  const { root, grid, select , button, selection} = selectStyles();

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setVal({
      ...val,
      [name]: value,
    });
  };


  return (
    <Grid lg={12} xs={12} item className={root}>
        <Grid className={select} item lg={2} md={12} xs={12}>
        <Select
          value={val.model}
          onChange={(e) => {
            handleChange(e);
          }}
          name="model"
          defaultValue={val.model}
          input={<InputBase />}
          className={selection}
        >
       
       <MenuItem value={carModel[0]}> {carModel[0]}</MenuItem>;
       <MenuItem value={carModel[1]}> {carModel[1]}</MenuItem>;
        </Select>
      </Grid>
      <Grid className={select} item lg={2} md={12} xs={12}>
        <Select
          value={val.cities}
          onChange={(e) => {
            handleChange(e);
          }}
          name="cities"
          defaultValue={val.cities}
          input={<InputBase />}
          className={selection}
        >
       
       <MenuItem value={cities[0]}> {cities[0]}</MenuItem>;
       <MenuItem value={cities[1]}> {cities[1]}</MenuItem>;
        </Select>
      </Grid>
      <Grid className={select} item lg={2} md={12} xs={12}>
        <Select
          value={val.priceRange}
          onChange={(e) => {
            handleChange(e);
          }}
          name="priceRange"
          defaultValue={val.priceRange}
          input={<InputBase />}
          className={selection}
        >
       
       <MenuItem value={priceRange[0]}> {priceRange[0]}</MenuItem>;
       <MenuItem value={priceRange[1]}> {priceRange[1]}</MenuItem>;
        </Select>
      </Grid>
      <Grid className={grid} item>
        <Button className={button} size={Breakpoints()} variant="contained">
          <SearchIcon style={{ fontSize: "2rem" }} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchSelect;
