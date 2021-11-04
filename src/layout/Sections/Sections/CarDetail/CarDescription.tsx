import { Box, Typography } from "@material-ui/core";
import { desc } from "../../Utils/carDetail";

interface CarDescriptionProps {
  description: string;
}
const CarDescription = ({ description }: CarDescriptionProps) => {
  return (
    <Box>
      {/* <Typography variant="h6">{desc}</Typography> */}
      <Typography style={{ marginTop: '10px' }} variant="subtitle1">
        {description}
      </Typography>
    </Box>
  );
};

export default CarDescription;
