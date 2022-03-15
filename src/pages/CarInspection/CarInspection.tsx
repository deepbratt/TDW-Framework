import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Styles from './Styles';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import { ScheduleAppointment } from '../../Utils/constants/language/Text';
import CarRepairIcon from '../../assets/CarInspection/Car_Repair.png';

export interface HomeProps { }

const CarInspection = () => {
  const {
    banner,
    bannerImg,
    bannerContainer,
    bannerHeading1,
    bannerContent,
    mailBtn,
    section,
    badgeText,
    blueText,
    badges,
    badgeContent,
    badgeIcon,
    badgeHeading,
    badgeDescription
  } = Styles();

  return (
    <>
      <MetaTags
        title={PageMeta.carInspection.title}
        canonical={PageMeta.carInspection.canonical}
      />
      <Grid xs={12} className={banner}>
        <Grid container xs={12} className={bannerImg} />
        <div className={bannerContainer}>
          <h1 className={bannerHeading1}>
            EXPERT TECHNICIAN, TRUSTWORTHY SERVICE
          </h1>
          <p className={bannerContent}>
            Detailed digital report includes road test, photos and car condition report.
          </p>
          <Button
            className={mailBtn}
            onClick={() => null}
          >
            {ScheduleAppointment}
          </Button>
        </div>
      </Grid>

      <Container style={{ width: '100vw', marginBottom: '130px' }} className={section}>
        <Grid xs={12}>
          <Grid item container xs={12} spacing={2} justifyContent="center">
            <h1 className={badgeText}>WHY CHOOSE <span className={blueText}>CAROKTA</span> INSPECTION</h1>
            <Grid container className={badges}>

              <Grid container xs={12} md={4} className={badgeContent}>
                <div className={badgeIcon}>
                  <img src={CarRepairIcon} alt="Car-Inspection-Feature" />
                </div>
                <div className={badgeHeading} >
                  DETAILED REPORT
                </div>
                <div className={badgeDescription} >
                  By inspecting your car from Carokta, your selling percentage in Carokta will increase by 60%. It brings trust to
                </div>
              </Grid>

              <Grid container xs={12} md={4} className={badgeContent}>
                <div className={badgeIcon}>
                  <img src={CarRepairIcon} alt="Car-Inspection-Feature" />
                </div>
                <div className={badgeHeading} >
                  DETAILED REPORT
                </div>
                <div className={badgeDescription} >
                  By inspecting your car from Carokta, your selling percentage in Carokta will increase by 60%. It brings trust to
                </div>
              </Grid>

              <Grid container xs={12} md={4} className={badgeContent}>
                <div className={badgeIcon}>
                  <img src={CarRepairIcon} alt="Car-Inspection-Feature" />
                </div>
                <div className={badgeHeading} >
                  DETAILED REPORT
                </div>
                <div className={badgeDescription} >
                  By inspecting your car from Carokta, your selling percentage in Carokta will increase by 60%. It brings trust to
                </div>
              </Grid>
            </Grid>


            {/* <Grid item xs={12} md={10} lg={7}>
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
            <Grid item xs={12} sm={6}>
              <CarComparision featureImg={CarComaprisonImg} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DownloadApp featureImg={DownloadAppImg} />
            </Grid> */}

          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CarInspection;
