import { useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListingCardStyles from "./styles";
import LocationIcon from "../../assets/icons/location.png";
import { ICarCard } from "../../layout/Sections/Utils/types";
import { FEATURED } from "../../Utils/constants/language/en/buttonLabels";
import { Colors } from "../../Utils/constants/colors/colors";
import CarImage from "../../assets/Cars/listingCard.jpg";
import ConvertDate from "../../components/convertDate";
export interface ListingCardProps {
  data: ICarCard[];
  layoutType: string;
  span?: string;
  isFavs?: boolean;
  handleFavs?: (id: string) => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ data, layoutType,isFavs,span,handleFavs}) => {
  const history = useHistory();

  const {
    root,
    grid,
    featuredBadge,
    yearPrice,
    detailRoot,
    details,
    location,
    favsIcon,
    label,
    favsIconGrid
  } = ListingCardStyles();
  const { red,grey} = Colors;

  const favs = (id: string) => {
    if (handleFavs) {
      handleFavs(id);
    }
  };



  return (
    <>
    {data &&
        data.map((payload: any, index: number) => {
          return (
    <Card className={layoutType === "list" ? root : grid}>
      <Grid container>
        <Grid key={`cars ${index}`} item xs={12} sm={layoutType !== "list" ? 12 : 4}>
          <CardMedia
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              maxHeight: "200px",
            }}
          >
            <img
              style={{
                minWidth: "100%",
                minHeight: "100%",
              }}
              src={CarImage}
              alt=""
            />
          </CardMedia>
        </Grid>
        <Grid item container xs={12} sm={layoutType !== "list" ? 12 : 8}>
          <CardContent style={{ margin: "0" }}>
            <Grid
              item
              container
              spacing={2}
              direction="column"
              justify="space-between"
            >
              {/* {isFeatured ? (
                <span className={featuredBadge}>
                  <Typography variant="body2">{FEATURED}</Typography>
                </span>
              ) : null} */}
               {payload.inFavs || isFavs ? (
                    <button
                      onClick={() => {
                        favs(payload._id)
                       
                      }}
                      className={layoutType === "list" ? favsIcon : favsIconGrid}
                      style={payload.inFavs || isFavs ? {color: red} : {color: grey}}
                    >
                      <FavoriteIcon />
                    </button>
                  ) :  null}
              <Grid item container justify="space-between" xs={12}>
                <Grid item>
                  <Typography variant="h5">{payload.modelYear}</Typography>
                </Grid>
                <Grid item>
                  <Typography color="secondary" variant="h4">
                  {payload.price && `PKR ${payload.price?.toLocaleString()}`}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push(`/car-details/${payload._id}`)}
                  >
                       {payload.make}
                  </Typography>
                </Grid>
                <Grid item container xs={12} spacing={1} justify="flex-start">
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      {payload.year}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      {payload.milage?.toLocaleString()}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                          {payload.engineType}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                         {`${payload.engineCapacity} cc`}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                       {payload.transmission}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div className={location}>
                    <span>
                      <img src={LocationIcon} alt={payload.city} />
                      <Typography variant="subtitle2">{payload.city}</Typography>
                    </span>
                    <span>
                      <Typography variant="subtitle2"> {span ? (
                          <span className={label}>{`${span} ${ConvertDate(
                            payload.createdAt
                          )}`}</span>
                        ) : (
                          ConvertDate(payload.createdAt)
                        )}</Typography>
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
     );
    })}
</>
  );
};

export default ListingCard;
