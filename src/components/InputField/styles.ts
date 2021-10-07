import makeStyles from '@material-ui/core/styles/makeStyles';
const LayoutStyle = makeStyles((theme) => ({
  root: {
    margin: '8px 0',
    backgroundColor: 'white'
  },
  input: {
    fontSize: '0.9rem',
    '&::placeholder': {
      fontSize: '0.9rem'
    }
  },
  btn: {
    padding: '5px 7px',
    boxShadow: 'none',
    minWidth: '20px',
    lineHeight: '18px'
  }
}));

export default LayoutStyle;
