import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import {Colors} from "../../../Utils/color.constants"
const breakpoints = createBreakpoints({});
const {berry,navyBlue} = Colors
export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  downloadsec: {
    borderRadius: "5px",
    background: navyBlue,
    display: "flex",
    padding: "30px 0px 30px 0px",
    marginBottom: "20px",
    [breakpoints.down("sm")]: {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "30px",
    },
  },
  text: {
    [breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  compareSec: {
    border: `1px solid ${berry}`,
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "20px",
    alignItems: "center",
    padding: "30px 0px 30px 0px",
    [breakpoints.down("sm")]: {
      marginTop: "30px",
    },
  },
  textDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
