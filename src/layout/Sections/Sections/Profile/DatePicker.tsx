import TextField from "@material-ui/core/TextField";
import { useStyles } from "./useStyles";


const DatePicker = ({ date,handleChangeDate }: any) => {
  const { select } = useStyles();

  return (
    <>
      <TextField
        fullWidth
        name="date"
        id="date"
        label="Date of birth"
        type="date"
        value={date}
        onChange={(e) => handleChangeDate(e)}
      />
    </>
  );
};

export default DatePicker;
