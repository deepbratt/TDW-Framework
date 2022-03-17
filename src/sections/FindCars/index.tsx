import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../Utils/constants/colors/colors';
import SedanIcon from '../../assets/Cars/sedans.png';
import { FIND_YOUR_CAR } from '../../Utils/constants/language/en/buttonLabels';
import { findCarsData } from '../../Utils/constants/language/en/homePageData';
import { useForm } from './useForm';
import { fieldNames } from '../../Utils/constants/formsConstants';
import Loader from '../../components/Loader';
import SelectInputComponent from '../../components/SelectInputComponent';

const FindCarsStyles = makeStyles((theme) => ({
  root: {
    marginTop: '-90px',
    marginBottom: '20px',
    position: 'relative',
    boxShadow: `0px 2px 4px 4px ${Colors.blueTwo}`,
    border: `1px solid ${Colors.darkBlue}`,
    borderRadius: '12px',
    color: `${Colors.flashWhite}`,
    backgroundColor: `${Colors.blueMain}`,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-20px',
      marginBottom: '20px'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '25px',
      marginBottom: '20px'
    },
    '& label': {
      backgroundColor: Colors.white,
      color: Colors.blueMain,
      padding: '2px 5px'
    },
    '& ::placeholder': {
      color: Colors.darkBlue
    }
  },
  content: {
    padding: '30px 140px',
    color: Colors.blueTwo,
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
    backgroundColor: '#FFF'
  },
  tabIndicator: {
    display: 'none',
    height: 0
  },
  tabRoot: {
    margin: '0',
    color: Colors.blueMain,
    minWidth: '12.5rem',
    opacity: 1,
    zIndex: 100,
  },
  tabContainer: {
    borderBottom: 'none'
  },
  tabWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: '5px',
    padding: '0 10px',
    '&:hover': {
      backgroundColor: Colors.lightBlue,
      boxShadow: `0px 2px 4px 4px ${Colors.darkBlue}`
    },
    fontSize: '0.9rem'
  },
  tabWrapperSelected: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `2px solid ${Colors.darkBlue}`,
    backgroundColor: Colors.white,
    boxShadow: `0px 3px 4px 4px ${Colors.darkBlue}`,
    borderRadius: '5px',
    padding: '0 10px'
  },
  inputFieldRoot: {
    backgroundColor: '#FFF',
    width:"100%"
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  btn: {
    color: Colors.blueMain,
    backgroundColor: Colors.white,
    '&:hover': {
      color: Colors.white,
      backgroundColor: Colors.navyBlue,
      border: `2px solid ${Colors.white}`,
    }
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
    inputFieldRoot,
    loaderContainer,
    btn
  } = FindCarsStyles();

  const {
    isLoading,
    responseData,
    setBodyType,
    values,
    makes,
    models,
    handleInputChange,
    handleChangeSelect,
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
        {isLoading && (
          <div className={loaderContainer}>
            <Loader open={true} isBackdrop={false} />
          </div>
        )}
        {!isLoading &&
          responseData &&
          responseData.map((item) => (
            <Tab
              key={item._id}
              disableTouchRipple
              classes={{
                root: tabRoot,
                wrapper:
                  values.bodyType.indexOf(item.bodyType) > -1
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
      </Tabs>
      <CardContent className={content}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <SelectInputComponent
                dataArray={makes.map((option: any) => option.name)}
                size="small"
                className={inputFieldRoot}
                name={fieldNames.make}
                value={values.make}
                label="Make"
                disabled={isLoading}
                placeholder="e.g. Honda, Toyota"
                handleChangeSelect={handleChangeSelect}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectInputComponent
                size="small"
                dataArray={models.map((option: any) => option.name)}
                className={inputFieldRoot}
                name={fieldNames.model}
                value={values.model}
                disabled={isLoading}
                label="Model"
                placeholder="e.g Civic, Corolla"
                handleChangeSelect={handleChangeSelect}
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
                placeholder="100000000"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item container xs={12} justifyContent="center" >
              <Grid item xs={12} sm={8} >
                <CustomButton type="submit" fullWidth className={btn} style={{ border: `1px solid ${Colors.darkBlue}` }}>
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
