import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import {

} from '../../Utils/constants/language/en/buttonLabels';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import BreadCrumbs from '../../components/BreadCrumbs';

import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';

let DummyData = [
    {
        id: uuidv4(),
        name: 'Carrera German Engineered Polish &Wax',
        price: '$100',
        image: 'https://source.unsplash.com/random/300x300',
        salePrice: '$50',
        rating: 4,
        quantity: 1,
        stock: 10,
    },
    {
        id: uuidv4(),
        name: 'Carrera German Engineered Polish &Wax',
        price: '$100',
        image: 'https://source.unsplash.com/random/300x300',
        salePrice: '$50',
        rating: 4,
        quantity: 1,
        stock: 10,
    }
]

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
  contentRoot: {
    backgroundColor: theme.palette.common.white,
    border: `0.2px solid ${Colors.lightGrey}`,
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px'
    }
  },
  tabIndicator: {
    height: 0,
    display: 'none'
  },
  tabRoot: {
    margin: '0',
    backgroundColor: theme.palette.common.white,
    borderRadius: '5px',
    border: `0.2px solid ${Colors.lightGrey}`
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
  }
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    const { tabRoot } = ListingLayoutStyles();
  
    return (
      <div
        role="tabpanel"
        className={tabRoot}
        hidden={value !== index}
        id={`categories-tabpanel-${index}`}
        aria-labelledby={`categories-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: any) {
    return {
      id: `categories-tab-${index}`,
      'aria-controls': `categories-tabpanel-${index}`
    };
  }

const FindParts: React.FC = () => {
  const {
    root,
    tabIndicator,
    tabRoot,
    tabWrapper,
    tabWrapperSelected,
    tabContainer
  } = ListingLayoutStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container className={root}>
      <MetaTags
        title={PageMeta.carListing.title}
        canonical={PageMeta.carListing.canonical}
      />
      <BreadCrumbs />
      <Grid container>
        <Tabs
          classes={{
            scroller: tabRoot,
            indicator: tabIndicator,
            flexContainer: tabContainer
          }}
        //   TabScrollButtonProps={{
        //     disabled: false,
        //     classes: {
        //       root: scrollButton
        //     }
        //   }}
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="categories tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Grid>
    </Container>
  );
};

export default FindParts;