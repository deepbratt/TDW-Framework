import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';

const VerticalFilterStyles = makeStyles(() => ({
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
  }
}));
export default VerticalFilterStyles;
