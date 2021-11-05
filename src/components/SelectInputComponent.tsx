import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface SelectInputProps {
  dataArray: Array<string>;
  required?: boolean;
  style?: any;
  className?: any;
  styleTextField?: any;
  name: string;
  value: any;
  label?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  placeholder?: string;
  handleChangeSelect: any;
  size?: 'small' | 'medium';
  // textInputProps : TextFieldProps
}

const SelectInputComponent = ({
  dataArray,
  required,
  style,
  className,
  styleTextField,
  disabled,
  placeholder,
  name,
  value,
  label,
  error,
  helperText,
  handleChangeSelect,
  size
}: SelectInputProps) => {
  return (
    <Autocomplete
      value={value}
      //   onInputChange={(e: any, valueChanged: any) =>
      //     handleChangeSelect({name: name, value: valueChanged})
      // {"city": "islamabad"}
      //   }
      //   inputValue={value ? value : ""}
      onChange={(event: any, valueChanged: any) =>
        handleChangeSelect(name, valueChanged)
      }
      style={style}
      className={className}
      options={dataArray}
      autoHighlight
      getOptionLabel={(option: any) => option?.toString()}
      disabled={disabled}
      renderOption={(option) => (
        <React.Fragment>
          <span>{option}</span>
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          style={styleTextField}
          label={label}
          required={required}
          name={name}
          value={value}
          error={error}
          helperText={helperText}
          placeholder={placeholder}
          disabled={disabled}
          size={size}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'off' // disable autocomplete and autofill
          }}
          InputLabelProps={{
            shrink: true
          }}
        />
      )}
    />
  );
};

export default SelectInputComponent;
