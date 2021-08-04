import { Card, CardMedia, CardActions } from "@material-ui/core";
import CustomButton from "../../CustomButton";
import DownloadAppStyles from "./styles";
import { CAR_COMPARISIONS } from "../../utils/constants/language/en/buttonLabels";
export interface DownloadAppProps {
  featureImg: string;
}

const DownloadApp: React.FC<DownloadAppProps> = ({ featureImg }) => {
  const { root } = DownloadAppStyles();
  return (
    <Card className={root}>
      <CardActions>
        <CustomButton>{CAR_COMPARISIONS}</CustomButton>
        <CustomButton>{CAR_COMPARISIONS}</CustomButton>
      </CardActions>
      <CardMedia>
        <img src={featureImg} alt="cars-comparisons" />
      </CardMedia>
    </Card>
  );
};

export default DownloadApp;
