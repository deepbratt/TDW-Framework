import { TableRow, TableCell } from '@material-ui/core';
import { useStyles } from '../useStyles';

const TableRows = ({ items, array }: any) => {
  const { cell } = useStyles();
  return (
    <>
      {items && items.length === 2 && array && (
        <>
          {array.map((feature: string, index: number) => (
            <TableRow key={`comparision-features-${index}`}>
              <TableCell className={cell}>{feature}</TableCell>
              <TableCell className={cell}>
                {items[0].features.indexOf(feature) > -1 ? 'Yes' : 'No'}
              </TableCell>
              <TableCell className={cell}>
                {items[1].features.indexOf(feature) > -1 ? 'Yes' : 'No'}
              </TableCell>
            </TableRow>
          ))}
          {/* <TableRow>
            <TableCell className={cell}>{array[0]}</TableCell>
            <TableCell className={cell}>{items[0].model}</TableCell>
            <TableCell className={cell}>{items[1].model}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell}>{array[1]}</TableCell>
            <TableCell className={cell}>{items[0].make}</TableCell>
            <TableCell className={cell}>{items[1].make}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell}>{array[2]}</TableCell>
            <TableCell className={cell}>{items[0].milage}</TableCell>
            <TableCell className={cell}>{items[1].milage}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell}>{array[3]}</TableCell>
            <TableCell className={cell}>{items[0].transmission}</TableCell>
            <TableCell className={cell}>{items[1].transmission}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell}>{array[4]}</TableCell>
            <TableCell className={cell}>{items[0].transmission}</TableCell>
            <TableCell className={cell}>{items[1].transmission}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cell}>{array[5]}</TableCell>
            <TableCell className={cell}>{items[0].transmission}</TableCell>
            <TableCell className={cell}>{items[1].transmission}</TableCell>
          </TableRow> */}
        </>
      )}
    </>
  );
};

export default TableRows;
