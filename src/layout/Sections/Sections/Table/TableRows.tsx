import { TableRow, TableCell } from '@material-ui/core';
import { useStyles } from './useStyles';

const TableRows = ({ items, array }: any) => {
  const { cell } = useStyles();
  return (
    <>
      {items && items.length !== 0 && array && (
        <>
          <TableRow>
            <TableCell className={cell} align="left">{array[0]}</TableCell>
            <TableCell className={cell} align="left">{items[0].model}</TableCell>
            <TableCell className={cell} align="left">{items[1].model}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell} align="left">{array[1]}</TableCell>
            <TableCell className={cell} align="left">{items[0].make}</TableCell>
            <TableCell className={cell} align="left">{items[1].make}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell} align="left">{array[2]}</TableCell>
            <TableCell className={cell} align="left">{items[0].engineType}</TableCell>
            <TableCell className={cell} align="left">{items[1].engineType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell} align="left">{array[3]}</TableCell>
            <TableCell className={cell} align="left">{items[0].milage}</TableCell>
            <TableCell className={cell} align="left">{items[1].milage}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell} align="left">{array[4]}</TableCell>
            <TableCell className={cell} align="left">{items[0].transmission}</TableCell>
            <TableCell className={cell} align="left">{items[1].transmission}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell} align="left">{array[5]}</TableCell>
            <TableCell className={cell} align="left">{items[0].modelYear}</TableCell>
            <TableCell className={cell} align="left">{items[1].modelYear}</TableCell>
          </TableRow>
        </>
      )}
    </>
  );
};

export default TableRows;
