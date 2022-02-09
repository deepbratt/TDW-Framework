import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Loader from '../../components/Loader';
import CarFilters from '../../sections/VerticalCarFilters';
import ProductListingCard from '../../components/ListingCard/ProductListingCard';
import Skeletons from '../../components/Skeletons';
import ListingCardSkeletons from '../../components/ListingCard/ListingCardSkeletons';
import {
    RESET,
    CANT_FIND_RESULT
} from '../../Utils/constants/language/en/buttonLabels';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import Pagination from '@material-ui/lab/Pagination';
import CustomButton from '../../CustomButton';
import BreadCrumbs from '../../components/BreadCrumbs';

import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';
import ProductVerticalFilters from '../../sections/VerticalProductsFilters';
import ProductListingHorizontalFilters from '../../sections/ProductListingHorizontalFilters';
import { ICarCard } from '../../Utils/interfaces/products.interface';
import { useForm } from './useForm';
import { RootState } from '../../redux/store';
import DummyIcon from '../../assets/icons/cashInHand.png';

const ListingLayoutStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
      padding: '10px'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '40px',
      paddingTop: '0px'
    }
  },
  listingContainer: {
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0px'
    }
  },
  contentRoot: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '5px',
    border: `0.2px solid ${Colors.lightGrey}`,
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px'
    }
  },
  filtersRoot: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '5px',
    border: `0.5px solid ${Colors.lightGrey}`
  },
  filtersContent: {
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px'
    }
  },
  comparebutton: {
    margin: theme.spacing(1),
    position: 'fixed',
    right: '10%',
    bottom: '20px',
    zIndex: 99999,
    [theme.breakpoints.down('xs')]: {
      bottom: '10px'
    }
  },
  compareButtonIcon: {
    margin: theme.spacing(1)
  },
  tabIndicator: {
    display: 'none',
    height: 0
  },
  tabRoot: {
    margin: '0',
    backgroundColor: theme.palette.common.white,
  },
  tabContainer: {
    borderBottom: 'none'
  },
  tabWrapper: {
    margin: '15px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    color: Colors.darkBlue,
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '1rem',
    border: `2px solid ${Colors.lightGrey}`,
    '&:hover': {
      boxShadow: '0px 5px 7px 0px rgba(0,0,0,0.1)',
      // border: `2px solid ${Colors.textPrimary}`,
      transition: 'all 0.3s ease-in-out'
    }
  },
  tabWrapperSelected: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
    color: theme.palette.common.white,
    borderRadius: '5px',
    padding: '10px 15px',
    fontSize: '1rem',
    '&:hover': {
      border: `2px solid ${Colors.textPrimary}`
    }
  },
  scrollButton:{
    backgroundColor: Colors.lightGrey,
    opacity: 1,
    margin: '0 5px',
  }
}));

const ProductListing: React.FC = () => {
  const {
    root,
    listingContainer,
    contentRoot,
    filtersRoot,
    filtersContent,
    tabIndicator,
    tabRoot,
    tabWrapper,
    tabWrapperSelected,
    tabContainer,
    scrollButton
  } = ListingLayoutStyles();

  const { layoutType } = useSelector((state: RootState) => state.layout);

    const {
      isLoading,
      responseData,
      handleInputChange,
      page,
      modalPage,
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
      resetForm,
      setResponseMessage,
      getAllCars
    } = useForm();

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
    };

  return (
    <Container className={root}>
      <MetaTags
        title={PageMeta.carListing.title}
        canonical={PageMeta.carListing.canonical}
      />
      <BreadCrumbs />
      <Grid
        container
        className={listingContainer}
        justifyContent="space-between"
        spacing={1}
      >
        <Grid item xs={12}>
          <Tabs
            classes={{
              scroller: tabRoot,
              indicator: tabIndicator,
              flexContainer: tabContainer
            }}
            variant="scrollable"
            TabScrollButtonProps={{
              disabled: false,
              classes: {
                root: scrollButton
              }
            }}
            scrollButtons="on"
            value={false}
          >
            {[
              { _id: 0, image: DummyIcon, bodyType: 'Car Care' },
              { _id: 1, image: DummyIcon, bodyType: 'Car Care' },
              { _id: 2, image: DummyIcon, bodyType: 'Car Care' },
              { _id: 3, image: DummyIcon, bodyType: 'Car Care' },
              { _id: 4, image: DummyIcon, bodyType: 'Car Care' },
              { _id: 5, image: DummyIcon, bodyType: 'Car Care' },
              { _id: 6, image: DummyIcon, bodyType: 'Car Care' },
              { _id: 7, image: DummyIcon, bodyType: 'Car Care' },
              { _id: 8, image: DummyIcon, bodyType: 'Car Care' }
            ].map((item) => (
              <Tab
                key={item._id}
                disableTouchRipple
                classes={{
                  root: tabRoot,
                  wrapper:
                    // values.bodyType.indexOf(item.bodyType) > -1
                    //   ? tabWrapperSelected
                    //   :
                    tabWrapper
                }}
                icon={
                  <img
                    height="46px"
                    src={item.image ? item.image : DummyIcon}
                    alt={item.bodyType}
                  />
                }
                label={item.bodyType}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid style={{ height: '100%' }} xs={12} md={3} xl={3} item container>
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
                    Match
                  </Typography>
                </Grid>
                <Grid item>
                  <CustomButton variant="text" color="secondary">
                    {RESET}
                  </CustomButton>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <ProductVerticalFilters filterProps={filtersProps} />
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item container xs={12} md={9} xl={9}>
          <Grid item xs={12} container className={contentRoot}>
            <Hidden mdUp>
              <Grid item container justifyContent="space-between" xs={12}>
                <Grid item>
                  <Typography variant="h3">Results: </Typography>
                </Grid>
                <Grid item container xs={7} justifyContent="flex-end"></Grid>
              </Grid>
            </Hidden>
            <Hidden xsDown>
              <Grid item xs={12}>
                <ProductListingHorizontalFilters
                  handleInputChange={handleInputChange}
                />
              </Grid>
            </Hidden>

            <Grid
              item
              container
              xs={12}
              spacing={1}
              justifyContent="flex-start"
            >
              {isLoading && (
                <Grid item container xs={12}>
                  <Skeletons length={6} layoutType={layoutType}>
                    <ListingCardSkeletons layoutType={layoutType} />
                  </Skeletons>
                </Grid>
              )}
              {!isLoading && responseData === null && (
                <Grid style={{ margin: '50px 0' }} item xs={12}>
                  <Typography align="center" variant="h2">
                    {CANT_FIND_RESULT}
                  </Typography>
                </Grid>
              )}
              {!isLoading && responseData !== null && (
                <Grid item container xs={12} spacing={1}>
                  {result &&
                    result.map((car: ICarCard) => (
                      <Grid
                        key={`${uuidv4}`}
                        item
                        xs={12}
                        sm={layoutType === 'list' ? 12 : 6}
                      >
                        <ProductListingCard
                          data={car}
                          getMyCars={getAllCars}
                          layoutType={layoutType}
                        />
                      </Grid>
                    ))}
                </Grid>
              )}
              {result && responseData !== null && (
                <Grid item xs={12} container justifyContent="center">
                  <Pagination
                    style={{ margin: '15px 0' }}
                    count={pageCount}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="round"
                    color="primary"
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductListing;