import { useState } from 'react';
import { Backdrop, Button, Grid, IconButton } from '@material-ui/core';
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
import {
  Add,
  FavoriteBorder,
  ZoomIn,
  ZoomOut,
  ZoomOutMap
} from '@material-ui/icons';
const initialSize = { scale: 1, width: 'auto' };
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
  const [zoom, setZoom] = useState(initialSize.scale);
  const [fullScreenImage, setFullScreenImage] = useState('');
  const { carousel, detail, btn, backdrop, fullScreenImageStyle } = useStyles();
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
    setZoom(initialSize.scale);
    document.body.style.overflow = 'hidden';
  };
  const closeFullScreen = () => {
    setFullScreen(false);
    setZoom(initialSize.scale);
    setFullScreenImage('');
    document.body.style.overflow = 'auto';
  };

  const zoomIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (zoom > 4) {
      return;
    }
    setZoom(zoom + 0.5);
  };
  const zoomOut = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (zoom < 1) {
      return;
    }
    setZoom(zoom - 0.5);
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
          onClick={() => closeFullScreen()}
          open={fullScreen}
        >
          <div className={fullScreenImageStyle}>
            <div>
              <img
                src={fullScreenImage}
                alt=""
                style={{ transform: `scale(${zoom})` }}
                height={!mobile ? "500px": "auto"}
                width={mobile ? "100%" : "auto"}
              />
            </div>
          </div>
          <div>
            {arr.map((thumb: string, index: number) => (
              <img
                src={thumb}
                alt=""
                height="50px"
                width="50px"
                onClick={(e) => openFullScreen(thumb, e)}
                style={{ margin: '5px', cursor: 'pointer' }}
                key={thumb + index}
              />
            ))}
          </div>
          <div>
            <Button onClick={zoomIn} variant="contained" color="primary">
              <ZoomIn />
            </Button>
            &nbsp;
            <Button onClick={zoomOut} variant="contained" color="secondary">
              <ZoomOut />
            </Button>
          </div>
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
