import { Typography, Grid } from '@material-ui/core';
import { useStyles } from './useStyles';
import { ICar } from '../../Utils/types1';
import { Colors } from '../../Utils/color.constants';
import ConvertDate from '../../../../components/convertDate';
// import tyreIcon from "../assets/carDetail/tyre 2.png"
import tyreIcon from '../../assets/carDetail/tyre 2.png';
const CarInformation = ({
  info,
  feature,
  carTitle,
  city,
  assembly,
  bodyType,
  color,
  engineCapacity,
  updatedAt
}: ICar) => {
  const { Info, card, featureBox, title } = useStyles();
  const { gray } = Colors;
  return (
    <Grid container>
      <Grid className={Info} item xs={12}>
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10px'
          }}
        >
          <Grid item lg={3}>
            <Typography variant="subtitle1">{info.cityName}</Typography>
            <Typography variant="subtitle1">{info.assemblyName}</Typography>
            <Typography variant="subtitle1">{info.bodyName}</Typography>
            {/* <Typography variant="subtitle1">{info.adName}</Typography> */}
            <Typography variant="subtitle1">{info.colorName}</Typography>
            <Typography variant="subtitle1">{info.engineName}</Typography>
            <Typography variant="subtitle1">{info.dateName}</Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="subtitle1">{city}</Typography>
            <Typography variant="subtitle1">{assembly}</Typography>
            <Typography variant="subtitle1">{bodyType}</Typography>
            <Typography variant="subtitle1">{color}</Typography>
            <Typography variant="subtitle1">{engineCapacity}</Typography>
            <Typography variant="subtitle1">
              {updatedAt && ConvertDate(updatedAt)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={card} item xs={12}>
        <Grid style={{ color: gray }} item xs={12}>
          <Typography variant="h2">{carTitle}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: 'flex', flexFlow: 'wrap', marginTop: '10px' }}
        >
          {feature ? (
            feature.map((data, index) => {
              return (
                <>
                  <Grid
                    className={featureBox}
                    key={`title ${index}`}
                    item
                    lg={6}
                    sm={3}
                    xs={8}
                  >
                    <section style={{ display: 'flex', alignItems:"center" }}>
                      <img src={data.image || tyreIcon} alt="icon" width="25px" height="auto"/>
                      <Typography className={title} variant="subtitle1">
                        {data.name}
                      </Typography>
                    </section>
                  </Grid>
                </>
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
