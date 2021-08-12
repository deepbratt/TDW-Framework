import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

export interface ShortListCardProps {
  _id: string;
  name: string;
  productImg: string;
  handleClick: Function;
}

const ShortListCard: React.FC<ShortListCardProps> = ({
  _id,
  name,
  productImg,
  handleClick,
}) => {
  return (
    <Card
      style={{ maxHeight: "200px", maxWidth: "180px", position: "relative" }}
    >
      <CardHeader
        style={{ position: "absolute", top: "-5px", right: "-5px" }}
        action={
          <IconButton
            aria-label="delete-item"
            size="small"
            onClick={() => handleClick(_id)}
          >
            <CancelRoundedIcon fontSize="small" />
          </IconButton>
        }
      />
      <CardMedia>
        <img src={productImg} alt={name} />
      </CardMedia>

      <Typography
        style={{ padding: "5px 10px", fontSize: "14px", lineHeight: "14px" }}
        variant="h3"
        gutterBottom
      >
        {name.substr(0, 20)}
      </Typography>
    </Card>
  );
};

export default ShortListCard;
