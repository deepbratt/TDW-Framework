import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderStyles from "./styles";
export interface SliderProps {
  children: React.ReactChild[];
  styles?: string
}

const Slider: React.FC<SliderProps> = ({ children, styles}) => {
  const { dotsIndicator } = SliderStyles();
  return (
    <Carousel
      className={styles ? styles : dotsIndicator}
      autoPlay
      showStatus={false}
      interval={2500}
      showArrows={false}
      infiniteLoop={true}
      transitionTime={500}
      showIndicators={false}
      showThumbs={false}
    >
      {children}
    </Carousel>
  );
};

export default Slider;

