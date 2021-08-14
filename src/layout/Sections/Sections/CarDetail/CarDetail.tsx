import { IProp } from "../../Utils/types";
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import { useStyles } from "./useStyles";
import { Colors } from "../../Utils/color.constants";
import SellerDetail from "./SellerDetail";

const CarDetail: React.FC<IProp> = ({
  Title,
  location,
  rating,
  mainButton,
  numButton,
  array,
  locIcon,
  ratIcon,
  mailIcon,
  numbIcon,
  desc,
  price,
  paragraph,
  year,
  engineType,
  mileage,
  transmission
}) => {
  const {
    root,
    sub,
    type,
    grid,
    numBtn,
    mailBtn,
    icon,
    container,
  } = useStyles();
  const { blue, gray } = Colors;

  return (
    <Grid container style={{display: "inline-block"}}>
      <Grid className={root} item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h2">{Title}</Typography>
        </Grid>
        <Grid className={sub} item xs={12}>
          <Typography variant="subtitle1">
            <img width="10%" src={locIcon} alt="" /> {location}
          </Typography>
          <Typography variant="subtitle1">
            <img width="15%" src={ratIcon} alt="" /> {rating}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ color: blue }} variant="h4">
            {price?.toLocaleString()}
          </Typography>
        </Grid>
        <Grid style={{ display: "flex" }} item lg={10} xs={12}>
          <Grid className={type} item lg={3} sm={12} xs={12} md={6}>
            <img className={icon} src={array?.yearIcon} alt="" />
            <Typography
              style={{ paddingTop: "10px", fontWeight: 600 }}
              variant="subtitle1"
            >
              {year}
            </Typography>
          </Grid>
          <Grid className={type} item lg={3} sm={12} xs={12} md={6}>
            <img className={icon} src={array?.mileageIcon} alt="" />
            <Typography
              style={{ paddingTop: "10px", fontWeight: 600 }}
              variant="subtitle1"
            >
              {mileage?.toLocaleString()}
            </Typography>
          </Grid>
          <Grid className={type} item lg={3} sm={12} xs={12} md={6}>
            <img className={icon} src={array?.petrolIcon} alt="" />
            <Typography
              style={{ paddingTop: "10px", fontWeight: 600 }}
              variant="subtitle1"
            >
              {engineType}
            </Typography>
          </Grid>
          <Grid className={type} item lg={3} sm={12} xs={12} md={6}>
            <img className={icon} src={array?.typeIcon} alt="" />
            <Typography
              style={{ paddingTop: "10px", fontWeight: 600 }}
              variant="subtitle1"
            >
              {transmission}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid className={grid} item xs={12}>
            <Button
              className={numBtn}
              startIcon={
                <div>
                  <img width="30%" src={numbIcon} alt="" />
                </div>
              }
            >
              {numButton}
            </Button>
          </Grid>
          <Grid className={container} item xs={12}>
            <Button
              className={mailBtn}
              startIcon={
                <div>
                  <img width="30%" src={mailIcon} alt="" />
                </div>
              }
            >
              {mainButton}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SellerDetail />
        </Grid>
        <Hidden lgUp>
          <Grid style={{ color: gray }} item xs={12}>
            <Typography style={{ marginTop: "20px" }} variant="h6">
              {desc}
            </Typography>
            <Typography style={{ marginTop: "10px" }} variant="subtitle1">
              {paragraph}
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default CarDetail;
