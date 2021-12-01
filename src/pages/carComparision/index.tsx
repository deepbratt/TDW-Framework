import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import { Colors } from '../../Utils/constants/colors/colors';
import ShortListCard from '../../components/ShortListCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ICarCard } from '../../Utils/interfaces/products.interface';
import { removeShortlistItem } from '../../redux/reducers/shortlistCarsSlice';
import CarComparisonImg from '../../assets/Cars/carsComparision.png';
import {
  Title,
  moreBtn,
  lessBtn,
  subTitle,
  array
} from '../../layout/Sections/Utils/carComparision';
import SelectNewCarCard from '../../components/SelectNewCarCard';
import BreadCrumbs from '../../components/BreadCrumbs';
import Table from '../../layout/Sections/Sections/Table/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { CHOOSE_CARS_TO_COMPARE } from '../../Utils/constants/language/en/buttonLabels';


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
  },
  stickyCell: {
    position: 'sticky',
    left: 0,
    zIndex: 999
  },
  contentRoot: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '90%',
    minHeight: '220px'
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%'
  }
}));

const CarComparision = () => {
  const { root, stickyCell, contentRoot, cardWrapper, flexCenter } =
    CarComparisionsStyles();
  const dispatch = useDispatch();
  const shortListCars = useSelector(
    (state: RootState) => state.shortlistCars.shortlistCars
  );
  const [features, setFeatures] = useState<any>([]);

  useEffect(() => {
    handleFeatures();
    // eslint-disable-next-line
  }, []);

  const handleFeatures = () => {
    let oneArray: string[] = [];
    // eslint-disable-next-line
    shortListCars.map((item: ICarCard) => {
      // eslint-disable-next-line
      item.features.map((value: string) => {
        oneArray.push(value);
      });
    });
    let uniqueArray = oneArray.filter(function (item, pos) {
      return oneArray.indexOf(item) === pos;
    });
    setFeatures(uniqueArray);
  };

  const getHeaderRow = () => {
    return (
      <TableRow>
        <TableCell classes={{ root: stickyCell }} align="left">
          <SelectNewCarCard
            isDisabled={shortListCars.length === 4 ? true : false}
          />
        </TableCell>
        {shortListCars &&
          shortListCars.map((item: ICarCard) => (
            <TableCell key={uuidv4()} align="center">
              <ShortListCard
                productImg={item.image[0]}
                name={item.model}
                _id={item._id}
                price={item.price}
                handleClick={() => dispatch(removeShortlistItem(item._id))}
              />
            </TableCell>
          ))}
      </TableRow>
    );
  };

  return (
    <Container>
      <MetaTags
        title={PageMeta.carComparision.title}
        canonical={PageMeta.carComparision.canonical}
      />

      <Grid item>
        <BreadCrumbs />
      </Grid>
      <Grid className={root} container>
        <Grid item xs={12} container justifyContent="center">
          {shortListCars.length > 0 ? (
            <Table
              items={shortListCars}
              array={array}
              Title={Title}
              subTitle={subTitle}
              moreBtn={moreBtn}
              lessBtn={lessBtn}
              collapsedArray={features}
              tileHead={getHeaderRow()}
            />
          ) : (
            <div className={contentRoot}>
              <Typography align="center" variant="h2" gutterBottom>
                {CHOOSE_CARS_TO_COMPARE}
              </Typography>
              <div className={cardWrapper}>
                <SelectNewCarCard
                  isDisabled={shortListCars.length === 4 ? true : false}
                />
              </div>
              <img width="100%" src={CarComparisonImg} alt="car-comparision" />
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarComparision;
