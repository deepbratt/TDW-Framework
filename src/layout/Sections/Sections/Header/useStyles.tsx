import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { Colors } from '../../Utils/color.constants';

const breakpoints = createBreakpoints({});
const { white } = Colors;
export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '0 50px',
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
    alignContent: 'center',
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  listItem: {
    marginRight: '15px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  link: {
    color: theme.palette.common.black,
    textDecoration: 'none'
  },
  loginLink: {
    color: theme.palette.common.black,
    textDecoration: 'none'
  },
  active: {},
  logo: {
    width: '5rem',
    padding: '10px 0px 0px 10px',
    [breakpoints.down('sm')]: {
      paddingLeft: '0px',
      width: '4rem'
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
  },
  inputRoot: {
    maxWidth: '400px',
    borderRadius: '20px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '150px'
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '400px'
    },
    '& > .MuiOutlinedInput-root-293': {
      borderRadius: '10px'
    }
  },
  input: {
    fontSize: '16px',
    borderRadius: '10px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px'
    },
    '&::placeholder': {
      [theme.breakpoints.down('md')]: {
        fontSize: '16px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px'
      }
    }
  },
  btn: {
    margin: '0 5px',
    borderRadius: '7px',
    padding: '10px 15px',
    color: theme.palette.common.white,
    background: 'linear-gradient(180deg, #182FFF 0%, #092C4C 100%)'
  }
}));
