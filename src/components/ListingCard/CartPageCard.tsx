import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CustomButton from "../CustomButton"
import {
  REMOVE,
} from '../../Utils/constants/language/en/buttonLabels';
import CartPageCardStyles from './styles';
import NoImg from '../../assets/no-img.png';
import Loader from '../Loader';
import Sizes from '../../Utils/themeConstants';
import useImageOrientation from '../../Utils/hooks/useImageOrientation';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import LOGO from '../../layout/Sections/assets/Whitelogo.png';

export interface CartPageCardProps {
  data: any;
  layoutType: string;
  span?: string;
  handleClick?: Function;
}

const CartPageCard: React.FC<CartPageCardProps> = ({
  data,
  layoutType,
  handleClick,
}) => {
  const { mobile } = Sizes();

  const { setImageOrientationAndSize, imgHeight, imgWidth } =
    useImageOrientation();
 
  const {
    root,
    grid,
    location,
    favsIconGrid,
    favsIconList,
    cardMedia,
    blurBgImg,
    imgWaterMark,
    featuredImgStyle,
    overlay,
    salePrice,
    reviewBadge,
    removeBtn,
    stockInput
  } = CartPageCardStyles();

  const {
    name,
    price,
    image,
    rating,
    quantity,
    stock,
    selectedImage,
  } = data;

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Paper
        elevation={4}
        style={{
          height: layoutType !== 'list' ? '100%' : 'auto',
          position: 'relative'
        }}
      >
        <Loader open={isLoading} isBackdrop={true} />
        <Box
          className={
            layoutType === 'grid' || mobile ? favsIconGrid : favsIconList
          }
        ></Box>
        <Card
          className={layoutType === 'list' ? root : grid}
          style={{ cursor: 'pointer' }}
          // onClick={(e) => handleCardClick(e)}
        >
          <Grid container alignItems="center">
            <Grid
              item
              xs={12}
              sm={layoutType !== 'list' ? 12 : 4}
              style={{ padding: '5px' }}
            >
              <CardMedia
                style={{
                  height: layoutType === 'list' ? '170px' : '235px'
                }}
                className={cardMedia}
              >
                <div
                  style={{
                    backgroundImage: `url(${
                      selectedImage && selectedImage.location
                        ? selectedImage.location
                        : image && image.length > 0 && image[0].location
                        ? image[0].location
                        : NoImg
                    })`
                  }}
                  className={blurBgImg}
                ></div>
                <img
                  src={
                    selectedImage && selectedImage.location
                      ? selectedImage.location
                      : image && image.length > 0 && image[0].location
                      ? image[0].location
                      : NoImg
                  }
                  className={featuredImgStyle}
                  alt=""
                  width={imgWidth}
                  height={imgHeight}
                  onLoad={() =>
                    setImageOrientationAndSize(
                      selectedImage && selectedImage.location
                        ? selectedImage.location
                        : image && image.length > 0 && image[0].location
                        ? image[0].location
                        : NoImg
                    )
                  }
                />
                <img
                  src={LOGO}
                  className={imgWaterMark}
                  alt="carokta watermark"
                />
                <div className={overlay} />
              </CardMedia>
            </Grid>
            <Grid item container xs={12} sm={layoutType !== 'list' ? 12 : 8}>
              <CardContent style={{ padding: '10px', width: '100%' }}>
                <Grid container spacing={layoutType === 'list' ? 2 : 1}>
                  <Grid item xs={12}>
                    <Typography variant="h3" style={{ cursor: 'pointer' }}>
                      {`${name}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={reviewBadge}>
                      <Typography variant="h4" component="span">
                        {rating}
                      </Typography>
                      <StarRateRoundedIcon />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography color="secondary" variant="h3" component="span">
                      {data.salePrice
                        ? data.salePrice
                        : price && `PKR ${price?.toLocaleString()}`}
                    </Typography>
                    {data.salePrice && (
                      <Typography
                        className={salePrice}
                        variant="body1"
                        component="span"
                        gutterBottom
                      >
                        {price && `${price?.toLocaleString()}`}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} container>
                    <Grid
                      item
                      xs={6}
                      container
                      direction="row"
                      alignItems="center"
                    >
                      <IconButton size="small" disabled={quantity === 0}>
                        <RemoveCircleOutlineRoundedIcon fontSize="small" />
                      </IconButton>
                      <TextField classes={{ root: stockInput }} size="small" />
                      <IconButton size="small" disabled={stock <= 1}>
                        <AddCircleOutlineRoundedIcon fontSize="small" />
                      </IconButton>
                    </Grid>
                    <Grid item xs={6} container justifyContent="flex-end">
                      <CustomButton
                        className={removeBtn}
                        variant="text"
                        color="primary"
                        size="small"
                      >
                        {REMOVE}
                      </CustomButton>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Paper>
    </>
  );
};

export default CartPageCard;