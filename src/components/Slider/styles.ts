import makeStyles from "@material-ui/core/styles/makeStyles";

const SliderStyles = makeStyles(() => ({
  dotsIndicator: {
    "& .carousel-slider": {
      minHeight: "200px",
    },
    "& .carousel .control-dots": {
      bottom: "-10px",
      margin: "10px",
    },
    "& .carousel .control-dots .dot": {
      background: "blue",

      "&:hover": {
        background: "red",
      },
    },
    "& .carousel .control-dots .dot .selected": {
      background: "red",
    },
  },
}));

export default SliderStyles;
