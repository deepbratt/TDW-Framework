import React from 'react';
import {
  Table,
  Typography,
  TableHead,
  TableContainer,
  TableBody
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CustomButton from '../../../../../components/CustomButton';
import { useStyles } from '../useStyles';
import { IProps } from '../../../Utils/types';
import CollapsedRows from './CollapsedRows';
const EnhancedTable: React.FC<IProps> = ({
  subTitle,
  moreBtn,
  collapsedArray,
  items
}) => {
  const { head, table, options, btn } = useStyles();

  return (
    <>
      <Typography className={head} variant="h3">
        {subTitle}
      </Typography>
      <TableContainer>
        <Table className={table} aria-label="table">
          <TableHead></TableHead>
          <TableBody>
            <CollapsedRows array={collapsedArray} items={items} />
          </TableBody>
        </Table>
      </TableContainer>
      <section className={options}>
        <CustomButton styles={btn} endIcon={<ArrowDropDownIcon />}>
          <span style={{ marginBottom: '10px' }}>{moreBtn}</span>
        </CustomButton>
      </section>
    </>
  );
};

export default EnhancedTable;
