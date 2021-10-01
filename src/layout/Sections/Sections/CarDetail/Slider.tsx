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
  updatedAt
}: Detail) => {
  const { addFavs, open, setOpen, responseMessage } = Actions();
  const { user } = useSelector((state: RootState) => state.auth);
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(isFavs);
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState('');
  const {
    carousel,
    detail,
    btn,
    backdrop,
    fullScreenImageStyle,
  } = useStyles();
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
                <div className={fullScreenImageStyle} style={{justifyContent: !mobile ? "space-between" : "center"}}>
                  <div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
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
                    style={{margin:"0 10px"}}
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
                    <Close/>
                  </Button>
                </div>
                <TransformComponent  contentStyle={{ cursor:"move", height:"100%"}} wrapperStyle={{height: !mobile ? "80vh" : "auto"}}>
                  <img src={fullScreenImage} alt="" height="100%"/>
                </TransformComponent>
              </div>
            )}
          </TransformWrapper>
          <div>
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
          </div>
          {/* <div>
            <Button onClick={zoomIn} variant="contained" color="primary">
              <ZoomIn />
            </Button>
            &nbsp;
            <Button onClick={zoomOut} variant="contained" color="secondary">
              <ZoomOut />
            </Button>
          </div> */}
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
