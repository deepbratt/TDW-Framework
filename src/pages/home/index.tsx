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
import PolygonIcon from '../../assets/Home/Polygon.png';
import DollarIcon from '../../assets/Home/Dollar.png';
import CarRepairIcon from '../../assets/Home/CarRepair.png';
import ThumbsUpIcon from '../../assets/Home/ThumbsUp.png';
import PromoBgIcon from '../../assets/Home/PromoBg.png';
import PromoBgBlue from '../../assets/Home/PromoBgBlue.png';
import PromoBgWhite from '../../assets/Home/PromoBgWhite.png';
import PromoToyota from '../../assets/Home/PromoToyota.png';

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
    minWidth: '650px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '340px'
    }
  },
  caroktaWorksHeading: {
    minWidth: '325px',
  },
  badges: {
    width: '90%',
    margin: '2% auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  badgeContent: {
    margin: '1% auto 3%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'transform .5s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.2)'
    }
  },
  badgeIcon: {
    backgroundImage: `url(${PolygonIcon})`,
    backgroundSize: 'fit',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: '15px',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  badgeHeading: {
    margin: '15px auto 5px',
    color: '#05409D',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '19px',
    lineHeight: '26px',
  },
  badgeDescription: {
    marginBottom: '15px',
    width: '84%',
    color: '#484848',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '17px',
    lineHeight: '25px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '60%'
    }
  },
  promo: {
    backgroundImage: `url(${PromoBgIcon})`,
    position: 'relative',
    minWidth: '100%',
    minHeight: '540px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: '5%',    
    padding: '0 !important'
  },
  promoCar: {
    position: 'absolute',
    margin: 0,
    background: `linear-gradient(75deg, #05409D, #05409D 55%, #FFF 55.3%, #FFF 80%, rgba(255,255,255,0) 80.3%, rgba(255,255,255,0) 100%)`,
    // background: '#05409D',
    textAlign: 'center',
    height: '540px',
    '& > img': {
      marginTop: 120
    }
  }
}));

export interface HomeProps {}

const HomePage = () => {
  const {
    carComparisionsRoot,
    carComparisonHeading,
    caroktaWorksHeading,
    badges,
    badgeContent,
    badgeIcon,
    badgeHeading,
    badgeDescription,
    promo,
    promoCar
  } = HomePageStyles();

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

            <Grid item container xs={12}>

              <Grid xs={12}>
                <div>
                  <DividerWithText>
                    <h2 className={caroktaWorksHeading}>
                      How <span style={{ color: Colors.blueMain }}> Carokta </span> Works
                    </h2>
                  </DividerWithText>
                </div>
              </Grid>

              <Grid container className={badges}>
                <Grid container xs={12} md={4} className={badgeContent}>
                  <div className={badgeIcon}>
                    <img src={DollarIcon} alt="Fair Price Range" />
                  </div>
                  <div className={badgeHeading} >
                    {"FAIR PRICE RANGE"}
                  </div>
                  <div className={badgeDescription} >
                    Aware customers of the current market’s trends and attractive fair price ranges, in case, you want to buy or sell your car.
                  </div>
                </Grid>

                <Grid container xs={12} md={4} className={badgeContent}>
                  <div className={badgeIcon}>
                    <img src={CarRepairIcon} alt="EASY and CLEAR STEPS" />
                  </div>
                  <div className={badgeHeading} >
                    {"EASY & CLEAR STEPS"}
                  </div>
                  <div className={badgeDescription} >
                    We serve easy and clear steps for our offered services to all of our clients. We are available here with 24/7 services to assist you.
                  </div>
                </Grid>

                <Grid container xs={12} md={4} className={badgeContent}>
                  <div className={badgeIcon}>
                    <img src={ThumbsUpIcon} alt="SAFE TRANSACTIONS" />
                  </div>
                  <div className={badgeHeading} >
                    {"SAFE TRANSACTIONS"}
                  </div>
                  <div className={badgeDescription} >
                    Your payment methods and your bank credentials are safe with us. So, no need to panic about unsafe payments. We got your back.
                  </div>
                </Grid>
              </Grid>              
            </Grid>

            <Grid item container xs={12} className={promo}>
              <Grid className={promoCar}>
                <img src={PromoToyota} alt='' />
              </Grid>
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
