import { Grid, makeStyles, Typography } from '@material-ui/core';
import { PointsSectionData } from '../../Utils/constants/language/en/homePageData';

const PointsSectionStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between',
    '&:nth-of-type(even)': {
      flexDirection: 'row-reverse'
    },
    '&:nth-of-type(odd)': {
      flexDirection: 'row'
    }
  },
  title: {
    fontSize: '30px',
    lineHeight: '35px'
  },
  subtitle: {
    fontSize: '20px',
    lineHeight: '23.5px'
  }
}));

const PointsSection: React.FC = () => {
  const { root, title, subtitle } = PointsSectionStyles();
  return (
    <Grid container spacing={2}>
      {PointsSectionData &&
        PointsSectionData.map((item, index) => (
          <Grid key={index} item container xs={12} className={root}>
            <Grid xs={12} md={6} lg={5}>
              <Typography
                className={title}
                color="textPrimary"
                variant="h2"
                gutterBottom
              >
                {item.heading}
              </Typography>
              <Typography
                className={subtitle}
                color="textPrimary"
                variant="body2"
                gutterBottom
              >
                {item.subTitle}
              </Typography>
            </Grid>
            <Grid xs={12} md={6} lg={5}>
              <img height="100%" width="100%" src={item.image} alt="" />
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

export default PointsSection;
