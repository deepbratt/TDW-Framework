import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import LayoutToggler from '../../components/LayoutToggler';
import { RootState } from '../../redux/store';
import { fieldNames } from '../../Utils/constants/formsConstants';
import {
  sortingOptions,
  conditionOptions,
  listingOptions
} from '../../Utils/constants/language/en/filtersData';

export interface HorizontalFiltersProps {
  handleInputChange: Function;
}

const HorizontalFilters: React.FC<HorizontalFiltersProps> = ({
  handleInputChange
}) => {
  const values = useSelector((state: RootState) => state.carFilters.filters);
  return (
    <Grid style={{ margin: '10px 0' }} container justifyContent="space-between">
      <Grid item container xs={10} spacing={2}>
        <Grid item xs={5}>
          <Dropdown
            label="SORT BY"
            name={fieldNames.sortingOptions}
            onChange={handleInputChange}
            value={values.sort}
            options={sortingOptions}
          />
        </Grid>
        <Grid item xs={4}>
          <Dropdown
            label="CONDITION"
            name={fieldNames.condition}
            onChange={handleInputChange}
            value={values.condition}
            options={conditionOptions}
          />
        </Grid>
        <Grid item xs={3}>
          <Dropdown
            label="LISTING TYPE"
            name={fieldNames.listingType}
            onChange={handleInputChange}
            value={values.listingType}
            options={listingOptions}
          />
        </Grid>
        {/* <Grid item xs={5}>
          <Dropdown label="DELIVERY OPTIONS" options={sortingOptions} />
        </Grid> */}
      </Grid>
      <Grid
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginRight: '10px'
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
