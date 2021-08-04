import * as React from "react";
import { Typography, TypographyProps} from "@material-ui/core";
import LayoutStyle from "./style";
import Size from "./Size";

interface IProps extends TypographyProps {
  underlined?: boolean | null;
  color?: any;
  subTitleColor?: any;
  text?: string;
  subTitle?: string;
}

const CustomTitle = ({
  color,
  text,
  subTitleColor,
  subTitle,
  underlined,
  ...rest
}: IProps) => {
  const { underlinedStyles, sectionHeader, subHeader } = LayoutStyle();
  const borderBottom = underlined;
  return (
    <div className={sectionHeader}>
      <Typography
        color="primary"
        style={{ color: color, fontSize: Size(), lineHeight: 1.8 }}
        variant="h2"
        {...rest}
      >
        <span className={borderBottom ? underlinedStyles : ""}>{text}</span>
      </Typography>
      {subTitle && (
        <Typography
          className={subHeader}
          {...rest}
          color="primary"
          variant="subtitle1"
          style={{ color: subTitleColor }}
        >
          {subTitle}
        </Typography>
      )}
    </div>
  );
};

CustomTitle.defaultProps = {
  text: "",
};

export default CustomTitle;
