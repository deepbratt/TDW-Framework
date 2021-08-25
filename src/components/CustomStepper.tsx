import { Step, StepIcon, StepLabel, Stepper } from "@material-ui/core"
import Sizes from "../Utils/themeConstants"
import CustomStepperIcon from "./CustomStepperIcon"

interface CustomStepperProps {
    activeStep : number
    dataArray : Array<any>
}
const CustomStepper =({activeStep, dataArray}: CustomStepperProps)=> {
    const size = Sizes()
    return(
        <Stepper
          activeStep={activeStep}
          style={{padding:0}}
          orientation={
            size.mobileLarge || size.mobile ? "vertical" : "horizontal"
          }
        >
          {dataArray.map((label, index) => (
            <Step key={label} style={{ width: "100%", padding:0 }}>
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
    )
}

export default CustomStepper