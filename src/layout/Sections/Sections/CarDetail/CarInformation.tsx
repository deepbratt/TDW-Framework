import { Typography, Grid, Divider } from '@material-ui/core';
import { useStyles } from './useStyles';
import { ICar } from '../../Utils/types1';
import { Colors } from '../../Utils/color.constants';
// import tyreIcon from "../assets/carDetail/tyre 2.png"
import tyreIcon from '../../assets/carDetail/tyre 2.png';
import moment from 'moment';
import { desc } from '../../Utils/carDetail';
const CarInformation = ({
  info,
  feature,
  carTitle,
  city,
  assembly,
  bodyType,
  color,
  engineCapacity,
  updatedAt,
  paragraph
}: ICar) => {
  const { featureBox, title, greyBackground } = useStyles();
  const { gray } = Colors;
  return (
    <Grid container>
      <Grid item xs={12} className={greyBackground} style={{ marginTop: '20px' }}>
        <Typography variant="h6">{desc}</Typography>
        <Typography style={{ marginTop: '10px' }} variant="subtitle1">
          {paragraph}
        </Typography>
      </Grid>
      <Grid
        className={greyBackground}
        item
        container
        xs={12}
        style={{
          display: 'flex',
          marginTop: '20px'
        }}
      >
        <Grid item xs={6}>
          <Typography variant="subtitle1">{info.cityName}</Typography>
          <Divider style={{width:"100%"}}/>
          <Typography variant="subtitle1">{info.assemblyName}</Typography>
          <Divider style={{width:"100%"}}/>
          <Typography variant="subtitle1">{info.bodyName}</Typography>
          <Divider style={{width:"100%"}}/>
          {/* <Typography variant="subtitle1">{info.adName}</Typography> */}
          <Typography variant="subtitle1">{info.colorName}</Typography>
          <Divider style={{width:"100%"}}/>
          <Typography variant="subtitle1">{info.engineName}</Typography>
          <Divider style={{width:"100%"}}/>
          <Typography variant="subtitle1">{info.dateName}</Typography>
          <Divider style={{width:"100%"}}/>
        </Grid>
        <Grid item xs={6} style={{textAlign:"right"}}>
          <Typography variant="subtitle1">{city}</Typography>
          <Divider style={{width:"100%"}}/>
          <Typography variant="subtitle1">{assembly}</Typography>
          <Divider style={{width:"100%"}}/>
          <Typography variant="subtitle1">{bodyType}</Typography>
          <Divider style={{width:"100%"}}/>
          <Typography variant="subtitle1">{color}</Typography>
          <Divider style={{width:"100%"}}/>
          <Typography variant="subtitle1">{engineCapacity}</Typography>
          <Divider style={{width:"100%"}}/>
          <Typography variant="subtitle1">
            {updatedAt && moment(updatedAt).format('MMM D, YYYY')}
          </Typography>
          <Divider style={{width:"100%"}}/>
        </Grid>
      </Grid>
      <Grid
        className={greyBackground}
        item
        xs={12}
        style={{ marginTop: '20px' }}
      >
        <div style={{ color: gray, display: 'flex' }}>
          <Typography variant="h2">{carTitle}</Typography>
        </div>
        <Grid container style={{ display: 'flex', flexFlow: 'wrap' }}>
          {feature ? (
            feature.map((data, index) => {
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarInformation;
