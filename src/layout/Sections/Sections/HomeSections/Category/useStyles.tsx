import makeStyles from "@material-ui/core/styles/makeStyles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

const useStyles = makeStyles(() => ({
  main: {
    background: "white",
    display: "flex",
    justifyContent: "center",
    [breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    marginRight: "15px",
    [breakpoints.down("md")]: {
      margin: "0px 0px 15px 0px",
    },
  },
}));

export default useStyles;
