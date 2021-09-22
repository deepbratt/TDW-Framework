import { Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MetaTags from '../../components/MetaTags';
import Table from '../../layout/Sections/Sections/Table/Container';
import PageMeta from '../../Utils/constants/language/en/pageData';
import Loader from '../../components/Loader';

const CarComparision = () => {

  const shortListCars = useSelector(
    (state: RootState) => state.shortlistCars.shortlistCars
  );

  return (
    <Container style={{ backgroundColor:"white" }}>
      <MetaTags
        title={PageMeta.carComparision.title}
        description={PageMeta.carComparision.description}
        canonical={PageMeta.carComparision.canonical}
        keywords={PageMeta.carComparision.keywords}
      />
      {shortListCars.length === 0 ? (
        <Loader open={true} />
      ) : (
        <Grid item xs={12}>
          <Table shortListCars={shortListCars} />
        </Grid>
      )}
    </Container>
  );
};

export default CarComparision;
