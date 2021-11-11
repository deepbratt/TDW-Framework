import { useLocation } from 'react-router-dom';
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
  SOLD
} from '../../Utils/constants/language/en/buttonLabels';
import ConvertDate from '../convertDate';
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
import ConditionalLink from '../ConditionalLink';
import { routes } from '../../routes/paths';
import Sizes from '../../Utils/themeConstants';
import LoginModal from '../../pages/login/LoginModal';
import { Box } from '@material-ui/core';
import Compare from '@material-ui/icons/Compare';
import useImageOrientation from '../../Utils/hooks/useImageOrientation';
export interface ListingCardProps {
  data: any;
  layoutType: string;
  span?: string;
  isFavs?: boolean;
  handleFavs?: (id: string) => void;
  handleClick?: Function;
  handleShortList?: Function;
  removeShortListed?: Function;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  layoutType,
  handleFavs,
  handleClick,
  handleShortList,
  removeShortListed
}) => {
  const { pathname } = useLocation();
  const { mobile } = Sizes();
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
  const {setImageOrientationAndSize, imgHeight, imgWidth} = useImageOrientation()
  const { shortlistCars } = useSelector(
    (state: RootState) => state.shortlistCars
  );
  const { root, grid, featuredBadge, location, favsIconGrid, favsIconList, cardMedia, blurBgImg} =
    ListingCardStyles();
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
  const [signinModal, setSigninModal] = useState(false);

  const favs = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      setSigninModal(true);
      return;
    }
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

  // const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   e.stopPropagation();
  //   if (handleClick) {
  //     handleClick();
  //   }
  // };

  const toggleShortListCar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (shortlistCars.filter((item) => item._id === _id).length > 0) {
      removeShortListed && removeShortListed();
    } else {
      handleShortList && handleShortList();
    }
  };

  return (
    <>
      <Paper
        elevation={4}
        style={{
          height: layoutType !== 'list' ? '100%' : 'auto',
          position: 'relative'
        }}
      >
        <Toast
          open={toastOpen}
          message={toastMessage}
          type={toastType}
          onClose={(e: any) => {
            // e.stopPropagation();
            setToastOpen(false);
          }}
        />
        <Loader open={isLoading} isBackdrop={true} />
        <Box
          className={
            layoutType === 'grid' || mobile ? favsIconGrid : favsIconList
          }
        >
          <IconButton onClick={(e) => toggleShortListCar(e)}>
            <Compare
              color={
                shortlistCars.filter((e) => e._id === _id).length > 0
                  ? 'primary'
                  : 'inherit'
              }
            />
          </IconButton>
          {user._id !== createdBy ? (
            <IconButton
              onClick={(e) => {
                favs(_id ? _id : '', e);
              }}
            >
              {isFavorite || pathname.indexOf('favorites') > -1 ? (
                <Favorite color="primary" />
              ) : (
                <FavoriteBorder />
              )}
            </IconButton>
          ) : null}
        </Box>
        <ConditionalLink
          to={
            routes.carDetail.substr(0, routes.carDetail.lastIndexOf('/') + 1) +
            _id
          }
          target="_blank"
          condition={true}
        >
          <Card
            className={layoutType === 'list' ? root : grid}
            style={{ cursor: 'pointer' }}
            // onClick={(e) => handleCardClick(e)}
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
                    height: layoutType === 'list' ? '170px' : '235px'
                  }}
                  className={cardMedia}
                >
                  <div
                    style={{
                      backgroundImage: `url(${
                        image && image.length > 0 ? image[0] : NoImg
                      })`
                    }}
                    className={blurBgImg}
                  ></div>
                  <img
                    src={image && image.length > 0 ? image[0] : NoImg}
                    style={{ zIndex: 999 }}
                    alt=""
                    width={imgWidth}
                    height={imgHeight}
                    onLoad={()=>setImageOrientationAndSize(image && image.length > 0 ? image[0] : NoImg)}
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
                      <Typography variant="h5" style={{ paddingTop: '5px' }}>
                        {ConvertDate(createdAt)}
                      </Typography>
                      {/* {isLoggedIn && user._id !== createdBy ? (
                    <IconButton
                      onClick={(e) => {
                        favs(_id ? _id : '', e);
                      }}
                      style={{ padding: 0}}
                    >
                      {isFavorite || pathname.indexOf('favorites') > -1 ? (
                        <Favorite color="primary" />
                      ) : (
                        <FavoriteBorder />
                      )}
                    </IconButton>
                  ) : null} */}
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
        </ConditionalLink>
        <LoginModal
          openModal={signinModal}
          closeModal={() => setSigninModal(false)}
        />
      </Paper>
    </>
  );
};

export default ListingCard;
