import { makeStyles } from '@material-ui/core';

const CarListingStyles = makeStyles((theme) => ({
  listingContainer: {
    marginTop: '50px',
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
      marginBottom: '0px'
    }
  },
  contentRoot: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '5px',
    border: `0.5px solid ${theme.palette.text.primary}`,
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px'
    }
  },
  filtersRoot: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '5px',
    border: `0.5px solid ${theme.palette.text.primary}`
  },
  filtersContent: {
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px'
    }
  }
}));

export default CarListingStyles;
