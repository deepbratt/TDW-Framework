import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionProps,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionStyles from "./styles";

export interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
  hideExpandIcon? : boolean
}

const FilterAccordion: React.FC<FilterAccordionProps & AccordionProps> = ({
  title,
  children,
  hideExpandIcon=false,
  ...accordionProps
}) => {
  const { root } = AccordionStyles();

  return (
    <Accordion className={root} {...accordionProps}>
      <AccordionSummary
        expandIcon={!hideExpandIcon && <ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
