import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Step from '@material-ui/core/Step';
import Divider from '@material-ui/core/Divider';
import Stepper from '@material-ui/core/Stepper';
import Skeletons from '../../components/Skeletons';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import ListingCardSkeletons from '../../components/ListingCard/ListingCardSkeletons';
import {
  CANT_FIND_RESULT,
  PRICE_DETAILS,
  DISCOUNT,
  DELIVERY_CHARGES,
  TOTAL_AMOUNT,
  CONTINUE_SHOPPING,
  PLACE_ORDER,
  CART,
  ORDER_SUMMARY,
  DELIVERY_ADDRESS,
  PAYMENT_OPTION,
  BACK,
  CHECKOUT,
  CONTINUE
} from '../../Utils/constants/language/en/buttonLabels';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import BreadCrumbs from '../../components/BreadCrumbs';
import { useForm } from './useForm';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../Utils/constants/colors/colors';
import { RootState } from '../../redux/store';
import CustomButton from '../../components/CustomButton';
import OrderSummary from '../../sections/OrderSummary';
import DeliveryAddress from '../../sections/DeliveryAddress';

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
  listingContainer: {
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0px'
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
  contentHeader: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  priceDetail: {
    backgroundColor: theme.palette.common.white,
    padding: '25px 20px',
    borderRadius: '5px',
    border: `0.5px solid ${Colors.lightGrey}`
  },
  filtersContent: {
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px'
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
    backgroundColor: theme.palette.common.white
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
  scrollButton: {
    backgroundColor: Colors.lightGrey,
    opacity: 1,
    margin: '0 5px'
  },
  greenText: {
    color: Colors.green
  },
  dashedBorder: {
    marginBottom: '15px',
    padding: '15px 0',
    borderTop: `1px dashed ${Colors.lightGrey}`,
    borderBottom: `1px dashed ${Colors.lightGrey}`
  },
  priceItem: {
    margin: '15px 0'
  },
  continueShop: {
    backgroundColor: theme.palette.common.white,
    border: `0.2px solid ${Colors.lightGrey}`,
    padding: '20px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 5px'
    }
  },
  navBtn: {
    margin: '0 10px'
  }
}));

function getSteps() {
  return [ORDER_SUMMARY, DELIVERY_ADDRESS, PAYMENT_OPTION];
}

const CartPage: React.FC = () => {
  const {
    root,
    listingContainer,
    contentRoot,
    priceDetail,
    greenText,
    dashedBorder,
    priceItem,
    continueShop,
    contentHeader,
    navBtn
  } = ListingLayoutStyles();

  const {
    values,
    errors,
    activeStep,
    handleNext,
    handleBack,
    handleReset,
    setActiveStep,
    handleInputChange,
    handlePhoneInputChange,
    handleSubmit
  } = useForm(true);

  const steps = getSteps();

  const deliveryAddressFormProps = {
    values,
    errors,
    handleInputChange,
    handlePhoneInputChange,
    handleSubmit
  };

  const { layoutType } = useSelector((state: RootState) => state.layout);

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
        <Grid item container xs={12} md={9} xl={9} justifyContent="center">
          <Grid
            className={`${contentHeader} ${contentRoot}`}
            item
            xs={12}
            spacing={1}
          >
            <Stepper activeStep={activeStep} alternativeLabel color="secondary">
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid
            item
            container
            xs={12}
            spacing={1}
            justifyContent="flex-start"
            className={contentRoot}
          >
            {activeStep === 0 ? (
              <OrderSummary />
            ) : activeStep === 1 ? (
              <DeliveryAddress {...deliveryAddressFormProps} />
            ) : (
              <OrderSummary />
            )}
          </Grid>
          <Grid
            className={continueShop}
            item
            xs={12}
            container
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} container justifyContent="flex-end">
              <CustomButton
                className={navBtn}
                variant="text"
                color="secondary"
                onClick={handleBack}
              >
                {BACK}
              </CustomButton>
              <CustomButton
                className={navBtn}
                color="secondary"
                onClick={(handleNext)}
              >
                {activeStep === 0
                  ? CONTINUE
                  : activeStep === 1
                  ? CHECKOUT
                  : PLACE_ORDER}
              </CustomButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ height: '100%' }} xs={12} md={3} xl={3} item container>
          <Grid item xs={12} className={priceDetail}>
            <Typography variant="h2">{PRICE_DETAILS}</Typography>
            <Divider />
            <Grid
              className={priceItem}
              item
              container
              justifyContent="space-between"
              xs={12}
            >
              <Typography variant="body1" component="span">
                {DISCOUNT}
              </Typography>
              <Typography
                variant="body1"
                className={greenText}
                component="span"
              >
                1980
              </Typography>
            </Grid>
            <Grid
              className={priceItem}
              item
              container
              justifyContent="space-between"
              xs={12}
            >
              <Typography variant="body1" component="span">
                {DELIVERY_CHARGES}
              </Typography>
              <Typography
                variant="body1"
                className={greenText}
                component="span"
              >
                FREE
              </Typography>
            </Grid>
            <Grid
              className={dashedBorder}
              item
              container
              justifyContent="space-between"
              xs={12}
            >
              <Typography variant="h3" component="span">
                {TOTAL_AMOUNT}
              </Typography>
              <Typography variant="h3" className={greenText} component="span">
                PKR 1780
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;