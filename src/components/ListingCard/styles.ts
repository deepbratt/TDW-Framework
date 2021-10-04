import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';
const { carminePink, white, greyFour, blueOne, spanishGrey, black, lightBlue } =
  Colors;

const ListingCardStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: lightBlue,
    boxShadow: 'none',
    position: 'relative',
    // maxWidth: "800px",
    width: '100%',
    marginTop: '10px'
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: lightBlue,
    boxShadow: 'none',
    position: 'relative',
    cursor: 'pointer',
    minWidth: '100%',
    marginTop: '10px',
    height:"100%"
  },
  featuredBadge: {
    position: 'absolute',
    left: '7px',
    top: '7px',
    padding: '3px 5px',
    backgroundColor: carminePink,
    borderRadius: '2px',
    '& > *': {
      fontSize: '10px',
      textTransform: 'uppercase',
      color: white,
      lineHeight: '12px'
    }
  },
  yearPrice: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > h5': {
      color: greyFour
    },
    '& > h4': {
      color: blueOne
    }
  },
  detailRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%'
  },
  details: {
    display: 'flex',
    // flexWrap: "wrap",
    margin: '10px 0px',
    '& > span': {
      margin: '5px 15px 5px 0',
      fontWeight: 500
    }
  },
  location: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > span': {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        color: spanishGrey
      },
      '& > img': {
        height: '16px',
        marginRight: '7px'
      }
    }
  },
  favsIconList: {
    position: 'absolute',
    right: '5px',
    top: '5px',
    padding:0,
    zIndex:1
  },
  favsIconGrid: {
    position: 'absolute',
    right: '5px',
    top: '315px',
    zIndex:1,
    padding:0,
  },
  label: {
    fontWeight: 'bold',
    color: black
  }
}));

export default ListingCardStyles;
