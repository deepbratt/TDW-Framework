import React, { useState } from 'react';
import {
  Table,
  Typography,
  TableContainer,
  TableBody,
  Collapse
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CustomButton from '../../../../components/CustomButton';
import { useStyles } from './useStyles';
import { IProps } from '../../Utils/types';
import CollapsedRows from './CollapsedTable/CollapsedRows';

import TableRows from './TableRows';
const TableContext: React.FC<IProps> = ({
  Title,
  items,
  moreBtn,
  lessBtn,
  subTitle,
  array,
  collapsedArray
}) => {
  const { head, table, options, btn } = useStyles();
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
      <Typography style={{ marginTop: '20px' }} className={head} variant="h3">
        {Title}
      </Typography>
      <TableContainer>
        <Table className={table} aria-label="table">
          <TableBody>
            <TableRows array={array} items={items} />
          </TableBody>
        </Table>
      </TableContainer>
      <section className={options}>
        <CustomButton
          handleClick={handleToggle}
          styles={btn}
          endIcon={<ArrowDropDownIcon />}
        >
          {!isChecked ? moreBtn : lessBtn}
        </CustomButton>
      </section>
      <Collapse in={isChecked}>
        <Typography className={head} variant="h3">
          {subTitle}
        </Typography>
        <TableContainer>
          <Table aria-label="simple table">
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
