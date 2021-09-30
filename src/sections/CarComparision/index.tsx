import { Card, CardActions } from '@material-ui/core';
import { useHistory } from 'react-router';
import CustomButton from '../../components/CustomButton';
import { paths } from '../../routes/paths';
import { CAR_COMPARISIONS } from '../../Utils/constants/language/en/buttonLabels';
import CarsComparisonStyles from './styles';

export interface CarComparisionProps {
  featureImg: string;
}

const CarComparision: React.FC<CarComparisionProps> = ({ featureImg }) => {
  const history = useHistory();
  const { root } = CarsComparisonStyles();
  return (
    <Card className={root}>
      <img width="100%" src={featureImg} alt="cars-comparisons" />
      <CardActions>
        <CustomButton onClick={() => history.push(paths.carShortlist)}>
          {CAR_COMPARISIONS}
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default CarComparision;
