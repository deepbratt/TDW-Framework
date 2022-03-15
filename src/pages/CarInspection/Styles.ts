import makeStyles from '@material-ui/core/styles/makeStyles';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import BannerImg from '../../assets/CarInspection/Banner.png';
import PolygonIcon from '../../assets/CarInspection/Polygon.png';

const Styles = makeStyles((theme) => ({
  carComparisionsRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  },
  carComparisionsLink: {
    color: theme.palette.secondary.main,
    cursor: 'pointer'
  },
  banner: {
    textAlign: 'center',
    marginBottom: '300px',
    [theme.breakpoints.up(386)]: {
      marginBottom: '230px'
    },
    [theme.breakpoints.up(722.5)]: {
      marginBottom: '195px'
    },
    [theme.breakpoints.up(735)]: {
      marginBottom: '185px'
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: '2px'
    }
  },
  bannerImg: {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    minHeight: '30vw',
    filter: 'brightness(50%) blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '25vw'
    }
  },
  bannerContainer: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      top: '10%',
    }
  },
  bannerHeading1: {
    width: '85%',
    margin: '2% auto 1%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: '1.5',
    color: '#092C4C',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.up('lg')]: {
      margin: '2% auto auto',
      fontSize: '3vw',
      lineHeight: '6vw',
      color: '#FFFFFF',
    }
  },
  bannerContent: {
    width: '90%',
    margin: 'auto',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: '1.25',
    color: '#484848',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.75vw',
      lineHeight: '3vw',
      color: '#FFFFFF',
    }
  },
  mailBtn: {
    background: '#092C4C',
    border: '1px solid #FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '4px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: '28px',
    backgroundColor: '#092C4C',
    color: '#FFF',
    margin: '20px 20px 0',
    padding: '7.5px 15px',
    '&:hover': {
      backgroundColor: '#60749F'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.25vw',
    }
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '10px',
    // [theme.breakpoints.up('lg')]: {
    //   marginTop: '10px',
    // }
  },
  badgeText: {
    width: '90%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: '1.25',
    color: '#484848',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  blueText: {
    color: '#05409D'
  },
  badges: {
    width: '90%',
    margin: '2% auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  badgeContent: {
    margin: '3% auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  badgeIcon: {
    backgroundImage: `url(${PolygonIcon})`,
    backgroundSize: 'fit',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  badgeHeading: {
    margin: '15px auto 5px',
    color: '#05409D',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '22px',
    lineHeight: '26px',
  },
  badgeDescription: {
    width: '90%',
    color: '#484848',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '25px',
    textAlign: 'center'
  }
}));

export default Styles;