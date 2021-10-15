import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from '../useStyles';
import TickRight from '../../../../../assets/icons/right-green.png';
import CrossRed from '../../../../../assets/icons/cross-red.png';

const TableRows = ({ items, array }: any) => {
  const { cell, stickyCell } = useStyles();

  return (
    array &&
    array.map((feature: string, index: number) => (
      <TableRow key={`comparision-features-${index}`}>
        <TableCell align="left" classes={{ root: stickyCell }}>
          {feature}
        </TableCell>
        {items[0] && (
          <TableCell align="center" className={cell}>
            {items[0].features.indexOf(feature) > -1 ? (
              <img src={TickRight} alt="" width="20px" />
            ) : (
              <img src={CrossRed} alt="" width="20px" />
            )}
          </TableCell>
        )}
        {items[1] && (
          <TableCell align="center" className={cell}>
            {items[1].features.indexOf(feature) > -1 ? (
              <img src={TickRight} alt="" width="20px" />
            ) : (
              <img src={CrossRed} alt="" width="20px" />
            )}
          </TableCell>
        )}
        {items[2] && (
          <TableCell align="center" className={cell}>
            {items[2].features.indexOf(feature) > -1 ? (
              <img src={TickRight} alt="" width="20px" />
            ) : (
              <img src={CrossRed} alt="" width="20px" />
            )}
          </TableCell>
        )}
        {items[3] && (
          <TableCell align="center" className={cell}>
            {items[3].features.indexOf(feature) > -1 ? (
              <img src={TickRight} alt="" width="20px" />
            ) : (
              <img src={CrossRed} alt="" width="20px" />
            )}
          </TableCell>
        )}
      </TableRow>
    ))
  );
};

export default TableRows;
