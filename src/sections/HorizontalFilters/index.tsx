import { Grid } from "@material-ui/core";
import Dropdown from "../../components/Dropdown";
import LayoutToggler from "../../components/LayoutToggler";
import { fieldNames } from "../../Utils/constants/formsConstants";
import { sortingOptions } from "../../Utils/constants/language/en/filtersData";

export interface HorizontalFiltersProps {
  values: any;
  errors: any;
  handleInputChange: Function
}

const HorizontalFilters: React.FC<HorizontalFiltersProps> = ({values, errors, handleInputChange}) => {
 
  return (
    <Grid style={{ margin: "10px 0" }} container justify="space-between">
      <Grid item container xs={10} spacing={2}>
        <Grid item xs={4}>
          <Dropdown
            label="SORTING OPTIONS"
            name={fieldNames.sortingOptions}
            onChange={handleInputChange}
            error={errors.sortingOptions}
            value={values.sortingOptions}
            options={sortingOptions}
          />
        </Grid>
        <Grid item xs={3}>
          <Dropdown label="CONDITION" options={sortingOptions} />
        </Grid>
        <Grid item xs={5}>
          <Dropdown label="DELIVERY OPTIONS" options={sortingOptions} />
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: "10px",
        }}
        item
        xs={2}
      >
        <LayoutToggler />
      </Grid>
    </Grid>
  );
};

export default HorizontalFilters;
