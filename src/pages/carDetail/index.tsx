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
import { getSingleCar } from "../../Utils/hooks/endpoints";
import { useEffect } from "react";
import { useParams } from "react-router";
import useApi from "../../Utils/hooks/useApi"

interface RouteProps {
  id: string;
}
const CarDetailContainer = () => {
  const {loadSingleData,isLoading,obj} = useApi()
  const { main } = useStyles();
  const { id } = useParams<RouteProps>();

  useEffect(() => {
    loadSingleData(getSingleCar,id);
  }, []);

  return (
    <Grid style={{ display: "flex", justifyContent: "center" }} container>
      <Section>
        {isLoading || !obj ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Grid className={main} item xs={12}>
              <Slides
                carTitle={carTitle}
                info={CarInfo}
                feature={CarFeature}
                desc={desc}
                paragraph={obj?.description}
                arr={arr}
                id={obj?._id}
                city={obj?.registeredCity}
                assembly={obj?.assembly}
                color={obj?.bodyColor}
                bodyType={obj?.bodyType}
                engineCapacity={obj?.engineCapacity}
                date={obj.date}
                isFavs={obj.isFav}
              />
              <CarDetail
                mainButton={mainButton}
                numButton={numButton}
                Title={Title}
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
                year={obj?.year}
                transmission={obj?.transmission}
                mileage={obj?.milage}
                engineType={obj?.engineType}
              />
            </Grid>
            <Hidden lgUp>
              <Grid item xs={12}>
                <CarInformation
                  carTitle={carTitle}
                  info={CarInfo}
                  // feature={data?.features}
                  feature={CarFeature}
                  city={obj?.registeredCity}
                  assembly={obj?.assembly}
                  color={obj?.bodyColor}
                  bodyType={obj?.bodyType}
                  engineCapacity={obj?.engineCapacity}
                  date={obj.date}
                />
              </Grid>
            </Hidden>
          </>
        )}
      </Section>
    </Grid>
  );
};

export default CarDetailContainer;
