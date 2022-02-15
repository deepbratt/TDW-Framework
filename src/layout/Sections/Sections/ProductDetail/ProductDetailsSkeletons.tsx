import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonsStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    boxShadow: 'none',
    position: 'relative',
    // maxWidth: "800px",
    width: '100%',
    marginTop: '10px'
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  flexSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const ProductDetailsSkeletons: React.FC = () => {
  const { root, flexCenter, flexSpaceBetween } = SkeletonsStyles();

  return (
    <Card className={root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Skeleton animation="wave" variant="rect" height="600px" />
        </Grid>
        <Grid className={flexSpaceBetween} item container xs={12} sm={6}>
          <Grid style={{ margin: '20px' }} item xs={12}>
            <Skeleton variant="text" height="40px" width="60%" />
            <Skeleton variant="text" width="20%" />
          </Grid>
          <Grid
            className={flexSpaceBetween}
            style={{ margin: '0 20px' }}
            item
            container
            xs={12}
          >
            <Grid item xs={3}>
              <Skeleton variant="text" height="40px" />
            </Grid>
            <Grid item xs={3}>
              <Skeleton variant="text" height="40px" />
            </Grid>
            <Grid item xs={3}>
              <Skeleton variant="text" height="40px" />
            </Grid>
          </Grid>
          {[...Array(6)].map((_, index) => (
            <Grid
              style={{ margin: '0 20px', alignContent: 'flex-start' }}
              key={index}
              className={flexSpaceBetween}
              item
              container
              xs={12}
            >
              <Grid item xs={4}>
                <Skeleton variant="text" height="15px" />
              </Grid>
              <Grid item xs={4}>
                <Skeleton variant="text" height="15px" />
              </Grid>
            </Grid>
          ))}
          <Grid
            className={flexCenter}
            style={{ flexDirection: 'row' }}
            item
            xs={12}
          >
            <Skeleton variant="text" height="70px" width="90%" />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductDetailsSkeletons;
