import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography
} from '@material-ui/core';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

export interface ShortListCardProps {
  _id: string;
  name: string;
  productImg: string;
  handleClick: Function;
}

const ShortListCardStyles = makeStyles((theme) => ({
  cardRoot: {
    maxHeight: '200px',
    maxWidth: '180px',
    position: 'relative',
  },
  cardHeader: {
    position: 'absolute',
    top: '-5px',
    right: '-5px'
  },
  cardMedia: {
    maxHeight: '150px'
  },
  cardTitle: {
    padding: '10px',
    fontSize: '16px',
    lineHeight: '16px'
  }
}));

const ShortListCard: React.FC<ShortListCardProps> = ({
  _id,
  name,
  productImg,
  handleClick
}) => {
  const { cardRoot, cardHeader, cardMedia, cardTitle } = ShortListCardStyles();
  return (
    <Card className={cardRoot}>
      <CardHeader
        className={cardHeader}
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
      <CardMedia className={cardMedia}>
        <img height="150px" src={productImg} alt={name} />
      </CardMedia>

      <Typography className={cardTitle} variant="h3" gutterBottom>
        {name.substr(0, 20)}
      </Typography>
    </Card>
  );
};

export default ShortListCard;
