import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import AprroveIcon from '../../assets/icons/approve.png';
import Section from '../../components';
import CustomButton from '../../components/CustomButton';
import { routes } from '../../routes/paths';
import { POST_YOUR_AD } from '../../Utils/constants/language/en/buttonLabels';
import PostAdStyles from './styles';

export interface PostAdProps {
  data: {
    heading: string;
    coverImg: string;
    listItems: string[];
    buttonLink: string;
  };
}

/**
 * @param {object} data {heading, coverImg, listItems[], buttonLink}
 **/

const PostAd: React.FC<PostAdProps> = ({ data }) => {
  const history = useHistory();
  const { heading, coverImg, listItems } = data;
  const { root, itemRoot, iconStyle, featureImgStyle } = PostAdStyles();
  return (
    <Section>
      <Grid container spacing={5} alignContent="center">
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            {heading}
          </Typography>
        </Grid>
        <Grid className={root} item xs={12} md={5}>
          {listItems &&
            listItems.map((item, index) => (
              <div key={index} className={itemRoot}>
                <img className={iconStyle} src={AprroveIcon} alt="" />
                <Typography variant="subtitle2" color="textSecondary">
                  {item}
                </Typography>
              </div>
            ))}
        </Grid>
        <Grid className={root} item xs={12} md={5}>
          <img className={featureImgStyle} src={coverImg} alt="" />
        </Grid>
        <Grid item xs={12}>
          <CustomButton onClick={() => history.push(routes.addEditCar.substr(0, routes.addEditCar.lastIndexOf('/')))}>
            {POST_YOUR_AD}
          </CustomButton>
        </Grid>
      </Grid>
    </Section>
  );
};

export default PostAd;
