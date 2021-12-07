import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createTheme';
import { useState } from 'react';
import UploadPicIcon from '../assets/icons/uploadPicIcon.png';
import InformationDialog from '../components/InformationDialog';
import addEditCarData from '../Utils/constants/language/en/addEditCarData';
import 'react-image-crop/dist/ReactCrop.css';
import { IconButton } from '@material-ui/core';
import CancelRounded from '@material-ui/icons/CancelRounded';
import { useTheme } from '@material-ui/core/styles';
import {  addFormData } from '../Utils/API/API';
import { API_ENDPOINTS } from '../Utils/API/endpoints';

interface IUploadPhotosFormProps {
  images: any;
  updateImagesState: (img: any) => void;
  requireError: any;
  formData: any;
  setIsLoading: any;
  setFormData: any;
}

const UploadPhotosForm = ({
  images,
  updateImagesState,
  requireError,
  formData,
  setIsLoading,
  setFormData
}: IUploadPhotosFormProps) => {
  const classes = useStyles();
  const themes = useTheme();
  const [openInfoModel, setOpenInfoModel] = useState(false);
  const [infoMessage, setInfoMessage] = useState<string | any>('');
  const [infoTitle, setInfoTitle] = useState('');

  const uploadImage = (e: any) => {
    let oneMb = 1024 * 1024;
    let temp = [...images];
    let imageFiles = e.target.files;
    let sizeError = false;
    let arrayLengthError = false;
    for (let i = 0; i < imageFiles.length; i++) {
      let imageSize = imageFiles[i].size;
      if (imageSize > 5 * oneMb) {
        sizeError = true;
        break;
      } else {
        if (temp.length > 19) {
          arrayLengthError = true;
          break;
        }
        temp.push(imageFiles[i]);        
      }
    }
    setInfoTitle('Error!');
    let errorText =
      sizeError && arrayLengthError ? (
        <div>
          <span>{addEditCarData.imageArrayLength}</span>
          <br />
          <span>{addEditCarData.infoText}</span>
        </div>
      ) : sizeError ? (
        addEditCarData.infoText
      ) : arrayLengthError ? (
        addEditCarData.imageArrayLength
      ) : (
        ''
      );
    setInfoMessage(errorText);
    setOpenInfoModel(sizeError || arrayLengthError);
    if (!sizeError && !arrayLengthError) {
      setIsLoading(true);
      let imageUploadPromises: any[] = [];
      for (let i = 0; i < imageFiles.length; i++) {
        let fd: FormData = new FormData();
        fd.append('image', imageFiles[i]);
        imageUploadPromises.push(addFormData(`${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS_IMAGES}`, fd));
      }
      Promise.all(imageUploadPromises).then(responses => {
        let imagesArray: any[] = [...images];
        responses.forEach(response => {
          if (temp.length < 1) {
            setFormData({ name: 'selectedImage', value: imageFiles[0] });
          }
          response.data.data.array.map((image: any) => imagesArray.push(image));
        })
        updateImagesState(imagesArray);
      }).then(() => setIsLoading(false));
    }
    e.target.value = null;
  };

  const selectImage = (img: any) => {
    setFormData({ name: 'selectedImage', value: img });
  };

  const removePhoto = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    let temp = [...images];
    if (temp[index] === formData.selectedImage) {
      setFormData({ name: 'selectedImage', value: false });
    }
    temp.splice(index, 1);
    updateImagesState(temp);
  };

  return (
    <Grid container>
      {requireError}
      <Grid item xs={12} className={classes.itemContainer}>
        <Typography variant="body1">
          {addEditCarData.selectedImageText}
        </Typography>
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
          <div className={classes.imagesRoot}>
            {images.map((image: any, index: number) =>
              typeof image === 'string' ? (
                <div
                  className={classes.imageRoot}
                  onClick={() => selectImage(image)}
                  style={{
                    border:
                      formData.selectedImage === image
                        ? `5px solid ${themes.palette.primary.main}`
                        : '0px',
                    cursor: 'pointer'
                  }}
                >
                  <IconButton
                    size="small"
                    className={classes.closeIcon}
                    onClick={(e) => removePhoto(index, e)}
                  >
                    <CancelRounded fontSize="small" />
                  </IconButton>
                  <img
                    src={image}
                    alt="car"
                    className={classes.imgStyle}
                    key={'img1' + index}
                  />
                </div>
              ) : image && typeof image !== 'string' ? (
                <div
                  className={classes.imageRoot}
                  onClick={() => selectImage(image)}
                  style={{
                    border:
                      formData.selectedImage === image
                        ? `5px solid ${themes.palette.primary.main}`
                        : '0px',
                    cursor: 'pointer'
                  }}
                >
                  <IconButton
                    size="small"
                    className={classes.closeIcon}
                    onClick={(e) => removePhoto(index, e)}
                  >
                    <CancelRounded fontSize="small" />
                  </IconButton>
                  <img
                    src={URL.createObjectURL(image)}
                    className={classes.imgStyle}
                    alt="car"
                    key={'img1' + index}
                  />
                </div>
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
                multiple
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
      justifyContent: 'center',
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
      position: 'relative',
      marginTop: '5px'
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
      maxWidth: '800px',
      flexWrap: 'wrap',
      margin: '15px 0'
    },
    imageRoot: {
      margin: '5px',
      position: 'relative',
      width: '100%',
      height: '250px',
      maxWidth: '250px',
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
  })
);
