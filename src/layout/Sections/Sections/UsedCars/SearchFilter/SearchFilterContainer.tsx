import { Grid, Typography } from "@material-ui/core";
import SearchFilterContext from "./SearchFilterContext";
import Section from "../../../../../components";
import OtherDetailContext from "./OtherDetails";
import AdProperyContext from "./AdPropertyContext";
import Collapse from "@material-ui/core/Collapse";
import { Colors } from "../../../Utils/color.constants";
import useStyles from "./useStyles";
import { searchSubTitle, searchTitle } from "../../../Utils/usedCarsContent";
import useHook from "./useHook";
const SearchFilterContainer = () => {
  const { red } = Colors;
  const { root, text } = useStyles();
  const {
    isChecked,
    setIsChecked,
    data,
    setData,
    moreOp,
    setMoreOp,
    handleMoreChange,
    handleChange
  } = useHook();

  return (
    <Section>
      <Grid container style={{ display: "inline-block" }}>
        <Grid item xs={12}>
          <Typography className={text} variant="h2">
            <span>{searchTitle[0]}</span>
            <span style={{ color: red, marginLeft: "8px" }}>
              {searchTitle[1]}
            </span>
          </Typography>
          <Typography className={text} variant="subtitle1">
            {searchSubTitle}
          </Typography>
        </Grid>
        <Grid item className={root}>
          <SearchFilterContext
            data={data}
            setData={setData}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            handleChange={handleChange}
          />
          <Collapse in={isChecked}>
            <OtherDetailContext  handleMoreChange={handleMoreChange} moreOp={moreOp} setMoreOp={setMoreOp} />
            <AdProperyContext
              moreOp={moreOp}
              setMoreOp={setMoreOp}
              setIsChecked={setIsChecked}
              data={data}
              handleMoreChange={handleMoreChange}
            />
          </Collapse>
        </Grid>
      </Grid>
    </Section>
  );
};

export default SearchFilterContainer;
