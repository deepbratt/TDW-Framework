import { useHistory, useParams } from 'react-router';
import CarDetail from '../../layout/Sections/Sections/CarDetail/CarDetail';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Menu from '@material-ui/core/Menu';
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
import Slides from '../../layout/Sections/Sections/CarDetail/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Actions from './useFunctions';
import MetaTags from '../../components/MetaTags';
import BreadCrumbs from '../../components/BreadCrumbs';
import PageMeta from '../../Utils/constants/language/en/pageData';
import NoImg from '../../assets/no-img.png';
import Loader from '../../components/Loader';
import Toast from '../../components/Toast';
import { Colors } from '../../Utils/constants/colors/colors';
import CarDescription from '../../layout/Sections/Sections/CarDetail/CarDescription';
import CarFeatures from '../../layout/Sections/Sections/CarDetail/CarFeatures';
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
import { useEffect, useRef, useState } from 'react';
import Sizes from '../../Utils/themeConstants';
import { Compare, Favorite, LocationOnOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import LoginModal from '../login/LoginModal';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import {
  MARK_AS_SOLD,
  MARK_AS_UNSOLD,
  EDIT,
  DEACTIVATE,
  ACTIVATE
} from '../../Utils/constants/language/en/buttonLabels';
import { paths } from '../../routes/paths';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import { updateData } from '../../Utils/API/API';

interface RouteProps {
  id: string;
}
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

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

const CarDetailContainer = () => {
  const defaultMarginTop = '20px';
  const { id } = useParams<RouteProps>();
  const history = useHistory();
  const size = Sizes();

  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const { shortlistCars } = useSelector(
    (state: RootState) => state.shortlistCars
  );
  const {
    obj,
    isLoading,
    setIsLoading,
    open,
    setOpen,
    responseMessage,
    carFeatures,
    toggleFavourite,
    isFavorite,
    toggleShortListCar,
    signinModal,
    setSigninModal,
    breadCrumbData
  } = Actions(id ?? '');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loader, section, tabs, tab, btn } = useStyles();
  const [sliderHeight, setSliderHeight] = useState(0);
  const sliderColumn = useRef<HTMLDivElement | null>(null);
  const [tabValue, setTabValue] = useState(0);
  const [isSold, setIsSold] = useState(obj?.isSold);
  const [isActive, setIsActive] = useState(obj?.active);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [toastType, setToastType] = useState('');

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
      <MenuItem onClick={() => history.push(paths.addEditCar + `${obj?._id}`)}>
        {EDIT}
      </MenuItem>
      <MenuItem onClick={() => toggleSold()}>
        {isSold ? MARK_AS_SOLD : MARK_AS_UNSOLD}
      </MenuItem>
      <MenuItem onClick={() => toggleActive()}>
        {isActive ? ACTIVATE : DEACTIVATE}
      </MenuItem>
    </Menu>
  );

  const toggleSold = (soldHere: boolean = false) => {
    let soldUnsold = isSold
      ? API_ENDPOINTS.MARK_UNSOLD
      : API_ENDPOINTS.MARK_SOLD;
    if (!isSold && soldHere) {
      // api to add the car amount in sold on tezdealz collection
    }
    if (openDialog) {
      setOpenDialog(false);
    }
    let requestBody = { soldByUs: soldHere };
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${soldUnsold}/${obj?._id}`,
      !isSold ? requestBody : undefined
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setIsSold(!isSold);
        setToastMessage(response.data.message);
        setToastType('success');
      } else {
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };

  const toggleActive = () => {
    let activeInactive = isActive
      ? API_ENDPOINTS.MARK_INACTIVE
      : API_ENDPOINTS.MARK_ACTIVE;
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${activeInactive}/${obj?._id}`
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setIsActive(!isActive);
        setToastMessage(response.data.message);
        setToastType('success');
      } else {
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };

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

  useEffect(() => {
    toggleActive();
    toggleSold();
    // eslint-disable-next-line
  }, [obj]);

  return (
    <Container>
      <MetaTags
        title={PageMeta.carDetails.title}
        canonical={PageMeta.carDetails.canonical}
      />
      <Loader open={isLoading} isBackdrop={true} />
      <Grid item xs={12}>
        <BreadCrumbs links={breadCrumbData} />
      </Grid>
      <Card>
        <Box>
          <Paper elevation={4}>
            {obj && !isLoading && (
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
                    paragraph={obj?.description}
                    arr={
                      obj.image && obj.image.length > 0 ? obj.image : [NoImg]
                    }
                    id={obj?._id}
                    city={obj?.registrationCity}
                    assembly={obj?.assembly}
                    color={obj?.bodyColor}
                    bodyType={obj?.bodyType}
                    engineCapacity={obj?.engineCapacity}
                    date={obj.createdAt}
                    isFavs={obj.isFav}
                    createdBy={obj.createdBy}
                    updatedAt={obj.updatedAt}
                    data={obj}
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
                        <Typography variant="h2">{`${obj.make} ${obj.model} ${obj.modelYear}`}</Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                          style={{ color: Colors.grey }}
                        >
                          <LocationOnOutlined fontSize="small" />
                          <Typography variant="subtitle1">
                            {/* <img width="20px" src={locIcon} alt="" /> */}
                            {obj?.city}
                          </Typography>
                        </Box>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <IconButton
                          className={btn}
                          onClick={(e) => toggleShortListCar(e)}
                        >
                          <Compare
                            color={
                              shortlistCars.filter(
                                (e: any) => e._id === obj._id
                              ).length > 0
                                ? 'primary'
                                : 'inherit'
                            }
                          />
                        </IconButton>
                        {user?._id === obj?.createdBy._id ? null : (
                          <IconButton
                            onClick={() => toggleFavourite(obj?._id)}
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

                        {user._id === obj.createdBy._id && (
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
                    <Box style={{ marginTop: defaultMarginTop }}>
                      <Typography
                        style={{ color: Colors.navyBlue }}
                        variant="h2"
                      >
                        PKR {obj.price?.toLocaleString()}
                      </Typography>
                    </Box>
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
                        label="Information"
                        {...a11yProps(0)}
                      />
                      <Tab
                        classes={{
                          wrapper: tab
                        }}
                        label="Description"
                        {...a11yProps(1)}
                      />
                      <Tab
                        classes={{
                          wrapper: tab
                        }}
                        label="Car features"
                        {...a11yProps(2)}
                      />
                    </Tabs>
                    <Divider />
                  </Box>
                  <Box p={3}>
                    <TabPanel value={tabValue} index={0}>
                      <CarDetail
                        mainButton={mainButton}
                        numButton={numButton}
                        Title={`${obj.make} ${obj.model} ${obj.modelYear}`}
                        location={obj?.city}
                        rating={rating}
                        array={array}
                        locIcon={locIcon}
                        mailIcon={mailIcon}
                        ratIcon={ratIcon}
                        numbIcon={numbIcon}
                        paragraph={obj?.description}
                        desc={desc}
                        price={obj?.price}
                        modelYear={obj?.modelYear}
                        transmission={obj?.transmission}
                        mileage={obj?.milage}
                        engineType={obj?.engineType}
                        createdBy={obj.createdBy}
                        data={obj}
                      />
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                      <CarDescription description={obj.description} />
                    </TabPanel>
                    <TabPanel value={tabValue} index={2}>
                      <CarFeatures features={carFeatures} />
                    </TabPanel>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Paper>
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
        </Box>
      </Card>
    </Container>
  );
};

export default CarDetailContainer;

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
  }
}));
