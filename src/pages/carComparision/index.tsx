import Actions from './useFunctions';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Section from '../../components/index';
import { RootState } from '../../redux/store';
import MetaTags from '../../components/MetaTags';
import { Colors } from '../../Utils/constants/colors/colors';
import Table from '../../layout/Sections/Sections/Table/Container';
import PageMeta from '../../Utils/constants/language/en/pageData';

interface RouterProps {
  _fId: string;
  _sId: string;
}

const CarComparision = () => {
  // const { _fId, _sId } = useParams<RouterProps>();
  // const { data, isLoading } = Actions(_fId, _sId);
  const { iceBlue } = Colors;

  const shortListCars = useSelector(
    (state: RootState) => state.shortlistCars.shortlistCars
  );

  console.log('shortListCars', shortListCars);

  return (
    <Grid
      container
      style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}
    >
      <MetaTags
        title={PageMeta.carComparision.title}
        description={PageMeta.carComparision.description}
        canonical={PageMeta.carComparision.canonical}
        keywords={PageMeta.carComparision.keywords}
      />
      {shortListCars.length === 0 ? (
        <h1>Loading..</h1>
      ) : (
        <Grid style={{ marginBottom: '50px' }} item xs={12}>
          <Section backColor={iceBlue}>
            <Table shortListCars={shortListCars} />
          </Section>
        </Grid>
      )}
    </Grid>
  );
};

export default CarComparision;
