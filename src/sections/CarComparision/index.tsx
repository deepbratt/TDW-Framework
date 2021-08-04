import { Card, CardMedia, CardActions } from "@material-ui/core";
import CustomButton from "../../CustomButton";
import { CAR_COMPARISIONS } from "../../utils/constants/language/en/buttonLabels";
import CarsComparisonStyles from "./styles";

export interface CarComparisionProps {
  featureImg: string;
}

const CarComparision: React.FC<CarComparisionProps> = ({ featureImg }) => {
  const { root } = CarsComparisonStyles();
  return (
    <Card className={root}>
      <CardMedia>
        <img src={featureImg} alt="cars-comparisons" />
      </CardMedia>
      <CardActions>
        <CustomButton>{CAR_COMPARISIONS}</CustomButton>
      </CardActions>
    </Card>
  );
};

export default CarComparision;
