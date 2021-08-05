import React from "react";
import { useSelector } from "react-redux";
import {
  Chip,
  RadioGroup,
  Radio,
  FormControlLabel,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Hidden,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import ListingCard from "../../components/ListingCard";
import BreadCrumbs from "../../components/BreadCrumbs";
import CarFilters from "../../sections/VerticalCarFilters";
import { SortRounded } from "@material-ui/icons";
import HorizontalFilters from "../../sections/HorizontalFilters";
import { CarsListingData } from "../../Utils/constants/language/en/listingData";
import { sortingOptions } from "../../Utils/constants/language/en/filtersData";
import {
  APPLY_FILTERS,
  SHOW_RESULT,
} from "../../Utils/constants/language/en/buttonLabels";
import FullScreenDialog from "../../components/DialogBox/FullScreenDialog";
import { useForm } from "./useForm";
import { fieldNames } from "../../Utils/constants/formsConstants";

export interface CarsListingProps {}

const CarsListing: React.FC<CarsListingProps> = () => {
  const { values, handleInputChange } = useForm();

  const [open, setOpen] = React.useState(false);
  const [sortDrawerOpen, setSortDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setSortDrawerOpen(sortDrawerOpen ? false : true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <Grid
          item
          container
          xs={12}
          md={8}
          alignContent="flex-start"
          spacing={2}
        >
          <Hidden mdUp>
            <Grid item container justify="space-between" xs={12} spacing={2}>
              <Grid item>
                <Typography variant="h3">Results: 04</Typography>
              </Grid>
              <Grid item container xs={6} spacing={1} justify="flex-end">
                <Grid item>
                  <Chip
                    variant="outlined"
                    size="small"
                    icon={<FilterListRoundedIcon color="secondary" />}
                    label="Filters"
                    clickable
                    color="secondary"
                    onClick={() => handleClickOpen()}
                  />
                </Grid>
                <Grid item>
                  <Hidden smUp>
                    <Chip
                      variant="outlined"
                      size="small"
                      icon={<SortRounded color="secondary" />}
                      label="Sort"
                      clickable
                      color="secondary"
                      onClick={() => toggleDrawer()}
                    />
                  </Hidden>
                </Grid>
              </Grid>
              <FullScreenDialog
                title="Filters"
                open={open}
                handleClose={handleClose}
              >
                <CarFilters />
              </FullScreenDialog>
              <SwipeableDrawer
                style={{
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
                elevation={20}
                anchor="bottom"
                open={sortDrawerOpen}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
              >
                <DialogContent>
                  <Typography variant="h3" gutterBottom>
                    Sorting Options
                  </Typography>
                  <RadioGroup
                    aria-label="sortingOptions"
                    value={values.sortingOptions}
                    name={fieldNames.sortingOptions}
                    onChange={handleInputChange}
                  >
                    {sortingOptions.map((option) => (
                      <FormControlLabel
                        key={`sorting-option-${option.value}`}
                        value={option.value}
                        control={<Radio size="small" />}
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={toggleDrawer}>
                    {APPLY_FILTERS}
                  </Button>
                </DialogActions>
              </SwipeableDrawer>
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
