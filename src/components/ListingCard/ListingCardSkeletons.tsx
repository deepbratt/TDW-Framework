import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import ListingCardStyles from './styles';

export interface ListingCardSkeletonsProps {
  layoutType: string;
}

const ListingCardSkeletons: React.FC<ListingCardSkeletonsProps> = ({
  layoutType
}) => {
  const { root, grid } = ListingCardStyles();
  return (
    <Card className={layoutType === 'list' ? root : grid}>
      <Grid container>
        <Grid item xs={12} sm={layoutType === 'list' ? 4 : 12}>
          <Skeleton variant="rect" height="150px" />
        </Grid>
        <Grid item container xs={12} sm={layoutType === 'list' ? 8 : 12}>
          <Grid style={{ margin: '20px' }} item xs={12}>
            <Skeleton variant="text" width="60%" />
          </Grid>
          <Grid style={{ margin: '20px' }} item container xs={12}>
            <Grid item xs={3}>
              <Skeleton variant="text" width="60%" />
            </Grid>
            <Grid item xs={3}>
              <Skeleton variant="text" width="60%" />
            </Grid>
            <Grid item xs={3}>
              <Skeleton variant="text" width="60%" />
            </Grid>
            <Grid item xs={3}>
              <Skeleton variant="text" width="60%" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ListingCardSkeletons;
