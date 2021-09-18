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

const FindCarsStyles = makeStyles((theme) => ({
  root: {
    marginTop: '-45px',
    marginBottom: '-120px',
    position: 'relative',
    boxShadow: '0px 2px 4px 4px rgba(0, 0, 0, 0.2)',
    border: `1px solid ${theme.palette.text.primary}`,
    [theme.breakpoints.down('sm')]: {
      margin: '20px 0'
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
    color: Colors.textPrimary
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
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
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
    tabContainer,
    inputFieldRoot
  } = FindCarsStyles();
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
        <Tab
          disableTouchRipple
          classes={{ root: tabRoot, wrapper: tabWrapper }}
          icon={<img height="64px" src={SUVIcon} alt="" />}
          label="SUVs"
        />
        <Tab
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
      </Tabs>
      <CardContent className={content}>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <InputField
                classes={{ root: inputFieldRoot }}
                label="Make"
                placeholder="e.g. Honda, Toyota"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                classes={{ root: inputFieldRoot }}
                label="Model"
                placeholder="e.g Civic, Corolla"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                classes={{ root: inputFieldRoot }}
                label="Price Range (Min)"
                placeholder="0"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                classes={{ root: inputFieldRoot }}
                label="Price Range (Max)"
                placeholder="50000000"
              />
            </Grid>
            <Grid item container xs={12} justifyContent="center">
              <Grid item xs={12} md={6}>
                <CustomButton fullWidth>{FIND_YOUR_CAR}</CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FindCars;
