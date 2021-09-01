import { Grid, Typography, IconButton, Chip } from '@material-ui/core';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

export interface AppliedFiltersProps {
  values: any;
  removeFilter: Function;
  removeFilterItem: Function;
  removeRangeFilter: Function;
  keys: any;
}

const AppliedFilters: React.FC<AppliedFiltersProps> = ({
  values,
  removeFilter,
  removeFilterItem,
  removeRangeFilter,
  keys
}) => {
  const rangeFilters = {
    priceRange: 'Price',
    mileageRange: 'Mileage',
    yearRange: 'Model Year',
    engineCapacityRange: 'Engine Capacity'
  };

  const getKeyValue =
    <T extends object, U extends keyof T>(obj: T) =>
    (key: U) =>
      obj[key];

  if (keys in rangeFilters) {
    return (
      <Grid item>
        <Chip
          size="small"
          label={
            getKeyValue(rangeFilters)(keys) + `[${values[0]}>, <${values[1]}]`
          }
          color="primary"
          onDelete={() => removeRangeFilter(keys)}
        />
      </Grid>
    );
  }
  if (keys === 'sort') {
    if (values === '-createdAt') {
      return (
        <Grid item>
          <Chip
            size="small"
            label={`Recent`}
            color="primary"
            onDelete={() => removeFilter(keys)}
          />
        </Grid>
      );
    } else if (values === 'createdAt') {
      return (
        <Grid item>
          <Chip
            size="small"
            label={`Oldest`}
            color="primary"
            onDelete={() => removeFilter(keys)}
          />
        </Grid>
      );
    } else if (values === '-price') {
      return (
        <Grid item>
          <Chip
            size="small"
            label={`Price High to Low`}
            color="primary"
            onDelete={() => removeFilter(keys)}
          />
        </Grid>
      );
    }
    else{
      return (
        <Grid item>
          <Chip
            size="small"
            label={`Price Low to High`}
            color="primary"
            onDelete={() => removeFilter(keys)}
          />
        </Grid>
      );
    }
  }

  if (keys === 'condition') {
    return (
      <Grid item>
        <Chip
          size="small"
          label={`Condition ${values}`}
          color="primary"
          onDelete={() => removeFilter(keys)}
        />
      </Grid>
    );
  }

  return (
    <>
      {typeof values !== typeof [] ? (
        <Grid item>
          <Chip
            size="small"
            label={keys}
            color="primary"
            onDelete={() => removeFilter(keys)}
          />
        </Grid>
      ) : (
        values.length !== 0 &&
        typeof values === typeof [] &&
        values.map((filter: any) => (
          <Grid key={`filter-${keys}`} item>
            <Chip
              size="small"
              label={filter}
              color="primary"
              onDelete={() => removeFilterItem(filter, keys)}
            />
          </Grid>
        ))
      )}
    </>
  );
};

export default AppliedFilters;
