import { useState } from 'react';
import { Grid, Slider } from '@material-ui/core';
import InputField from '../../components/InputField';
import InputFieldWithButton from '../../components/InputField/InputFieldWithButton';
import { fieldNames } from '../../Utils/constants/formsConstants';

export interface InputRangeProps {
  values: any;
  setValues: Function;
  handleClick?: Function;
}

const InputRange: React.FC<InputRangeProps> = (props) => {
  const { values, setValues, handleClick } = props;
  const [errors, setErrors] = useState({
    from: '',
    to: ''
  });

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (values.priceRange[0] < values.priceRange[1]) {
      setValues((previousState: any) => {
        previousState.priceRange[0] = e.target.value;
        return { ...previousState };
      });
    } else {
      setErrors({ ...errors, from: 'Should be less than maximum value' });
    }
  };

  return (
    <Grid container direction="column">
      <Grid item container spacing={1}>
        <Grid item xs={5}>
          <InputField
            name={fieldNames.priceFrom}
            label="From"
            value={values.priceRange[0]}
            errors={errors.from}
            onChange={handleFromChange}
          />
        </Grid>
        <Grid item xs={7}>
          <InputFieldWithButton
            name={fieldNames.priceTo}
            label="To"
            value={values.priceRange[1]}
            errors={errors.to}
            onChange={(e: any) => {
              setValues((previousState: any) => {
                previousState.priceRange[1] = e.target.value;
                return { ...previousState };
              });
            }}
            handleClick={handleClick}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Slider
          value={[values.priceRange[0], values.priceRange[1]]}
          min={50000}
          max={5000000}
          onChange={(event: any, newValue: number | number[]) => {
            setValues((previousState: any) => {
              console.log(newValue);
              previousState.priceRange = newValue as number[];
              return { ...previousState };
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default InputRange;
