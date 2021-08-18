import { makeStyles, Theme } from "@material-ui/core";
import { Colors } from "../../Utils/constants/colors/colors";

export interface OptionsCardStylesProps {
  backgroundColor: string;
  backgroundColorSelected: string;
}

const { greySix } = Colors;

/** 
 @param backgroundColor
 @param backgroundColorSelected card background Color after Selection
 **/

const OptionsCardStyles = makeStyles<Theme, OptionsCardStylesProps>(
  (theme) => ({
    root: {
      backgroundColor: ({ backgroundColor }) => backgroundColor,
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
      padding: "30px 20px",
      borderRadius: "2px",
      boxShadow: "none",
      [theme.breakpoints.down("sm")]: {
        padding: "20px 10px",
      },
      "& svg": {
        maxHeight: "30px",
        maxWidth: "30px",
        margin: "10px",
        [theme.breakpoints.down("sm")]: {
          maxHeight: "20px",
          maxWidth: "20px",
          margin: "7px",
        },
      },
      "& > h6": {
        color: "grey",
        [theme.breakpoints.down("sm")]: {
          fontSize: "14px",
        },
      },
      "&:hover": {
        backgroundColor: ({ backgroundColorSelected }) =>
          backgroundColorSelected,
        "& > h6": {
          color: "white",
        },
        "& > svg > path": {
          fill: "#fff",
        },
      },
    },
  })
);

export default OptionsCardStyles;
