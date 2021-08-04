import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../Utils/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { white, navyBlue } = Colors;
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
  },
  selection: {
    height: 50,
    width: "100%",
    [breakpoints.down("md")]: {
      width: "100%",
    },
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    color: theme.palette.common.black,
    backgroundColor: "white",
    borderRadius: "3px",
  },
}));

export default selectStyles;
