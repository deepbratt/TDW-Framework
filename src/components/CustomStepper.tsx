import Step from '@material-ui/core/Step';
import StepIcon from '@material-ui/core/StepIcon';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Sizes from '../Utils/themeConstants';
import CustomStepperIcon from './CustomStepperIcon';

interface CustomStepperProps {
  activeStep: number;
  dataArray: Array<any>;
  handleStepChange: any;
}
const CustomStepper = ({
  activeStep,
  dataArray,
  handleStepChange
}: CustomStepperProps) => {
  const size = Sizes();
  return (
    <Stepper
      activeStep={activeStep}
      style={{ padding: '10px' }}
      orientation={size.mobileLarge || size.mobile ? 'vertical' : 'horizontal'}
    >
      {dataArray.map((label, index) => (
        <Step
          key={label}
          style={{ width: '100%', padding: 0, cursor: 'pointer' }}
          onClick={() => handleStepChange(index)}
        >
          {size.mobileLarge || size.mobile ? (
            <StepLabel>{label}</StepLabel>
          ) : (
            <StepIcon
              icon={
                <CustomStepperIcon
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
  );
};

export default CustomStepper;
