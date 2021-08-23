import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../Utils/color.constants";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const {red,white,navyBlue,blue,lightGreen} = Colors

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
    background: navyBlue,
    color: white,
    padding: "20px 10px 20px 10px",
    display: "flex",
    justifyContent: "space-between",
  },
  box:{
    marginLeft: "20px",
    [breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
    background: white,
    paddingBottom: "20px"
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
