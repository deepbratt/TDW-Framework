import CarDetail from '../../layout/Sections/Sections/CarDetail/CarDetail';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  rating,
  mainButton,
  numButton,
  desc,
  array,
  locIcon,
  mailIcon,
  ratIcon,
  numbIcon,
  CarInfo,
  carTitle
} from '../../layout/Sections/Utils/carDetail';
import Section from '../../components/index';
import Slides from '../../layout/Sections/Sections/CarDetail/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useStyles } from '../../layout/Sections/Sections/CarDetail/useStyles';
import CarInformation from '../../layout/Sections/Sections/CarDetail/CarInformation';
import { useParams } from 'react-router';
import Actions from './useFunctions';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import NoImg from '../../assets/no-img.png';
import Loader from '../../components/Loader';
import Toast from '../../components/Toast';
import { Colors } from '../../Utils/constants/colors/colors';
import CarDescription from '../../layout/Sections/Sections/CarDetail/CarDescription';
import CarFeatures from '../../layout/Sections/Sections/CarDetail/CarFeatures';

interface RouteProps {
  id: string;
}
const CarDetailContainer = () => {
  const { id } = useParams<RouteProps>();
  const { obj, isLoading, open, setOpen, responseMessage, carFeatures } =
    Actions(id ?? '');
  const { loader } = useStyles();

  return (
    <Section backColor={Colors.lightBlue}>
      <MetaTags
        title={PageMeta.carDetails.title}
        description={PageMeta.carDetails.description}
        canonical={PageMeta.carDetails.canonical}
        keywords={PageMeta.carDetails.keywords}
      />
      <Loader open={isLoading} isBackdrop={true} />
      <Paper elevation={4} style={{ padding: '10px', width: '100%', margin:"-50px 0" }}>
          {!obj ? (
            <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              alignItems="center"
            >
              <h1 className={loader}>No Data</h1>
            </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={6}
                md={6}
              >
                <Slides
                  carTitle={carTitle}
                  info={CarInfo}
                  feature={carFeatures}
                  desc={desc}
                  paragraph={obj?.description}
                  arr={obj.image && obj.image.length > 0 ? obj.image : [NoImg]}
                  id={obj?._id}
                  city={obj?.registrationCity}
                  assembly={obj?.assembly}
                  color={obj?.bodyColor}
                  bodyType={obj?.bodyType}
                  engineCapacity={obj?.engineCapacity}
                  date={obj.createdAt}
                  isFavs={obj.isFav}
                  createdBy={obj.createdBy}
                  updatedAt={obj.updatedAt}
                  data={obj}
                />
              </Grid>
              <Grid item xs={12} lg={6} md={6}>
                <CarDetail
                  mainButton={mainButton}
                  numButton={numButton}
                  Title={`${obj.make} ${obj.model} ${obj.modelYear}`}
                  location={obj?.city}
                  rating={rating}
                  array={array}
                  locIcon={locIcon}
                  mailIcon={mailIcon}
                  ratIcon={ratIcon}
                  numbIcon={numbIcon}
                  paragraph={obj?.description}
                  desc={desc}
                  price={obj?.price}
                  modelYear={obj?.modelYear}
                  transmission={obj?.transmission}
                  mileage={obj?.milage}
                  engineType={obj?.engineType}
                  createdBy={obj.createdBy}
                  data={obj}
                />
              </Grid>
              <Grid item xs={12}>
                <CarDescription description={obj?.description} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <CarInformation
                  carTitle={carTitle}
                  info={CarInfo}
                  paragraph={obj?.description}
                  // #empty array of feature from api so temporary static feature
                  feature={carFeatures}
                  city={obj?.registrationCity}
                  assembly={obj?.assembly}
                  color={obj?.bodyColor}
                  bodyType={obj?.bodyType}
                  engineCapacity={obj?.engineCapacity}
                  date={obj.createdAt}
                  updatedAt={obj.updatedAt}
                  createdBy={obj.createdBy}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <CarFeatures features={carFeatures} />
              </Grid>
            </Grid>
          )}
      </Paper>
      <Toast
        open={open}
        message={responseMessage.message}
        type={responseMessage.status}
        onClose={() => setOpen(false)}
      />
    </Section>
  );
};

export default CarDetailContainer;
