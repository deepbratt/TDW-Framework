import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  InputBase
} from '@material-ui/core';
import CustomButton from '../../../../../components/CustomButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useStyles from './useStyles';
import { Colors } from '../../../Utils/color.constants';
import {
  adTitle,
  lessBtn,
  searchBtn,
  adProperty,
  PICTURE_AVAILABILITY,
  SELLER_TYPE
} from '../../../Utils/usedCarsContent';

const AdProperyContext = ({
  setIsChecked,
  moreOp,
  data,
  handleMoreChange,
  handleAdvanceFilters
}: any) => {
  const { white, blue } = Colors;
  const { adGrid, optionsBtn, text, btnGrid, select } = useStyles();
  const { withPicture, sellerType } = adProperty;

  return (
    <Grid container>
      <Grid item xs={12} container justifyContent="flex-start">
        <Grid style={{ marginTop: '30px' }} item xs={12}>
          <Typography className={text} variant="h6" style={{ color: white }}>
            {adTitle}
          </Typography>
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {PICTURE_AVAILABILITY}
          </InputLabel>
          <Select
            value={moreOp.adWithPics}
            onChange={(e) => {
              handleMoreChange(e);
            }}
            name="adWithPics"
            defaultValue={moreOp.adWithPics}
            input={<InputBase />}
            className={select}
          >
            {withPicture.map((data, index) => {
              return (
                <MenuItem key={`withPicture ${index}`} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid style={{ marginTop: '30px' }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: '10px' }}>
            {SELLER_TYPE}
          </InputLabel>
          <Select
            value={moreOp.sellerType}
            onChange={(e) => {
              handleMoreChange(e);
            }}
            name="sellerType"
            defaultValue={moreOp.sellerType}
            input={<InputBase />}
            className={select}
          >
            {sellerType.map((data, index) => {
              return (
                <MenuItem key={`sellerType ${index}`} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item container xs={12} justifyContent="space-between">
          <Grid style={{ marginTop: '80px' }} item lg={3} sm={6} xs={9}>
            <CustomButton
              handleClick={() => {
                setIsChecked && setIsChecked(false);
              }}
              endIcon={<ArrowDropDownIcon />}
              styles={optionsBtn}
            >
              {lessBtn}
            </CustomButton>
          </Grid>
          <Grid className={btnGrid} item lg={2} xs={10} sm={6}>
            <CustomButton
              variant="contained"
              style={{ background: white, color: blue }}
              handleClick={() => {
                handleAdvanceFilters();
              }}
            >
              {searchBtn}
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdProperyContext;
