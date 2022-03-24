import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';
import LOGO from '../../layout/Sections/assets/logo.png';
const { carminePink, white, greyFour, blueOne, spanishGrey, black, lightBlue, darkBlue } =
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
    height: '100%'
  },
  featuredBadgeContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: '7px',
    top: '7px',
    zIndex: 109
  },
  featuredBadge: {
    margin: '0 2px',
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
  adTypeBadge: {
    margin: '0 7px',
    backgroundColor: darkBlue
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
    padding: 0,
    zIndex: 1
  },
  favsIconGrid: {
    position: 'absolute',
    right: '5px',
    top: '240px',
    zIndex: 1,
    padding: 0
  },
  label: {
    fontWeight: 'bold',
    color: black
  },
  cardMedia: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    position: 'relative'
  },
  blurBgImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(8px)'
  },
  featuredImgStyle: {
    zIndex: 97
  },
  imgWaterMark: {
    position: 'absolute',
    width: '100%',
    maxWidth: '50%',
    // bottom: '10px',
    // right: '10px',
    opacity: 0.3,
    zIndex: 99
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    minWidth: '100%',
    minHeight: '100%',
    zIndex: 98
  }
}));

export default ListingCardStyles;
