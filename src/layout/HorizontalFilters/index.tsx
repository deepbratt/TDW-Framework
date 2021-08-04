import { useDispatch, useSelector } from "react-redux";
import { grid, list } from "../../redux/reducers/layoutSlice";
import { Grid, ButtonGroup, IconButton } from "@material-ui/core";
import ViewListRoundedIcon from "@material-ui/icons/ViewListRounded";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";

export interface HorizontalFiltersProps {}

const HorizontalFilters: React.FC<HorizontalFiltersProps> = () => {
  const dispatch = useDispatch();
  const layoutType = useSelector((state: any) => state.persistedReducer.layout.layoutType)
  return (
    <Grid container justify="space-between">
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <ButtonGroup size="medium" aria-label="small outlined button group">
          <IconButton onClick={() => dispatch(list())}>
            <ViewListRoundedIcon
              color={layoutType === "grid" ? "disabled" : "primary"}
            />
          </IconButton>
          <IconButton onClick={() => dispatch(grid())}>
            <ViewModuleRoundedIcon
              color={layoutType !== "grid" ? "disabled" : "primary"}
            />
          </IconButton>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default HorizontalFilters;
