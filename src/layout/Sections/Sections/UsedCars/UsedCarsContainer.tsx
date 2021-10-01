import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  usedCarsTitle,
  arrowleft,
  arrowright
} from '../../Utils/usedCarsContent';
import useStyles from './useStyles';
import { Colors } from '../../Utils/color.constants';
import Section from '../../../../components/index';
import SearchFilterContainer from './SearchFilter/SearchFilterContainer';
import Actions from './useFunctions';
import SlideContainer from './SlideContainer';
import ComparisonContext from '../HomeSections/CarComparison/ComparisonContext';
import { getLimitedCars } from '../../../../Utils/hooks/endpoints';
import Loader from '../../../../components/Loader';

const UsedCarsContainer = () => {
  const { root, btn, heading } = useStyles();
  const { black, iceBlue, red } = Colors;
  const { data, isLoading } = Actions(getLimitedCars);

  return (
    <Grid container justifyContent="center">
      <Grid xs={12} item className={root}>
        {data.length === 0 || isLoading ? (
          <Loader open={true} isBackdrop={true} />
        ) : (
          <>
            <SearchFilterContainer />
            <Section backColor={iceBlue}>
              <Grid className={heading} item xs={12}>
                <Typography variant="h2">
                  <span style={{ color: black }}>{usedCarsTitle[0]}</span>
                  <span style={{ color: red }}> {usedCarsTitle[1]}</span>
                  <span style={{ color: black }}> {usedCarsTitle[2]}</span>
                </Typography>
              </Grid>
              <SlideContainer payload={data} />
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                item
                xs={12}
              >
                <Button variant="contained" className={btn}>
                  <img src={arrowleft} alt="" />
                </Button>

                <Button variant="contained" className={btn}>
                  <img src={arrowright} alt="" />
                </Button>
              </Grid>
            </Section>
            <ComparisonContext />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default UsedCarsContainer;
