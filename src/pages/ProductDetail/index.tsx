import { useEffect, useRef, useState, Fragment } from 'react';
import { useHistory, useParams } from 'react-router';
import ProductDetailsSkeletons from '../../layout/Sections/Sections/ProductDetail/ProductDetailsSkeletons';
import ProductDetail from '../../layout/Sections/Sections/ProductDetail/ProductDetail';
import Slides from '../../layout/Sections/Sections/ProductDetail/Slider';
import ProductDescription from '../../layout/Sections/Sections/ProductDetail/ProductDescription';
import ProductRatings from '../../layout/Sections/Sections/ProductDetail/ProductRatings';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import MenuItem from '@material-ui/core/MenuItem';
import {
  rating,
  mainButton,
  numButton,
  desc,
  array,
  locIcon,
  mailIcon,
  ratIcon,
  numbIcon,
  CarInfo,
  carTitle
} from '../../layout/Sections/Utils/carDetail';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Actions from './useFunctions';
import MetaTags from '../../components/MetaTags';
import BreadCrumbs from '../../components/BreadCrumbs';
import PageMeta from '../../Utils/constants/language/en/pageData';
import NoImg from '../../assets/no-img.png';
import Toast from '../../components/Toast';
import { Colors } from '../../Utils/constants/colors/colors';
import {
  Box,
  Container,
  Divider,
  IconButton,
  makeStyles,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core';
import Sizes from '../../Utils/themeConstants';
import { Compare, Favorite } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import LoginModal from '../login/LoginModal';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import {
  MARK_AS_SOLD,
  MARK_AS_UNSOLD,
  EDIT,
  DEACTIVATE,
  ACTIVATE,
  PUBLISH,
  DELETE
} from '../../Utils/constants/language/en/buttonLabels';
import { paths } from '../../routes/paths';
import ProductListingCard from '../../components/ListingCard/ProductListingCard';
import ListingCardSkeletons from '../../components/ListingCard/ListingCardSkeletons';
import productData from './productData';

interface RouteProps {
  id: string;
}
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const product = productData[0].data.result;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const ProductDetailPage = () => {
  const defaultMarginTop = '20px';
  const { id } = useParams<RouteProps>();
  const history = useHistory();
  const size = Sizes();

  const { user } = useSelector((state: RootState) => state.auth);
  const { shortlistCars } = useSelector(
    (state: RootState) => state.shortlistCars
  );
  const {
    // obj,
    isLoading,
    open,
    setOpen,
    responseMessage,
    carFeatures,
    toggleFavourite,
    isFavorite,
    toggleShortListCar,
    signinModal,
    setSigninModal,
    breadCrumbData,
    toggleActive,
    toggleSold,
    toastType,
    isSold,
    isActive,
    setOpenToast,
    toastMessage,
    openToast,
    publishAd,
    deleteAd
  } = Actions(id ?? '');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { tabs, tab, btn, cartBtn, buyBtn, salePrice, reviewBadge } = useStyles();
  const [sliderHeight, setSliderHeight] = useState(0);
  const sliderColumn = useRef<HTMLDivElement | null>(null);
  const [tabValue, setTabValue] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const actionsMenu = (
    <Menu
      id="action-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={() => history.push(paths.addEditCar + `${product?._id}`)}>
        {EDIT}
      </MenuItem>
      <MenuItem onClick={() => deleteAd()}>{DELETE}</MenuItem>
      {product?.isPublished === false ? (
        <MenuItem onClick={() => publishAd()}>{PUBLISH}</MenuItem>
      ) : null}
      <MenuItem onClick={() => toggleSold()}>
        {isSold ? MARK_AS_SOLD : MARK_AS_UNSOLD}
      </MenuItem>
      <MenuItem onClick={() => toggleActive()}>
        {isActive ? ACTIVATE : DEACTIVATE}
      </MenuItem>
    </Menu>
  );

  const handleImageLoaded = () => {
    setSliderHeight(
      sliderColumn.current?.clientHeight
        ? sliderColumn.current?.clientHeight
        : 500
    );
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (!isLoading) {
      setSliderHeight(
        sliderColumn.current?.clientHeight
          ? sliderColumn.current?.clientHeight
          : 500
      );
    }
  }, [sliderColumn.current?.clientHeight, isLoading]);

  return (
    <Container>
      <MetaTags
        title="Product Details"
        canonical={PageMeta.carDetails.canonical}
      />
      <Grid item xs={12}>
        <BreadCrumbs links={breadCrumbData} />
      </Grid>
      {isLoading && <ProductDetailsSkeletons />}      
      {product && !isLoading && (
        <Fragment>
          <Card>
            <Box>
              <Paper elevation={4}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    md={6}
                    ref={sliderColumn}
                    style={{ height: '100%' }}
                  >
                    <Slides
                      carTitle={carTitle}
                      info={CarInfo}
                      feature={carFeatures}
                      desc={desc}
                      paragraph={product?.description}
                      arr={
                        product.image && product.image.length > 0 ? product.image : NoImg
                      }
                      id={product?._id}
                      date={product.createdAt}
                      createdBy={product.createdBy}
                      updatedAt={product.updatedAt}
                      data={product}
                      imageLoaded={handleImageLoaded}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    md={6}
                    style={{
                      maxHeight:
                        size.mobile || size.mobileLarge ? '100%' : sliderHeight,
                      overflowY: 'scroll'
                    }}
                  >
                    <Grid container style={{ padding: '20px' }}>
                      <Grid
                        item
                        xs={12}
                        container
                        justifyContent="space-between"
                        alignItems="flex-start"
                      >
                        <Box>
                          <Typography variant="h2">{`${product.make} ${product.category}`}</Typography>
                          <Box
                            display="flex"
                            alignItems="center"
                            style={{ color: Colors.grey }}
                          >
                          </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          {/* <IconButton
                                className={btn}
                                onClick={(e) => toggleShortListCar(e)}
                                >
                                <Compare
                                color={
                                  shortlistCars.filter(
                                    (e: any) => e._id === product._id
                                  ).length > 0
                                    ? 'primary'
                                    : 'inherit'
                                }
                                />
                              </IconButton> */}
                          {user?._id === product?.createdBy._id ? null : (
                            <IconButton
                              onClick={() => toggleFavourite(product?._id)}
                              className={btn}
                              style={{ marginLeft: '5px' }}
                            >
                              {isFavorite ? (
                                <Favorite color="primary" />
                              ) : (
                                <Favorite color="inherit" />
                              )}
                            </IconButton>
                          )}

                          {user._id === product.createdBy._id && (
                            <IconButton
                              className={btn}
                              style={{ marginLeft: '5px' }}
                              onClick={handleClick}
                            >
                              <MoreVertRoundedIcon color="inherit" />
                            </IconButton>
                          )}
                          {actionsMenu}
                        </Box>
                      </Grid>
                      <Box>
                        <Typography
                          style={{ color: Colors.navyBlue }}
                          variant="h2"
                        >
                          PKR {product.price?.toLocaleString()}
                        </Typography>
                      </Box>
                      <Box m={0.5}>
                        <Typography
                          className={salePrice}
                          variant="body1"
                          component="span"
                          gutterBottom
                        >
                          PKR {(product.originalPrice).toLocaleString()}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} container spacing={2} style={{ padding: '0 20px' }}>
                      <Grid item xs={6}>
                        <Box>
                          <Button
                            fullWidth
                            className={cartBtn}
                            endIcon={<ShoppingCartIcon />}
                          >
                            ADD TO CART
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          fullWidth
                          color='secondary'
                          className={buyBtn}
                          endIcon={<OfflineBoltIcon />}
                        >
                          BUY NOW
                        </Button>
                      </Grid>
                    </Grid>
                    <Box marginTop={defaultMarginTop}>
                      <Divider />
                    </Box>
                    <Box>
                      <Tabs
                        value={tabValue}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        classes={{
                          flexContainer: tabs
                        }}
                      >
                        <Tab
                          classes={{
                            wrapper: tab
                          }}
                          label="Description"
                          {...a11yProps(0)}
                        />
                        <Tab
                          classes={{
                            wrapper: tab
                          }}
                          label="Specifications"
                          {...a11yProps(1)}
                        />
                        <Tab
                          classes={{
                            wrapper: tab
                          }}
                          label="Ratings & Reviews"
                          {...a11yProps(2)}
                        />
                      </Tabs>
                      <Divider />
                    </Box>
                    <Box p={3}>
                      <TabPanel value={tabValue} index={0}>
                        <ProductDescription description={product.description} />
                      </TabPanel>
                      <TabPanel value={tabValue} index={1}>
                        <ProductDetail
                          mainButton={mainButton}
                          numButton={numButton}
                          Title={`${product.make} ${product.category}`}
                          rating={rating}
                          array={array}
                          locIcon={locIcon}
                          mailIcon={mailIcon}
                          ratIcon={ratIcon}
                          numbIcon={numbIcon}
                          paragraph={product?.description}
                          desc={desc}
                          price={product?.price}
                          data={product}
                        />
                      </TabPanel>
                      <TabPanel value={tabValue} index={2}>
                        <ProductRatings ratings={product.ratings} />
                      </TabPanel>
                    </Box>
                  </Grid>
                </Grid>                       
              </Paper>            
            </Box>
          </Card>
          <Card style={{ margin: "20px auto" }}>
            <Box>
              <Paper elevation={4}>
                <Grid item xs={12} style={{ padding: "20px" }}>
                  <Typography variant="h2">Similar Products</Typography>
                  <Box marginTop='10px'>
                    <Divider />
                  </Box>
                  {/* {!isLoading && responseData !== null && ( */}
                    <Grid item container xs={12} spacing={1}>
                      {/* {result && */}
                        {/* result.map((car: ICarCard) => ( */}
                          <Grid
                            // key={`${uuidv4}`}
                            item
                            xs={12}
                            sm={3}
                          >
                            <ProductListingCard
                              data={product}
                              // getMyCars={getAllCars}
                              layoutType={'grid'}
                            />
                          </Grid>
                          <Grid
                            // key={`${uuidv4}`}
                            item
                            xs={12}
                            sm={3}
                          >
                            <ProductListingCard
                              data={product}
                              // getMyCars={getAllCars}
                              layoutType={'grid'}
                            />
                          </Grid>
                          <Grid
                            // key={`${uuidv4}`}
                            item
                            xs={12}
                            sm={3}
                          >
                            <ProductListingCard
                              data={product}
                              // getMyCars={getAllCars}
                              layoutType={'grid'}
                            />
                          </Grid>
                          <Grid
                            // key={`${uuidv4}`}
                            item
                            xs={12}
                            sm={3}
                          >
                            <ProductListingCard
                              data={product}
                              // getMyCars={getAllCars}
                              layoutType={'grid'}
                            />
                          </Grid>
                        {/* ))} */}
                    </Grid>
                  {/* )} */}
                </Grid>
              </Paper>
            </Box>
          </Card>
        </Fragment>
      )}
      <LoginModal
        openModal={signinModal}
        closeModal={() => setSigninModal(false)}
      />
      <Toast
        message={toastMessage}
        type={toastType}
        open={openToast}
        onClose={() => setOpenToast(false)}
      />
      <Toast
        open={open}
        message={responseMessage.message}
        type={responseMessage.status}
        onClose={() => setOpen(false)}
      />
    </Container>
  );
};

export default ProductDetailPage;

const useStyles = makeStyles((theme) => ({
  loader: {
    margin: '300px 0px'
  },
  section: {
    marginTop: '20px'
    // borderBottom: '1px solid ' + Colors.navyBlue
  },
  tabs: {
    borderBottom: 0
  },
  tab: {
    fontSize: '1rem',
    flexDirection: 'row'
  },
  btn: {
    background: Colors.lightBlue,
    boxShadow: 'none',
    '&:hover': {
      background: Colors.lightGrey,
      boxShadow: 'none'
    }
  },
  buyBtn: {
    color: 'white',
    backgroundColor: '#092C4C',
    border: '2px solid #092C4C',
    boxShadow: 'none',
    borderRadius: '4px',
    margin: '0 4px',
    padding: '8px 2px',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    marginLeft: '2px',
    '&:hover': {  
      backgroundColor: '#05409D' 
    }
  },
  cartBtn: {
    color: '#05409D',
    backgroundColor: '#FFF',
    border: '2px solid #05409D',
    boxShadow: 'none',
    borderRadius: '4px',
    margin: '0 4px',
    padding: '8px 2px',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    marginRight: '2px',
    '&:hover': { 
      color: '#FFF',
      backgroundColor: '#05409D'
    }
  },
  salePrice: {
    textDecoration: 'line-through',
    marginLeft: '5px',
    textDecorationColor: 'red'
  },
  reviewBadge: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    maxWidth: '50px',
    backgroundColor: 'greythree',
    color: theme.palette.common.white,
    borderRadius: '2px',
    padding: '2px 2px 2px 5px'
  }
}));
