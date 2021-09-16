import { makeStyles } from '@material-ui/core';

const CarsComparisonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    padding: '20px 30px',
    border: `1px solid ${theme.palette.secondary.main}`,
    boxShadow: 'none',
    borderRadius: '6px',
    '& img': {
      margin: '20px 0'
    }
  }
}));

export default CarsComparisonStyles;
