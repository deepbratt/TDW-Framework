import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderStyles from "./styles";

export interface SliderProps {
  children: React.ReactChild[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const { dotsIndicator } = SliderStyles();
  return (
    <Carousel
      className={dotsIndicator}
      autoPlay
      showStatus={false}
      interval={2500}
      showArrows={false}
      infiniteLoop={true}
      transitionTime={500}
      showIndicators={true}
      showThumbs={false}
    >
      {children}
    </Carousel>
  );
};

export default Slider;
