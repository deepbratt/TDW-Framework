import React from "react";
import { useSelector } from "react-redux";
import { Chip, Drawer, Grid, Hidden, Typography } from "@material-ui/core";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import ListingCard from "../../components/ListingCard";
import BreadCrumbs from "../../components/BreadCrumbs";
import CarFilters from "../../sections/VerticalCarFilters";
import HorizontalFilters from "../../sections/HorizontalFilters";
import { CarsListingData } from "../../Utils/constants/language/en/listingData";
import { SHOW_RESULT } from "../../Utils/constants/language/en/buttonLabels";

export interface CarsListingProps {}

const CarsListing: React.FC<CarsListingProps> = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(drawerOpen ? false : true);
  };

  const layoutType = useSelector(
    (state: any) => state.persistedReducer.layout.layoutType
  );
  return (
    <Grid container justify="center">
      <Grid item container xs={12} lg={10} spacing={3}>
        <Grid item xs={12}>
          {/* // * PAGE HEADER HERE */}
        </Grid>
        <Grid item xs={12}>
          <BreadCrumbs />
        </Grid>
        <Grid xs={12} md={4} item container>
          <Hidden smDown>
            <Grid item xs={12}>
              <div
                style={{
                  padding: "20px 15px",
                  margin: "10px 0",
                  backgroundColor: "#092C4C",
                }}
              >
                <Typography style={{ color: "white" }} variant="h4">
                  {SHOW_RESULT}
                </Typography>
              </div>
              <CarFilters />
            </Grid>
          </Hidden>
        </Grid>
        <Grid item container xs={12} md={8} alignContent="flex-start">
          <Hidden mdUp>
            <Grid item xs={12}>
              <Chip
                variant="outlined"
                size="small"
                icon={<FilterListRoundedIcon color="secondary" />}
                label="Filters"
                onClick={toggleDrawer}
              />
              <Drawer anchor="bottom" open={drawerOpen} onClose={toggleDrawer}>
                <CarFilters />
              </Drawer>
            </Grid>
          </Hidden>
          <Hidden xsDown>
            <Grid item xs={12}>
              <HorizontalFilters />
            </Grid>
          </Hidden>
          <Grid item container xs={12} spacing={1}>
            <Grid
              item
              xs={12}
              sm={layoutType === "list" ? 12 : 6}
              xl={layoutType === "list" ? 12 : 6}
            >
              <ListingCard data={CarsListingData} layoutType={layoutType} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={layoutType === "list" ? 12 : 6}
              xl={layoutType === "list" ? 12 : 6}
            >
              <ListingCard data={CarsListingData} layoutType={layoutType} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={layoutType === "list" ? 12 : 6}
              xl={layoutType === "list" ? 12 : 6}
            >
              <ListingCard data={CarsListingData} layoutType={layoutType} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={layoutType === "list" ? 12 : 6}
              xl={layoutType === "list" ? 12 : 6}
            >
              <ListingCard data={CarsListingData} layoutType={layoutType} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarsListing;
