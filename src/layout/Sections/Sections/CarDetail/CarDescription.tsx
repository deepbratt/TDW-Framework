import { Box, Typography } from "@material-ui/core";
import { desc } from "../../Utils/carDetail";
import { useStyles } from "./useStyles";

interface CarDescriptionProps {
  description: string;
}
const CarDescription = ({ description }: CarDescriptionProps) => {
    const {greyBackground} = useStyles()
  return (
    <Box className={greyBackground}>
      <Typography variant="h6">{desc}</Typography>
      <Typography style={{ marginTop: '10px' }} variant="subtitle1">
        {description}
      </Typography>
    </Box>
  );
};

export default CarDescription;
