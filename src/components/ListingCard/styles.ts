import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Utils/constants/colors/colors";
const { flashWhite, carminePink, white, greyFour, blueOne, spanishGrey,black} =
  Colors;

const ListingCardStyles = makeStyles(() => ({
  root: {
    display: "flex",
    backgroundColor: flashWhite,
    boxShadow: "none",
    position: "relative",
    maxWidth: "800px",
    width: "100%",
    marginTop: '20px'
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: flashWhite,
    boxShadow: "none",
    position: "relative",
    cursor: "pointer",
    minWidth: "100%",
    marginTop: '20px'
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
    width: "100%",
  },
  details: {
    display: "flex",
    // flexWrap: "wrap",
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
  favsIcon:{
    position: "absolute",
    left: "200px",
    top: "3px",
    border: "none",
    background: "none",
    cursor: "pointer"
},
favsIconGrid:{
  position: "absolute",
  left: "0px",
  top: "3px",
  border: "none",
  background: "none",
  cursor: "pointer"
},
label: {
  fontWeight: "bold",
  color: black
}
}));

export default ListingCardStyles;
