import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Utils/color.constants";
const breakpoints = createBreakpoints({});
const { navyBlue, grey, blue, white, green, gray, malibuBlue } = Colors;
export const useStyles = makeStyles(() => ({
  root: {
    padding: "70px 0px 0px 0px",
    margin: "20px 0px 0px 20px",
    position: "relative",
    [breakpoints.down("md")]: {
      margin: "0px",
    },
  },
  sub: {
    display: "flex",
    margin: "10px 0px 30px 0px",
    color: grey,
  },
  type: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "125px 0px 0px 0px",
    color: blue,
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  numBtn: {
    backgroundColor: green,
    color: white,
    padding: "15px 10px 15px 10px",
    "&:hover": {
      backgroundColor: green,
    },
  },
  mailBtn: {
    backgroundColor: navyBlue,
    color: white,
    padding: "15px 10px 15px 10px",
    "&:hover": {
      backgroundColor: navyBlue,
    },
  },
  icon: {
    width: "25%",
    [breakpoints.down("xs")]: {
      width: "20%",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  box: {
    background: "rgb(239, 243, 250)",
    marginTop: "20px",
    padding: "20px 0px 200px 15px",
    borderRadius: "3px",
  },
  carousel: {
    paddingTop: "70px",
    width: "100%",
    "& .carousel .slide img": {
      width: "100%",
    },
    "& .carousel carousel-slider": {
      width: "20%",
    },
    "& .carousel-root makeStyles-carousel-270": {
      width: "20%",
    },
    "& .carousel.carousel-slider .control-arrow": {
      background: white,
      height: "13%",
      top: "180px",
      borderRadius: "50px",
      padding: "5px 15px 5px 15px",
      opacity: "10",
      "&:hover": {
        background: white,
      },
      [breakpoints.only("md")]: {
        top: "250px",
      },
      [breakpoints.only("sm")]: {
        top: "260px",
        height: "10%",
      },
      [breakpoints.down("xs")]: {
        top: "120px",
        height: "20%",
      },
    },
    "& .carousel .thumb,.carousel .thumb.selected, .carousel .thumb:hover": {
      border: "none",
    },
    "& .carousel .thumbs-wrapper ul ": {
      padding: "0px",
      margin: "0px",
      display: "flex",
      justifyContent: "center",
    },
    "& .carousel .thumbs-wrapper": {
      marginTop: "10px",
      marginBottom: "0px",
    },
    "& .carousel .thumbs-wrapper ul li": {
      borderRadius: "15px",
    },
    "&  .carousel .control-prev.control-arrow:before": {
      color: "black",
      borderRight: "8px solid black",
    },
    "&  .carousel .control-next.control-arrow:before": {
      color: "black",
      borderLeft: "8px solid black",
    },
  },
  detail: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    [breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  Info: {
    background: "rgb(239, 243, 250)",
    marginTop: "20px",
    padding: "10px 10px 20px 10px",
    borderRadius: "3px",
    color: gray,
  },
  card: {
    marginTop: "20px",
    padding: "10px 10px 20px 10px",
    borderRadius: "3px",
    color: navyBlue,
  },
  featureBox: {
    padding: "5px",
  },
  title: {
    marginLeft: "5px",
  },
  btn: {
    background: "transparent",
    boxShadow: "none",
    padding: "10px 0px",
    position: "absolute",
    zIndex: 2,
    marginTop: "10px",
    right: "0px",
    "&:hover":{
      background: "transparent",
      boxShadow: "none",
    }
  },
  sec: {
    background: malibuBlue,
    padding: "2px 10px",
    marginTop: "10px",
    borderRadius: "50%",
  },
  loader: {
    margin: "300px 0px"
  },
  link:{
    color: white
  }
}));
