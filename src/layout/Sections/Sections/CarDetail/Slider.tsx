import { useState } from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { useStyles } from "./useStyles";
import { Detail } from "../../Utils/types1";
import CarInformation from "./CarInformation";
import { Colors } from "../../Utils/color.constants";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CustomButton from "../../../../components/CustomButton";
import Sizes from "../../../../Utils/themeConstants";
import { addToFavs, removeFavs } from "../../../../Utils/hooks/endpoints";
import Actions from "../../../../pages/carDetail/useFunctions";
import Toast from "../../../../components/Toast";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
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
  createdBy,
  updatedAt
}: Detail) => {
  const [colorChange, setColorChange] = useState(false);
  const { addFavs,open,setOpen,responseMessage} = Actions();
  const {user} = useSelector((state:RootState)=>state.auth)
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(isFavs)
  const { carousel, detail, btn, sec } = useStyles();
  const { mobile } = Sizes();
  const { gray, red, white } = Colors;

  const handleAlertClose = () => {
    setOpen(false);
  };

  // #static user as of now
  // let currentUser = "610375ed6b897a001d864ca1"

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
                  // width="10%"
                  height="100%"
                  src={data}
                  alt=""
                />
                {user?._id === createdBy?._id ? null : 
                (
                  <CustomButton
                    handleClick={() => {
                      if (id) {
                        addFavs(isFavorite ? removeFavs : addToFavs, id);
                        // setColorChange(isFavorite ? true : false);
                        setIsFavorite(!isFavorite)
                      }
                    }}
                    styles={btn}
                  >
                    <section className={sec}>
                      <FavoriteIcon
                        style={
                          isFavorite
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
                )
                }
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
              updatedAt={updatedAt}
              createdBy={createdBy}
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
