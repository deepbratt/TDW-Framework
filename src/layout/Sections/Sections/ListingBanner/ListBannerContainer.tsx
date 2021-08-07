import React from "react";
import ListingBannerContext from "../../../..//components/ListingBanner/ListingBannerContext";
import { Grid } from "@material-ui/core";
import {CarProp} from "../../Utils/types"
const ListBannerContainer = ({carTitle,carSubTitle,carArray} : CarProp) => {
  return (
    <div>
      <Grid
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        container
      >
        <ListingBannerContext carTitle={carTitle} carSubTitle={carSubTitle} array={carArray}  />
      </Grid>
    </div>
  );
};

export default ListBannerContainer;
