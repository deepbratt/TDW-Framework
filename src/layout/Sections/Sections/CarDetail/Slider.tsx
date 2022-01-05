import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';
import { useStyles } from './useStyles';
import { Detail } from '../../Utils/types';
import Sizes from '../../../../Utils/themeConstants';
import Actions from '../../../../pages/carDetail/useFunctions';
import Toast from '../../../../components/Toast';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';
import FullScreenImage from '../../../../components/FullScreenImage/index';
import useImageOrientation from '../../../../Utils/hooks/useImageOrientation';
import LOGO from '../../assets/Whitelogo.png';

const Slider = ({ arr, data, imageLoaded }: Detail) => {
  const { open, setOpen, responseMessage } = Actions();
  const { setImageOrientationAndSize } = useImageOrientation();
  const [fullScreen, setFullScreen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const {
    carousel,
    detail,
    sliderImageWrapper,
    fullImageTabScrollBtn,
    blurBgImg,
    tabsWrapper,
    imgWaterMark,
    featuredImgStyle,
    overlay
  } = useStyles();
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

  const onImageLoad = (imgUrl: string, imageObject: HTMLImageElement) => {
    imageLoaded();
    const { height, width } = setImageOrientationAndSize(imgUrl);
    imageObject.style.height = height;
    imageObject.style.width = width;
  };

  return (
    <Grid container>
      <Grid className={detail} item xs={12}>
        <Carousel
          autoFocus={true}
          className={carousel}
          autoPlay={!fullScreen}
          showStatus={false}
          interval={2400}
          showArrows={mobile ? false : true}
          infiniteLoop={true}
          transitionTime={500}
          showIndicators={false}
          showThumbs={true}
          useKeyboardArrows={true}
        >
          {arr.map((data: any, index: any) => {
            return (
              <div
                onClick={(e) => openFullScreen(index, e)}
                className={sliderImageWrapper}
              >
                <div
                  style={{ backgroundImage: `url(${data})` }}
                  className={blurBgImg}
                ></div>
                <img
                  className={featuredImgStyle}
                  key={`img ${index}`}
                  src={data.location}
                  alt=""
                  onLoad={(e: any) => onImageLoad(data.location, e.target)}
                />
                <img
                  src={LOGO}
                  className={imgWaterMark}
                  alt="carokta watermark"
                />
                <div className={overlay} />
              </div>
            );
          })}
        </Carousel>
        {fullScreen && (
          <FullScreenImage
            images={arr.length > 1 ? arr : false}
            image={arr.length < 2 ? arr[0] : false}
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
                classes={{
                  scrollButtons: fullImageTabScrollBtn
                }}
              >
                {arr.map((thumb: any, index: any) => (
                  <Tab
                    onClick={(e) => setImageIndex(index)}
                    key={thumb.reference + index}
                    classes={{
                      wrapper: tabsWrapper
                    }}
                    icon={
                      <img src={thumb.location} alt="" height="100px" width="auto" />
                    }
                  />
                ))}
              </Tabs>
            </Box>
            <Box
              display="flex"
              padding="10px"
              color="white"
              // justifyContent="space-between"
              justifyContent="center"
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
              {/* <Box>
                <Button variant="contained" color="primary">
                  Send Appointment Request
                </Button>
              </Box> */}
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
