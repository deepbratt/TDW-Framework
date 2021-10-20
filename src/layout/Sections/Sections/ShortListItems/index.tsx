import { Chip, Fab, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import {
  COMPARE,
  RESET,
  SHORTLIST_ITEMS
} from '../../../../Utils/constants/language/en/buttonLabels';
import CompareRoundedIcon from '@material-ui/icons/CompareRounded';
import ShortListCard from '../../../../components/ShortListCard';
import { ICarCard } from '../../../../Utils/interfaces/products.interface';
import { paths } from '../../../../routes/paths';
import { useHistory } from 'react-router';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface ShortListItemsProps {
  clearShortListedCars: () => void;
  removeShortListItem: (itemId: string) => void;
}

const ShortListItems = ({
  clearShortListedCars,
  removeShortListItem
}: ShortListItemsProps) => {
  const history = useHistory();
  const { shortlistCars } = useSelector(
    (state: RootState) => state.shortlistCars
  );
  const { root, compareButtonIcon, comparebutton } = CarListingStyles();
  return (
    <Grid container >
      {shortlistCars.length >= 1 && (
        <Grid item container xs={12}>
          <Grid
            item
            container
            xs={12}
            justifyContent="space-between"
            alignItems="center"
            className={root}
          >
            <Typography variant="button" gutterBottom>
              {SHORTLIST_ITEMS}
            </Typography>
            <Chip
              label={RESET}
              onClick={() => clearShortListedCars()}
              color="secondary"
            />
          </Grid>
          <Fab
            variant="extended"
            color="primary"
            aria-label="compare"
            size="large"
            className={comparebutton}
            onClick={() => history.push(`${paths.carComparision}`)}
          >
            <CompareRoundedIcon className={compareButtonIcon} />
            {COMPARE}
          </Fab>
          <Grid item container xs={12} spacing={1}>
            {shortlistCars && shortlistCars.length > 0
              ? shortlistCars.map((item: ICarCard) => (
                  <Grid
                    key={`shotlist-item-${item._id}`}
                    container
                    justifyContent="center"
                    item
                    xs={3}
                    sm={2}
                  >
                    <ShortListCard
                      productImg={item.image[0]}
                      name={item.model}
                      _id={item._id}
                      handleClick={() => removeShortListItem(item._id)}
                    />
                  </Grid>
                ))
              : null}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
export default ShortListItems;

const CarListingStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 0'
  },
  comparebutton: {
    margin: theme.spacing(1),
    position: 'fixed',
    right: '10%',
    bottom: '20px',
    zIndex: 99999,
    [theme.breakpoints.down('xs')]: {
      bottom: '10px'
    }
  },
  compareButtonIcon: {
    margin: theme.spacing(1)
  }
}));
