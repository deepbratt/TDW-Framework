import { makeStyles } from '@material-ui/core/styles';
import { Colors } from '../../Utils/color.constants';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});
const { white, blue, darkGray } = Colors;
export const useStyles = makeStyles({
  table: {
    background: white
  },
  head: {
    background: darkGray,
    padding: '20px'
  },
  options: {
    background: white,
    padding: '20px',
    color: blue,
    display: 'flex',
    justifyContent: 'flex-end'
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
    width:"33%"
  },
  icon: {
    width: '10%',
    [breakpoints.down('sm')]: {
      width: '20%'
    },
    [breakpoints.down('xs')]: {
      width: '35%'
    }
  }
});
