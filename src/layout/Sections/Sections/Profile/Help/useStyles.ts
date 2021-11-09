import makeStyles from "@material-ui/core/styles/makeStyles";
import { Colors } from "../../../Utils/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const {white,navyBlue} = Colors

export const useStyles = makeStyles((theme) => ({
  root:{
    justifyContent: "center",
    display: "flex",
    flexFlow: "wrap",
    flexDirection: "column",
    paddingLeft: "70px",
    [breakpoints.down("md")]: {
      paddingLeft: "0px",
    },
  },
  heading:{
    color: navyBlue,
    display: "flex",
    justifyContent: "space-between",
    marginBottom:"15px",
  },
  box: {
    background: white,
    width: "100%",
    position: "relative",
    padding:"20px",
    marginLeft: "20px",
    [breakpoints.down("sm")]: {
      marginLeft: "0px",
      padding:"10px"
    },
  },
  onlyHelpbox:{
    background: white,
    width: "100%",
    position: "relative",
    padding:"0 20px",
    [breakpoints.down("sm")]: {
      margin: "0px",
      padding:"10px"
    },
  },
  helpContainer:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px"
  },
  subContainer:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "start",
  }

}));
