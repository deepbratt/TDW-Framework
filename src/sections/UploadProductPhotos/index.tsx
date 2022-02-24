import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CustomButton from '../../components/CustomButton';
import CancelRounded from '@material-ui/icons/CancelRounded';
import UploadPicIcon from '../../assets/icons/uploadPicIcon.png';
import {
  ADD_PHOTOS,
  UPLOAD_IMAGE_MESSAGE,
  MAX_LIMIT_MESSAGE
} from '../../Utils/constants/language/en/buttonLabels';
import { Colors } from '../../Utils/constants/colors/colors';
import { IProductInfo } from '../../pages/AddEditProduct/useForm';
import { fieldNames } from '../../Utils/constants/formsConstants';

const { green, darkGreen, darkBlue } = Colors;

const UploadProductPhotosStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 20px',
  },
  contentRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '36px',
    border: `1px solid ${darkBlue}`,
    borderStyle: 'dashed',
    '& > *': {
      margin: '10px 0'
    }
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '220px'
  },
  btn: {
    backgroundColor: green,
    boxShadow: 'none',
    '&:hover': { backgroundColor: darkGreen }
  },
  hiddenInputFile: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    opacity: 0
  },
  imagesRoot: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '800px',
    flexWrap: 'wrap',
    margin: '15px 0'
  },
  imageRoot: {
    margin: '5px',
    position: 'relative',
    width: '100%',
    height: '200px',
    maxWidth: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.common.black
  },
  closeIcon: {
    position: 'absolute',
    right: '5%',
    top: '5%',
    color: 'white'
  },
  imgStyle: {
    flexShrink: 0,
    maxWidth: '100%',
    maxHidth: '100%'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'rgba(0,0,0,0.75)'
    // overflowY:"auto"
  }
}));  

interface IUploadProductPhotosProps {
  images: any[];
  removeImage: (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleImageCapture: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadProductPhotos: React.FC<IUploadProductPhotosProps> = ({
  images,
  removeImage,
  handleImageCapture
}) => {

  const {
    root,
    contentRoot,
    content,
    btn,
    hiddenInputFile,
    imagesRoot,
    imageRoot,
    imgStyle,
    closeIcon
  } = UploadProductPhotosStyles();
  
  return (
    <Grid className={root} container spacing={2}>
      <Grid item xs={12}>
        <div className={contentRoot}>
          <img src={UploadPicIcon} alt="Product" />
          <div className={imagesRoot}>
            {images.map((image: any, index: number) =>
              image && typeof image === 'object' ? (
                <div className={imageRoot}>
                  <IconButton
                    size="small"
                    className={closeIcon}
                    onClick={(
                      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => removeImage(index, e)}
                  >
                    <CancelRounded fontSize="small" />
                  </IconButton>
                  <img
                    src={URL.createObjectURL(image)}
                    className={imgStyle}
                    alt="car"
                    key={'img1' + index}
                  />
                </div>
              ) : null
            )}
          </div>
          <div className={content}>
            <Typography align="center" variant="body2" color="textSecondary">
              {UPLOAD_IMAGE_MESSAGE}
            </Typography>
            <Typography align="center" variant="body1" color="textPrimary">
              {MAX_LIMIT_MESSAGE}
            </Typography>
          </div>
          <CustomButton className={btn}>
            {ADD_PHOTOS}
            <input
              name={fieldNames.images}
              type="file"
              multiple
              onChange={handleImageCapture}
              className={hiddenInputFile}
            />
          </CustomButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default UploadProductPhotos;