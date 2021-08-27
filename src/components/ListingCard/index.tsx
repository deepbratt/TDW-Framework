import { useHistory, useLocation } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListingCardStyles from './styles';
import LocationIcon from '../../assets/icons/location.png';
import {
  ACTIVE,
  FEATURED,
  INACTIVE,
  SOLD,
  UNSOLD
} from '../../Utils/constants/language/en/buttonLabels';
import { Colors } from '../../Utils/constants/colors/colors';
import ConvertDate from '../convertDate';
import { routes } from '../../routes/paths';
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
  const {
    root,
    grid,
    featuredBadge,
    location,
    favsIcon,
    label,
    favsIconGrid
  } = ListingCardStyles();
  const { red, grey } = Colors;

  const favs = (id: string) => {
    if (handleFavs) {
      handleFavs(id);
    }
  };

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
    active
  } = data;

  return (
    <>
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
        <Grid container>
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
                  minWidth: '100%',
                  minHeight: '175px'
                }}
                src={image && image[0]}
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
                {isFavs || isFavs ? (
                  <button
                    onClick={() => {
                      favs(_id ? _id : '');
                    }}
                    className={layoutType === 'list' ? favsIcon : favsIconGrid}
                    style={isFavs || isFavs ? { color: red } : { color: grey }}
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
