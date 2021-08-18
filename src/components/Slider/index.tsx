import { Grid } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderStyles from "./styles";
export interface SliderProps {
  children?: React.ReactChild[] | any;
  styles?: string;
  showArrows?: boolean;
  showIndicators?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  children,
  styles,
  showArrows,
  showIndicators,
}) => {
  const { dotsIndicator } = SliderStyles();
  return (
    <Carousel
      className={styles ? styles : dotsIndicator}
      autoPlay
      showStatus={false}
      interval={2500}
      showArrows={showArrows}
      infiniteLoop={true}
      transitionTime={500}
      showIndicators={showIndicators}
      showThumbs={false}
    >
      {children}
    </Carousel>
  );
};

export default Slider;
