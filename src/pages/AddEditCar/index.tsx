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
  const { activeStep, handleBack, handleNext, ComponentContent } =
    useAddEditCar();
  const size = Sizes();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        Banner
      </Grid>
      <Grid item xs={12}>
        <Stepper
          activeStep={activeStep}
          style={{ padding: "0" }}
          orientation={
            size.mobileLarge || size.mobile ? "vertical" : "horizontal"
          }
        >
          {addEditCarData.steps.map((label, index) => (
            <Step key={label} style={{ padding: "0" }}>
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
      >
        <Grid item xs={12}>
          <Typography variant="h2">
            {addEditCarData.steps[activeStep]}
          </Typography>
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
          {activeStep === addEditCarData.steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              {addEditCarData.buttons.post}
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              {addEditCarData.buttons.next}
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddEditCar;
