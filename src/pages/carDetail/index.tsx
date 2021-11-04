import CarDetail from '../../layout/Sections/Sections/CarDetail/CarDetail';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
import Section from '../../components/index';
import Slides from '../../layout/Sections/Sections/CarDetail/Slider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarInformation from '../../layout/Sections/Sections/CarDetail/CarInformation';
import { useParams } from 'react-router';
import Actions from './useFunctions';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import NoImg from '../../assets/no-img.png';
import Loader from '../../components/Loader';
import Toast from '../../components/Toast';
import { Colors } from '../../Utils/constants/colors/colors';
import CarDescription from '../../layout/Sections/Sections/CarDetail/CarDescription';
import CarFeatures from '../../layout/Sections/Sections/CarDetail/CarFeatures';
import { Box, Divider, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import Sizes from '../../Utils/themeConstants';

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
  const { id } = useParams<RouteProps>();
  const { obj, isLoading, open, setOpen, responseMessage, carFeatures } =
    Actions(id ?? '');
  const { loader, section, tabs, tab } = useStyles();
  const [sliderHeight, setSliderHeight] = useState(0);
  const sliderColumn = useRef<HTMLDivElement | null>(null);
  const [tabValue, setTabValue] = useState(0);
  const size = Sizes();

  const handleImageLoaded = () => {
    setSliderHeight(
      sliderColumn.current?.clientHeight
        ? sliderColumn.current?.clientHeight
        : 500
    );
  };

  // const lgMdSmPx = (lgMd: string, sm: string) => {
  //   return size.desktop || size.tablet ? lgMd : sm;
  // };
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
    <Section backColor={'transparent'}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        style={{ backgroundColor: 'transparent' }}
        height={'100%'}
      >
        <MetaTags
          title={PageMeta.carDetails.title}
          description={PageMeta.carDetails.description}
          canonical={PageMeta.carDetails.canonical}
          keywords={PageMeta.carDetails.keywords}
        />
        <Loader open={isLoading} isBackdrop={true} />
        <Paper elevation={4} style={{ padding: '20px', width: '100%' }}>
          {!obj ? (
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
              >
                <h1 className={loader}>No Data</h1>
              </Grid>
            </Grid>
          ) : (
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
                  arr={obj.image && obj.image.length > 0 ? obj.image : [NoImg]}
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
                // className={scrollable}
                style={{
                  maxHeight:
                    size.mobile || size.mobileLarge ? '100%' : sliderHeight,
                  overflowY: 'auto'
                }}
              >
                <Box>
<<<<<<< HEAD
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
=======
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
                </Box>
                <Box width="100%" className={section}>
                  <Divider
                    style={{ borderBottom: '1px solid ' + Colors.navyBlue }}
                  />
                </Box>
                <Box className={section}>
                  <CarDescription description={obj.description} />
                </Box>
                <Box width="100%" className={section}>
                  <Divider
                    style={{ borderBottom: '1px solid ' + Colors.navyBlue }}
                  />
                </Box>
                <Box className={section}>
                  <CarFeatures features={carFeatures} />
>>>>>>> develop
                </Box>
              </Grid>
            </Grid>
          )}
        </Paper>
        <Toast
          open={open}
          message={responseMessage.message}
          type={responseMessage.status}
          onClose={() => setOpen(false)}
        />
      </Box>
    </Section>
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
  }
}));
