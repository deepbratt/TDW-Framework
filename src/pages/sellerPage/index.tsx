import React from 'react'
// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AboutSection from './AboutSection';

// Styles
import SellerPageStyles from './styles';
import GlobalStyles from '../../globalStyles';

// UTILS
import {v4 as uuidv4} from "uuid";
import {HOME, ABOUT} from "../../Utils/constants/language/en/buttonLabels";
import CarsListing from '../carsListing';

// Tabs PROPS
function tabsProps(index: number) {
  return {
    id: `seller-page-sections-tab-${index}`,
    'aria-controls': `seller-page-sections-tabpanel-${index}`
  };
}


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// TabPanel
const TabPanel = (props: TabPanelProps) => {
const { children, value, index, ...other } = props;

return (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`seller-page-sections-tabpanel-${index}`}
    aria-labelledby={`seller-page-sections-tab-${index}`}
    {...other}
  >
    {value === index && <>{children}</>}
  </div>
);
}

const SellerPage: React.FC = () =>  {

    const {container} = GlobalStyles();
    const {  } = SellerPageStyles();

    const [tabValue, setTabValue] = React.useState(0);

    // to change the current selected tab
    const handleTabValueChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue);
    };
  
    
    return (
      <Container className={container}>
        <Grid container>
          <Grid style={{ border: '1px solid black' }} item xs={12}>
            <Typography align="center" variant="h1">
              Banner Here
            </Typography>
          </Grid>

          <Grid item container xs={12}>
            <Tabs
              value={tabValue}
              onChange={handleTabValueChange}
              indicatorColor="primary"
              orientation="horizontal"
              textColor="primary"
              variant="standard"
              aria-label="seller page sections tab"
            >
              {[HOME, ABOUT].map((tabLabel: string, index: number) => (
                <Tab key={uuidv4()} label={tabLabel} {...tabsProps(index)} />
              ))}
            </Tabs>
          </Grid>
          <TabPanel value={tabValue} index={0}>
            <CarsListing />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <AboutSection />
          </TabPanel>
        </Grid>
      </Container>
    );
}

export default SellerPage;
