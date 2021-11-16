import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import Toast from '../../components/Toast';
import Pagination from '@material-ui/lab/Pagination';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import ListingCard from '../../components/ListingCard';
import CarFilters from '../../sections/VerticalCarFilters';
import SortRounded from '@material-ui/icons/SortRounded';
import HorizontalFilters from '../../sections/HorizontalFilters';
import {
  conditionOptions,
  sortingOptions
} from '../../Utils/constants/language/en/filtersData';
import {
  CANT_FIND_RESULT,
  RESET,
  CLOSE
} from '../../Utils/constants/language/en/buttonLabels';
import FullScreenDialog from '../../components/DialogBox/FullScreenDialog';
import { useForm } from './useForm';
import { fieldNames } from '../../Utils/constants/formsConstants';
import { RootState } from '../../redux/store';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import Skeletons from '../../components/Skeletons';
import ListingCardSkeletons from '../../components/ListingCard/ListingCardSkeletons';
import CarListingStyles from './style';
import CustomButton from '../../CustomButton';
import BreadCrumbs from '../../components/BreadCrumbs';
import Radio from '@material-ui/core/Radio';
import useShortListCars from '../../Utils/hooks/useShortListCars';
import ShortListItems from '../../layout/Sections/Sections/ShortListItems';
import { ICarCard } from '../../Utils/interfaces/products.interface';

export interface CarsListingProps {
  isShortlist?: boolean;
}

const CarsListing: React.FC<CarsListingProps> = ({ isShortlist = true }) => {
  const { root, listingContainer, contentRoot, filtersRoot, filtersContent } =
    CarListingStyles();

  const {
    isLoading,
    responseData,
    handleInputChange,
    page,
    modalPage,
    modalPageCount,
    handleModalPage,
    handlePageChange,
    responseMessage,
    result,
    handleTextBoxChange,
    handleCheckboxChange,
    handleSingleCheckBoxChange,
    handleTextBoxSubmit,
    pageCount,
    removeRangeFilter,
    keywords,
    rangeValues,
    setRangeValues,
    citiesWithCars,
    alertOpen,
    setAlertOpen,
    makes,
    models,
    bodyTypes,
    resetForm,
    bodyColors,
    modelsLoading,
    // clearShortListedCars,
    setResponseMessage
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const [sortDrawerOpen, setSortDrawerOpen] = React.useState(false);
  const { clearShortListedCars, removeShortListItem, shortListItem } =
    useShortListCars();

  const toggleDrawer = () => {
    setSortDrawerOpen(sortDrawerOpen ? false : true);
  };

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

  const handleRemoveShortListItem = (itemId: string) => {
    setAlertOpen(true);
    setResponseMessage(removeShortListItem(itemId));
  };

  const handleAddToShortListItem = (item: ICarCard) => {
    setAlertOpen(true);
    setResponseMessage(shortListItem(item));
  };

  const handleResetShortList = () => {
    setAlertOpen(true);
    setResponseMessage(clearShortListedCars());
  };

  const { layoutType } = useSelector((state: RootState) => state.layout);
  const values = useSelector((state: RootState) => state.carFilters.filters);

  const filtersProps = {
    handleTextBoxChange,
    handleCheckboxChange,
    handleSingleCheckBoxChange,
    handleTextBoxSubmit,
    removeRangeFilter,
    keywords,
    rangeValues,
    setRangeValues,
    citiesWithCars,
    makes,
    models,
    bodyTypes,
    bodyColors,
    modalPage,
    modalPageCount,
    handleModalPage,
    modelsLoading
  };

  return (
    <Container className={root}>
      <MetaTags
        title={PageMeta.carListing.title}
        canonical={PageMeta.carListing.canonical}
      />
      <Grid
        container
        className={listingContainer}
        justifyContent="space-between"
        spacing={2}
      >
        <Grid item xs={12}>
          <BreadCrumbs />
        </Grid>
        <Grid style={{ height: '100%' }} xs={12} md={4} xl={3} item container>
          <Hidden smDown>
            <Grid item xs={12} className={filtersRoot}>
              <Grid
                item
                container
                xs={12}
                justifyContent="space-between"
                alignItems="center"
                className={filtersContent}
              >
                <Grid item>
                  <Typography color="textPrimary" variant="h3" component="span">
                    {responseData !== null ? responseData?.totalCount : 0} Match
                  </Typography>
                </Grid>
                <Grid item>
                  <CustomButton
                    variant="text"
                    color="secondary"
                    handleClick={() => resetForm()}
                  >
                    {RESET}
                  </CustomButton>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <CarFilters filterProps={filtersProps} />
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item container xs={12} md={8} xl={9}>
          <Grid item xs={12} className={contentRoot}>
            {/* {isShortlist && (
              <Typography
                style={{ marginBottom: '20px' }}
                variant="h3"
                color="secondary"
                gutterBottom
              >
                {CHOOSE_CARS_TO_COMPARE}
              </Typography>
            )} */}
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
                  buttonLabel={RESET}
                  buttonAction={() => resetForm()}
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
                      value={values.sort}
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
                      {CLOSE}
                    </Button>
                  </DialogActions>
                </SwipeableDrawer>
              </Grid>
            </Hidden>
            <Hidden xsDown>
              <Grid item xs={12}>
                <HorizontalFilters handleInputChange={handleInputChange} />
              </Grid>
            </Hidden>
            <ShortListItems
              clearShortListedCars={handleResetShortList}
              removeShortListItem={handleRemoveShortListItem}
            />
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
                  // justifyContent="center";
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
                          // isFavs={!isShortlist}
                          layoutType={layoutType}
                          handleShortList={() => handleAddToShortListItem(car)}
                          removeShortListed={() =>
                            handleRemoveShortListItem(car._id)
                          }
                        />
                      </Grid>
                    ))}
                  {result && (
                    <Grid item xs={12} container justifyContent="center">
                      <Pagination
                        style={{ margin: '15px 0' }}
                        count={pageCount}
                        page={page}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="round"
                        color="primary"
                      />
                    </Grid>
                  )}
                </Grid>
              )}
              <Toast
                open={alertOpen}
                onClose={handleAlertClose}
                type={responseMessage.status}
                message={responseMessage.message}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarsListing;
