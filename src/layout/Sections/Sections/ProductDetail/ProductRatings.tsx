import { Grid, Box, Typography, LinearProgress } from '@material-ui/core';
import type { } from '@material-ui/lab/themeAugmentation';
import createTheme from '@material-ui/core/styles/createTheme';
import { ThemeProvider } from '@material-ui/core';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import { useStyles } from './useStyles';
import { Colors } from '../../Utils/color.constants';

interface ProductRatingsProps {
  ratings: any;
}
const ProductRatings = ({ ratings }: ProductRatingsProps) => {
  const { featureBox, ratingTotal, ratingSubheading, progressBarContainer, progressBarBadge, ratingIndividual, reviewTitle, reviewText } = useStyles();

  // Destructuring "ratings" object:
  const { totalRating, numOfRatings, numOfReviews, percentage, allRatings } = ratings;

  // Defining custom colors for progress bars
  const progressBarGreen = createTheme({
    overrides: {
      MuiLinearProgress: {
        barColorPrimary: {
          backgroundColor: Colors.greenReview
        }
      },
    },
  });
  const progressBarYellow = createTheme({
    overrides: {
      MuiLinearProgress: {
        barColorPrimary: {
          backgroundColor: Colors.yellowReview
        }
      },
    },
  });
  const progressBarRed = createTheme({
    overrides: {
      MuiLinearProgress: {
        barColorPrimary: {
          backgroundColor: Colors.redReview
        }
      },
    },
  });

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item xs={12} container spacing={2} style={{ marginBottom: '1rem'}}>
        <Grid item xs={3} container spacing={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className={ratingTotal} style={{ backgroundColor: Colors.greenReview }}>
            <Typography variant="h2" component="span" align="center">
              {totalRating}
            </Typography>
            <StarRateRoundedIcon />
          </div>
          <div className={ratingSubheading}>
            <Typography component="span" align="center">
              {numOfRatings} Ratings
            </Typography>
            <Typography component="span" align="center">
              {'&'}
            </Typography>
            <Typography component="span" align="center">
              {numOfReviews} Reviews
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8} style={{ marginLeft: '5px' }}>
          <Grid className={progressBarContainer}>
            {percentage && percentage.length > 0 && (
              percentage.map((item: any) =>  (
                <Box display="flex" alignItems="center">
                  <Box minWidth={40} className={progressBarBadge}>
                    <Typography variant="h4" component="span" align="center">
                      {item.rating}
                    </Typography>
                    <StarRateRoundedIcon />
                  </Box>
                  <Box width="100%" mr={2}>
                    <ThemeProvider theme={(item.rating > 3) ? progressBarGreen : (item.rating < 3) ? progressBarRed : progressBarYellow}>
                      <LinearProgress value={item.value} variant="determinate" />
                    </ThemeProvider>
                  </Box>
                  <Box minWidth={40}>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.value}%`}
                    </Typography>
                  </Box>
                </Box>
              ))
            )}            
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container style={{flexWrap: 'wrap' }}> */}
      {allRatings && allRatings.length > 0 ? (
        allRatings.map((data: any, index: any) => {
          return (
            <Grid
              className={featureBox}
              key={`title ${index}`}
              item
              xs={12}
            >
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'start', alignItems: 'flexStart' }}>
                  <Grid item xs={4} className={ratingIndividual} style={{ backgroundColor: data.rating > 3 ? Colors.greenReview : data.rating < 3 ? Colors.redReview : Colors.yellowReview }}>
                    <Typography variant="h4" component="span" style={{ fontWeight: 'bolder' }}>
                      {data.rating}
                    </Typography>
                    <StarRateRoundedIcon />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography className={reviewTitle} variant="subtitle1">
                      {data.review.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                <Typography className={reviewText}>
                  {data.review.description}
                </Typography>
              </Grid>
            </Grid>
          );
        })
      ) : (
        <Typography>No Ratings Available</Typography>
      )}
      {/* </Grid> */}
    </Grid>
  );
};

export default ProductRatings;
