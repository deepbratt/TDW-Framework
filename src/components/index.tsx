// import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
