import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import Slider from '../../components/Slider';
import { Colors } from '../../Utils/constants/colors/colors';
import { FIND_YOUR_CAR } from '../../Utils/constants/language/en/buttonLabels';
import { findCarsData } from '../../Utils/constants/language/en/homePageData';

const FindCarsStyles = makeStyles((theme) => ({
  root: {
    marginTop: '-45px',
    marginBottom: '-120px',
    position: 'relative',
    boxShadow: '0px 2px 4px 4px rgba(0, 0, 0, 0.2)',
    border: `1px solid ${theme.palette.text.primary}`
  },
  content: {
    padding: '20px 140px'
  },
  textFields: {
    backgroundColor: Colors.flashWhite
  }
}));

const FindCars: React.FC = () => {
  const { root, content } = FindCarsStyles();
  return (
    <Card className={root}>
      <CardContent className={content}>
        <Typography align="center" variant="h2" gutterBottom>
          {findCarsData.heading}
        </Typography>
        <Slider autoplay={false} indicators={false}>
          <Card>
            <CardContent>
              <Typography>Card 1</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography>Card 1</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography>Card 1</Typography>
            </CardContent>
          </Card>
        </Slider>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <InputField label="Make" placeholder="e.g. Honda, Toyota" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField label="Model" placeholder="e.g Civic, Corolla" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField label="Price Range (Min)" placeholder="0" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField label="Price Range (Max)" placeholder="50000000" />
            </Grid>
            <Grid item container xs={12} justifyContent="center">
              <Grid item xs={12} md={6}>
                <CustomButton fullWidth>{FIND_YOUR_CAR}</CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FindCars;
