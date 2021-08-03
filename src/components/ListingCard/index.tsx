import { useHistory } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import ListingCardStyles from "./styles";
import LocationIcon from "../../assets/icons/location.png";
import { FEATURED } from "../../utils/constants/language/en/buttonLabels";
import { ICarCard } from "../../utils/interfaces/products.interface";

export interface ListingCardProps {
  data: {
    product: ICarCard;
    productImage: string;
  };
  layoutType: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ data, layoutType }) => {
  const history = useHistory();

  const {
    root,
    grid,
    featuredBadge,
    yearPrice,
    detailRoot,
    details,
    location,
  } = ListingCardStyles();

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
    <Card
      className={layoutType === "list" ? root : grid}
      onClick={() => history.push(`/car-details/${_id}`)}
    >
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
            width: "auto",
            height: "auto",
          }}
          src={productImage}
          alt=""
        />
      </CardMedia>
      <CardContent className={detailRoot}>
        {isFeatured ? (
          <span className={featuredBadge}>
            <Typography variant="body2">{FEATURED}</Typography>
          </span>
        ) : null}
        <div className={yearPrice}>
          <Typography variant="h5">{date}</Typography>
          <Typography variant="h4">
            PKR{" "}
            {price.toLocaleString(navigator.language, {
              minimumFractionDigits: 0,
            })}
          </Typography>
        </div>
        <div>
          <Typography variant="h3">{name}</Typography>
          <div className={details}>
            <Typography color="textSecondary" variant="body2" component="span">
              {year}
            </Typography>
            <Typography color="textSecondary" variant="body2" component="span">
              {driven.toLocaleString(navigator.language, {
                minimumFractionDigits: 0,
              })}
            </Typography>
            <Typography color="textSecondary" variant="body2" component="span">
              {fuel}
            </Typography>
            <Typography color="textSecondary" variant="body2" component="span">
              {`${engineCapacity} cc`}
            </Typography>
            <Typography color="textSecondary" variant="body2" component="span">
              {transmission}
            </Typography>
          </div>
          <div className={location}>
            <span>
              <img src={LocationIcon} alt={city} />
              <Typography variant="subtitle2">{city}</Typography>
            </span>
            <span>
              <Typography variant="subtitle2">{date}</Typography>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
