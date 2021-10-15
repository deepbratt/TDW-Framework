import { Theme } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { Colors } from '../../Utils/constants/colors/colors';

export interface ShortListCardProps {
  _id: string;
  name: string;
  productImg: string;
  price?: number;
  handleClick: Function;
}

const ShortListCardStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    minWidth: '100%',
    maxWidth: '180px',
    position: 'relative',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: Colors.lightBlue,
    [theme.breakpoints.down('sm')]: {
      maxHeight: '200px',
      maxWidth: '120px'
    }
  },
  cardHeader: {
    position: 'absolute',
    top: '-5px',
    right: '-5px'
  },
  cardMedia: {
    maxHeight: '120px',
    '& > img': {
      width: '100%'
    }
  },
  cardTitle: {
    padding: '7px',
    fontSize: '18px',
    lineHeight: '18px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
      fontSize: '16px',
      lineHeight: '16px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      lineHeight: '14px'
    }
  },
  cardPrice: {
    color: Colors.textPrimary,
    paddingBottom: '15px',
    fontSize: '20px',
    lineHeight: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
      fontSize: '16px',
      lineHeight: '16px'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  cardContent: {
    backgroundColor: Colors.lightBlue,
    height: 'auto',
    padding: '5px'
  },
  deleteIcon: {
    color: theme.palette.grey[200],
    opacity: 0.8
  }
}));

const ShortListCard: React.FC<ShortListCardProps> = ({
  _id,
  name,
  productImg,
  price,
  handleClick
}) => {
  const {
    cardRoot,
    cardHeader,
    cardMedia,
    cardContent,
    cardTitle,
    deleteIcon,
    cardPrice
  } = ShortListCardStyles();
  return (
    <Card className={cardRoot}>
      <CardHeader
        className={cardHeader}
        action={
          <IconButton
            aria-label="delete-item"
            size="small"
            className={deleteIcon}
            onClick={() => handleClick(_id)}
          >
            <CancelRoundedIcon fontSize="small" />
          </IconButton>
        }
      />
      <CardMedia className={cardMedia}>
        <img src={productImg} alt={name} />
      </CardMedia>
      <div className={cardContent}>
        <Typography
          align="center"
          className={cardTitle}
          variant="h3"
          gutterBottom
        >
          {name.substr(0, 20)}
        </Typography>
        {price && (
          <Typography
            align="center"
            className={cardPrice}
            variant="h2"
            gutterBottom
          >
            {price && `PKR ${price?.toLocaleString()}`}
          </Typography>
        )}
      </div>
    </Card>
  );
};

export default ShortListCard;
