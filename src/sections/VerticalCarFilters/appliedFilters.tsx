import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';
import {
  removeArrayFilter,
  removeFilter
} from '../../redux/reducers/carFiltersSlice';
import { useDispatch } from 'react-redux';
import { getKeyValue } from '../../Utils/helperFunctions';

const AppliedFiltersStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '5px',
    backgroundColor: Colors.lightGrey,
    border: `0.2px solid ${theme.palette.common.black}`,
    marginTop: '10px'
  },
  icon: {
    color: theme.palette.common.black
  }
}));

export interface AppliedFiltersProps {
  values: any;
  removeRangeFilter: Function;
  keys: any;
}

const AppliedFilters: React.FC<AppliedFiltersProps> = ({
  values,
  removeRangeFilter,
  keys
}) => {
  const { root, icon } = AppliedFiltersStyles();
  const dispatch = useDispatch();

  const rangeFilters = {
    price: 'Price',
    milage: 'Mileage',
    modelYear: 'Model Year',
    engineCapacity: 'Engine Capacity'
  };
  const rangeInitialValues = {
    price: ['', ''],
    modelYear: ['', ''],
    milage: ['', ''],
    engineCapacity: ['', '']
  };

  if (
    keys in rangeInitialValues &&
    (values[0] !== getKeyValue(rangeInitialValues)(keys)[0] ||
      values[1] !== getKeyValue(rangeInitialValues)(keys)[1])
  ) {
    return (
      <Grid item>
        <Chip
          classes={{ root: root, deleteIcon: icon }}
          size="small"
          label={
            getKeyValue(rangeFilters)(keys) +
            ` [${Number(values[0])}-${
              Number(values[1]) === 0 ? 'Max' : Number(values[1])
            }]`
          }
          onDelete={() => removeRangeFilter(keys)}
        />
      </Grid>
    );
  }
  if (keys === 'sort' && values !== '') {
    if (values === '-createdAt') {
      return (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Recent`}
            onDelete={() => dispatch(removeFilter({ name: keys, value: '' }))}
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
            onDelete={() => dispatch(removeFilter({ name: keys, value: '' }))}
          />
        </Grid>
      );
    } else if (values === 'modelYear') {
      return (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Oldest Models`}
            onDelete={() => dispatch(removeFilter({ name: keys, value: '' }))}
          />
        </Grid>
      );
    } else if (values === '-modelYear') {
      return (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Newest Models`}
            onDelete={() => dispatch(removeFilter({ name: keys, value: '' }))}
          />
        </Grid>
      );
    } else if (values === 'milage') {
      return (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Lowest Milage`}
            onDelete={() => dispatch(removeFilter({ name: keys, value: '' }))}
          />
        </Grid>
      );
    } else if (values === '-milage') {
      return (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Highest Milage`}
            onDelete={() => dispatch(removeFilter({ name: keys, value: '' }))}
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
            onDelete={() =>
              dispatch(removeFilter({ name: keys, value: [0, 0] }))
            }
          />
        </Grid>
      );
    } else if (values === 'price') {
      return (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={`Price Low to High`}
            onDelete={() =>
              dispatch(removeFilter({ name: keys, value: [0, 0] }))
            }
          />
        </Grid>
      );
    }
  }

  if (keys === 'condition' && values !== '') {
    return (
      <Grid item>
        <Chip
          classes={{ root: root, deleteIcon: icon }}
          size="small"
          label={`Condition ${values}`}
          onDelete={() => dispatch(removeFilter({ name: keys, value: '' }))}
        />
      </Grid>
    );
  }

  if (keys === 'adType' && values !== '' && values !== 'any' && (values === 'Sell' || values === 'Rental')) {
    return (
      <Grid item>
        <Chip
          classes={{ root: root, deleteIcon: icon }}
          size="small"
          label={`Showing Results for ${
            values === 'Sell' ? 'Buying Cars' : 'Renting Cars'
          }`}
          onDelete={() => dispatch(removeFilter({ name: keys, value: '' }))}
        />
      </Grid>
    );
  }

  return (
    <>
      {values !== '' &&
      values !== false &&
      typeof values !== typeof [] &&
      values !== 'any' ? (
        <Grid item>
          <Chip
            classes={{ root: root, deleteIcon: icon }}
            size="small"
            label={keys + ': ' + values}
            onDelete={() => dispatch(removeFilter({ name: keys, value: '' }))}
          />
        </Grid>
      ) : (
        typeof values === typeof [] &&
        !(keys in rangeFilters) &&
        values.map((filter: any) => (
          <Grid key={uuidv4()} item>
            <Chip
              classes={{ root: root, deleteIcon: icon }}
              size="small"
              label={filter}
              onDelete={() =>
                dispatch(removeArrayFilter({ name: keys, value: filter }))
              }
            />
          </Grid>
        ))
      )}
    </>
  );
};

export default AppliedFilters;
