import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';

const VerticalFilterStyles = makeStyles((theme) => ({
  filtersCollection: {
    borderBottom: `4px solid ${Colors.navyBlue}`,
    '& > h3': {
      padding: '10px 15px',
      fontSize: '20px'
    }
  },
  lastAccordion: {
    borderBottom: 'none'
  },
  fontSize: {
    fontSize: '0.9rem'
  },
  btn: {
    padding: '5px 7px',
    boxShadow: 'none',
    minWidth: '20px',
    lineHeight: '18px'
  },
  markLabel: {
    display: 'none'
  },
  errorMsg: {
    color: theme.palette.error.main,
    display: 'flex',
    alignItems: 'flex-start'
  }
}));
export default VerticalFilterStyles;
