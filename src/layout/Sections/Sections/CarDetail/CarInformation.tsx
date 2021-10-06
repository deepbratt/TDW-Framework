import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './useStyles';
import { ICar } from '../../Utils/types1';
// import tyreIcon from "../assets/carDetail/tyre 2.png"
// import tyreIcon from '../../assets/carDetail/tyre 2.png';
import moment from 'moment';
const CarInformation = ({
  info,
  city,
  assembly,
  bodyType,
  color,
  engineCapacity,
  updatedAt,
}: ICar) => {
  const { greyBackground } = useStyles();
  return (
    <Grid container
      className={greyBackground}
      style={{
        display: 'flex',
        height: '100%'
      }}
    >
      <Grid item xs={6} style={{height:"100%"}}>
        <Typography variant="subtitle1">{info.cityName}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">{info.assemblyName}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">{info.bodyName}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">{info.colorName}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">{info.engineName}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">{info.dateName}</Typography>
        <Divider style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={6} style={{ textAlign: 'right' }}>
        <Typography variant="subtitle1">{city}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">{assembly}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">{bodyType}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">{color}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">{engineCapacity}</Typography>
        <Divider style={{ width: '100%' }} />
        <Typography variant="subtitle1">
          {updatedAt && moment(updatedAt).format('MMM D, YYYY')}
        </Typography>
        <Divider style={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
};

export default CarInformation;
