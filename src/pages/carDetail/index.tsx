import CarDetail from "../../layout/Sections/Sections/CarDetail/CarDetail";
import { Grid, Hidden } from "@material-ui/core";
import {
  Title,
  rating,
  mainButton,
  numButton,
  desc,
  array,
  locIcon,
  mailIcon,
  ratIcon,
  numbIcon,
  arr,
  CarInfo,
  CarFeature,
  carTitle,
} from "../../layout/Sections/Utils/carDetail";
import Section from "../../components/index";
import Slides from "../../layout/Sections/Sections/CarDetail/Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useStyles } from "../../layout/Sections/Sections/CarDetail/useStyles";
import CarInformation from "../../layout/Sections/Sections/CarDetail/CarInformation";
import { getSingleCar} from "../../Utils/hooks/endpoints";
import { useParams } from "react-router";
import Actions from "./useFunctions"
import CircularProgress from '@material-ui/core/CircularProgress';

interface RouteProps {
  id: string;
}
const CarDetailContainer = () => {
  const { id } = useParams<RouteProps>();
  const {loadSingleData,obj,isLoading} = Actions(id?? '')
  const { main,loader} = useStyles();



  return (
      <Section>
    <Grid style={{ display: "flex", justifyContent: "center" }} container>
        {isLoading || !obj ? (
          <h1 className={loader}><CircularProgress/></h1>
        ) : (
          <>
            <Grid className={main} item xs={12}>
              <Slides
                carTitle={carTitle}
                info={CarInfo}
                feature={obj?.features}
                desc={desc}
                paragraph={obj?.description}
                arr={obj.image}
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
              />
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
              />
            </Grid>
            <Hidden lgUp>
              <Grid item xs={12}>
                <CarInformation
                  carTitle={carTitle}
                  info={CarInfo}
                  // #empty array of feature from api so temporary static feature
                  feature={obj.features}
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
            </Hidden>
          </>
        )}
    </Grid>
      </Section>
  );
};

export default CarDetailContainer;
