import { Container, Grid } from '@material-ui/core';
import Help from '../../layout/Sections/Sections/Profile/Help/Help';
import BreadCrumbs from '../../components/BreadCrumbs';

const HelpPage: React.FC = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <BreadCrumbs />
        </Grid>
        <Grid item xs={12}>
          <Help />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HelpPage;
