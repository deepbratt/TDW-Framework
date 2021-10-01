import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import {
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
