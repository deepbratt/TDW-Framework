import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../../Utils/color.constants';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const { blue, darkBlue, white, red } = Colors;
const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(${blue} 14.58%, ${darkBlue} 100%)`,
    padding: '0px 15px 40px 15px',
    marginTop: '30px',
    borderRadius: '5px'
  },
  adGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [breakpoints.down('xs')]: {
      justifyContent: 'space-around'
    }
  },
  optionsBtn: {
    background: 'transparent',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '0px',
    '&:hover': {
      background: 'transparent',
      boxShadow: 'none'
    },
    [breakpoints.down('xs')]: {
      marginLeft: '10px'
    }
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    borderBottom: '2px solid white',
    paddingBottom: '30px',
    [breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  text: {
    [breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  btnGrid: {
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'center',
    [breakpoints.down('xs')]: {
      marginTop: '20px'
    }
  },
  detailGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: `2px solid ${white}`,
    paddingBottom: '70px',
    [breakpoints.only('md')]: {
      display: 'block'
    }
  },
  select: {
    height: 40,
    width: '95%',
    [breakpoints.down('md')]: {
      width: '100%'
    },
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    color: theme.palette.common.black,
    backgroundColor: 'white',
    borderRadius: '3px'
  },
  inputStyle: {
    marginTop: 0,
    borderRadius: '5px',
    width: '95%',
    backgroundColor: "white"
  },
  menuitemhidden: {
    display: 'none'
  },
  isValid: {
    height: 46,
    width: '95%',
    [breakpoints.down('md')]: {
      width: '100%'
    },
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    color: theme.palette.common.black,
    backgroundColor: 'white',
    borderRadius: '3px',
    border: `2px solid ${red}`
  },
  icon: {
    color: red
  }
}));

export default useStyles;
