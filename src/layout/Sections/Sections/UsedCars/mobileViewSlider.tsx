import { mobileView } from "../../Utils/usedCarsContent";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from "./useStyles";
import { Colors } from "../../Utils/color.constants";
import FavoriteIcon from "@material-ui/icons/Favorite";
const MobileViewSlider = () => {
  const { box, pinkBtn, border, grid, text } = useStyles();
  const { white } = Colors;
  return (
    <>
      <Grid className={grid} item xs={12}>
        {mobileView.map((data, index) => {
          return (
            <>
              <Grid key={index} className={box} item lg={5}>
                <img width="100%" src={data.img} alt="" />
                <section className={text}>
                  <Typography style={{ color: white }} variant="subtitle1">
                    {data.title}
                  </Typography>
                  <FavoriteIcon style={{ color: white, fontSize: "30px" }} />
                </section>
                <Typography
                  style={{ color: white, marginLeft: "10px" }}
                  variant="h6"
                >
                  {data.price}
                </Typography>
                <section className={border}>
                  <Button className={pinkBtn}>{data.year}</Button>
                  <Typography
                    style={{ color: white, marginTop: "5px" }}
                    variant="subtitle1"
                  >
                    {data.location}
                  </Typography>
                  <Typography
                    style={{ color: white, marginTop: "5px" }}
                    variant="subtitle1"
                  >
                    {data.type}
                  </Typography>
                </section>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default MobileViewSlider;
