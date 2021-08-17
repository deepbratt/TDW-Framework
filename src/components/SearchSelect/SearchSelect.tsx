import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, MenuItem, Button, TextField } from "@material-ui/core";
import selectStyles from "./selectStyles";
import Breakpoints from "../../Utils/Breakpoints";
import { City } from "country-state-city";

interface IProps {
  setVal: (val: any) => void;
  val: any;
  carModel: string[];
  range: {
    min: string;
    max: string;
  };
  handleChange: (e:any) => void
  handleNavigation: () => void
}

const SearchSelect: React.FC<IProps> = ({ val, carModel, range,handleChange,handleNavigation}) => {
  const city = City.getCitiesOfCountry("PK");
  const { root, grid, button, selection, select, cssLabel } = selectStyles();
  const { model, cities, min, max } = val;

  return (
    <Grid container>
      <Grid xs={12} item className={root}>
        <Grid item lg={2} xs={12}>
          <TextField
            value={model}
            onChange={(e) => {
              handleChange(e);
            }}
            select
            name="model"
            label="Car Model"
            className={selection}
            InputLabelProps={{
              classes: {
                root: cssLabel,
              },
            }}
          >
            <MenuItem value={carModel[0]}> {carModel[0]}</MenuItem>;
            <MenuItem value={carModel[1]}> {carModel[1]}</MenuItem>;
          </TextField>
        </Grid>
        <Grid item lg={2} xs={12}>
          <TextField
            value={cities}
            onChange={(e) => {
              handleChange(e);
            }}
            name="cities"
            className={selection}
            select
            label="City"
            InputLabelProps={{
              classes: {
                root: cssLabel,
              },
            }}
          >
            {city &&
              city.map((data: any, index: number) => {
                return (
                  <MenuItem key={index} value={data.name}>
                    {data.name}
                  </MenuItem>
                );
              })}
          </TextField>
        </Grid>
        <Grid item lg={2} xs={12}>
          <TextField
            value={min}
            onChange={(e) => {
              handleChange(e);
            }}
            select
            name="min"
            label="Min"
            className={select}
            InputLabelProps={{
              classes: {
                root: cssLabel,
              },
            }}
          >
            <MenuItem value={range.min}> {range.min}</MenuItem>;
          </TextField>
          <TextField
            value={max}
            onChange={(e) => {
              handleChange(e);
            }}
            select
            name="max"
            label="Max"
            className={select}
            InputLabelProps={{
              classes: {
                root: cssLabel,
              },
            }}
          >
            <MenuItem value={range.max}> {range.max}</MenuItem>;
          </TextField>
        </Grid>
        <Grid className={grid} item>
          <Button className={button} size={Breakpoints()} variant="contained">
            <SearchIcon
              onClick={() => handleNavigation()}
              style={{ fontSize: "2rem" }}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchSelect;
