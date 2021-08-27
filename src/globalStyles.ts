import { makeStyles } from '@material-ui/core';
import { Color } from './theme/color';

const GlobalStyles = makeStyles((theme) => ({
  multipleInput: {
    minWidth: '100%'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px 30px',
    margin: '5px 0',
    border: '2px solid',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 15px',
      fontSize: '12px'
    }
  },
  loginFormGrid: {
    height: 'auto',
    padding: '40px 0',
    backgroundColor: Color.grey
  },
  form: {
    minWidth: '100%',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      padding: '10px'
    }
  },
  formCard: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    boxShadow: '0px 4px 100px 5px rgba(0, 0, 0, 0.06)',
    padding: '50px 60px',
    borderRadius: '10px',
    maxWidth: '600px',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 15px'
    }
  },
  loginbtn: {
    margin: '5px 0',
    paddingTop: '10px',
    paddingBottom: '10px',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
      '& > *': {
        fontSize: '14px'
      }
    }
  },
  formStyle: {
    margin: '20px 0px',
  },
  header: {
    marginTop: '70px',
    backgroundColor: Color.grey,
    [theme.breakpoints.down('xs')]: {
      marginTop: '50px'
    }
  },
  listingContainer: {
    backgroundColor: Color.white,
    padding: '30px 25px',
    borderRadius: '5px',
    maxWidth: "1440px",
    [theme.breakpoints.down("xs")]: {
      padding: '10px',
    }
  }
}));

export default GlobalStyles;
