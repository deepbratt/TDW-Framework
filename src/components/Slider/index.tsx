import Carousel from 'react-material-ui-carousel';
import SliderStyles from './styles';

const Slider: React.FC<any> = ({ children, styles }, props) => {
  const { dotsIndicator } = SliderStyles();
  return (
    <Carousel className={styles ? styles : dotsIndicator} {...props}>
      {children}
    </Carousel>
  );
};

export default Slider;
