import { makeStyles } from "@material-ui/core";
import { Colors } from "../../utils/constants/colors/colors";
const { primary } = Colors;

const DownloadAppStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    padding: "20px 30px",
    border: `1px solid ${primary}`,
    boxShadow: "none",
    borderRadius: "6px",
    "& img": {
      margin: "20px 0",
    },
  },
}));

export default DownloadAppStyles;
