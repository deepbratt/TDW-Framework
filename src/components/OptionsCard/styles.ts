import { makeStyles, Theme } from "@material-ui/core";
import { Colors } from "../../utils/constants/colors/colors";

export interface OptionsCardStylesProps {
  backgroundColor: string;
  backgroundColorSelected: string;
}

const { greySix } = Colors;

/** 
 @param backgroundColor
 @param backgroundColorSelected card background Color after Selection
 **/

const OptionsCardStyles = makeStyles<Theme, OptionsCardStylesProps>(() => ({
  root: {
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    padding: "30px 20px",
    borderRadius: "2px",
    boxShadow: "none",
    "& svg": {
      maxHeight: "30px",
      maxWidth: "30px",
      margin: "10px",
    },
    "& > h6": {
      color: "grey",
    },
    "&:hover": {
      backgroundColor: ({ backgroundColorSelected }) => backgroundColorSelected,
      "& > h6": {
        color: "white",
      },
      "& > svg > path": {
        fill: "#fff",
      },
    },
  },
}));

export default OptionsCardStyles;
