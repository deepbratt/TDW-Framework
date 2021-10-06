import React from 'react';
import Typography from '@material-ui/core/Typography';
import Accordion, {AccordionProps} from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionStyles from './styles';

export interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
  hideExpandIcon?: boolean;
}

const FilterAccordion: React.FC<FilterAccordionProps & AccordionProps> = ({
  title,
  children,
  hideExpandIcon = false,
  ...accordionProps
}) => {
  const {
    root,
    expanded,
    detailRoot,
    headerStyles
  } = AccordionStyles();

  return (
    <Accordion classes={{ root: root, expanded: expanded }} {...accordionProps}>
      <AccordionSummary
        expandIcon={!hideExpandIcon && <ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={headerStyles}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails classes={{ root: detailRoot }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
