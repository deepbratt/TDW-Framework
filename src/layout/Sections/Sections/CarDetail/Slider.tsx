import { useState } from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { useStyles } from "./useStyles";
import { Detail } from "../../Utils/types";
import CarInformation from "./CarInformation";
import { Colors } from "../../Utils/color.constants";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CustomButton from "../../../../components/CustomButton";
import Sizes from "../../../../Utils/themeConstants";
import { addFavs } from "../../../../Utils/hooks/actions";
import { addToFavs } from "../../../../Utils/hooks/endpoints";
import useApi from "../../../../Utils/hooks/useApi";
import Toast from "../../../../components/Toast";
const Slider = ({
  desc,
  paragraph,
  arr,
  feature,
  info,
  carTitle,
  id,
  city,
  assembly,
  bodyType,
  color,
  engineCapacity,
  date,
  isFavs,
}: Detail) => {
  const [open, setOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    status: "",
    message: "",
  });

  const handleAlertClose = () => {
    setOpen(false);
  };

  const { addToFav } = useApi(addToFavs);
  const { carousel, detail, btn, sec } = useStyles();
  const { mobile } = Sizes();
  const { gray, red, white } = Colors;

  return (
    <Grid container>
      <Grid className={detail} item xs={12}>
        <Carousel
          className={carousel}
          autoPlay
          showStatus={false}
          interval={2400}
          showArrows={mobile ? false : true}
          infiniteLoop={true}
          transitionTime={500}
          showIndicators={false}
          showThumbs={true}
        >
          {arr.map((data, index) => {
            return (
              <>
                <img
                  style={{ position: "relative" }}
                  key={`img ${index}`}
                  width="10%"
                  src={data.image}
                  alt=""
                />
                {isFavs === false ? (
                  <CustomButton
                    handleClick={() => {
                      if (id) {
                        addFavs(
                          addToFav,
                          id,
                          setOpen,
                          setResponseMessage,
                          setIsLoading
                        );
                        setColorChange(true);
                      }
                    }}
                    styles={btn}
                  >
                    <section className={sec}>
                      <FavoriteIcon
                        style={
                          colorChange
                            ? {
                                color: red,
                                fontSize: "20px",
                                marginTop: "10px",
                              }
                            : {
                                color: white,
                                fontSize: "20px",
                                marginTop: "10px",
                              }
                        }
                      />
                    </section>
                  </CustomButton>
                ) : null}
              </>
            );
          })}
        </Carousel>
        <Hidden mdDown>
          <Grid style={{ color: gray }} item xs={12}>
            <Typography variant="h6">{desc}</Typography>
            <Typography style={{ marginTop: "10px" }} variant="subtitle1">
              {paragraph}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CarInformation
              carTitle={carTitle}
              info={info}
              feature={feature}
              city={city}
              assembly={assembly}
              color={color}
              bodyType={bodyType}
              engineCapacity={engineCapacity}
              date={date}
            />
          </Grid>
        </Hidden>
        <Toast
          open={open}
          type={responseMessage.status}
          message={responseMessage.message}
          onClose={handleAlertClose}
        />
      </Grid>
    </Grid>
  );
};

export default Slider;
