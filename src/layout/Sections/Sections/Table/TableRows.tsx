import { v4 as uuidv4 } from 'uuid';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { ICarCard } from '../../../../Utils/interfaces/products.interface';
import { useStyles } from './useStyles';

const TableRows = ({ items, array }: any) => {
  const { cell, stickyCell } = useStyles();
  return (
    <>
      {array && (
        <>
          <TableRow>
            <TableCell classes={{ root: stickyCell }} align="left">
              {array[0]}
            </TableCell>
            {items &&
              items.map((item: ICarCard) => (
                <TableCell key={uuidv4()} className={cell} align="center">
                  {item.price.toLocaleString()}
                </TableCell>
              ))}
          </TableRow>
          <TableRow>
            <TableCell classes={{ root: stickyCell }} align="left">
              {array[1]}
            </TableCell>
            {items &&
              items.map((item: ICarCard) => (
                <TableCell key={uuidv4()} className={cell} align="center">
                  {item.model}
                </TableCell>
              ))}
          </TableRow>
          <TableRow>
            <TableCell classes={{ root: stickyCell }} align="left">
              {array[2]}
            </TableCell>
            {items &&
              items.map((item: ICarCard) => (
                <TableCell key={uuidv4()} className={cell} align="center">
                  {item.make}
                </TableCell>
              ))}
          </TableRow>
          <TableRow>
            <TableCell classes={{ root: stickyCell }} align="left">
              {array[3]}
            </TableCell>
            {items &&
              items.map((item: ICarCard) => (
                <TableCell key={uuidv4()} className={cell} align="center">
                  {item.engineType}
                </TableCell>
              ))}
          </TableRow>
          <TableRow>
            <TableCell classes={{ root: stickyCell }} align="left">
              {array[4]}
            </TableCell>
            {items &&
              items.map((item: ICarCard) => (
                <TableCell key={uuidv4()} className={cell} align="center">
                  {item.milage}
                </TableCell>
              ))}
          </TableRow>
          <TableRow>
            <TableCell classes={{ root: stickyCell }} align="left">
              {array[5]}
            </TableCell>
            {items &&
              items.map((item: ICarCard) => (
                <TableCell key={uuidv4()} className={cell} align="center">
                  {item.transmission}
                </TableCell>
              ))}
          </TableRow>
          <TableRow>
            <TableCell classes={{ root: stickyCell }} align="left">
              {array[6]}
            </TableCell>
            {items &&
              items.map((item: ICarCard) => (
                <TableCell key={uuidv4()} className={cell} align="center">
                  {item.modelYear}
                </TableCell>
              ))}
          </TableRow>
        </>
      )}
    </>
  );
};

export default TableRows;
