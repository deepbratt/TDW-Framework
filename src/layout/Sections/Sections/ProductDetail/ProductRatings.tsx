import { Grid, Box, Typography, LinearProgress } from '@material-ui/core';
import { carFeatures } from '../../Utils/Text';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import { useStyles } from './useStyles';
import { Colors } from '../../Utils/color.constants';

interface ProductRatingsProps {
  ratings: Array<any>;
}
const ProductRatings = ({ ratings }: ProductRatingsProps) => {
  const { featureBox, ratingTotal, ratingSubheading, progressBarContainer, progressBarBadge, ratingIndividual, reviewTitle, reviewText } = useStyles();
  const { gray } = Colors;
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item xs={12} container spacing={2} style={{ marginBottom: '1rem'}}>
        <Grid item xs={3} container spacing={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className={ratingTotal}>
            <Typography variant="h2" component="span" align="center">
              {4.3}
            </Typography>
            <StarRateRoundedIcon />
          </div>
          <div className={ratingSubheading}>
            <Typography component="span" align="center">
              {220} Ratings
            </Typography>
            <Typography component="span" align="center">
              {'&'}
            </Typography>
            <Typography component="span" align="center">
              {72} Reviews
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8} style={{ marginLeft: '5px' }}>
          <Grid className={progressBarContainer}>
            <Box display="flex" alignItems="center">
              <Box minWidth={40} className={progressBarBadge}>
                <Typography variant="h4" component="span" align="center">
                  {5}
                </Typography>
                <StarRateRoundedIcon />              
              </Box>
              <Box width="100%" mr={2}>
                <LinearProgress value={67} variant="determinate" color="secondary" />
              </Box>
              <Box minWidth={40}>
                <Typography variant="body2" color="textSecondary">
                  {`${67}%`}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box minWidth={40} className={progressBarBadge}>
                <Typography variant="h4" component="span" align="center">
                  {4}
                </Typography>
                <StarRateRoundedIcon />              
              </Box>
              <Box width="100%" mr={2}>
                <LinearProgress value={14} variant="determinate" color="secondary" />
              </Box>
              <Box minWidth={40}>
                <Typography variant="body2" color="textSecondary">
                  {`${14}%`}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box minWidth={40} className={progressBarBadge}>
                <Typography variant="h4" component="span" align="center">
                  {3}
                </Typography>
                <StarRateRoundedIcon />              
              </Box>
              <Box width="100%" mr={2}>
                <LinearProgress value={9} variant="determinate" color="secondary" />
              </Box>
              <Box minWidth={40}>
                <Typography variant="body2" color="textSecondary">
                  {`${9}%`}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box minWidth={40} className={progressBarBadge}>
                <Typography variant="h4" component="span" align="center">
                  {2}
                </Typography>
                <StarRateRoundedIcon />              
              </Box>
              <Box width="100%" mr={2}>
                <LinearProgress value={4} variant="determinate" color="secondary" />
              </Box>
              <Box minWidth={40}>
                <Typography variant="body2" color="textSecondary">
                  {`${4}%`}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box minWidth={40} className={progressBarBadge}>
                <Typography variant="h4" component="span" align="center">
                  {1}
                </Typography>
                <StarRateRoundedIcon />              
              </Box>
              <Box width="100%" mr={2}>
                <LinearProgress value={6} variant="determinate" color="secondary" />
              </Box>
              <Box minWidth={40}>
                <Typography variant="body2" color="textSecondary">
                  {`${6}%`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container style={{flexWrap: 'wrap' }}> */}
      {ratings ? (
        ratings.map((data: any, index: any) => {
          return (
            <Grid
              className={featureBox}
              key={`title ${index}`}
              item
              xs={12}
            >
              <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'start', alignItems: 'flexStart' }}>
                  <Grid item xs={4} className={ratingIndividual}>
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
