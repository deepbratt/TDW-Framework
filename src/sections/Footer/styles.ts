import { Theme } from '@material-ui/core/styles/createTheme';
import makeStyles from '@material-ui/styles/makeStyles';
export interface FooterStylesProps {
  rootBackgroundColor: string;
  textPrimary: string;
}

/**
 * @rootBackgroundColor Background Color of footer
 * @textPrimary
 **/

const FooterStyles = makeStyles<Theme, FooterStylesProps>((theme) => ({
  root: {
    marginTop: '30px',
    backgroundColor: ({ rootBackgroundColor }) => rootBackgroundColor,
    padding: '0 10px'
  },
  container: {
    marginBottom: '20px'
  },
  logo: { marginBottom: '20px' },
  socialMediaLinks: {
    cursor: 'pointer',
    marginRight: '10px'
  },
  pageLinks: {
    color: ({ textPrimary }) => textPrimary,
    margin: '7px 0',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.common.white
    }
  },
  text: {
    color: ({ textPrimary }) => textPrimary,
    margin: '7px 0'
  },
  filterTitle: {
    margin: '15px 0',
    color: theme.palette.common.white
  },
  divider: {
    borderTop: `2px solid #181C20`,
    paddingTop: '10px'
  },
  textFiedld: {
    backgroundColor: theme.palette.common.white,
    outline: 'none',
    border: 'none',
    maxHeight: '40px',
    position: 'relative',
    maxWidth: '97%',
    padding: '8px 0 8px 10px',
    '& > *': {
      maxHeight: '40px',
      border: 'none',
      outline: 'none'
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  btn: {
    backgroundColor: theme.palette.success.main,
    borderRadius: 0,
    color: theme.palette.common.white,
    boxShadow: 'none',
    padding: '12px 15px',
    position: 'absolute',
    right: '0px',
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      boxShadow: 'none'
    }
  },
  btnText: {
    textAlign: 'left',
    backgroundColor: 'inherit',
    display: 'block',
    border: 'none'
  }
}));

export default FooterStyles;
