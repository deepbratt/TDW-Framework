import makeStyles from '@material-ui/core/styles/makeStyles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});
export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '0 10px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.07)',
    [breakpoints.down('sm')]: {
      padding: '0px 20px'
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
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  listItem: {
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
    textDecoration: 'none',
    width: 'max-content'
  },
  active: {},
  logo: { maxWidth: '100px', margin: '0 15px' },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
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
    borderRadius: '20px',
    maxWidth: '400px',
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
    margin: '0 15px',
    borderRadius: '7px',
    padding: '10px 15px',
    color: theme.palette.common.white,
    background: 'linear-gradient(180deg, #ec4040 0%, #C20000 100%)',
    '& > span, *': {
      color: theme.palette.common.white
    }
  }
}));
