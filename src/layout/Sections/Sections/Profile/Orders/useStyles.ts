import { makeStyles } from "@material-ui/core/styles";
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
  },
  subContainer:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "10px"
  },
  button:{
     color: "white",
    border: "none",
    padding: "15px 25px 15px 25px",
    borderRadius: "5px",
    marginRight: "10px",
    cursor: "pointer",
    width: "40%"
  },
  buttonContainer:{
    display: "flex", 
    justifyContent: "center", 
    margin: "35px 10px 10px 10px"
  }

}));
