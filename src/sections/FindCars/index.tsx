import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography
} from '@material-ui/core';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import Slider from '../../components/Slider';
import { Colors } from '../../Utils/constants/colors/colors';
import SUVIcon from '../../assets/Cars/SUV.png';
import PickUpIcon from '../../assets/Cars/pickup-truck.png';
import SedanIcon from '../../assets/Cars/sedans.png';
import { FIND_YOUR_CAR } from '../../Utils/constants/language/en/buttonLabels';
import { findCarsData } from '../../Utils/constants/language/en/homePageData';
import { useForm } from './useForm';
import { fieldNames } from '../../Utils/constants/formsConstants';
import Loader from '../../components/Loader';

const FindCarsStyles = makeStyles((theme) => ({
  root: {
    marginTop: '-100px',
    marginBottom: '-120px',
    position: 'relative',
    boxShadow: '0px 2px 4px 4px rgba(0, 0, 0, 0.2)',
    border: `1px solid ${theme.palette.text.primary}`,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '150px',
      marginBottom: '20px'
    }
  },
  content: {
    padding: '30px 140px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 35px'
    }
  },
  subtitleStyle: {
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px'
    }
  },
  textFields: {
    backgroundColor: Colors.flashWhite
  },
  tabIndicator: {
    display: 'none',
    height: 0
  },
  tabRoot: {
    margin: '0',
    color: Colors.textPrimary,
  },
  tabContainer: {
    borderBottom: 'none'
  },

  tabWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid ${Colors.textPrimary}`,
    backgroundColor: Colors.lightBlue,
    borderRadius: '5px',
    padding: '0 10px',
    '&:hover': {
      boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)'
    }
  },
  tabWrapperSelected: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `2px solid ${Colors.darkBlue}`,
    backgroundColor: Colors.lightGrey,
    borderRadius: '5px',
    padding: '0 10px'
  },
  inputFieldRoot: {
    backgroundColor: Colors.lightBlue
  }
}));

const FindCars: React.FC = () => {
  const {
    root,
    content,
    subtitleStyle,
    tabIndicator,
    tabRoot,
    tabWrapper,
    tabWrapperSelected,
    tabContainer,
    inputFieldRoot
  } = FindCarsStyles();

  const {
    isLoading,
    responseData,
    setBodyType,
    values,
    handleInputChange,
    handleSubmit
  } = useForm();
  return (
    <Card className={root}>
      <Typography className={content} align="center" variant="h2">
        {findCarsData.heading}
      </Typography>
      <div className={subtitleStyle}>
        <Typography align="left" variant="caption" gutterBottom>
          {findCarsData.subTitle}
        </Typography>
      </div>
      <Tabs
        classes={{ indicator: tabIndicator, flexContainer: tabContainer }}
        variant="scrollable"
        scrollButtons="auto"
        value={false}
      >
        {isLoading && <Loader open={true} />}
        {!isLoading &&
          responseData &&
          responseData.map((item) => (
            <Tab
              key={item._id}
              disableTouchRipple
              classes={{
                root: tabRoot,
                wrapper:
                  values.bodyType === item.bodyType
                    ? tabWrapperSelected
                    : tabWrapper
              }}
              icon={
                <img
                  height="64px"
                  src={item.image ? item.image : SedanIcon}
                  alt={item.bodyType}
                />
              }
              label={item.bodyType}
              onClick={() => setBodyType(item.bodyType)}
            />
          ))}

        {/* <Tab
          disableTouchRipple
          classes={{ root: tabRoot, wrapper: tabWrapper }}
          icon={<img height="64px" src={PickUpIcon} alt="" />}
          label="Pick Ups"
        />
        <Tab
          disableTouchRipple
          classes={{ root: tabRoot, wrapper: tabWrapper }}
          icon={<img height="64px" src={SedanIcon} alt="" />}
          label="Sedans"
        />
        <Tab
          disableTouchRipple
          classes={{ root: tabRoot, wrapper: tabWrapper }}
          icon={<img height="64px" src={SedanIcon} alt="" />}
          label="Sedans"
        />
        <Tab
          disableTouchRipple
          classes={{ root: tabRoot, wrapper: tabWrapper }}
          icon={<img height="64px" src={SedanIcon} alt="" />}
          label="Sedans"
        />
        <Tab
          disableTouchRipple
          classes={{ root: tabRoot, wrapper: tabWrapper }}
          icon={<img height="64px" src={SedanIcon} alt="" />}
          label="Sedans"
        /> */}
      </Tabs>
      <CardContent className={content}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <InputField
                classes={{ root: inputFieldRoot }}
                name={fieldNames.make}
                value={values.make}
                label="Make"
                placeholder="e.g. Honda, Toyota"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                classes={{ root: inputFieldRoot }}
                name={fieldNames.model}
                value={values.model}
                label="Model"
                placeholder="e.g Civic, Corolla"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                classes={{ root: inputFieldRoot }}
                name={fieldNames.priceFrom}
                value={values.priceFrom}
                label="Price Range (Min)"
                placeholder="0"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                classes={{ root: inputFieldRoot }}
                name={fieldNames.priceTo}
                value={values.priceTo}
                label="Price Range (Max)"
                placeholder="50000000"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item container xs={12} justifyContent="center">
              <Grid item xs={12} md={6}>
                <CustomButton type="submit" fullWidth>
                  {FIND_YOUR_CAR}
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FindCars;
