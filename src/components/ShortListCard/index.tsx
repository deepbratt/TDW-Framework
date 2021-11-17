import { Theme } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
export interface ShortListCardProps {
  _id: string;
  name: string;
  productImg: string;
  price?: number;
  handleClick: Function;
}

const ShortListCardStyles = makeStyles((theme: Theme) => ({
  imageRoot: {
    margin: '5px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    minWidth: '180px',
    minHeight: '180px',
    maxWidth: '180px',
    maxHeight: '180px',
    backgroundColor: theme.palette.common.black,
    [theme.breakpoints.down('sm')]: {
      minWidth: '150px',
      minHeight: '150px',
      maxWidth: '150px',
      maxHeight: '150px'
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '120px',
      minHeight: '120px',
      maxWidth: '120px',
      maxHeight: '120px'
    }
  },
  closeIcon: {
    position: 'absolute',
    right: '5%',
    top: '5%',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white
  },
  imgStyle: {
    // flexShrink: 0,
    maxWidth: '100%',
    maxHeight: '100%'
    // height: 'auto'
  }
}));

const ShortListCard: React.FC<ShortListCardProps> = ({
  _id,
  name,
  productImg,
  price,
  handleClick
}) => {
  const { imageRoot, closeIcon, imgStyle } = ShortListCardStyles();
  return (
    <Card className={imageRoot}>
      <IconButton
        size="small"
        className={closeIcon}
        onClick={() => handleClick(_id)}
      >
        <CancelRoundedIcon fontSize="small" />
      </IconButton>
      <img className={imgStyle} src={productImg} alt={name} />
    </Card>
  );
};

export default ShortListCard;
