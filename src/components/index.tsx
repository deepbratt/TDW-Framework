import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import LayoutStyle from './CustomTitle/style';

interface IProps {
  backColor?: string;
  children: React.ReactNode;
}

const Section = ({ children, backColor }: IProps) => {
  const { root } = LayoutStyle();

  return (
    <Container className={root} style={{ backgroundColor: backColor }}>
      <Grid container>{children}</Grid>
    </Container>
  );
};

Section.defaultProps = {
  backColor: 'white'
};

export default Section;
