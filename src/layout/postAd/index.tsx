import { Grid, Typography } from "@material-ui/core";
import AprroveIcon from "../../assets/icons/approve.png";
import CustomButton from "../../CustomButton";
// import { POST_YOUR_AD } from "../../utils/constants/language/en/buttonLabels";
import PostAdStyles from "./styles";

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
  const { heading, coverImg, listItems } = data;
  const { root, itemRoot, iconStyle, featureImgStyle } = PostAdStyles();
  return (
    <Grid item container spacing={5} alignContent="center">
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
        {/* <CustomButton>{POST_YOUR_AD}</CustomButton> */}
      </Grid>
    </Grid>
  );
};

export default PostAd;
