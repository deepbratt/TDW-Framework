import { makeStyles } from "@material-ui/core";

const TabsStyles = makeStyles(() => ({
  root: {
    "&.MuiTab-selected-121": {
      fontSize: "24px",
      fontWeight: 700,
    },
  },
  tabsStyle: {
    marginBottom: "10px",
  },
  optionsWrapper: {
    margin: "30px 10px",
  },
}));

export default TabsStyles;
