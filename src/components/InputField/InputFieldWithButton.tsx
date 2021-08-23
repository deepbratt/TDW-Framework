import { Button, InputAdornment } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import LayoutStyle from "./styles";

export interface InputFieldWithButtonProps {}

const InputFieldWithButton: React.FC<InputFieldWithButtonProps | any> = (
  props
) => {
  const {
    value,
    multiline,
    fullWidth,
    placeholder,
    name,
    variant,
    size,
    rows,
    rowsMax,
    error = null,
    onChange,
    buttonlabel,
    handleClick,
  } = props;
  const { root, input, btn } = LayoutStyle();
  return (
    <TextField
      className={root}
      placeholder={placeholder}
      name={name}
      value={value}
      variant={variant}
      multiline={multiline}
      fullWidth={fullWidth}
      rows={rows}
      size={size}
      rowsMax={rowsMax}
      onChange={onChange}
      {...props}
      {...(error && { error: true, helperText: error })}
      InputProps={{
        classes: { input: input },
        endAdornment: (
          <InputAdornment position="end">
            <Button
              className={btn}
              color="primary"
              variant="contained"
              onClick={() => handleClick(name, value)}
            >
              {buttonlabel}
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

InputFieldWithButton.defaultProps = {
  size: "small",
  fullWidth: true,
  variant: "outlined",
  rows: "3",
  rowsMax: "3",
  buttonlabel: "GO!",
};

export default InputFieldWithButton;
