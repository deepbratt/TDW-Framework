import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import {
  ACTIVE,
  INACTIVE,
  SOLD,
  UPDATED,
  MARK_AS_SOLD,
  MARK_AS_UNSOLD,
  EDIT,
  DEACTIVATE,
  ACTIVATE,
  PUBLISH,
  DELETE,
  NOT_PUBLISHED,
  NOT_ACTIVE
} from '../../Utils/constants/language/en/buttonLabels';
import ConvertDate from '../convertDate';
import ListingCardStyles from './styles';
import LocationIcon from '../../assets/icons/location.png';
import NoImg from '../../assets/no-img.png';
import { addToFav } from '../../Utils/hooks/actions';
import { addToFavs, removeFavs } from '../../Utils/hooks/endpoints';
import Toast from '../Toast';
import Loader from '../Loader';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import moment from 'moment';
import ConditionalLink from '../ConditionalLink';
import { paths, routes } from '../../routes/paths';
import Sizes from '../../Utils/themeConstants';
import LoginModal from '../../pages/login/LoginModal';
import { Box } from '@material-ui/core';
import Compare from '@material-ui/icons/Compare';
import useImageOrientation from '../../Utils/hooks/useImageOrientation';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import LOGO from '../../layout/Sections/assets/Whitelogo.png';
import { API_ENDPOINTS } from '../../Utils/API/endpoints';
import { deleteData, updateData } from '../../Utils/API/API';
import { ICarCard } from '../../Utils/interfaces/products.interface';

export interface ListingCardProps {
  data: ICarCard;
  layoutType: string;
  span?: string;
  isFavs?: boolean;
  handleFavs?: (id: string) => void;
  handleClick?: Function;
  handleShortList?: Function;
  removeShortListed?: Function;
  getMyCars?: Function;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  layoutType,
  handleFavs,
  handleClick,
  handleShortList,
  removeShortListed,
  getMyCars
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { mobile } = Sizes();
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);

  const { setImageOrientationAndSize, imgHeight, imgWidth } =
    useImageOrientation();
  const { shortlistCars } = useSelector(
    (state: RootState) => state.shortlistCars
  );
  const {
    root,
    grid,
    featuredBadgeContainer,
    featuredBadge,
    adTypeBadge,
    location,
    favsIconGrid,
    favsIconList,
    cardMedia,
    blurBgImg,
    imgWaterMark,
    featuredImgStyle,
    overlay
  } = ListingCardStyles();

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
    selectedImage,
    active,
    isFav,
    createdBy,
    slug,
  } = data;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSold, setIsSold] = useState(data.isSold);
  const [isActive, setIsActive] = useState(data.active);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isFavorite, setIsfavorite] = useState(isFav);
  const [toastType, setToastType] = useState('success');
  const [toastOpen, setToastOpen] = useState(false);
  const [signinModal, setSigninModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleUpdate = () => {
    if (getMyCars) {
      getMyCars();
    }
  };

  const actionsMenu = (
    <Menu
      id={`${uuidv4()}-actions-menu`}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={() => history.push(paths.addEditCar + `${data._id}`)}>
        {EDIT}
      </MenuItem>
      <MenuItem onClick={() => deleteAd()}>{DELETE}</MenuItem>
      {data.isPublished === false ? (
        <MenuItem onClick={() => publishAd()}>{PUBLISH}</MenuItem>
      ) : null}
      {data.isPublished && isActive && (
        <MenuItem onClick={() => toggleSold()}>
          {isSold ? MARK_AS_UNSOLD : MARK_AS_SOLD}
        </MenuItem>
      )}
      {data.isPublished && !isSold && (
        <MenuItem onClick={() => toggleActive()}>
          {isActive ? DEACTIVATE : ACTIVATE}
        </MenuItem>
      )}      
    </Menu>
  );

  const toggleSold = (soldHere: boolean = false) => {
    let soldUnsold = isSold
      ? API_ENDPOINTS.MARK_UNSOLD
      : API_ENDPOINTS.MARK_SOLD;
    if (!isSold && soldHere) {
      // api to add the car amount in sold on tezdealz collection
    }
    if (openDialog) {
      setOpenDialog(false);
    }
    let requestBody = { soldByUs: soldHere };
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${soldUnsold}/${data._id}`,
      !isSold ? requestBody : undefined
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setIsSold(!isSold);
        setToastMessage(response.data.message);
        setToastType('success');
        handleToggleUpdate();
      } else {
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };

  const deleteAd = () => {
    setIsLoading(true);
    deleteData(`${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}/${data._id}`).then(
      (response: any) => {
        if (response && response.data && response.data.status === 'success') {
          setToastMessage(response.data.message);
          setToastType('success');
          handleToggleUpdate();
        } else {
          setToastMessage(response.message);
          setToastType('error');
        }
        setOpenToast(true);
        setIsLoading(false);
      }
    );
  };

  const publishAd = () => {
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.PUBLISH_AD}${data._id}`
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setToastMessage(response.data.message);
        setToastType('success');
        handleToggleUpdate();
      } else {
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };

  const toggleActive = () => {
    let activeInactive = isActive
      ? API_ENDPOINTS.MARK_INACTIVE
      : API_ENDPOINTS.MARK_ACTIVE;
    setIsLoading(true);
    updateData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${activeInactive}/${data._id}`
    ).then((response: any) => {
      if (response && response.data && response.data.status === 'success') {
        setIsActive(!isActive);
        setToastMessage(response.data.message);
        setToastType('success');
        handleToggleUpdate();
      } else {
        setToastMessage(response.message);
        setToastType('error');
      }
      setOpenToast(true);
      setIsLoading(false);
    });
  };

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

          {user._id === createdBy && (
            <IconButton style={{ marginLeft: '5px' }} onClick={handleClickOpen}>
              <MoreVertRoundedIcon color="inherit" />
            </IconButton>
          )}
          {actionsMenu}
        </Box>
        <ConditionalLink
          to={
            routes.carDetail.substr(0, routes.carDetail.lastIndexOf('/') + 1) +
            `${slug !== undefined ? slug : _id}`
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
                        selectedImage && selectedImage.location
                          ? selectedImage.location
                          : image && image.length > 0 && image[0].location
                          ? image[0].location
                          : NoImg
                      })`
                    }}
                    className={blurBgImg}
                  ></div>
                  <img
                    src={
                      selectedImage && selectedImage.location
                        ? selectedImage.location
                        : image && image.length > 0 && image[0].location
                        ? image[0].location
                        : NoImg
                    }
                    className={featuredImgStyle}
                    alt=""
                    width={imgWidth}
                    height={imgHeight}
                    onLoad={() =>
                      setImageOrientationAndSize(
                        selectedImage && selectedImage.location
                          ? selectedImage.location
                          : image && image.length > 0 && image[0].location
                          ? image[0].location
                          : NoImg
                      )
                    }
                  />
                  <img
                    src={LOGO}
                    className={imgWaterMark}
                    alt="carokta watermark"
                  />
                  <div className={overlay} />
                  <div className={featuredBadgeContainer}>
                    <>
                      {data.isSold && (
                        <span className={featuredBadge}>
                          <Typography variant="body2">{SOLD}</Typography>
                        </span>
                      )}
                      {data.isPublished === false && (
                        <span className={featuredBadge}>
                          <Typography variant="body2">
                            {NOT_PUBLISHED}
                          </Typography>
                        </span>
                      )}
                      {!data.active && (
                        <span className={featuredBadge}>
                          <Typography variant="body2">{NOT_ACTIVE}</Typography>
                        </span>
                      )}
                    </>
                  </div>
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
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Typography variant="h5" style={{ paddingTop: '5px' }}>
                        {ConvertDate(createdAt)}
                      </Typography>
                      {data.adType && (
                        <span className={`${featuredBadge} ${adTypeBadge}`}>
                          <Typography variant="body2">
                            {data.adType.toUpperCase()}
                          </Typography>
                        </span>
                      )}

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
                            {`${UPDATED} ${moment(updatedAt).fromNow()}`}
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
        <Toast
          message={toastMessage}
          type={toastType}
          open={openToast}
          onClose={() => setOpenToast(false)}
        />
        <LoginModal
          openModal={signinModal}
          closeModal={() => setSigninModal(false)}
        />
      </Paper>
    </>
  );
};

export default ListingCard;
