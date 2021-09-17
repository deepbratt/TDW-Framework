import { Card, Typography, makeStyles } from '@material-ui/core';
import BannerImg from '../../assets/Home/Banner.png';
import WheelImg from '../../assets/icons/wheel_black.png';
import CustomButton from '../../components/CustomButton';
import { FIND_YOUR_CAR } from '../../Utils/constants/language/en/buttonLabels';
import { BannerData } from '../../Utils/constants/language/en/homePageData';

const HomeBannerStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minWidth: '100%',

    '& > img': {
      minWidth: '100%',
      maxHeight: '580px'
    }
  },
  after: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.common.black,
    opacity: 0.6,
    filter: 'blur(10px)'
  },
  cardRoot: {
    position: 'absolute',
    maxWidth: '330px',
    top: 190,
    left: '10%',
    backgroundColor: theme.palette.common.white,
    opacity: 0.9,
    borderRadius: '10px',
    padding: '32px 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '15px 20px'
    }
  },
  cardHeading: {
    fontSize: '45px',
    lineHeight: '52px',
    margin: '0 20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '26px'
    }
  },
  cardContent: {
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center'
  }
}));

const HomeBanner: React.FC = () => {
  const { root, after, cardRoot, cardHeading, cardContent } =
    HomeBannerStyles();
  return (
    <div className={root}>
      <img src={BannerImg} alt="Guy in car showing keys." />
      <div className={after} />
      <Card className={cardRoot}>
        <Typography align="center" className={cardHeading} variant="h2">
          {BannerData.CARD_HEADER}
        </Typography>
        <div className={cardContent}>
          <Typography variant="h4">
            {BannerData.CARD_SUBTITLES.TEST_DRIVE}
          </Typography>
          <img
            style={{ margin: '5px' }}
            height="25px"
            src={WheelImg}
            alt="steering wheel icon"
          />
          <Typography variant="h4">
            {BannerData.CARD_SUBTITLES.RETURN}
          </Typography>
        </div>
        <CustomButton fullWidth>{FIND_YOUR_CAR}</CustomButton>
      </Card>
    </div>
  );
};

export default HomeBanner;
