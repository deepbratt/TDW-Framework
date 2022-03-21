import CarComparision from '../../sections/CarComparision';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import CarComaprisonImg from '../../assets/Cars/carsComparision.png';
import DownloadAppImg from '../../assets/Cars/downloadApp.png';
import { Colors } from '../../Utils/constants/colors/colors';
import ShopCarImg from '../../assets/Cars/ShopCar.png';
// import DownloadAppImg from '../../assets/Cars/';
import HomeBanner from '../../sections/HomeBanner';
import BreadCrumbs from '../../components/BreadCrumbs';
import DownloadApp from '../../sections/DownloadApp';
import {
  CAR_COMPARISON,
  ALL_CARS_COMPARISIONS
} from '../../Utils/constants/language/en/buttonLabels';
import ShopCars from '../../sections/ShopCars';
import PointsSection from '../../sections/PointsSection';
import FindCars from '../../sections/FindCars';
import DividerWithText from '../../components/DividerWithText';

const HomePageStyles = makeStyles((theme) => ({
  carComparisionsRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  },
  carComparisionsLink: {
    color: theme.palette.secondary.main,
    cursor: 'pointer'
  },
  carComparisonHeading: {
    textAlign: 'center',
    lineHeight: 1.25,
    minWidth: '640px',
    [theme.breakpoints.down(830)]: {
      minWidth: '350px'
    }
  }
}));

export interface HomeProps {}

const HomePage = () => {
  const { carComparisionsRoot, carComparisonHeading } = HomePageStyles();
  return (
    <>
      <MetaTags
        title={PageMeta.home.title}
        canonical={PageMeta.home.canonical}
      />
      <HomeBanner />
      <Container style={{ marginBottom: '130px' }}>
        <Grid container justifyContent="center">
        {/* <Grid item xs={12}>
          <BreadCrumbs />
        </Grid> */}
          <Grid item container xs={12} spacing={2} justifyContent="center">
            <Grid item xs={12} md={10} lg={7}>
              <FindCars />
            </Grid>
            {/* <Grid item xs={12}>
              <ShopCars featureImg={ShopCarImg} />
            </Grid>
            <Grid item xs={12}>
              <PointsSection />
            </Grid> */}
            <Grid item container xs={12}>
              <Grid xs={12}>
                <div>
                  <DividerWithText>
                    <h2 className={carComparisonHeading}>
                      {"Compare your car to get the best deals"}
                    </h2>
                  </DividerWithText>
                </div>
              </Grid>              
              <Grid className={carComparisionsRoot} item xs={12} md={6}>
                <Typography variant="h3">{CAR_COMPARISON}</Typography>
                {/* <Typography className={carComparisionsLink} variant="h3">
                  {ALL_CARS_COMPARISIONS}
                </Typography> */}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CarComparision featureImg={CarComaprisonImg} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DownloadApp featureImg={DownloadAppImg} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
