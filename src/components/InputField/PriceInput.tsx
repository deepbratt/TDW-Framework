import NumberFormat from 'react-number-format';

interface PriceInputProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

function PriceInput(props: PriceInputProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values: any) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      thousandsGroupStyle="thousand"
      decimalSeparator="."
      displayType="input"
      type="text"
      allowNegative={false}
    />
  );
}

export default PriceInput;