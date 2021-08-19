import { TextField } from "@material-ui/core";
import { useStyles } from "./useStyles";


const DatePicker = ({ date,handleChangeDate }: any) => {
  const { select } = useStyles();

  return (
    <>
      <TextField
        className={select}
        variant="outlined"
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
