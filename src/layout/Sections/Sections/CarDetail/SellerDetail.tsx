import { Typography, Grid, Divider } from '@material-ui/core';
import moment from 'moment';
import { seller, sellerInfo } from '../../Utils/carDetail';

const SellerDetail = ({ createdBy }: any) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3">{seller}</Typography>
        <Grid
          item
          xs={12}
          container
        >
          <Grid item xs={6}>
            <Typography variant="subtitle1">{sellerInfo.firstName}</Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">{sellerInfo.lastName}</Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">{sellerInfo.gender}</Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">{sellerInfo.city}</Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">{sellerInfo.province}</Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">{sellerInfo.memberSince}</Typography>
            <Divider style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={6} style={{textAlign:"right"}}>
            <Typography variant="subtitle1">
              {createdBy.firstName
                ? createdBy.firstName
                : sellerInfo.notAvailable}
            </Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">
              {createdBy.lastName
                ? createdBy.lastName
                : sellerInfo.notAvailable}
            </Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">
              {createdBy.gender ? createdBy.gender : sellerInfo.notAvailable}
            </Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">
              {createdBy.city ? createdBy.city : sellerInfo.notAvailable}
            </Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">
              {createdBy.province
                ? createdBy.province
                : sellerInfo.notAvailable}
            </Typography>
            <Divider style={{ width: '100%' }} />
            <Typography variant="subtitle1">
              {createdBy.createdAt
                ? moment(createdBy.createdAt).format("DD MMMM YY")
                : sellerInfo.notAvailable}
            </Typography>
            <Divider style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SellerDetail;
