import { makeStyles, Theme } from '@material-ui/core';
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
    padding: '40px 60px',
    boxShadow: '0px -2px 5px -5px rgba(0,0,0,0.52)',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: ({ rootBackgroundColor }) => rootBackgroundColor,
    [theme.breakpoints.down('sm')]: {
      padding: '15px 25px'
    }
  },
  container: {
    maxWidth: '1240px'
  },
  logo: { marginBottom: '20px' },
  socialMediaLinks: {
    cursor: 'pointer',
    margin: '10px'
  },
  contacts: { marginTop: '20px' },
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
    margin: '7px 0',
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
  }
}));

export default FooterStyles;
