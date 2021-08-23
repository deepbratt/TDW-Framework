import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Utils/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const { red, white, navyBlue, blue, black } = Colors;

export const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    display: "flex",
    flexFlow: "wrap",
    paddingLeft: "70px",
    paddingBottom: "30px",
    [breakpoints.down("md")]: {
      padding: "40px",
    },
  },
  img: {
    justifyContent: "flex-end",
    display: "flex",
    marginTop: "20px",
    paddingRight: "100px",
    paddingTop: "10px",
    [breakpoints.down("md")]: {
      paddingRight: "40px",
    },
    [breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  select: {
    height: 46,
    width: "100%",
    outline: "none",
    cursor: "pointer",
    textAlign: "left",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    color: red,
    backgroundColor: white,
    borderRadius: "3px",
    [breakpoints.down("md")]: {
      padding: "0px",
    },
  },
  asterisk: {
    color: red,
  },
  heading: {
    background: navyBlue,
    color: white,
    padding: "20px 10px 20px 10px",
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    marginLeft: "20px",
    background: white,
    paddingBottom: "20px",
    minHeight: "965px",
    position: "relative",
    [breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  layout: {
    marginLeft: "20px",
    background: white,
    paddingBottom: "20px",
    minHeight: "1500px",
    position: "relative",
    [breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
    [breakpoints.down("xs")]: {
      minHeight: "1650px",
    },
  },

  button: {
    background: blue,
    color: white,
    margin: "10px 10px 0px 10px",
    textTransform: "none",
    "&:hover": {
      background: blue,
      color: white,
    },
  },
  cancelButton: {
    color: white,
    margin: "10px 10px 0px 10px",
    textTransform: "none",
  },
  icon: {
    width: "15%",
    [breakpoints.down("sm")]: {
      width: "25%",
    },
  },
  btnBox: {
    display: "flex",
    flexFlow: "wrap",
      flexDirection: "column",
      justifyContent: "center",
  
  },
  uploadBtn: {
    position: "absolute",
    top: "0%",
    zIndex: 1,
    left: "-30px",
    fontSize: "40px",
    cursor: "pointer",
  },
  favContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    flexDirection: "column",
    alignItems: "center",
    [breakpoints.down("md")]: {
      padding: "20px",
    },
  },
  loading: {
    color: black,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
  },
  passwordButton: {
    margin: "10px 0px 0px 10px",
    padding: "5px 5px",
    textTransform: "none",
    [breakpoints.down("md")]: {
      marginLeft: "0px",
    },
  },
  pagination: {
    position: "absolute",
    bottom: "0%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    [breakpoints.up("lg")]: {
      left: "60%",
      marginLeft: "20px",
    },
    [breakpoints.only("md")]: {
      left: "60%",
      marginLeft: "10px",
    },
    [breakpoints.down("xs")]: {
      marginLeft: "10px",
    },
  },
  passContainer:{
    display: "flex",
    flexFlow: "wrap",
      flexDirection: "column",
      justifyContent: "center",
  }
}));
