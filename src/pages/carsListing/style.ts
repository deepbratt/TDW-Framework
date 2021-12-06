import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';

const CarListingStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
      padding: '10px'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '20px',
      paddingTop: '0px'
    }
  },
  listingContainer: {
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0px'
    }
  },
  contentRoot: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '5px',
    border: `0.2px solid ${Colors.lightGrey}`,
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px'
    }
  },
  filtersRoot: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '5px',
    border: `0.5px solid ${Colors.lightGrey}`
  },
  filtersContent: {
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px'
    }
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

export default CarListingStyles;
