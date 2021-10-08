import { Grid, Typography } from '@material-ui/core';
import { carFeatures } from '../../Utils/Text';
import tyreIcon from '../../assets/carDetail/tyre 2.png';
import { useStyles } from './useStyles';
import { Colors } from '../../Utils/color.constants';

interface CarFeaturesProps {
  features: Array<any>;
}
const CarFeatures = ({ features }: CarFeaturesProps) => {
  const {  featureBox, title } = useStyles();
  const { gray } = Colors;
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item xs={12} style={{ color: gray}}>
        <Typography variant="h2">{carFeatures}</Typography>
      </Grid>
      {/* <Grid container style={{flexWrap: 'wrap' }}> */}
        {features ? (
          features.map((data, index) => {
            return (
              <Grid
                className={featureBox}
                key={`title ${index}`}
                item
                lg={6}
                md={4}
                sm={3}
                xs={8}
              >
                <section style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={data.image || tyreIcon}
                    alt="icon"
                    width="25px"
                    height="auto"
                  />
                  <Typography className={title} variant="subtitle1">
                    {data.name}
                  </Typography>
                </section>
              </Grid>
            );
          })
        ) : (
          <Typography>No Features Available</Typography>
        )}
      {/* </Grid> */}
    </Grid>
  );
};

export default CarFeatures;
