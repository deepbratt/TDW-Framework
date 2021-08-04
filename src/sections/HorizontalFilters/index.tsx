import Dropdown from "../../components/Dropdown";
import { Grid } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { setLayout } from "../../redux/reducers/layoutSlice";
import ViewListRoundedIcon from "@material-ui/icons/ViewListRounded";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";

export interface HorizontalFiltersProps {}
const sortingOptions = [
  { value: "most_popular", label: "most popular" },
  { value: "recent", label: "recent" },
  { value: "oldest", label: "oldest" },
];

const HorizontalFilters: React.FC<HorizontalFiltersProps> = () => {
  const dispatch = useDispatch();
  const layoutType = useSelector(
    (state: any) => state.persistedReducer.layout.layoutType
  );
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    dispatch(setLayout(nextView));
  };
  return (
    <Grid style={{ margin: "10px 0" }} container justify="space-between">
      <Grid item container xs={10} spacing={2}>
        <Grid item xs={4}>
          <Dropdown label="SORT BY" options={sortingOptions} />
        </Grid>
        <Grid item xs={3}>
          <Dropdown label="CONDITION" options={sortingOptions} />
        </Grid>
        <Grid item xs={5}>
          <Dropdown label="DELIVERY OPTIONS" options={sortingOptions} />
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: "10px",
        }}
        item
        xs={2}
      >
        <ToggleButtonGroup
          size="small"
          value={layoutType}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListRoundedIcon
              color={layoutType === "list" ? "primary" : "disabled"}
            />
          </ToggleButton>
          <ToggleButton value="grid" aria-label="grid">
            <ViewModuleRoundedIcon
              color={layoutType !== "list" ? "primary" : "disabled"}
            />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default HorizontalFilters;
