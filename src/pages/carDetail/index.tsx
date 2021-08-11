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
import useApi from "../../Utils/hooks/useApi";
import { loadSingleData } from "../../Utils/hooks/actions";
import { getSingleCar } from "../../Utils/hooks/endpoints";
import { useEffect, useState } from "react";
import { ICarCard } from "../../layout/Sections/Utils/types";
import { useParams } from "react-router";

interface RouteProps {
  id: string;
}
const CarDetailContainer = () => {
  const { main } = useStyles();
  const { id } = useParams<RouteProps>();
  const { getSingleData } = useApi(getSingleCar);
  const [data, setData] = useState<ICarCard>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadSingleData(setIsLoading, setData, getSingleData, id);
    console.log(id)
  }, []);

  return (
    <Grid style={{ display: "flex", justifyContent: "center" }} container>
      <Section>
        {isLoading || !data ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Grid className={main} item xs={12}>
              <Slides
                carTitle={carTitle}
                info={CarInfo}
                feature={CarFeature}
                desc={desc}
                paragraph={data?.description}
                arr={arr}
                id={data?._id}
                city={data?.registeredCity}
                assembly={data?.assembly}
                color={data?.bodyColor}
                bodyType={data?.bodyType}
                engineCapacity={data?.engineCapacity}
                date={data.date}
                isFavs={data.isFav}
              />
              <CarDetail
                mainButton={mainButton}
                numButton={numButton}
                Title={Title}
                location={data?.city}
                rating={rating}
                array={array}
                locIcon={locIcon}
                mailIcon={mailIcon}
                ratIcon={ratIcon}
                numbIcon={numbIcon}
                paragraph={data?.description}
                desc={desc}
                price={data?.price}
                year={data?.year}
                transmission={data?.transmission}
                mileage={data?.milage}
                engineType={data?.engineType}
              />
            </Grid>
            <Hidden lgUp>
              <Grid item xs={12}>
                <CarInformation
                  carTitle={carTitle}
                  info={CarInfo}
                  // feature={data?.features}
                  feature={CarFeature}
                  city={data?.registeredCity}
                  assembly={data?.assembly}
                  color={data?.bodyColor}
                  bodyType={data?.bodyType}
                  engineCapacity={data?.engineCapacity}
                  date={data.date}
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
