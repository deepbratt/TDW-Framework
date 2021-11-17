import BreadCrumbs from '../../components/BreadCrumbs';
import Grid from '@material-ui/core/Grid';
import Section from '../../components';
import RoutesWrapper from '../../layout/Sections/Sections/Profile/Routes/Wrapper';

const Dashboard = () => {
 
  return (
    <>
      <Section backColor="transparent">
        <Grid item xs={12}>
          <BreadCrumbs />
        </Grid>
        <RoutesWrapper />
      </Section>
    </>
  );
};

export default Dashboard;
