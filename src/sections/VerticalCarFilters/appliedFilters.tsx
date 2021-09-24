import { makeStyles, Grid, Chip } from '@material-ui/core';
import { Colors } from '../../Utils/constants/colors/colors';

const AppliedFiltersStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '5px',
    backgroundColor: Colors.lightGrey,
    border: `0.2px solid ${theme.palette.common.black}`
  },
  icon: {
    color: theme.palette.common.black
  }
}));

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
  const { root, icon } = AppliedFiltersStyles();

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
          classes={{ root: root, deleteIcon: icon }}
          size="small"
          label={
            getKeyValue(rangeFilters)(keys) + `[${values[0]}-${values[1]}]`
          }
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
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Recent`}
            onDelete={() => removeFilter(keys)}
          />
        </Grid>
      );
    } else if (values === 'createdAt') {
      return (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Oldest`}
            onDelete={() => removeFilter(keys)}
          />
        </Grid>
      );
    } else if (values === '-price') {
      return (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Price High to Low`}
            onDelete={() => removeFilter(keys)}
          />
        </Grid>
      );
    } else {
      return (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Price Low to High`}
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
          classes={{ root: root, deleteIcon: icon }}
          size="small"
          label={`Condition ${values}`}
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
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={keys + ': ' + values}
            onDelete={() => removeFilter(keys)}
          />
        </Grid>
      ) : (
        values.length !== 0 &&
        typeof values === typeof [] &&
        values.map((filter: any) => (
          <Grid key={`filter-${keys}`} item>
            <Chip
              classes={{ root: root, deleteIcon: icon }}
              size="small"
              label={filter}
              onDelete={() => removeFilterItem(filter, keys)}
            />
          </Grid>
        ))
      )}
    </>
  );
};

export default AppliedFilters;
