import { makeStyles, Paper, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { paths } from '../../../../routes/paths';
import { ICarCard } from '../../../../Utils/interfaces/products.interface';

const TableBannerStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    padding: '50px 30px 0 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px'
    }
  },
  bannerImage:{
    width:"100%",
    height:"500px",
    margin:"10px",
    [theme.breakpoints.down('sm')]: {
      margin: '5px',
      height:"150px"
    }
  },
}));

export interface BannerProps {
  data: ICarCard[];
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  const { root, bannerImage } = TableBannerStyles();
  return (
    <Paper className={root}>
      <Grid container justifyContent="center" spacing={2}>
        {data &&
          data.map((item: ICarCard, index) => (
            <Grid key={index} container item xs={6}>
              {item.image && (
                <Grid container item xs={12} justifyContent="center">
                  <img
                    className={bannerImage}
                    src={item.image[0]}
                    alt={item.model}
                  />
                </Grid>
              )}

              <Grid item xs={12}>
                <Typography align="center" variant="h2">
                  <NavLink
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={paths.carDetail + item._id}
                  >
                    {item.model}
                  </NavLink>
                </Typography>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

export default Banner;
