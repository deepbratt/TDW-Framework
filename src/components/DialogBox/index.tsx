import { Typography } from "@material-ui/core";
import { useState } from "react";
import DialogBoxContent from "./DialogBox";
export interface DialogBoxProps {
  title: string;
  children: React.ReactNode;
}

const DialogBox: React.FC<DialogBoxProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Typography
        style={{ cursor: "pointer" }}
        variant="button"
        onClick={() => handleClickOpen()}
      >
        see more options...
      </Typography>
      <DialogBoxContent open={open} handleClose={handleClose} {...props}>
        {props.children}
      </DialogBoxContent>
    </>
  );
};

export default DialogBox;
