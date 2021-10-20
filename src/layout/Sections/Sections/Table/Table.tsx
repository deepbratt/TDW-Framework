import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CustomButton from '../../../../components/CustomButton';
import { useStyles } from './useStyles';
import { ICarData, IProps } from '../../Utils/types';
import CollapsedRows from './CollapsedTable/CollapsedRows';
import TableCell from '@material-ui/core/TableCell';
import TableRows from './TableRows';
import { FEATURES } from '../../../../Utils/constants/language/en/buttonLabels';
import { Grid } from '@material-ui/core';

const TableContext: React.FC<IProps> = ({
  Title,
  items,
  moreBtn,
  lessBtn,
  subTitle,
  array,
  collapsedArray
}) => {
  const { head, table, options, btn, cell, stickyCell } = useStyles();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <>
      <TableContainer className={table}>
        <Table aria-label="table">
          <TableHead classes={{ root: head }}>
            <TableRow>
              <TableCell classes={{ root: stickyCell }} align="left">
                {FEATURES}
              </TableCell>
              {items &&
                items.map((item: ICarData) => (
                  <TableCell
                    className={cell}
                    key={uuidv4()}
                    align="center"
                  >{`${item.make} ${item.model}`}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRows array={array} items={items} />
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="flex-end" className={options}>
        <Grid item>
          <CustomButton
            handleClick={handleToggle}
            styles={btn}
            endIcon={<ArrowDropDownIcon />}
          >
            {!isChecked ? moreBtn : lessBtn}
          </CustomButton>
        </Grid>
      </Grid>
      <Collapse style={{ width: '100%' }} in={isChecked}>
        <TableContainer className={table}>
          <Table aria-label="car comparision table">
            <TableHead classes={{ root: head }}>
              <TableRow>
                <TableCell classes={{ root: stickyCell }} align="left">
                  {FEATURES}
                </TableCell>
                {items &&
                  items.map((item: ICarData) => (
                    <TableCell
                      className={cell}
                      key={uuidv4()}
                      align="center"
                    >{`${item.make} ${item.model}`}</TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <CollapsedRows array={collapsedArray} items={items} />
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </>
  );
};

export default TableContext;
