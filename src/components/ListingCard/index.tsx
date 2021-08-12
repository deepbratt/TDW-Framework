import { useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { routes } from "../../routes/paths";
import ListingCardStyles from "./styles";
import LocationIcon from "../../assets/icons/location.png";
import { ICarCard } from "../../Utils/interfaces/products.interface";
import { FEATURED } from "../../Utils/constants/language/en/buttonLabels";
export interface ListingCardProps {
  data: {
    product: ICarCard;
    productImage: string;
  };
  layoutType: string;
  handleClick?: Function;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  layoutType,
  handleClick,
}) => {
  const history = useHistory();

  const { root, grid, featuredBadge, location } = ListingCardStyles();

  const { product, productImage } = data;
  const {
    _id,
    date,
    price,
    name,
    year,
    driven,
    fuel,
    engineCapacity,
    transmission,
    city,
    isFeatured,
  } = product;

  return (
    <Card className={layoutType === "list" ? root : grid}>
      <Grid container>
        <Grid item xs={12} sm={layoutType !== "list" ? 12 : 4}>
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
              src={productImage}
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
              {isFeatured ? (
                <span className={featuredBadge}>
                  <Typography variant="body2">{FEATURED}</Typography>
                </span>
              ) : null}
              <Grid item container justify="space-between" xs={12}>
                <Grid item>
                  <Typography variant="h5">{date}</Typography>
                </Grid>
                <Grid item>
                  <Typography color="secondary" variant="h4">
                    PKR{" "}
                    {price.toLocaleString(navigator.language, {
                      minimumFractionDigits: 0,
                    })}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="h3"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleClick
                        ? handleClick()
                        : history.push(routes.carDetail + _id);
                    }}
                  >
                    {name}
                  </Typography>
                </Grid>
                <Grid item container xs={12} spacing={1} justify="flex-start">
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      {year}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      {driven.toLocaleString(navigator.language, {
                        minimumFractionDigits: 0,
                      })}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="span"
                    >
                      {fuel}
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
                </Grid>
                <Grid item xs={12}>
                  <div className={location}>
                    <span>
                      <img src={LocationIcon} alt={city} />
                      <Typography variant="subtitle2">{city}</Typography>
                    </span>
                    <span>
                      <Typography variant="subtitle2">{date}</Typography>
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
};

export default ListingCard;
