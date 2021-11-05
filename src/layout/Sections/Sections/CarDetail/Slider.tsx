import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';
import { useStyles } from './useStyles';
import { Detail } from '../../Utils/types1';
import Sizes from '../../../../Utils/themeConstants';
import Actions from '../../../../pages/carDetail/useFunctions';
import Toast from '../../../../components/Toast';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';
import FullScreenImage from '../../../../components/FullScreenImage/index';
import useImageOrientation from '../../../../Utils/hooks/useImageOrientation';

const Slider = ({ arr, data, imageLoaded }: Detail) => {
  const { open, setOpen, responseMessage } = Actions();
  const {setImageOrientationAndSize, imgHeight, imgWidth} = useImageOrientation()
  const [fullScreen, setFullScreen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const { carousel, detail, sliderImageWrapper, fullImageTabScrollBtn, blurBgImg, tabsWrapper } =
    useStyles();
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

  const onImageLoad = (imgUrl:string) =>{
    imageLoaded()
    setImageOrientationAndSize(imgUrl)
  }

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
          {arr.map((data, index) => {
            return (
              <div
                onClick={(e) => openFullScreen(index, e)}
                className={sliderImageWrapper}
              >
                <div style={{backgroundImage:`url(${data})`}} className={blurBgImg}></div>
                <img
                    // width={imgWidth}
                    // height={imgHeight}
                  style={{
                    position: 'relative',
                    borderRadius: '5px',
                    // minHeight: '100%',
                    height:imgHeight,
                    width:imgWidth
                  }}
                  key={`img ${index}`}
                  // height="100%"
                  src={data}
                  alt=""
                  onLoad={()=>onImageLoad(data)}
                />
              </div>
            );
          })}
        </Carousel>
        {fullScreen && (
          <FullScreenImage
            images={arr.length > 1 ? arr : false}
            image={arr.length < 2 ? arr : false}
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
                {arr.map((thumb: string, index: number) => (
                  <Tab
                    onClick={(e) => setImageIndex(index)}
                    key={thumb + index}
                    classes={{
                      wrapper:tabsWrapper
                    }}
                    icon={
                      <img src={thumb} alt="" height="100px" width="auto" />
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
