import makeStyles from "@material-ui/core/styles/makeStyles";
import { Colors } from "../../Utils/constants/colors/colors";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const { white, blue, darkBlue } = Colors;
const breakpoints = createBreakpoints({});

const selectStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    background: `linear-gradient(${blue} 14.58%, ${darkBlue} 100%)`,
    padding: "100px 0px 60px 0px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    marginRight: "30px",
    alignItems: "center",
    padding: "10px 10px 10px 10px",
    [breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  },
  img: {
    borderRadius: "3px",
    background: white,
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    padding: "10px",
  },
  banner: {
    display: "flex",
    justifyContent: "center",
    [breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
}));

export default selectStyles;
