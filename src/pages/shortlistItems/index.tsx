import React from "react";
import { useForm } from "./useForm";
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
import {
  CarsListingData,
  ICarData,
  LISTING_PAGE_HEADER,
} from "../../Utils/constants/language/en/listingData";
import ShortListCard from "../../components/ShortListCard";
import CustomTitle from "../../components/CustomTitle/CustomTitle";
import { Color } from "../../theme/color";
import { sortingOptions } from "../../Utils/constants/language/en/filtersData";
import {
  APPLY_FILTERS,
  COMPARE,
  SHOW_RESULT,
  SHORTLIST_ITEMS,
} from "../../Utils/constants/language/en/buttonLabels";
import FullScreenDialog from "../../components/DialogBox/FullScreenDialog";
import { fieldNames } from "../../Utils/constants/formsConstants";
import { routes } from "../../routes/paths";
import { useHistory } from "react-router";
import { Colors } from "../../Utils/constants/colors/colors";

export interface ShortlistItemProps {}

const ShortlistItem: React.FC<ShortlistItemProps> = () => {
  const history = useHistory();
  const {
    values,
    handleInputChange,
    shortListItems,
    shortListItem,
    removeShortListItem,
  } = useForm();

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
          <CustomTitle
            color={Color.textPrimary}
            text={`${LISTING_PAGE_HEADER} (0000)`}
          />
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
                  backgroundColor: Colors.navyBlue,
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
          {shortListItems.length > 0 && (
            <Grid item container xs={12} spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  {SHORTLIST_ITEMS}
                </Typography>
              </Grid>
              <Grid item container xs={12} spacing={1}>
                {shortListItems.map((item: ICarData) => (
                  <Grid key={`shotlist-item-${item.product.name}`} item xs={2}>
                    <ShortListCard
                      productImg={item.productImage}
                      name={item.product.name}
                      _id={item.product._id}
                      handleClick={() => removeShortListItem(item.product._id)}
                    />
                  </Grid>
                ))}
                {shortListItems.length === 2 && (
                  <Grid container item xs={3} alignContent="flex-end">
                    <Button
                      color="secondary"
                      onClick={() => history.push(`${routes.carComparision}/${shortListItems[0].product._id}/${shortListItems[1].product._id}`)}
                    >
                      {COMPARE}
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          )}
          <Grid item container xs={12} spacing={1}>
            {CarsListingData &&
              CarsListingData.map((cardData, index) => (
                <Grid
                  key={`cars-card-${index}`}
                  item
                  xs={12}
                  sm={layoutType === "list" ? 12 : 6}
                  xl={layoutType === "list" ? 12 : 6}
                >
                  <ListingCard
                    data={cardData}
                    layoutType={layoutType}
                    handleClick={() => shortListItem(cardData)}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShortlistItem;
