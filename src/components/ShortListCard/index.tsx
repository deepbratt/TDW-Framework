import Card from "@material-ui/core/Card"
import IconButton from "@material-ui/core/IconButton"
import CardMedia from "@material-ui/core/CardMedia"
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { Colors } from '../../Utils/constants/colors/colors';

export interface ShortListCardProps {
  _id: string;
  name: string;
  productImg: string;
  handleClick: Function;
}

const ShortListCardStyles = makeStyles((theme) => ({
  cardRoot: {
    maxHeight: '150px',
    minWidth: '100%',
    maxWidth: '180px',
    position: 'relative',
    backgroundColor: Colors.lightBlue,
    [theme.breakpoints.down('sm')]: {
      maxHeight: '120px',
      maxWidth: '120px'
    }
  },
  cardHeader: {
    position: 'absolute',
    top: '-5px',
    right: '-5px'
  },
  cardMedia: {
    maxHeight: '100px',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '80px'
    },
    '& > img': {
      height: '100px',
      [theme.breakpoints.down('sm')]: {
        maxHeight: '80px'
      }
    }
  },
  cardTitle: {
    padding: '7px',
    fontSize: '16px',
    lineHeight: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
      fontSize: '12px',
      lineHeight: '12px'
    }
  },
  deleteIcon: {
    color: theme.palette.error.dark,
    opacity: 0.8
  }
}));

const ShortListCard: React.FC<ShortListCardProps> = ({
  _id,
  name,
  productImg,
  handleClick
}) => {
  const { cardRoot, cardHeader, cardMedia, cardTitle, deleteIcon } =
    ShortListCardStyles();
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

      <Typography align="center" className={cardTitle} variant="h3" gutterBottom>
        {name.substr(0, 20)}
      </Typography>
    </Card>
  );
};

export default ShortListCard;
