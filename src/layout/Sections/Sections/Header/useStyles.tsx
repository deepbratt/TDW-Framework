import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Utils/color.constants";

const breakpoints = createBreakpoints({});
const {white} = Colors
export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    width: "100%",
    padding: "30px 50px 10px 50px",
    backgroundColor: white,
    [breakpoints.down("sm")]: {
      padding: "0px",
    },
  },
  appbarsolid: {
    width: "100%",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
    justifyContent: "space-between",
    transition: "all .5s linear",
    padding: "0 !important",
    [breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
  },
  menuButton: {
    paddingRight: theme.spacing(2),
  },
  list: {
    display: "flex",
    whiteSpace: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  listItem: {
    marginRight: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  link: {
    textDecoration: "none",
    color: white,
  },
  active: {
  },
  logo: {
    width: "8rem",
    padding: "10px 0px 0px 10px",
    [breakpoints.down("sm")]: {
      paddingLeft: "0px",
      width: "6rem",
    },
  },
  rec: {
    position: "absolute",
    right: "0px",
    height: "75px",
    [breakpoints.down("md")]: {
      width: "70%",
    },
    [breakpoints.down("sm")]: {
      width: "50%",
      height: "100%",
    },
  }
}));
