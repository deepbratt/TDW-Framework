import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import BannerImg from '../../assets/Home/Banner.png';
import CustomButton from '../../components/CustomButton';
import { FIND_YOUR_CAR } from '../../Utils/constants/language/en/buttonLabels';
import { BannerData } from '../../Utils/constants/language/en/homePageData';
import { paths } from '../../routes/paths';
import { useHistory } from 'react-router';

const HomeBannerStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minWidth: '100%',
    minHeight: '420px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '280px'
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '150px'
    },
    '& > img': {
      maxHeight: '580px',
      width: '100%',
      [theme.breakpoints.up('xl')]: {
        maxHeight: '800px'
      }
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
    top: '30%',
    left: '10%',
    zIndex: 111,
    backgroundColor: theme.palette.common.white,
    opacity: 0.9,
    borderRadius: '10px',
    padding: '32px 50px',
    [theme.breakpoints.down('xs')]: {
      padding: '15px 20px',
      top: '110%',
      left: 'auto',
      margin: '10px 15px',
      opacity: 1
    }
  },
  cardHeading: {
    fontSize: '45px',
    lineHeight: '52px',
    margin: '0 20px',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '26px'
    }
  },
  cardContent: {
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const HomeBanner: React.FC = () => {
  const history = useHistory();
  const { root, after, cardRoot, cardHeading } = HomeBannerStyles();
  return (
    <div className={root}>
      <img src={BannerImg} alt="Guy in car showing keys." />
      <div className={after} />
      <Card className={cardRoot}>
        <Typography align="center" className={cardHeading} variant="h2">
          {BannerData.CARD_HEADER}
        </Typography>

        <CustomButton
          fullWidth
          onClick={() => history.push(paths.cars)}
        >
          {FIND_YOUR_CAR}
        </CustomButton>
      </Card>
    </div>
  );
};

export default HomeBanner;
