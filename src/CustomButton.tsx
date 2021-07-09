import React from "react";
import { Button, Typography } from "@material-ui/core";
import Breakpoints from "./Utils/Breakpoints"

type IProp = {
  fullWidth?: boolean;
  color?: string;
  variant?: string;
  radius?: string;
  styles?: string;
  size?: "small" | "medium" | "large";
  handleClick?: () => void;
};

const CustomButton: React.FC<IProp> = (
  { variant, radius, color, styles, handleClick, fullWidth, children, size },
  props
) => {
  return (
    <Button
      variant={variant}
      style={{ borderRadius: radius }}
      className={styles}
      size={size ? size : Breakpoints()}
      onClick={handleClick}
      fullWidth={fullWidth}
      color={color}
      {...props}
    >
      <Typography variant="button">{children}</Typography>
    </Button>
  );
};

CustomButton.defaultProps = {
  fullWidth: false,
  color: "primary",
  variant: "contained",
  radius: "4px",
  handleClick: () => console.log("buttonClicked"),
};

export default CustomButton;
