import { Grid, Typography, Button } from "@material-ui/core";
import {
  usedCarsTitle,
  arrowleft,
  arrowright,
} from "../../Utils/usedCarsContent";
import useStyles from "./useStyles";
import { Colors } from "../../Utils/color.constants";
import Section from "../../../../components/index";
import SearchFilterContainer from "./SearchFilter/SearchFilterContainer";
import Actions from "./useFunctions";
import SlideContainer from "./SlideContainer";
import ComparisonContext from "../HomeSections/CarComparison/ComparisonContext";
import { getLimitedCars} from "../../../../Utils/hooks/endpoints";

const UsedCarsContainer = () => {
  const { root, btn, heading } = useStyles();
  const { black, iceBlue, red } = Colors;
  const {data,isLoading} = Actions(getLimitedCars);


  return (
    <Grid container justify="center">
      <Grid xs={12} item className={root}>
        {data.length === 0 || isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <>
            <SearchFilterContainer />
            <Section backColor={iceBlue}>
              <Grid className={heading} item xs={12}>
                <Typography variant="h2">
                  <span style={{ color: black }}>{usedCarsTitle[0]}</span>
                  <span style={{ color: red }}> {usedCarsTitle[1]}</span>
                  <span style={{ color: black }}> {usedCarsTitle[2]}</span>
                </Typography>
              </Grid>
              <SlideContainer payload={data} />
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                item
                xs={12}
              >
                <Button variant="contained" className={btn}>
                  <img src={arrowleft} alt="" />
                </Button>

                <Button variant="contained" className={btn}>
                  <img src={arrowright} alt="" />
                </Button>
              </Grid>
            </Section>
            <ComparisonContext />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default UsedCarsContainer;
