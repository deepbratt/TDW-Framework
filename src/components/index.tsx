import * as React from "react";
import { Grid } from "@material-ui/core";
import LayoutStyle from "./CustomTitle/style";

interface IProps {
  backColor?: string;
  children: React.ReactNode;
}

const Section = ({ children, backColor }: IProps) => {
  const { root, content } = LayoutStyle();

  return (
    <div className={root} style={{ backgroundColor: backColor }}>
      <div className={content}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </div>
    </div>
  );
};

Section.defaultProps = {
  backColor: "white",
};

export default Section;
