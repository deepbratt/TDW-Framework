import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';

const AccordionStyles = makeStyles((theme) => ({
  root: {
    margin: '0',
    boxShadow: 'none',
    borderBottom: `0.5px solid ${Colors.greySeven}`
  },
  expanded: {
    backgroundColor: Colors.greyFour,
    margin: '0'
  },
  detailRoot: {
    backgroundColor: theme.palette.common.white
  },
  headerStyles: {
    fontSize: '0.9rem'
  }
}));

export default AccordionStyles;
