import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import {
  APPLY_FILTERS,
  CANCEL,
} from "../../utils/constants/language/en/buttonLabels";

export interface DialogBoxProps {
  title: string;
  open: boolean;
  handleClose: Function;
  children: React.ReactNode;
  maxWidth?: any;
}

const DialogBox: React.FC<DialogBoxProps> = (
  { title, children, open, handleClose },
  props
) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose}
      aria-labelledby="dialog"
      {...props}
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()} color="primary">
          {CANCEL}
        </Button>
        <Button onClick={() => handleClose()} color="primary">
          {APPLY_FILTERS}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
