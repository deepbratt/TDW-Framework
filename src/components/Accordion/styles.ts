import { makeStyles } from '@material-ui/core';
import { Colors } from '../../Utils/constants/colors/colors';

const AccordionStyles = makeStyles((theme) => ({
  root: {
    margin: '0 0',
    boxShadow: 'none',
    borderBottom: `0.5px solid ${theme.palette.text.primary}`
  },
  expanded: {
    backgroundColor: Colors.greyFour,
    margin: '0'
  },
  summaryContent: {
    margin: '0'
  },
  detailRoot: {
    backgroundColor: theme.palette.common.white
  }
}));

export default AccordionStyles;
