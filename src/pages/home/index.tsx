import CategorySection from '../../layout/Sections/Sections/HomeSections/Category/CategorySection';
import CarComparision from '../../sections/CarComparision';
import {
  Data,
  Title,
  subTitle,
  filter,
  category,
  carModel,
  priceRange
} from '../../Utils/constants/language/Text';
import PostAd from '../../sections/PostAd';
import {
  browseUsedCards,
  PostAdData
} from '../../Utils/constants/language/en/homePageData';
import { Grid, Container, Typography, makeStyles } from '@material-ui/core';
import TabComponent from '../../components/Tabs';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import CarComaprisonImg from '../../assets/Cars/carsComparision.png';
import DownloadAppImg from '../../assets/Cars/downloadApp.png';
import ShopCarImg from '../../assets/Cars/ShopCar.png';
// import DownloadAppImg from '../../assets/Cars/';
import HomeBanner from '../../sections/HomeBanner';
import DownloadApp from '../../sections/DownloadApp';
import {
  CAR_COMPARISIONS,
  ALL_CARS_COMPARISIONS
} from '../../Utils/constants/language/en/buttonLabels';
import ShopCars from '../../sections/ShopCars';
import PointsSection from '../../sections/PointsSection';
import FindCars from '../../sections/FindCars';

const HomePageStyles = makeStyles((theme) => ({
  carComparisionsRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  },
  carComparisionsLink: {
    color: theme.palette.secondary.main,
    cursor: 'pointer'
  }
}));

export interface HomeProps {}

const HomePage = () => {
  const { carComparisionsRoot, carComparisionsLink } = HomePageStyles();
  return (
    <>
      <MetaTags
        title={PageMeta.home.title}
        description={PageMeta.home.description}
        canonical={PageMeta.home.canonical}
        keywords={PageMeta.home.keywords}
      />
      {/* <CategorySection data={Data} />
      <Grid item xs={12}>
      <PostAd data={PostAdData} />
      </Grid>
      <Grid item xs={12}>
      <TabComponent data={browseUsedCards} />
    </Grid> */}
      <HomeBanner />
      <Container>
        <Grid container justifyContent="center">
          <Grid item container xs={12} spacing={2} justifyContent="center">
            <Grid item xs={12} md={10} lg={7}>
              <FindCars />
            </Grid>
            <Grid item xs={12}>
              <ShopCars featureImg={ShopCarImg} />
            </Grid>
            <Grid item xs={12}>
              <PointsSection />
            </Grid>
            <Grid item container xs={12}>
              <Grid className={carComparisionsRoot} item xs={12} md={6}>
                <Typography variant="h3">{CAR_COMPARISIONS}</Typography>
                <Typography className={carComparisionsLink} variant="h3">
                  {ALL_CARS_COMPARISIONS}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <CarComparision featureImg={CarComaprisonImg} />
            </Grid>
            <Grid item xs={12} md={6}>
              <DownloadApp featureImg={DownloadAppImg} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
