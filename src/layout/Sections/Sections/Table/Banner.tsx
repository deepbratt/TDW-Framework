import { Paper, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { paths } from '../../../../routes/paths';
import { ICarCard } from '../../../../Utils/interfaces/products.interface';

export interface BannerProps {
  data: ICarCard[];
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <Paper style={{ boxShadow: 'none', padding: '50px 30px' }}>
      <Grid container justifyContent="center" spacing={2}>
        {data &&
          data.map((item: ICarCard, index) => (
            <Grid key={index} container item xs={6}>
              {item.image && (
                <Grid container item xs={12} justifyContent="center">
                  <img
                    style={{
                      minWidth: '100%',
                      margin: '10px'
                    }}
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
