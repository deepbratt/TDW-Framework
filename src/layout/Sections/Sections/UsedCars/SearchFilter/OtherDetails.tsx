import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';
import useStyles from './useStyles';
import { Colors } from '../../../Utils/color.constants';
import {
  detailTitle,
  detailArray,
  body,
  color,
  assembly,
  transmission
} from '../../../Utils/usedCarsContent';
import { Options } from '../../../Utils/types';
const OtherDetailContext = ({ moreOp, handleMoreChange }: any) => {
  
  const { detailGrid, text, select } = useStyles();
  const { white } = Colors;

  return (
    <Grid container>
      <Grid className={detailGrid} item xs={12}>
        <Grid style={{ marginTop: '30px' }} item lg={12} xs={10}>
          <Typography variant="h6" className={text} style={{ color: white }}>
            {detailTitle}
          </Typography>
        </Grid>
        <Grid style={{ marginTop: '50px' }} item lg={4} xs={12} sm={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {detailArray[0]}
          </InputLabel>
          <Select
            value={moreOp.allBody}
            onChange={(e) => {
              handleMoreChange(e);
            }}
            name="allBody"
            className={select}
          >
            {body.map((data, index) => {
              return (
                <MenuItem key={`body ${index}`} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: '50px' }} item lg={4} xs={12} sm={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {detailArray[1]}
          </InputLabel>
          <Select
            value={moreOp.allColors}
            onChange={(e) => {
              handleMoreChange(e);
            }}
            name="allColors"
            className={select}
          >
            {color.map((data, index) => {
              return (
                <MenuItem key={`color ${index}`} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        {/* <Grid style={{ marginTop: '50px' }} item lg={4} xs={12} sm={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {detailArray[2]}
          </InputLabel>
          <Select
            value={moreOp.registered}
            onChange={(e) => {
              handleMoreChange(e);
            }}
            name="registered"
            className={select}
          >
            <MenuItem value={detailArray[2]}>{detailArray[2]}</MenuItem>;
          </Select>
        </Grid> */}
        <Grid style={{ marginTop: '50px' }} item lg={4} xs={12} sm={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {detailArray[3]}
          </InputLabel>
          <Select
            value={moreOp.assemblyTypes}
            onChange={(e) => {
              handleMoreChange(e);
            }}
            name="assemblyTypes"
            className={select}
          >
            {assembly.map((data, index) => {
              return (
                <MenuItem key={`assembly ${index}`} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: '50px' }} item lg={4} xs={12} sm={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {detailArray[4]}
          </InputLabel>
          <Select
            value={moreOp.transmissionTypes}
            onChange={(e) => {
              handleMoreChange(e);
            }}
            name="transmissionTypes"
            className={select}
          >
            {transmission.map((data, index) => {
              return (
                <MenuItem key={`transmission ${index}`} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: '50px' }} item lg={4} xs={12} sm={12}>
          <InputLabel
            style={{ color: white, marginBottom: '10px', display: 'none' }}
          >
            {detailArray[5]}
          </InputLabel>
          <Select className={select} style={{ display: 'none' }}></Select>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OtherDetailContext;
