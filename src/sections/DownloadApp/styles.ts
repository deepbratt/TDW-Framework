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
    minHeight: '100%',
    maxHeight: '300px',
    zIndex: 20
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    maxWidth: '180px',
    minWidth: '180px',
  },

  cardMedia: {
    position: 'absolute',
    top: '-10px',
    right: '50px',
    zIndex: 20
  },
  btn: {
    backgroundColor: Colors.darkBlue,
    border: `1px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
    margin: '10px 0',
    '&:hover': {
      backgroundColor: Colors.navyBlue
    }
  }
}));

export default DownloadAppStyles;
