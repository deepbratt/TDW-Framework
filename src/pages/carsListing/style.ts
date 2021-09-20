import { makeStyles } from '@material-ui/core';

const CarListingStyles = makeStyles((theme) => ({
  root: {
    margin: '50px 0'
  },
  listingContainer: {
    margin: '50px 0'
  },
  contentRoot: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '5px',
    border: `0.5px solid ${theme.palette.text.primary}`,
    padding: '20px',
  }
}));

export default CarListingStyles;
