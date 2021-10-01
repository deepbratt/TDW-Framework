import makeStyles from "@material-ui/core/styles/makeStyles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Utils/color.constants";
const {blue,darkBlue } = Colors;
const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "center",
    textAlign: "center",
    background: `linear-gradient(${blue} 14.58%, ${darkBlue} 100%)`,
    padding: "70px 0px 50px 0px",
    position: "relative",
    
  },
  Icon:{
    position: "absolute", 
    bottom: "-20px",
    width: "5%",
    [breakpoints.down("md")]: {
        width: "8%",
      },
    [breakpoints.down("xs")]: {
        width: "15%",
      }
  },

  container:{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "60px",
  },
  btn:{
    border: "none",
    background: "transparent",
    padding: "0px",
    marginLeft: "5px"
  },
  text:{
    color: blue, 
    cursor: "pointer" 
  },
}));
