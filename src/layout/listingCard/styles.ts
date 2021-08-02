import { makeStyles } from "@material-ui/core";
import { Colors } from "../../utils/constants/colors/colors";
const { flashWhite, carminePink, white, greyFour, blueOne, spanishGrey } =
  Colors;

const ListingCardStyles = makeStyles(() => ({
  root: {
    display: "flex",
    backgroundColor: flashWhite,
    boxShadow: "none",
    position: "relative",
    maxWidth: "600px",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: flashWhite,
    boxShadow: "none",
    position: "relative",
  },
  featuredBadge: {
    position: "absolute",
    left: "7px",
    top: "7px",
    padding: "3px 5px",
    backgroundColor: carminePink,
    borderRadius: "2px",
    "& > *": {
      fontSize: "10px",
      textTransform: "uppercase",
      color: white,
      lineHeight: "12px",
    },
  },
  yearPrice: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > h5": {
      color: greyFour,
    },
    "& > h4": {
      color: blueOne,
    },
  },
  detailRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  details: {
    display: "flex",
    flexWrap: "wrap",
    margin: "10px 0px",
    "& > span": {
      margin: "5px 15px 5px 0",
      fontWeight: 500,
    },
  },
  location: {
    display: "flex",
    justifyContent: "space-between",
    "& > span": {
      display: "flex",
      alignItems: "center",
      "& > *": {
        color: spanishGrey,
      },
      "& > img": {
        height: "16px",
        marginRight: "7px",
      },
    },
  },
}));

export default ListingCardStyles;
