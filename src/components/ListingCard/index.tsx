import { useHistory, useLocation } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
  ACTIVE,
  INACTIVE,
  SOLD,
  UNSOLD
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
  const {user, isLoggedIn} = useSelector((state:RootState)=>state.auth)
  const { root, grid, featuredBadge, location, favsIcon, label, favsIconGrid } =
    ListingCardStyles();
  const { red, grey, flashWhite } = Colors;

  const {
    _id,
    model,
    make,
    modelYear,
    mileage,
    engineType,
    engineCapacity,
    transmission,
    city,
    createdAt,
    price,
    image,
    isSold,
    active,
    isFav,
    createdBy
  } = data;

  const [isFavorite, setIsfavorite] = useState(isFav)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')
  const [toastOpen, setToastOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const favs = (id: string) => {
    console.log(data)
    if (handleFavs) {
      handleFavs(id);
    }else{
      setIsLoading(true)
      addToFav(isFavorite ? removeFavs : addToFavs, id).then(response=>{
        setIsLoading(false)
        console.log(response)
        if(response && response.status === "success"){
          setToastMessage(response?.message)
          setToastType('success')
          setIsfavorite(!isFavorite)
        }else{
          setToastMessage(response?.message)
          setToastType('error')
        }
        setToastOpen(true)
      })
    }
  };

  return (
    <>

    <Toast open={toastOpen} message={toastMessage} type={toastType} onClose={()=>setToastOpen(false)}/>
    <Loader open={isLoading} isBackdrop={true}/>
      <Card
        className={layoutType === 'list' ? root : grid}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          handleClick
            ? handleClick()
            : history.push(
                routes.carDetail.substr(
                  0,
                  routes.carDetail.lastIndexOf('/') + 1
                ) + _id
              );
        }}
      >
        <Grid container style={{ border: '2px solid ' + flashWhite }}>
          <Grid item xs={12} sm={layoutType !== 'list' ? 12 : 4}>
            <CardMedia
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                maxHeight: '175px'
              }}
            >
              <img
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  maxHeight: '175px'
                }}
                src={image && image.length > 0 ? image[0] : NoImg}
                alt=""
              />
            </CardMedia>
          </Grid>
          <Grid item container xs={12} sm={layoutType !== 'list' ? 12 : 8}>
            <CardContent style={{ margin: '0' }}>
              <Grid
                item
                container
                spacing={2}
                direction="column"
                justifyContent="space-between"
              >
                {isSold ? (
                  <span className={featuredBadge}>
                    <Typography variant="body2">{SOLD}</Typography>
                  </span>
                ) : null}
                {isFavs && isLoggedIn && user._id !== createdBy ? (
                  <button
                    onClick={(e) => {
                      favs(_id ? _id : '');
                      e.stopPropagation();
                    }}
                    className={layoutType === 'list' ? favsIcon : favsIconGrid}
                    style={isFavorite || pathname.indexOf('favorites') > -1 ? { color: red } : { color: grey }}
                  >
                    <FavoriteIcon />
                  </button>
                ) : null}
                <Grid item container justifyContent="space-between" xs={12}>
                  <Grid item>
                    <Typography variant="h5">{modelYear}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="secondary" variant="h4">
                      {price && `PKR ${price?.toLocaleString()}`}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h3"
                      style={{ cursor: 'pointer' }}
                      // onClick={() => history.push(`/car-detail/${_id}`)}
                    >
                      {`${make} ${model}`}
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
                        {mileage?.toLocaleString()}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        variant="body2"
                        component="span"
                      >
                        {engineType}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        variant="body2"
                        component="span"
                      >
                        {`${engineCapacity} cc`}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        variant="body2"
                        component="span"
                      >
                        {transmission}
                      </Typography>
                    </Grid>
                    {pathname.indexOf('ads') > -1 ||
                    pathname.indexOf('favorites') > -1 ? (
                      <>
                        <Grid item>
                          <Typography
                            color="textSecondary"
                            variant="body2"
                            component="span"
                          >
                            {isSold ? SOLD : UNSOLD}
                          </Typography>
                        </Grid>
                        {pathname.indexOf('ads') > -1 && (
                          <Grid item>
                            <Typography
                              color="textSecondary"
                              variant="body2"
                              component="span"
                            >
                              {active ? ACTIVE : INACTIVE}
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
                          {' '}
                          {span ? (
                            <span className={label}>{`${span} ${ConvertDate(
                              createdAt
                            )}`}</span>
                          ) : (
                            ConvertDate(createdAt)
                          )}
                        </Typography>
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ListingCard;
