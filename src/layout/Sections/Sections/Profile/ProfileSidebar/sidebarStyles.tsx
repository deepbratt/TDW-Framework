import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../Utils/color.constants";

const drawerWidth = 200;
const {navyBlue,white,black,blue} = Colors

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: white,
    width: drawerWidth,
  },
  menuButton: {
    padding: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    minHeight: "0px"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    minHeight: "0px"
  },
  closeIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  link: {
    marginTop: "5px",
    textDecoration: "none",
    color: "black",
  },
  heading:{
    background: navyBlue,
    color: white,
    padding: "20px 10px 20px 10px",
    display: "flex",
    justifyContent: "space-between",
  },
  container:{
    background: white,
    color: black,
    padding: "20px 5px 20px 5px",
    height: "1000px"
  },
  content:{
    display: "flex",
    borderBottom: "1px solid lightGrey", 
    paddingBottom: "15px",
    paddingTop: "15px",
    padding: "0px"
  },
  icon:{
    padding: "10px",
    background: blue, 
    marginRight: "10px",
    color: blue,
    borderRadius: "4px",
    "&:hover":{
      background: navyBlue,
      transition: "all .3s linear",
      cursor: "pointer"
    },
    width: "45px",
    height: "25px",
    display: "flex",
    justifyContent: "center"
  },
  

}));
