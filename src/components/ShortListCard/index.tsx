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
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    maxWidth: '100%',
    backgroundColor: theme.palette.common.black
  },
  closeIcon: {
    position: 'absolute',
    right: '5%',
    top: '5%',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white
  },
  imgStyle: {
    flexShrink: 0,
    maxWidth: '200px',
    height: 'auto'
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
