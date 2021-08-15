import {
  Button,
  Grid,
  Step,
  StepIcon,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import Sizes from "../../Utils/themeConstants";
import CustomStepper from "./CustomStepperIcon";
import useAddEditCar from "./useAddEditCar";
import addEditCarData from "../../Utils/constants/language/en/addEditCarData";

const AddEditCar = () => {
  const {
    activeStep,
    handleBack,
    handleNext,
    ComponentContent,
    id,
    handleDeleteAd,
    formRef,
  } = useAddEditCar();
  const size = Sizes();
  return (
    <Grid container spacing={3} style={{ minHeight: "90vh" }}>
      <Grid item xs={12}>
        Banner
      </Grid>
      <Grid item xs={12} style={{ padding: "60px" }}>
        <Stepper
          activeStep={activeStep}
          style={{ marginTop: "50px" }}
          orientation={
            size.mobileLarge || size.mobile ? "vertical" : "horizontal"
          }
        >
          {addEditCarData.steps.map((label, index) => (
            <Step key={label} style={{ width: "100%" }}>
              {size.mobileLarge || size.mobile ? (
                <StepLabel>{label}</StepLabel>
              ) : (
                <StepIcon
                  icon={
                    <CustomStepper
                      label={label}
                      index={index}
                      activeIndex={activeStep}
                    />
                  }
                ></StepIcon>
              )}
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid
        container
        item
        xs={12}
        spacing={3}
        style={{ padding: size.desktop || size.tablet ? "50px" : 0 }}
        ref={formRef}
      >
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h2">
            {addEditCarData.steps[activeStep]}
          </Typography>
          {id ? (
            <Button
              color="primary"
              variant="outlined"
              style={{ marginRight: "16px" }}
              onClick={handleDeleteAd}
            >
              {addEditCarData.buttons.delete}
            </Button>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          {ComponentContent[activeStep]}
        </Grid>
        <Grid
          container
          item
          xs={12}
          style={{ display: "flex", marginTop: "20px" }}
          justifyContent="center"
        >
          <Button
            color="secondary"
            variant="outlined"
            disabled={activeStep === 0}
            style={Object.assign(
              { marginRight: "16px" },
              activeStep === 0 ? { display: "none" } : {}
            )}
            onClick={handleBack}
          >
            {addEditCarData.buttons.back}
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === addEditCarData.steps.length - 1
              ? addEditCarData.buttons.post
              : addEditCarData.buttons.next}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddEditCar;
