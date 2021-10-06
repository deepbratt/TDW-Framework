import { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Carousel } from 'react-responsive-carousel';
import { useStyles } from './useStyles';
import { Detail } from '../../Utils/types1';
import Sizes from '../../../../Utils/themeConstants';
import { addToFavs, removeFavs } from '../../../../Utils/hooks/endpoints';
import Actions from '../../../../pages/carDetail/useFunctions';
import Toast from '../../../../components/Toast';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import Favorite from '@material-ui/icons/Favorite';
import Close from '@material-ui/icons/Close';
import ZoomIn from '@material-ui/icons/ZoomIn';
import ZoomOut from '@material-ui/icons/ZoomOut';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';

// import Lightbox from 'react-awesome-lightbox';
import FullScreenImage from '../../../../components/FullScreenImageJS/FullScreenImage';
// You need to import the CSS only once
import '../../../../components/FullScreenImageJS/style.css';

const Slider = ({
  desc,
  paragraph,
  arr,
  feature,
  info,
  carTitle,
  id,
  city,
  assembly,
  bodyType,
  color,
  engineCapacity,
  date,
  isFavs,
  createdBy,
  updatedAt,
  data
}: Detail) => {
  const { addFavs, open, setOpen, responseMessage } = Actions();
  const { user } = useSelector((state: RootState) => state.auth);
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(isFavs);
  const [fullScreen, setFullScreen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const { carousel, detail, btn, backdrop, fullScreenImageStyle } = useStyles();
  const [zooming, setZooming] = useState(false);
  const { mobile } = Sizes();

  const handleAlertClose = () => {
    setOpen(false);
  };

  const openFullScreen = (
    imgIndex: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setFullScreen(true);
    setImageIndex(imgIndex);
    document.body.style.overflow = 'hidden';
  };
  const closeFullScreen = () => {
    setFullScreen(false);
    setImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  return (
    <Grid container>
      <Grid className={detail} item xs={12}>
        <Carousel
          className={carousel}
          autoPlay={!fullScreen}
          showStatus={false}
          interval={2400}
          showArrows={mobile ? false : true}
          infiniteLoop={true}
          transitionTime={500}
          showIndicators={false}
          showThumbs={true}
        >
          {arr.map((data, index) => {
            return (
              <div
                style={{ cursor: 'pointer' }}
                onClick={(e) => openFullScreen(index, e)}
              >
                <img
                  style={{ position: 'relative', borderRadius: '5px' }}
                  key={`img ${index}`}
                  // width="10%"
                  height="100%"
                  src={data}
                  alt=""
                />
                {!user?._id || user?._id === createdBy?._id ? null : (
                  <IconButton
                    onClick={() => {
                      if (id) {
                        addFavs(isFavorite ? removeFavs : addToFavs, id);
                        // setColorChange(isFavorite ? true : false);
                        setIsFavorite(!isFavorite);
                      }
                    }}
                    className={btn}
                  >
                    {isFavorite ? (
                      <Favorite color="primary" />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>
                )}
              </div>
            );
          })}
        </Carousel>
        {fullScreen && (
          <FullScreenImage
            images={arr}
            onClose={() => closeFullScreen()}
            startIndex={imageIndex}
            thumbnail={arr}
            onNavigateImage={(index: any) => setImageIndex(index)}
          >
            <Box display="flex" justifyContent="center">
              <Tabs
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                selectionFollowsFocus
                indicatorColor="secondary"
                value={imageIndex}
              >
                {arr.map((thumb: string, index: number) => (
                  <Tab
                    onClick={(e) => setImageIndex(index)}
                    key={thumb + index}
                    icon={
                      <img
                        src={thumb}
                        alt=""
                        height="100px"
                        width="auto"
                        onClick={(e) => setImageIndex(index)}
                        style={{ margin: '5px', cursor: 'pointer' }}
                      />
                    }
                  />
                ))}
              </Tabs>
            </Box>
            <Box
              display="flex"
              padding="10px"
              color="white"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              style={{ background: 'black' }}
            >
              <Box display="flex">
                <Typography variant="body2" style={{ marginRight: '15px' }}>
                  {data.modelYear}
                </Typography>
                <Typography variant="body2" style={{ marginRight: '15px' }}>
                  {data.milage}&nbsp;KM
                </Typography>
                <Typography variant="body2" style={{ marginRight: '15px' }}>
                  {data.engineType}
                </Typography>
                <Typography variant="body2" style={{ marginRight: '15px' }}>
                  {data.engineCapacity}&nbsp;cc
                </Typography>
              </Box>
              <Box>
                <Typography variant="h3">PKR&nbsp;{data.price}</Typography>
              </Box>
              <Box>
                <Button variant="contained" color="primary">
                  Send Appointment Request
                </Button>
              </Box>
            </Box>
          </FullScreenImage>
        )}
        <Toast
          open={open}
          type={responseMessage.status}
          message={responseMessage.message}
          onClose={handleAlertClose}
        />
      </Grid>
    </Grid>
  );
};

export default Slider;
