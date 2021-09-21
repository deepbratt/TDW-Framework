import { makeStyles } from '@material-ui/core';

const AccordionStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    borderBottom: `0.5px solid ${theme.palette.text.primary}`
  }
}));

export default AccordionStyles;
