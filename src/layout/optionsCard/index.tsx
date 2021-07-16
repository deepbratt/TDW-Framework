import { Paper, Typography } from "@material-ui/core";
import OptionsCardStyles from "./styles";

export interface OptionsCardProps {
  data: {
    icon: string;
    text: string;
  };
  backgroundColor: string;
  backgroundColorSelected: string;
}

/** 
 @param data 
 @param backgroundColor
 @param backgroundColorSelected card background Color after Selection
 **/

const OptionsCard: React.FC<OptionsCardProps> = ({
  data,
  backgroundColor,
  backgroundColorSelected,
}) => {
  const optionsCardStylesProps = {
    backgroundColor,
    backgroundColorSelected,
  };
  const { root } = OptionsCardStyles(optionsCardStylesProps);
  return (
    <Paper className={root}>
      <img src={data.icon} alt={data.text} />
      <Typography variant="body2" component="h6">
        {data.text}
      </Typography>
    </Paper>
  );
};

export default OptionsCard;
