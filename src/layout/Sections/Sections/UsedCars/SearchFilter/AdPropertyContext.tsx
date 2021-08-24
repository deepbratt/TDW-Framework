import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  InputBase,
} from "@material-ui/core";
import CustomButton from "../../../../../components/CustomButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import useStyles from "./useStyles";
import { Colors } from "../../../Utils/color.constants";
import {
  adTitle,
  lessBtn,
  searchBtn,
  adProperty,
} from "../../../Utils/usedCarsContent";
import { Options } from "../../../Utils/types";
import useHook from "./useHook";
const AdProperyContext = ({
  setIsChecked,
  moreOp,
  data,
  handleMoreChange
}: any) => {
  const {handleAdvanceFilters} = useHook()
  const { white, blue } = Colors;
  const { adGrid, optionsBtn, text, btnGrid, select } = useStyles();
  let items = {...data, ...moreOp}

  return (
    <Grid container>
      <Grid className={adGrid} item xs={12}>
        <Grid style={{ marginTop: "30px" }} item xs={12}>
          <Typography className={text} variant="h6" style={{ color: white }}>
            {adTitle}
          </Typography>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {adProperty[0]}
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
            <MenuItem value={adProperty[0]}>{adProperty[0]}</MenuItem>;
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {adProperty[1]}
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
            <MenuItem value={adProperty[1]}>{adProperty[1]}</MenuItem>;
          </Select>
        </Grid>
        <Grid style={{ marginTop: "30px" }} item lg={4} xs={12}>
          <InputLabel style={{ color: white, marginBottom: "10px" }}>
            {adProperty[2]}
          </InputLabel>
          <Select
            value={moreOp.adTypes}
            onChange={(e) => {
              handleMoreChange(e);
            }}
            name="adTypes"
            defaultValue={moreOp.adTypes}
            input={<InputBase />}
            className={select}
          >
            <MenuItem value={adProperty[2]}>{adProperty[2]}</MenuItem>;
          </Select>
        </Grid>
        <Grid style={{ marginTop: "80px" }} item lg={3} sm={6} xs={9}>
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
              handleAdvanceFilters(moreOp,items);
            }}
          >
            {searchBtn}
          </CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdProperyContext;
