import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 260;


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
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  closeIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuIcon: {
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
