import { Grid, Button, Typography, Hidden } from "@material-ui/core";
import useStyles from "./useStyles";
import { Colors } from "../../Utils/color.constants";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CustomButton from "../../../../components/CustomButton";
import MobileViewSlider from "./mobileViewSlider";
import { IExtend } from "../../Utils/types";
import { img } from "../../Utils/usedCarsContent";
import { useHistory } from "react-router";

const SlideArr: React.FC<IExtend> = ({ payload, handleAddFavs }: IExtend) => {
  const { grid, box, text, border, pinkBtn } = useStyles();
  const history = useHistory();
  const { white, red } = Colors;

  const navigate = (id: string) => {
    history.push(`/car-detail/${id}`);
  };
// temporary user Id
  let currentUser = "610375ed6b897a001d864ca1"
  return (
    <Grid container>
      <Hidden lgUp>
        <MobileViewSlider />
      </Hidden>
      <Hidden mdDown>
        <Grid className={grid} item xs={12}>
          {payload.map((data : any, index : number) => {
            return (
              <>
                <Grid key={index} className={box} item lg={5}>
                  <span style={{cursor: "pointer" }}  onClick={() => navigate(data.id)}>
                  <img
                    width="100%"
                    src={img}
                    alt=""
                  />
                  </span>
                  <section className={text}>
                    <Typography
                      onClick={() => navigate(data.id)}
                      style={{ color: white, cursor: "pointer" }}
                      variant="subtitle1"
                    >
                      {data.model}
                    </Typography>
                   {data.createdBy === currentUser ?
                   null :
                   <CustomButton
                   handleClick={() => {
                     handleAddFavs(data.id);
                   }}
                   style={{
                     background: "transparent",
                     boxShadow: "none",
                     padding: "0px",
                   }}
                 >
                   <FavoriteIcon
                     style={
                       data.isFav
                         ? { color: red, fontSize: "30px" }
                         : { color: white, fontSize: "30px" }
                     }
                   />
                 </CustomButton>
                  
                  }
                  </section>
                  <Typography
                    style={{
                      color: white,
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                    variant="h6"
                    onClick={() => navigate(data.id)}
                  >
                    {data.price && `PKR ${data.price?.toLocaleString()}`}
                  </Typography>
                  <section onClick={() => navigate(data.id)} className={border}>
                    <Button className={pinkBtn}>{data.year ? data.year : "2010"}</Button>
                    <Typography
                      style={{
                        color: white,
                        marginTop: "5px",
                        cursor: "pointer",
                      }}
                      variant="subtitle1"
                    >
                      {data.city}
                    </Typography>
                    <Typography
                      style={{
                        color: white,
                        marginTop: "5px",
                        cursor: "pointer",
                      }}
                      variant="subtitle1"
                    >
                      {data.transmission}
                    </Typography>
                  </section>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default SlideArr;
