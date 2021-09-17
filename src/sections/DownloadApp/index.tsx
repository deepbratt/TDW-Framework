import { Card, CardMedia, CardActions, Icon } from '@material-ui/core';
import CustomButton from '../../components/CustomButton';
import AppleIcon from '@material-ui/icons/Apple';
import PlayStoreIcon from '../../assets/icons/playStore.png';
import DownloadAppStyles from './styles';
import {
  FOR_ANDROID,
  FOR_IOS
} from '../../Utils/constants/language/en/buttonLabels';
export interface DownloadAppProps {
  featureImg: string;
}

const DownloadApp: React.FC<DownloadAppProps> = ({ featureImg }) => {
  const { root, btn, cardMedia, cardAction } = DownloadAppStyles();
  return (
    <Card className={root}>
      <div className={cardAction}>
        <CustomButton
          fullWidth
          className={btn}
          startIcon={<AppleIcon />}
          color="undefined"
        >
          {FOR_IOS}
        </CustomButton>
        <CustomButton
          fullWidth
          className={btn}
          color="undefined"
          startIcon={
            <img height="18px" src={PlayStoreIcon} alt="play store icon" />
          }
        >
          {FOR_ANDROID}
        </CustomButton>
      </div>
      <img className={cardMedia} src={featureImg} alt="" />
    </Card>
  );
};

export default DownloadApp;
