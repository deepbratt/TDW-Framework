import { makeStyles } from "@material-ui/core/styles";
// import { Colors } from "../../../../Theme/color.constants";
const drawerWidth = 260;
// const { blackColor, WildSand } = Colors;


export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
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
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  closeIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuIcon: {
    // color: blackColor,
    paddingRight:"24px",
    closeIcon: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  link: {
    marginTop: "5px",
    textDecoration: "none",
    color: "black",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
  }
}));
