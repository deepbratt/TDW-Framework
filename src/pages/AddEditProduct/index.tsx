import React from 'react';
import { useForm } from './useForm';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import StepContent from '@material-ui/core/StepContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import Divider from '@material-ui/core/Divider';
import CustomButton from '../../components/CustomButton';
import ProductInformation from '../../sections/ProductInformation';
import ProductFeatures from '../../sections/ProductFeatures';
import UploadProductPhotos from '../../sections/UploadProductPhotos';
import Sizes from '../../Utils/themeConstants';
import { Colors } from '../../Utils/constants/colors/colors';
import {
  ENTER_YOUR_PRODUCT_INFO,
  UPLOAD_PHOTOS,
  ENTER_ADDITIONAL_INFO,
  BACK,
  CONTINUE,
  POST_YOUR_AD
} from '../../Utils/constants/language/en/buttonLabels';


const AddEditProductStyles = makeStyles((theme) => ({
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
    borderRadius: '5px',
    border: `0.2px solid ${Colors.lightGrey}`,
    padding: '20px',
  },
  formRoot: {
    borderTop: `0.2px solid ${Colors.lightGrey}`,
    borderBottom: `0.2px solid ${Colors.lightGrey}`
  },
  navBtn: {
    margin: '0 10px'
  }
}));

function getSteps() {
  return [ENTER_YOUR_PRODUCT_INFO, UPLOAD_PHOTOS, ENTER_ADDITIONAL_INFO];
}

const AddEditProduct:React.FC = () => {
  const { root, contentRoot, formRoot, navBtn } = AddEditProductStyles();
  const {
    values,
    images,
    removeImage,
    activeStep,
    handleNext,
    handleBack,
    handleReset,
    setActiveStep,
    handleInputChange,
    handleImageCapture,
    handlePhoneInputChange,
    handleSubmit
  } = useForm(true);
  
  const steps = getSteps();
  const size = Sizes();
  return (
    <Container className={root}>
      <Grid
        container
        className={contentRoot}
        justifyContent="center"
        spacing={1}
      >
        <Grid item xs={12}>
          <Stepper
            activeStep={activeStep}
            alternativeLabel={size.mobileLarge || size.mobile ? false : true}
            color="secondary"
            orientation={
              size.mobileLarge || size.mobile ? 'vertical' : 'horizontal'
            }
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            {activeStep === 0 ? (
              <ProductInformation
                values={values}
                handleInputChange={handleInputChange}
              />
            ) : activeStep === 1 ? (
              <UploadProductPhotos
                images={images}
                removeImage={removeImage}
                handleImageCapture={handleImageCapture}
              />
            ) : (
              <ProductFeatures
                values={values}
                handleInputChange={handleInputChange}
              />
            )}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          container
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item xs={12} container justifyContent="flex-end">
            <CustomButton
              className={navBtn}
              disabled={activeStep === 0}
              variant="text"
              color="secondary"
              onClick={handleBack}
            >
              {BACK}
            </CustomButton>
            <CustomButton
              className={navBtn}
              color="secondary"
              onClick={handleSubmit}
            >
              {activeStep === 0
                ? CONTINUE
                : activeStep === 1
                ? CONTINUE
                : POST_YOUR_AD}
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddEditProduct;