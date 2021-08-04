import { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionStyles from "./styles";
export interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
  title,
  children,
}) => {
  const { root } = AccordionStyles();
  //   const [expanded, setExpanded] = useState<string | false>(false);

  //   const handleChange =
  //     (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
  //       setExpanded(isExpanded ? panel : false);
  //     };

  return (
    <Accordion
      className={root}
      //   expanded={expanded === "accordion-" + title}
      //   onChange={() => handleChange("accordion-" + title)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
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
