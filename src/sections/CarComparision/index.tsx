import { Card, CardActions } from '@material-ui/core';
import CustomButton from '../../components/CustomButton';
import { CAR_COMPARISIONS } from '../../Utils/constants/language/en/buttonLabels';
import CarsComparisonStyles from './styles';

export interface CarComparisionProps {
  featureImg: string;
}

const CarComparision: React.FC<CarComparisionProps> = ({ featureImg }) => {
  const { root } = CarsComparisonStyles();
  return (
    <Card className={root}>
      <img width="100%" src={featureImg} alt="cars-comparisons" />
      <CardActions>
        <CustomButton>{CAR_COMPARISIONS}</CustomButton>
      </CardActions>
    </Card>
  );
};

export default CarComparision;
