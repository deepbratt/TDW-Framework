import { makeStyles } from '@material-ui/core';
import { Colors } from '../../Utils/constants/colors/colors';
const { darkBlue } = Colors;

const DownloadAppStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 30px',
    backgroundColor: darkBlue,
    boxShadow: 'none',
    borderRadius: '6px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '15px'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '50px'
    }
  },
  cardMedia: {
    position: 'absolute',
    top: '-10px',
    right: '50px',
    [theme.breakpoints.down('md')]: {
      right: '20px',
      height: '400px'
    },
    [theme.breakpoints.down('sm')]: {
      right: '10px',
      height: '280px'
    }
  },
  btn: {
    maxWidth: '180px',
    minWidth: '180px',
    backgroundColor: Colors.darkBlue,
    border: `1px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
    margin: '10px 0',
    '&:hover': {
      backgroundColor: Colors.navyBlue
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '140px',
      minWidth: '140px'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '130px',
      minWidth: '130px'
    }
  }
}));

export default DownloadAppStyles;
