import { useHistory, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import {
  ACTIVE,
  INACTIVE,
  SOLD,
} from '../../Utils/constants/language/en/buttonLabels';
import { Colors } from '../../Utils/constants/colors/colors';
import ConvertDate from '../convertDate';
import { routes } from '../../routes/paths';
import ListingCardStyles from './styles';
import LocationIcon from '../../assets/icons/location.png';
import NoImg from '../../assets/no-img.png';
import { addToFav } from '../../Utils/hooks/actions';
import { addToFavs, removeFavs } from '../../Utils/hooks/endpoints';
import { useState } from 'react';
import Toast from '../Toast';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import moment from 'moment';
export interface ListingCardProps {
  data: any;
  layoutType: string;
  span?: string;
  isFavs?: boolean;
  handleFavs?: (id: string) => void;
  handleClick?: Function;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  layoutType,
  isFavs,
  span,
  handleFavs,
  handleClick
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
  const { root, grid, featuredBadge, location, favsIcon, label, favsIconGrid } =
    ListingCardStyles();
  const { red, grey, flashWhite } = Colors;

  const {
    _id,
    model,
    make,
    modelYear,
    milage,
    engineType,
    engineCapacity,
    transmission,
    city,
    createdAt,
    updatedAt,
    price,
    image,
    isSold,
    active,
    isFav,
    createdBy
  } = data;

  const [isFavorite, setIsfavorite] = useState(isFav);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [toastOpen, setToastOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const favs = (id: string) => {
    if (handleFavs) {
      handleFavs(id);
    } else {
      setIsLoading(true);
      addToFav(isFavorite ? removeFavs : addToFavs, id).then((response) => {
        setIsLoading(false);
        console.log(response);
        if (response && response.status === 'success') {
          setToastMessage(response?.message);
          setToastType('success');
          setIsfavorite(!isFavorite);
        } else {
          setToastMessage(response?.message);
          setToastType('error');
        }
        setToastOpen(true);
      });
    }
  };

  const handleCardClick = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <>
    <Paper elevation={4} style={{ height: layoutType !== 'list' ? '100%' : "auto"}}>
      <Toast
        open={toastOpen}
        message={toastMessage}
        type={toastType}
        onClose={() => setToastOpen(false)}
      />
      <Loader open={isLoading} isBackdrop={true} />
      <Card
        className={layoutType === 'list' ? root : grid}
        style={{ cursor: 'pointer'}}
        onClick={() => handleCardClick()}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={layoutType !== 'list' ? 12 : 4}
            style={{ padding: '5px' }}
          >
            <CardMedia
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                width: '100%'
              }}
            >
              <img
                height="200px"
                width="100%"
                src={image && image.length > 0 ? image[0] : NoImg}
                alt=""
              />
              {isSold && (
                <span className={featuredBadge}>
                  <Typography variant="body2">{SOLD}</Typography>
                </span>
              )}
            </CardMedia>
          </Grid>
          <Grid item container xs={12} sm={layoutType !== 'list' ? 12 : 8}>
            <CardContent style={{ padding: '5px' }}>
              <Grid
                // item
                container
                // xs={12}
                spacing={layoutType === 'list' ? 2 : 1}
              >
                <Grid
                  item
                  xs={12}
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5">{ConvertDate(createdAt)}</Typography>
                  {isLoggedIn && user._id !== createdBy ? (
                    <IconButton
                      onClick={(e) => {
                        favs(_id ? _id : '');
                        e.stopPropagation();
                      }}
                      style={{ padding: 0 }}
                    >
                      {isFavorite || pathname.indexOf('favorites') > -1 ? (
                        <Favorite color="primary" />
                      ) : (
                        <FavoriteBorder />
                      )}
                    </IconButton>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4" style={{ cursor: 'pointer' }}>
                    {`${make} ${model}`}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="secondary" variant="h3">
                    {price && `PKR ${price?.toLocaleString()}`}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  spacing={1}
                  justifyContent="flex-start"
                >
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      {modelYear}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      &bull;&nbsp;{milage?.toLocaleString() + ' KM'}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      &bull;&nbsp;{engineType}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      &bull;&nbsp;{`${engineCapacity} cc`}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      &bull;&nbsp;{transmission}
                    </Typography>
                  </Grid>
                  {pathname.indexOf('ads') > -1 ||
                  pathname.indexOf('favorites') > -1 ? (
                    <>
                      {/* <Grid item>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                          component="span"
                        >
                          &bull;&nbsp;{isSold ? SOLD : UNSOLD}
                        </Typography>
                      </Grid> */}
                      {pathname.indexOf('ads') > -1 && (
                        <Grid item>
                          <Typography
                            color="textSecondary"
                            variant="body2"
                            component="span"
                          >
                            &bull;&nbsp;{active ? ACTIVE : INACTIVE}
                          </Typography>
                        </Grid>
                      )}
                    </>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <div className={location}>
                    <span>
                      <img src={LocationIcon} alt={city} />
                      <Typography variant="subtitle2">{city}</Typography>
                    </span>
                    <span>
                      <Typography variant="subtitle2">
                        {moment(updatedAt).fromNow()}
                      </Typography>
                    </span>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Paper>
   </>
  );
};

export default ListingCard;
