import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface SelectInputKeyValueProps {
  dataArray: Array<any>;
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
  handleChangeSelectKeyValue: any;
  size?: 'small' | 'medium';
  displayName: string;
  // textInputProps : TextFieldProps
}

const SelectInputKeyValueComponent = ({
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
  handleChangeSelectKeyValue,
  size,
  displayName
}: SelectInputKeyValueProps) => {
  return (
    <Autocomplete
      value={value}
      inputValue={value}
      //   onInputChange={(e: any, valueChanged: any) =>
      //     handleChangeSelect({name: name, value: valueChanged})
      // {"city": "islamabad"}
      //   }
      //   inputValue={value ? value : ""}
      onChange={(event: any, valueChanged: any) =>
        handleChangeSelectKeyValue(name, valueChanged?.name, displayName, valueChanged?.displayName)
      }
      style={style}
      className={className}
      options={dataArray}
      autoHighlight
      getOptionLabel={(option: any) => option?.name?.toString()}
      disabled={disabled}
      renderOption={(option) => (
        <React.Fragment>
          <span>{option.displayName}</span>
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

export default SelectInputKeyValueComponent;
