import { makeStyles } from '@material-ui/core';
import { Colors } from '../../Utils/constants/colors/colors';

const VerticalFilterStyles = makeStyles(() => ({
  filtersCollection: {
    borderBottom: `4px solid ${Colors.navyBlue}`,
    '& > h3': {
      padding: '10px 15px',
      fontSize: '20px'
    }
  },lastAccordion:{
    borderBottom :"none"
  }
}));
export default VerticalFilterStyles;
