import { makeStyles } from "@material-ui/core";

const FooterStyles = makeStyles(() => ({
  root: {
    padding: "40px 60px",
    // backgroundColor: theme.palette.background.flashWhite,
  },
  logo: { marginBottom: "20px" },
  socialMedia: {
    marginRight: "30px",
  },
  contacts: { marginTop: "20px" },
  pageLinks: {
    paddingBottom: "15px",
    // color: theme.palette.text.primary,
  },
}));

export default FooterStyles;
