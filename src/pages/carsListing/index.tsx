import React from "react";
import { useSelector } from "react-redux";
import { Grid, Hidden, Typography } from "@material-ui/core";
import CarFilters from "../../sections/VerticalCarFilters";
import ListingCard from "../../components/ListingCard";
import { CarsListingData } from "../../utils/constants/language/en/listingData";

import { SHOW_RESULT } from "../../utils/constants/language/en/buttonLabels";
import HorizontalFilters from "../../sections/HorizontalFilters";
import BreadCrumbs from "../../components/BreadCrumbs";

export interface CarsListingProps {}

const CarsListing: React.FC<CarsListingProps> = () => {
  const layoutType = useSelector(
    (state: any) => state.persistedReducer.layout.layoutType
  );
  return (
    <Grid container spacing={3}>
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
      <Grid item container xs={12} md={8}>
        <Grid item xs={12}>
          <HorizontalFilters />
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid
            item
            xs={12}
            sm={layoutType === "list" ? 12 : 6}
            xl={layoutType === "list" ? 12 : 4}
          >
            <ListingCard data={CarsListingData} layoutType={layoutType} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={layoutType === "list" ? 12 : 6}
            xl={layoutType === "list" ? 12 : 4}
          >
            <ListingCard data={CarsListingData} layoutType={layoutType} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={layoutType === "list" ? 12 : 6}
            xl={layoutType === "list" ? 12 : 4}
          >
            <ListingCard data={CarsListingData} layoutType={layoutType} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={layoutType === "list" ? 12 : 6}
            xl={layoutType === "list" ? 12 : 4}
          >
            <ListingCard data={CarsListingData} layoutType={layoutType} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarsListing;
