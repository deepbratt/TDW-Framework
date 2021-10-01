import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';
import { useStyles } from '../useStyles';
import TickRight from "../../../../../assets/icons/right-green.png"
import CrossRed from "../../../../../assets/icons/cross-red.png"

const TableRows = ({ items, array }: any) => {
  const { cell } = useStyles();
  return (
      items && items.length === 2 && array && (
          array.map((feature: string, index: number) => (
            <TableRow key={`comparision-features-${index}`}>
              <TableCell align="left" className={cell}>
                {feature}
              </TableCell>
              <TableCell align="left" className={cell}>
                {items[0].features.indexOf(feature) > -1 ? (
                  // <CheckCircleOutline style={{ color: 'green' }} />
                  <img src={TickRight} alt="" width="30px"/>
                ) : (
                  // <HighlightOff style={{ color: 'red' }} />
                  <img src={CrossRed} alt="" width="30px"/>
                )}
              </TableCell>
              <TableCell align="left" className={cell}>
                {items[1].features.indexOf(feature) > -1 ? (
                  // <CheckCircleOutline style={{ color: 'green' }} />
                  <img src={TickRight} alt="" width="30px"/>
                ) : (
                  // <HighlightOff style={{ color: 'red' }} />
                  <img src={CrossRed} alt="" width="30px"/>
                )}
              </TableCell>
            </TableRow>
          ))
      )
  );
};

export default TableRows;
