import { Box, Typography } from '@material-ui/core';
import { desc } from '../../Utils/carDetail';

interface CarDescriptionProps {
  description: string;
}
const CarDescription = ({ description }: CarDescriptionProps) => {
  return (
    <Box>
      <Typography
        style={{ marginTop: '10px', whiteSpace: 'pre-line' }}
        variant="subtitle1"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default CarDescription;
