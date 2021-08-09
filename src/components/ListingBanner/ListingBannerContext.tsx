import { Grid, Typography } from "@material-ui/core";
import CustomTitle from "../CustomTitle/CustomTitle";
import useStyles from "./useStyles";
import { IProp} from "../../Utils/interfaces/banner.interface";
import { Colors } from "../../Utils/constants/colors/colors";
const ListingBannerContext = ({carTitle,carSubTitle,array} : IProp) => {
  const { root, grid, img, banner} = useStyles();
  const { white } = Colors;
  return (
    <Grid container>
      <Grid item xs={12} className={root}>
        <Grid style={{ textAlign: "center" }} item xs={12}>
          <CustomTitle
            color={white}
            subTitleColor={white}
            text={carTitle}
            subTitle={carSubTitle}
          />
        </Grid>
        <Grid className={banner} item lg={12} xs={12}  >
          {array.map((data, index) => {
            return (
              <Grid key={index} className={grid} item lg={3} xs={12} >
                <section className={img}>
                  <img width="60%" src={data.icon} alt="" />
                </section>
                <Typography
                  style={{ textAlign: "center", color: white }}
                  variant="subtitle1"
                >
                  {data.title}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListingBannerContext;
