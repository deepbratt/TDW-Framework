import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { CarInfo } from '../../Utils/carDetail';
import moment from 'moment';
import { Table, TableCell, TableContainer, TableRow } from '@material-ui/core';
interface CarInformationProps {
  data: any;
}

const ProductInformation = ({ data }: CarInformationProps) => {
  const info = CarInfo;
  const { city, assembly, bodyType, bodyColor, engineCapacity, updatedAt } = data;
  const tableData = [
    {
      name: info.cityName,
      value: city
    },
    {
      name: info.assemblyName,
      value: assembly
    },
    {
      name: info.bodyName,
      value: bodyType
    },
    {
      name: info.colorName,
      value: bodyColor
    },
    {
      name: info.engineName,
      value: engineCapacity
    },
    {
      name: info.dateName,
      value: updatedAt && moment(updatedAt).format('MMM D, YYYY')
    }
  ];
  return (
    <Grid
      container
      style={{
        display: 'flex'
      }}
    >
      <TableContainer>
        <Table>
          {tableData.map((item: any, index: number) => (
            <TableRow key={item.name + index}>
              <TableCell align="left" style={{ padding: '7px 0' }}>
                <Typography variant="subtitle1">{item.name}</Typography>
              </TableCell>
              <TableCell align="right" style={{ padding: '7px 0' }}>
                <Typography variant="subtitle1">{item.value}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ProductInformation;
