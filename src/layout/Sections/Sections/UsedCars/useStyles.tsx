import makeStyles from "@material-ui/core/styles/makeStyles";
import { Colors } from "../../Utils/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { white, pink,red, navyBlue} = Colors;
const breakpoints = createBreakpoints({});

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: "70px"
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "5px",
    paddingBottom: "10px",
  },
  box: {
    background: navyBlue,
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    margin: "15px 15px 30px 0px",
    [breakpoints.down("md")]: {
      margin: "15px 30px 30px 10px",
    },
  },
  text: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 10px 0px 10px",
  },
  border: {
    padding: "10px",
    marginTop: "10px",
    borderTop: "1px solid white",
    display: "flex",
    justifyContent: "space-between",
    cursor:"pointer"
  },
  pinkBtn: {
    background: pink,
    color: white,
    "&:hover": {
      background: pink,
    },
  },
  btn: {
    margin: "20px",
    background: white,
    borderRadius: "100%",
    padding: "20px 0px 20px 0px",
    boxShadow: "none",
  },
  heading: {
    [breakpoints.down("sm")]: {
      textAlign: "center",
    },
    red: {
      background: red,
    }
  },
  dotsIndicator: {
    "& .carousel .slide": {
      textAlign: "left",
      marginLeft: "3px",
    },
    "& .carousel .slider": {
      padding: "0px",
      margin: "0px",
    },
    "& .carousel .control-dots": {
      bottom: "-10px",
      margin: "10px",
    },
    "& .carousel .control-dots .dot": {
      background: "blue",

      "&:hover": {
        background: "red",
      },
    },
    "& .carousel .control-dots .dot .selected": {
      background: "red",
    },
  },
}));

export default useStyles;
