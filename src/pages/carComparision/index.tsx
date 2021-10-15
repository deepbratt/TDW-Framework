import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import { Colors } from '../../Utils/constants/colors/colors';
import ShortListCard from '../../components/ShortListCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ICarCard } from '../../Utils/interfaces/products.interface';
import { removeShortlistItem } from '../../redux/reducers/shortlistCarsSlice';
import {
  Title,
  moreBtn,
  lessBtn,
  subTitle,
  array
} from '../../layout/Sections/Utils/carComparision';
import SelectNewCarCard from '../../components/SelectNewCarCard';
import Table from '../../layout/Sections/Sections/Table/Table';

const CarComparisionsStyles = makeStyles((theme) => ({
  root: {
    padding: '40px 80px',
    backgroundColor: Colors.white,
    border: `0.5px solid ${Colors.lightGrey}`,
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      padding: '30px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px'
    }
  },
  card: {
    display: 'flex',
    height: '90%',
    [theme.breakpoints.down('sm')]: {
      padding: '5px'
    }
  }
}));

const CarComparision = () => {
  const { root, card } = CarComparisionsStyles();
  const dispatch = useDispatch();
  const shortListCars = useSelector(
    (state: RootState) => state.shortlistCars.shortlistCars
  );

  const [features, setFeatures] = useState<any>([]);

  useEffect(() => {
    handleFeatures();
  }, []);

  const handleFeatures = () => {
    let oneArray: string[] = [];
    shortListCars.map((item: ICarCard) => {
      item.features.map((value: string) => {
        oneArray.push(value);
      });
    });
    let uniqueArray = oneArray.filter(function (item, pos) {
      return oneArray.indexOf(item) === pos;
    });
    setFeatures(uniqueArray);
  };

  return (
    <Container>
      <MetaTags
        title={PageMeta.carComparision.title}
        description={PageMeta.carComparision.description}
        canonical={PageMeta.carComparision.canonical}
        keywords={PageMeta.carComparision.keywords}
      />

      <Grid className={root} container>
        <Grid item xs={12} container justifyContent="space-between">
          {shortListCars &&
            shortListCars.map((item: ICarCard) => (
              <Grid key={uuidv4()} item xs={3} md={2}>
                <div className={card}>
                  <ShortListCard
                    productImg={item.image[0]}
                    name={item.model}
                    _id={item._id}
                    price={item.price}
                    handleClick={() => dispatch(removeShortlistItem(item._id))}
                  />
                </div>
              </Grid>
            ))}
          {[...Array(4 - shortListCars.length)].map(() => (
            <Grid key={uuidv4()} item xs={3}>
              <div className={card}>
                <SelectNewCarCard />
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Table
            items={shortListCars}
            array={array}
            Title={Title}
            subTitle={subTitle}
            moreBtn={moreBtn}
            lessBtn={lessBtn}
            collapsedArray={features}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarComparision;
