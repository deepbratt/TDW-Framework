import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core';
import {
  APPLY_FILTERS,
  CANCEL,
  CLOSE
} from '../../Utils/constants/language/en/buttonLabels';

export interface DialogBoxContentProps {
  title: string;
  open: boolean;
  handleClose: Function;
  children: React.ReactNode;
}

const DialogBoxContent: React.FC<DialogBoxContentProps> = (
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
          {CLOSE}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBoxContent;
