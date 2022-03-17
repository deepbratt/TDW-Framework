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
    minHeight: '340px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      minHeight: '300px'
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '240px'
    },
    '& > img': {
      width: '100%',
      minHeight: '340px',
      [theme.breakpoints.down('sm')]: {
        minHeight: '300px'
      },
      [theme.breakpoints.down('xs')]: {
        minHeight: '240px'
      },
      maxHeight: '580px',
      [theme.breakpoints.up('xl')]: {
        maxHeight: '800px'
      }
    }
  },
  bannerHeading: {
    position: 'absolute',
    top: 2,
    textAlign: 'center',
    width: '100%',
    height: '100%',    
    fontSize: '22px',
    lineHeight: '30px',
    color: '#000000',
    textShadow: '0px 4px 4px #FFFFFF',
    [theme.breakpoints.up('sm')]: {
      top: 10,
      fontSize: '35px',
      lineHeight: '40px'
    },
    [theme.breakpoints.up('lg')]: {
      top: 12,
      fontSize: '40px',
      lineHeight: '50px'
    }
  },
  bannerText: {
    position: 'absolute',
    top: 190,    
    fontSize: '16px',
    lineHeight: '18px',
    textAlign: 'center',
    verticalAlign: 'bottom',
    width: '100%',
    height: '100%', 
    color: '#FFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.up('sm')]: {
      top: 250,
      fontSize: '20px',
      lineHeight: '25px'
    },
    [theme.breakpoints.up('md')]: {
      top: 240,
      fontSize: '26px',
      lineHeight: '30px'
    },
    [theme.breakpoints.up('lg')]: {
      top: '25vw',
      fontSize: '32px',
      lineHeight: '36px'
    }
  },
  bannerTextBlue: {
    color: '#05409D',
    backgroundColor: '#FFF'
  },
  after: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, #FFFFFF 2.44%, rgba(255, 255, 255, 0) 42.26%)'
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
  const { root, after, bannerHeading, bannerText, bannerTextBlue } = HomeBannerStyles();
  return (
    <div className={root}>
      <img src={BannerImg} alt="Homepage Banner" />      
      <div className={after} />
      <h3 className={bannerHeading}>{BannerData.BANNER_HEADING}</h3>
      <p className={bannerText}><span className={bannerTextBlue}>&nbsp; {BannerData.BANNER_TEXT1} &nbsp;</span>{BannerData.BANNER_TEXT2}</p>
      {/* <Card className={cardRoot}>
        <Typography align="center" className={cardHeading} variant="h1">
          {BannerData.CARD_HEADER}
        </Typography>

        <CustomButton
          fullWidth
          onClick={() => history.push(paths.cars)}
        >
          {FIND_YOUR_CAR}
        </CustomButton>
      </Card> */}
    </div>
  );
};

export default HomeBanner;
