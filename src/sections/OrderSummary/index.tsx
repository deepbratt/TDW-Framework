import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';

import Skeletons from '../../components/Skeletons';
import Typography from '@material-ui/core/Typography';
import ListingCardSkeletons from '../../components/ListingCard/ListingCardSkeletons';
import {
  CANT_FIND_RESULT,

} from '../../Utils/constants/language/en/buttonLabels';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';
import { RootState } from '../../redux/store';
import CartPageCard from '../../components/ListingCard/CartPageCard';

let DummyData = [
    {
        id: uuidv4(),
        name: 'Carrera German Engineered Polish &Wax',
        price: '$100',
        image: 'https://source.unsplash.com/random/300x300',
        salePrice: '$50',
        rating: 4,
        quantity: 1,
        stock: 10,
    },
    {
        id: uuidv4(),
        name: 'Carrera German Engineered Polish &Wax',
        price: '$100',
        image: 'https://source.unsplash.com/random/300x300',
        salePrice: '$50',
        rating: 4,
        quantity: 1,
        stock: 10,
    }
]

const ListingLayoutStyles = makeStyles((theme) => ({
  listingContainer: {
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0px'
    }
  },
  contentRoot: {
    backgroundColor: theme.palette.common.white,
    border: `0.2px solid ${Colors.lightGrey}`,
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px'
    }
  },
  contentHeader: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  }
}));

const OrderSummary: React.FC = () => {
  const { listingContainer, contentRoot } = ListingLayoutStyles();

  const { layoutType } = useSelector((state: RootState) => state.layout);

  return (
    <>
      {1 > 2 && (
        <Grid item container xs={12}>
          <Skeletons length={6} layoutType={layoutType}>
            <ListingCardSkeletons layoutType={layoutType} />
          </Skeletons>
        </Grid>
      )}
      {1 > 2 && (
        <Grid style={{ margin: '50px 0' }} item xs={12}>
          <Typography align="center" variant="h2">
            {CANT_FIND_RESULT}
          </Typography>
        </Grid>
      )}
      {!(1 > 2) && (
        <Grid item container xs={12} spacing={1}>
          {DummyData &&
            DummyData.map((car: any) => (
              <Grid
                key={`${uuidv4}`}
                item
                xs={12}
                sm={layoutType === 'list' ? 12 : 6}
              >
                <CartPageCard data={car} layoutType={layoutType} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default OrderSummary;