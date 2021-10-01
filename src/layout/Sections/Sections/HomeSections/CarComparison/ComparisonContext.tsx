import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"
import CustomButton from "../../../../../components/CustomButton";
import Section from "../../../../../components/index";
import { useStyles } from "./useStyles";
import { Colors } from "../../../Utils/color.constants";
import CustomTitle from "../../../../../components/CustomTitle/CustomTitle";
import {
  carTitle,
  carLink,
  appTitle,
  ios,
  android,
  arrowIcon,
  appleIcon,
  carImg,
  downloadImg,
  img,
} from "../../../Utils/Text";
const ComparisonContext = () => {
  const { root, downloadsec, text, compareSec, textDiv } = useStyles();
  const { berry, white,royalBlue} = Colors;
  return (
    <>
      <Grid justifyContent="center" container>
        <Section>
          <Grid
            style={{ display: "flex", flexWrap: "wrap" }}
            item
            xs={12}
          >
            <Grid className={text} item lg={5} xs={12}>
              <CustomTitle style={{padding: "0px", color: "black"}} text={carTitle}/>
            </Grid>
            <Grid className={text} item lg={4} xs={12}>
              <Typography style={{ color: royalBlue }} variant="h6">
                {carLink}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            style={{ padding: "0px" }}
            className={root}
            item
            xs={12}
          >
            <Grid
              item
              style={{ marginTop: "10px" }}
              className={compareSec}
              lg={5}
              xs={11}
            >
              <img width="80%" src={carImg} alt="" />
              <Grid style={{ marginTop: "30px" }} item>
                <CustomButton
                  style={{
                    color: white,
                    background: berry,
                  }}
                >
                  {carTitle}
                </CustomButton>
              </Grid>
            </Grid>
            <Grid
              style={{ marginTop: "10px" }}
              className={downloadsec}
              item
              lg={5}
              xs={11}
            >
              <Grid
                className={textDiv}
                style={{ margin: "0px 10px 0px 10px" }}
                item
                lg={6}
                xs={12}
              >
                <Typography
                  style={{ color: white, fontWeight: 700 }}
                  variant="h5"
                  className={text}
                >
                  {appTitle}
                </Typography>
                <CustomButton
                  style={{
                    color: berry,
                    background: white,
                    marginTop: "20px",
                  }}
                  startIcon={
                    <div>
                      <img width="60%" src={appleIcon} alt="" />
                    </div>
                  }
                >
                  <section style={{ marginRight: "30px" }}>{ios}</section>
                </CustomButton>
                <CustomButton
                  style={{
                    color: berry,
                    background: white,
                    marginTop: "20px",
                  }}
                  startIcon={
                    <div>
                      <img width="60%" src={arrowIcon} alt=""  />
                    </div>
                  }
                >
                  {android}
                </CustomButton>
              </Grid>
              <Hidden smDown>
                <img
                  style={{ marginRight: "20px" }}
                  width="50%"
                  src={downloadImg}
                  alt=""
                />
              </Hidden>
              <Hidden mdUp>
                <img
                  style={{ marginRight: "20px" }}
                  width="40%"
                  src={img}
                  alt=""
                />
              </Hidden>
            </Grid>
          </Grid>
        </Section>
      </Grid>
    </>
  );
};

export default ComparisonContext;
