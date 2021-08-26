import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { Colors } from '../../Utils/color.constants';

const breakpoints = createBreakpoints({});
const { white } = Colors;
export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '0 50px',
    backgroundColor: white,
    background:"white",
    boxShadow: '0 1px 2px rgba(0,0,0,0.07)',
    [breakpoints.down('sm')]: {
      padding: '0px'
    }
  },
  appbarsolid: {
    width: '100%',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
    justifyContent: 'space-between',
    transition: 'all .5s linear',
    padding: '0 !important',
    [breakpoints.down('sm')]: {
      justifyContent: 'space-around'
    }
  },
  menuButton: {
    paddingRight: theme.spacing(2)
  },
  list: {
    display: 'flex',
    whiteSpace: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  listItem: {
    marginRight: '20px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  link: {
    textDecoration: 'none',
    color: white,
    marginTop: '5px'
  },
  loginLink: {
    textDecoration: 'none',
    color: white,
    marginTop: '8px'
  },
  active: {},
  logo: {
    width: '8rem',
    padding: '10px 0px 0px 10px',
    [breakpoints.down('sm')]: {
      paddingLeft: '0px',
      width: '6rem'
    }
  },
  rec: {
    position: 'absolute',
    right: '0px',
    height: '74.5px',
    [breakpoints.down('md')]: {
      width: '70%'
    },
    [breakpoints.down('sm')]: {
      width: '50%',
      height: '100%'
    }
  }
}));
