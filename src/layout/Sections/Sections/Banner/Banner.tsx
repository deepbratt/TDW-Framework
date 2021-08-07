import * as React from "react";
import { Grid } from "@material-ui/core";
import CustomButton from "../../../../components/CustomButton";
import CustomTitle from "../../../../components/CustomTitle/CustomTitle";
import SearchSelect from "../../../../components/SearchSelect/SearchSelect";
import bannerStyles from "./bannerStyles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-scroll";
import { useHooks } from "./useHooks";
import { Colors } from "../../Utils/color.constants";
import { NavLink } from "react-router-dom";

interface IBanner {
  Title: string;
  subTitle: string;
  category: string;
  filter: string;
  carModel: string[];
  cities: string[];
  priceRange: string[]
}

const Banner: React.FC<IBanner> = ({ Title, subTitle, category, filter,cities,priceRange,carModel}) => {
  const { root, fab, grid, btn } = bannerStyles();
  const {val,setVal} = useHooks();
  const { white, cherry, lightGrey } = Colors;
  return (
    <>
      <Grid
        container
        className={root}
        style={{
          background: `linear-gradient(-181.96deg , ${cherry}  -0%,  ${lightGrey}
        85.96%)`,
        }}
      >
        <Grid item xs={12}>
          <CustomTitle
            text={Title}
            subTitle={subTitle}
            color={white}
            subTitleColor={white}
          />
        </Grid>
        <Grid item lg={12}>
          <SearchSelect
            setVal={setVal}
            val={val}
            priceRange={priceRange} carModel={carModel} cities={cities}
          />
        </Grid>
        <Grid className={grid} item lg={4} md={5} xs={9}>
          <Link to="category" spy={true} smooth={true}>
            <CustomButton
              style={{
                color: white,
                border: `1px solid ${white}`,
              }}
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
            >
              {category}
            </CustomButton>
          </Link>
          <NavLink className={btn} to="/search-used-cars">
            <CustomButton
              style={{ color: white, border: `1px solid ${white}` }}
              variant="outlined"
            >
              {filter}
            </CustomButton>
          </NavLink>
        </Grid>
        <Grid className={fab} item>
          <Link to="category" spy={true} smooth={true}>
            <Fab style={{ background: white, borderRadius: "50%" }}>
              <ArrowDownwardIcon />
            </Fab>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
