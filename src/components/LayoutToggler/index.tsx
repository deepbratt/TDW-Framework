import { useDispatch, useSelector } from "react-redux";
import { setLayout } from "../../redux/reducers/layoutSlice";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ViewListRoundedIcon from "@material-ui/icons/ViewListRounded";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import { RootState } from "../../redux/store";

export interface LayoutTogglerProps {}

const LayoutToggler: React.FC<LayoutTogglerProps> = () => {
    const dispatch = useDispatch();
    const {layoutType} = useSelector(
      (state: RootState) => state.layout
    );
    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      nextView: string
    ) => {
      dispatch(setLayout(nextView));
    };
  return (
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
  );
};

export default LayoutToggler;
