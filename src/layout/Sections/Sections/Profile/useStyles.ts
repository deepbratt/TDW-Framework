import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../Utils/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const { red, white, navyBlue, blue, black } = Colors;

export const useStyles = makeStyles((theme) => ({
  root: {
    // justifyContent: "center",
    // display: "flex",
    // // paddingLeft: "70px",
    // // paddingBottom: "30px",
    // [breakpoints.down("md")]: {
    //   padding: "40px",
    // },
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
    color: navyBlue,
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    marginLeft: "20px",
    background: white,
    width: "100%",
    minHeight: "965px",
    position: "relative",
    padding:"20px",
    [breakpoints.down("sm")]: {
      marginLeft: "0px",
      padding:"10px"
    },
  },
  layout: {
    marginLeft: "20px",
    background: white,
    paddingBottom: "20px",
    minHeight: "1500px",
    position: "relative",
    padding:"20px",
    [breakpoints.down("sm")]: {
      marginLeft: "0px",
      padding:"10px"

    },
    [breakpoints.down("xs")]: {
      minHeight: "1650px",
    },
  },

  button: {
    background: navyBlue,
    color: white,
    textTransform: "none",
    padding:"10px 50px"
  },
  cancelButton: {
    color: white,
    textTransform: "none",
    marginLeft:"10px",
    padding:"10px 50px"
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
    // marginTop: "30px",
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
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"10px"
  },
  passContainer:{
    display: "flex",
    flexFlow: "wrap",
      flexDirection: "column",
      justifyContent: "center",
  }
}));
