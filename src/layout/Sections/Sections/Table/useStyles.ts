import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/color.constants';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const { white, blue, darkGray, greyOne } = Colors;
export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: '100%',
    background: white,
    border: `0.5px solid ${greyOne}`
  },
  head: {
    background: darkGray,
    padding: '20px',
    [breakpoints.down('xs')]: {
      padding: '10px'
    }
  },
  options: {
    background: white,
    padding: '20px 0',
    color: blue
  },
  btn: {
    background: 'transparent',
    boxShadow: 'none',
    color: blue,
    textTransform: 'none',
    '&:hover': {
      background: 'transparent',
      boxShadow: 'none'
    }
  },
  cell: {
    padding: '20px',
    [breakpoints.down('xs')]: {
      padding: '10px'
    }
  },
  stickyCell: {
    padding: '20px',
    borderRight: `1px solid ${greyOne}`,
    position: 'sticky',
    left: 0,
    background: darkGray,
    [breakpoints.down('xs')]: {
      padding: '10px'
    }
  },
  icon: {
    // width: '50%'
  }
}));
