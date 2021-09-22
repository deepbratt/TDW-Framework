import { Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MetaTags from '../../components/MetaTags';
import Table from '../../layout/Sections/Sections/Table/Container';
import PageMeta from '../../Utils/constants/language/en/pageData';
import Loader from '../../components/Loader';
import { Colors } from '../../Utils/constants/colors/colors';
const CarComparision = () => {
  const shortListCars = useSelector(
    (state: RootState) => state.shortlistCars.shortlistCars
  );

  return (
    <Container>
      <MetaTags
        title={PageMeta.carComparision.title}
        description={PageMeta.carComparision.description}
        canonical={PageMeta.carComparision.canonical}
        keywords={PageMeta.carComparision.keywords}
      />
      {shortListCars.length === 0 ? (
        <Loader open={true} />
      ) : (
        <Grid
          style={{
            backgroundColor: Colors.white,
            border: `0.5px solid ${Colors.lightGrey}`,
            borderRadius: '5px',            
          }}
          item
          xs={12}
        >
          <Table shortListCars={shortListCars} />
        </Grid>
      )}
    </Container>
  );
};

export default CarComparision;
