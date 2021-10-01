import MenuItem from "@material-ui/core/MenuItem";
import TextField, {TextFieldProps } from "@material-ui/core/TextField";

interface ICustomSelectProps {
  menuItem: Array<string>;
}
const SelectComponent = ({
  menuItem,
  ...rest
}: ICustomSelectProps & TextFieldProps) => {
  return (
    <TextField select {...rest}>
      {menuItem.map((item, index) => (
        <MenuItem value={item} key={'menuItem+'+index}>{item}</MenuItem>
      ))}
    </TextField>
  );
};

export default SelectComponent;
