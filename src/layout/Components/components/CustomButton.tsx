import * as React from "react";
import { Button as MuiButton, ButtonProps , Typography} from "@material-ui/core";
import Breakpoints from "../Utils/Breakpoints";
import useStyles from "../components/CustomTitle/style"


interface IButtonProps extends ButtonProps {
  fullWidth?: boolean;
  color?: any;
  variant?: any;
  radius?: string;
  styles?: string;
  size?: "small" | "medium" | "large";
  handleClick?: () => void;
}
 
function CustomButton({
  fullWidth,
  variant,
  radius,
  styles,
  color,
  handleClick,
  size,
  children,
  ...rest
}: IButtonProps) {
  const {btn} = useStyles()
  return (
    <MuiButton
      onClick={handleClick}
      size={size ? size : Breakpoints()}
      className={styles? styles : btn }
      style={{ borderRadius: radius}}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      {...rest}
    >
      <Typography variant="h6">{children}</Typography>
    </MuiButton>
  );
}

CustomButton.defaultProps = {
  fullWidth: false,
  color: "primary",
  variant: "contained",
  radius: "4px",
  handleClick: () => console.log("buttonClicked"),
};

export default CustomButton;
