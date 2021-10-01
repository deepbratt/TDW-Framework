import makeStyles from "@material-ui/core/styles/makeStyles";
import { Colors } from "../../Utils/constants/colors/colors";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { white, navyBlue} = Colors;
const breakpoints = createBreakpoints({});

const selectStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    "&:hover": {
      background: navyBlue,
    },
    background: navyBlue,
    color: white,
    height: "100%",
    [breakpoints.down("md")]: {
      width: "50%",
      marginTop: "25px",
      height: "60%",
    },
  },
  grid: {
    [breakpoints.only("lg")]: {
      maxWidth: "2%",
    },
    [breakpoints.down("md")]: {
      width: "100%",
    },
  },
  select: {
    height: 55,
    width: "50%",
    [breakpoints.down("md")]: {
      width: "100%",
    },
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    color: white,
    backgroundColor: white,
    borderRadius: "3px",
  },
  selection: {
    height: 55,
    width: "100%",
    [breakpoints.down("md")]: {
      width: "100%",
    },
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    color: white,
    backgroundColor: white,
    borderRadius: "3px",
   
  },
  cssLabel:{
    "&.Mui-focused": {
      color: white
    }
  }
}));

export default selectStyles;
