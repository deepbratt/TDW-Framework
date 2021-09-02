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
  const { head, table } = useStyles();

  return (
    <>
      <Typography className={head} variant="h3">
        {subTitle}
      </Typography>
      <TableContainer>
        <Table className={table} aria-label="table">
          <TableBody>
            <CollapsedRows array={collapsedArray} items={items} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EnhancedTable;
