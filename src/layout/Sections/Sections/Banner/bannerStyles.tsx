import makeStyles from "@material-ui/core/styles/makeStyles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

const bannerStyles = makeStyles(() => ({
  root: {
    vh: "100%",
    position: "relative",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    padding: "100px 0px 50px 0px",
  },
  fab: {
    position: "absolute",
    bottom: "-20px",
    zIndex: 2
  },
  grid:{
    margin: "35px 0px 40px 0px", 
    display: "flex",
    justifyContent: "space-around",
    [breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  btn:{
    [breakpoints.down("sm")]: {
      marginTop: "24px"
    }
  }
}));

export default bannerStyles;
