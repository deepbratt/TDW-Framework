import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Backdrop from '@material-ui/core/Backdrop';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createTheme';
import { useState } from 'react';
import UploadPicIcon from '../assets/icons/uploadPicIcon.png';
import InformationDialog from '../components/InformationDialog';
import addEditCarData from '../Utils/constants/language/en/addEditCarData';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop, { Crop } from 'react-image-crop';
import { Box } from '@material-ui/core';

interface IUploadPhotosFormProps {
  images: any;
  // setImages: React.Dispatch<React.SetStateAction<any[]>>,
  updateImagesState: (img: any) => void;
  requireError: any;
}

const UploadPhotosForm = ({
  images,
  updateImagesState,
  requireError
}: IUploadPhotosFormProps) => {
  const classes = useStyles();
  const [openInfoModel, setOpenInfoModel] = useState(false);
  const [openCropModal, setOpenCropModal] = useState(false);
  const [crop, setCrop] = useState<any>({ aspect: 1 / 1, width: 300 });
  const [srcImg, setSrcImg] = useState('');
  const [tempImg, setTempImg] = useState<HTMLImageElement>();
  const [infoMessage, setInfoMessage] = useState('');
  const [infoTitle, setInfoTitle] = useState('');

  const uploadImage = (e: any) => {
    let oneMb = 1024 * 1024;
    let fileSize = e.target.files[0].size;
    if (fileSize > 5 * oneMb) {
      setInfoTitle('Error!');
      setInfoMessage(addEditCarData.infoText);
      setOpenInfoModel(true);
      e.target.value = null;
      return;
    } else {
      // setSrcImg(e.target.files[0]);
      // setOpenCropModal(true);
      let temp = [...images];
      temp.push(e.target.files[0]);
      updateImagesState(temp);
    }
    e.target.value = null;
  };

  const getCroppedImg = async () => {
    if (!tempImg) {
      return;
    }
    try {
      tempImg.onload = async function () {
        const canvas = document.createElement('canvas');
        const scaleX = tempImg.naturalWidth / tempImg.width;
        const scaleY = tempImg.naturalHeight / tempImg.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        if (ctx) ctx.imageSmoothingQuality = 'high';
        ctx?.drawImage(
          tempImg,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
        toBlobFunc(canvas)
          .then((blob) => {
            let temp = [...images];
            temp.push(blob);
            updateImagesState(temp);
          })
          .then(() => cancelUploadImg());
      };
    } catch (e) {
      console.log('crop the image', e);
    }
  };

  const toBlobFunc = async (canvas: HTMLCanvasElement) => {
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob: any) => {
          blob.name = 'filename' + images.length;
          resolve(blob);
        },
        'image/jpeg',
        1
      );
    });
  };

  const cancelUploadImg = () => {
    setSrcImg('');
    setTempImg(undefined);
    setOpenCropModal(false);
  };

  const removePhoto = (index: number) => {
    let temp = [...images];
    temp.splice(index, 1);
    updateImagesState(temp);
  };

  return (
    <Grid container>
      {requireError}
      <Grid item xs={12} className={classes.itemContainer}>
        {images.length < 1 ? (
          <>
            <img src={UploadPicIcon} alt="car" />
            {requireError ? (
              <Typography variant="body1" color="error">
                {addEditCarData.requiredImageText}
              </Typography>
            ) : null}
          </>
        ) : (
          <div>
            {images.map((image: any, index: number) =>
              typeof image === 'string' ? (
                <img
                  src={image}
                  alt="car"
                  className={classes.imgStyle}
                  onClick={() => removePhoto(index)}
                  key={'img1' + index}
                />
              ) : image && typeof image !== 'string' ? (
                <img
                  src={URL.createObjectURL(image)}
                  className={classes.imgStyle}
                  alt="car"
                  onClick={() => removePhoto(index)}
                  key={'img1' + index}
                />
              ) : (
                ''
              )
            )}
          </div>
        )}
        {images.length < 20 && (
          <div className={classes.buttonWrapper}>
            <Button variant="contained" className={classes.imgUploadBtn}>
              {addEditCarData.buttons.addPhoto}
              <input
                name="image"
                type="file"
                onChange={uploadImage}
                className={classes.hiddenInputFile}
              />
            </Button>
            <Typography variant="subtitle2" className={classes.infoText}>
              {addEditCarData.imageDimensionPreference}
            </Typography>
            <Typography variant="body1" className={classes.infoText}>
              {addEditCarData.infoText}
            </Typography>
          </div>
        )}
      </Grid>
      <InformationDialog
        message={infoMessage}
        title={infoTitle}
        open={openInfoModel}
        setOpen={() => setOpenInfoModel(false)}
      />
      <Backdrop className={classes.backdrop} open={openCropModal}>
        {srcImg && (
          <>
            <ReactCrop
              src={URL.createObjectURL(srcImg)}
              onImageLoaded={(img) => {
                setTempImg(img);
                // return false;
              }}
              crop={crop}
              // locked
              onChange={(croped) => setCrop(croped)}
            />
            <Box display="flex">
              <Button variant="contained" onClick={getCroppedImg}>
                OK
              </Button>
              <Button variant="contained" onClick={cancelUploadImg}>
                Cancel
              </Button>
            </Box>
          </>
        )}
      </Backdrop>
    </Grid>
  );
};

export default UploadPhotosForm;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemContainer: {
      width: '100%',
      minHeight: '50vh',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      border: '2px dashed #2F80ED',
      flexDirection: 'column'
    },
    buttonWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'right',
      width: '50%',
      textAlign: 'right'
    },
    infoText: {
      // float:"right"
    },
    errorText: {
      // float:"right"
    },
    imgUploadBtn: {
      position: 'relative'
    },
    hiddenInputFile: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      cursor: 'pointer',
      opacity: 0
    },
    imgStyle: {
      cursor: 'pointer',
      width: '200px',
      marginLeft: '5px'
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
  })
);
