import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {
  Container,
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
  Card
} from '@material-ui/core';
import Toast from '../../components/Toast';
import Pagination from '@material-ui/lab/Pagination';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import ListingCard from '../../components/ListingCard';
import BreadCrumbs from '../../components/BreadCrumbs';
import CarFilters from '../../sections/VerticalCarFilters';
import { SortRounded } from '@material-ui/icons';
import HorizontalFilters from '../../sections/HorizontalFilters';
import ShortListCard from '../../components/ShortListCard';
import { LISTING_PAGE_HEADER } from '../../Utils/constants/language/en/listingData';
import {
  conditionOptions,
  sortingOptions
} from '../../Utils/constants/language/en/filtersData';
import {
  APPLY_FILTERS,
  SHOW_RESULT,
  SHORTLIST_ITEMS,
  COMPARE,
  CANT_FIND_RESULT
} from '../../Utils/constants/language/en/buttonLabels';
import FullScreenDialog from '../../components/DialogBox/FullScreenDialog';
import { useForm } from './useForm';
import { fieldNames } from '../../Utils/constants/formsConstants';
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import { Color } from '../../theme/color';
import Section from '../../components';
import { RootState } from '../../redux/store';
import { ICarCard } from '../../Utils/interfaces/products.interface';
import { paths } from '../../routes/paths';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import GlobalStyles from '../../globalStyles';
import Skeletons from '../../components/Skeletons';
import ListingCardSkeletons from '../../components/ListingCard/ListingCardSkeletons';
import CarListingStyles from './style';

export interface CarsListingProps {
  isShortlist?: boolean;
}

const CarsListing: React.FC<CarsListingProps> = ({ isShortlist = false }) => {
  const history = useHistory();

  const { root, listingContainer, contentRoot } = CarListingStyles();

  const {
    values,
    isLoading,
    errors,
    responseData,
    handleInputChange,
    page,
    handlePageChange,
    responseMessage,
    result,
    handleTextBoxChange,
    handleCheckboxChange,
    handleSingleCheckBoxChange,
    handleTextBoxSubmit,
    setValues,
    appliedFilters,
    pageCount,
    removeFilter,
    removeFilterItem,
    removeRangeFilter,
    keywords,
    shortListItem,
    removeShortListItem,
    rangeValues,
    setRangeValues,
    citiesWithCars,
    alertOpen,
    setAlertOpen,
    makes,
    models,
    bodyTypes
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const [sortDrawerOpen, setSortDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setSortDrawerOpen(sortDrawerOpen ? false : true);
  };

  const shortListCars = useSelector(
    (state: RootState) => state.shortlistCars.shortlistCars
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlertClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const { layoutType } = useSelector((state: RootState) => state.layout);

  const filtersProps = {
    handleTextBoxChange,
    handleCheckboxChange,
    handleSingleCheckBoxChange,
    handleTextBoxSubmit,
    setValues,
    appliedFilters,
    removeFilter,
    removeFilterItem,
    removeRangeFilter,
    errors,
    values,
    keywords,
    rangeValues,
    setRangeValues,
    citiesWithCars,
    makes,
    models,
    bodyTypes
  };

  return (
    <Container>
      <MetaTags
        title={PageMeta.carListing.title}
        description={PageMeta.carListing.description}
        canonical={PageMeta.carListing.canonical}
        keywords={PageMeta.carListing.keywords}
      />
      <Grid
        container
        className={listingContainer}
        justifyContent="space-between"
        spacing={5}
      >
        {/* <Grid item xs={12}>
            <BreadCrumbs />
          </Grid> */}
        <Grid xs={12} md={4} item container>
          <Grid item xs={12} className={contentRoot}>
            <Hidden smDown>
              <Grid item xs={12}>
                <CarFilters filterProps={filtersProps} />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={8}>
          <Grid item xs={12} className={contentRoot}>
            <Hidden mdUp>
              <Grid item container justifyContent="space-between" xs={12}>
                <Grid item>
                  <Typography variant="h3">
                    Results:{' '}
                    {responseData !== null ? responseData?.totalCount : 0}
                  </Typography>
                </Grid>
                <Grid item container xs={7} justifyContent="flex-end">
                  <Grid item container xs={7} justifyContent="flex-end">
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
                  <Hidden smUp>
                    <Grid item container xs={5} justifyContent="flex-end">
                      <Chip
                        variant="outlined"
                        size="small"
                        icon={<SortRounded color="secondary" />}
                        label="Sort"
                        clickable
                        color="secondary"
                        onClick={() => toggleDrawer()}
                      />
                    </Grid>
                  </Hidden>
                </Grid>
                <FullScreenDialog
                  title="Filters"
                  open={open}
                  handleClose={handleClose}
                >
                  <CarFilters filterProps={filtersProps} />
                </FullScreenDialog>
                <SwipeableDrawer
                  style={{
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px'
                  }}
                  elevation={20}
                  anchor="bottom"
                  open={sortDrawerOpen}
                  onClose={toggleDrawer}
                  onOpen={toggleDrawer}
                >
                  <DialogContent>
                    <Typography variant="h3" gutterBottom>
                      Sort By
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
                    <Typography variant="h3" gutterBottom>
                      Condition
                    </Typography>
                    <RadioGroup
                      aria-label="condition"
                      value={values.condition}
                      name={fieldNames.condition}
                      onChange={handleInputChange}
                    >
                      {conditionOptions.map((option) => (
                        <FormControlLabel
                          key={`condition-option-${option.value}`}
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
                <HorizontalFilters
                  values={values}
                  errors={errors}
                  handleInputChange={handleInputChange}
                />
              </Grid>
            </Hidden>
            {isShortlist === true && shortListCars.length >= 1 && (
              <Grid item container xs={12}>
                <Grid item container xs={6} alignContent="center">
                  <Typography variant="button" gutterBottom>
                    {SHORTLIST_ITEMS}
                  </Typography>
                </Grid>
                <Grid container item xs={6} justifyContent="flex-end">
                  <Grid item xs={6} sm={3}>
                    <Button
                      color="secondary"
                      onClick={() => history.push(`${paths.carComparision}`)}
                    >
                      {COMPARE}
                    </Button>
                  </Grid>
                </Grid>
                <Grid item container xs={12} spacing={1}>
                  {shortListCars &&
                    shortListCars.map((item: ICarCard) => (
                      <Grid
                        key={`shotlist-item-${item._id}`}
                        container
                        justifyContent="center"
                        item
                        xs={4}
                        sm={2}
                      >
                        <ShortListCard
                          productImg={item.image[0]}
                          name={item.model}
                          _id={item._id}
                          handleClick={() => removeShortListItem(item._id)}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            )}
            <Grid item container xs={12} justifyContent="flex-start">
              {isLoading ? (
                <Grid item container xs={12}>
                  <Skeletons length={6} layoutType={layoutType}>
                    <ListingCardSkeletons layoutType={layoutType} />
                  </Skeletons>
                </Grid>
              ) : responseMessage.status !== 'success' &&
                responseData === null ? (
                <Grid style={{ margin: '50px 0' }} item xs={12}>
                  <Typography align="center" variant="h2">
                    {CANT_FIND_RESULT}
                  </Typography>
                </Grid>
              ) : (
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  spacing={1}
                >
                  {result &&
                    result.map((car: any, index: any) => (
                      <Grid
                        key={`cars-card-${index}`}
                        item
                        xs={12}
                        sm={layoutType === 'list' ? 12 : 6}
                      >
                        <ListingCard
                          data={car}
                          isFavs={!isShortlist}
                          layoutType={layoutType}
                          handleClick={
                            isShortlist ? () => shortListItem(car) : undefined
                          }
                        />
                      </Grid>
                    ))}
                  {result && (
                    <Pagination
                      style={{ margin: '15px 0' }}
                      count={pageCount}
                      page={page}
                      onChange={handlePageChange}
                      variant="outlined"
                      shape="rounded"
                    />
                  )}
                </Grid>
              )}
              {responseMessage && (
                <Toast
                  open={alertOpen}
                  onClose={handleAlertClose}
                  type={responseMessage.status}
                  message={responseMessage.message}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarsListing;
