import { TableRow, TableCell } from '@material-ui/core';
import { CheckCircleOutline, HighlightOff } from '@material-ui/icons';
import { useStyles } from '../useStyles';

const TableRows = ({ items, array }: any) => {
  const { cell } = useStyles();
  return (
    <>
      {items && items.length === 2 && array && (
        <>
          {array.map((feature: string, index: number) => (
            <TableRow key={`comparision-features-${index}`}>
              <TableCell align="left" className={cell}>
                {feature}
              </TableCell>
              <TableCell align="left" className={cell}>
                {items[0].features.indexOf(feature) > -1 ? (
                  <CheckCircleOutline style={{ color: 'green' }} />
                ) : (
                  <HighlightOff style={{ color: 'red' }} />
                )}
              </TableCell>
              <TableCell align="left" className={cell}>
                {items[1].features.indexOf(feature) > -1 ? (
                  <CheckCircleOutline style={{ color: 'green' }} />
                ) : (
                  <HighlightOff style={{ color: 'red' }} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </>
      )}
    </>
  );
};

export default TableRows;
