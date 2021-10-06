import { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';
import { useStyles } from './useStyles';
import { Detail } from '../../Utils/types1';
import Sizes from '../../../../Utils/themeConstants';
import Actions from '../../../../pages/carDetail/useFunctions';
import Toast from '../../../../components/Toast';
import Close from '@material-ui/icons/Close';
import ZoomIn from '@material-ui/icons/ZoomIn';
import ZoomOut from '@material-ui/icons/ZoomOut';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Box, Tabs, Typography } from '@material-ui/core';
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
  const {  open, setOpen, responseMessage } = Actions();
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState('');
  const { carousel, detail,  backdrop, fullScreenImageStyle } = useStyles();
  const [zooming, setZooming] = useState(false);
  const { mobile } = Sizes();

  const handleAlertClose = () => {
    setOpen(false);
  };

  const openFullScreen = (
    img: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setFullScreen(true);
    setFullScreenImage(img);
    document.body.style.overflow = 'hidden';
  };
  const closeFullScreen = () => {
    setFullScreen(false);
    setFullScreenImage('');
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
                onClick={(e) => openFullScreen(data, e)}
              >
                <img
                  style={{ position: 'relative', borderRadius: '5px' }}
                  key={`img ${index}`}
                  // width="10%"
                  width="100%"
                  src={data}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
        <Backdrop
          className={backdrop}
          // onClick={() => closeFullScreen()}
          open={fullScreen}
        >
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <div>
                <div
                  className={fullScreenImageStyle}
                  style={{
                    justifyContent: !mobile ? 'space-between' : 'center'
                  }}
                >
                  <div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('ooming', zooming);
                        if (!zooming) {
                          setZooming(true);
                        }
                        zoomIn();
                      }}
                      variant="contained"
                      color="primary"
                    >
                      <ZoomIn />
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        zoomOut();
                      }}
                      style={{ margin: '0 10px' }}
                      variant="contained"
                      color="secondary"
                    >
                      <ZoomOut />
                    </Button>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetTransform();
                      closeFullScreen();
                    }}
                    variant="contained"
                    color="default"
                  >
                    <Close />
                  </Button>
                </div>
                <TransformComponent
                  contentStyle={{
                    cursor: 'move',
                    height: '100%',
                    display: !zooming ? 'block' : 'absolute',
                    transform: 'translateX(50%)',
                    margin: !zooming ? 'auto' : 0
                  }}
                  wrapperStyle={{
                    height: !mobile ? '60vh' : 'auto',
                    width: !mobile ? '70vw' : 'auto',
                    backgroundColor: 'black',
                    display: !zooming ? 'flex' : 'block',
                    justifyContent: 'center'
                  }}
                >
                  <img src={fullScreenImage} alt="" />
                </TransformComponent>
              </div>
            )}
          </TransformWrapper>
          <Box
            width={!mobile ? '70vw' : '100vw'}
            height= {!mobile ? '30vh' : 'auto'}
            color="white"
            style={{ background: 'black', paddingBottom: mobile ? "20px":0, overflowY:"auto", overflowX:"hidden" }}
          >
            <Grid
              container
              justifyContent="center"
              spacing={2}
              style={{ padding: !mobile ? '10px' : '0'}}
            >
              <Grid item xs={12} container style={{display:"flex", justifyContent:"center"}}>
                <Tabs
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  {arr.map((thumb: string, index: number) => (
                    <img
                      src={thumb}
                      alt=""
                      height="50px"
                      width="auto"
                      onClick={(e) => openFullScreen(thumb, e)}
                      style={{ margin: '5px', cursor: 'pointer' }}
                      key={thumb + index}
                    />
                  ))}
                </Tabs>
              </Grid>
              <Grid
                item
                xs={10}
                lg={5}
                style={{
                  display: 'flex',
                  justifyContent: mobile ? "center" : 'space-between',
                  alignItems: 'center',
                  flexWrap:"wrap",
                }}
              >
                <Typography variant="body2">{data.modelYear}</Typography>
                <span>&bull;</span>
                <Typography variant="body2">{data.milage}&nbsp;KM</Typography>
                <span>&bull;</span>
                <Typography variant="body2">{data.engineType}</Typography>
                <span>&bull;</span>
                <Typography variant="body2">
                  {data.engineCapacity}&nbsp;cc
                </Typography>
                <span>&bull;</span>
                <Typography variant="body2">{data.transmission}</Typography>
              </Grid>
              <Grid xs={10} item lg={3} style={{justifyContent:"center", display:"flex", alignItems:"center"}}>
              <Typography variant="h3">PKR&nbsp;{data.price}</Typography>
              </Grid>
              <Grid
                item
                xs={10}
                lg={4}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap:"wrap"
                }}
              >
                {data.createdBy.phone && (
                  <a href={'tel:' + data.createdBy.phone}>
                    <Button variant="contained" color="primary">
                      {data.createdBy.phone}
                    </Button>
                  </a>
                )}
                {data.createdBy.email && (
                  <a href={'mailto:' + data.createdBy.email}>
                    <Button variant="contained" color="secondary">
                      {'Send Message'}
                    </Button>
                  </a>
                )}
              </Grid>
            </Grid>
          </Box>
        </Backdrop>
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
