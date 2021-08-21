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
    backgroundColor: ({ rootBackgroundColor }) => rootBackgroundColor,
    [theme.breakpoints.down('sm')]: {
      padding: '15px 25px'
    }
  },
  logo: { marginBottom: '20px' },
  socialMedia: {
    marginRight: '30px'
  },
  contacts: { marginTop: '20px' },
  pageLinks: {
    paddingBottom: '15px',
    color: ({ textPrimary }) => textPrimary
  },
  termsLinkRoot: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 0',
      justifyContent: 'space-around'
    }
  },
  termsLink: { marginRight: '20px' },
  socialMediaLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 0',
      justifyContent: 'space-around'
    }
  }
}));

export default FooterStyles;
