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
  const { root, btn, cardMedia } = DownloadAppStyles();
  return (
    <div className={root}>
      {/* <CustomButton
        fullWidth
        className={btn}
        startIcon={<AppleIcon />}
        
      >
        {FOR_IOS}
      </CustomButton>
      <CustomButton
        fullWidth
        className={btn}
        
        startIcon={
          <img height="18px" src={PlayStoreIcon} alt="play store icon" />
        }
      >
        {FOR_ANDROID}
      </CustomButton> */}
      <img className={cardMedia} src={featureImg} alt="" />
    </div>
  );
};

export default DownloadApp;
