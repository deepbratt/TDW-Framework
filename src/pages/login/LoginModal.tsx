import { Dialog, Button, DialogContent, DialogActions } from "@material-ui/core";
import Login from "./index";

interface LoginModalProps {
  openModal: boolean;
  closeModal: () => void;
}

const LoginModal = ({ openModal, closeModal }: LoginModalProps) => {
  return (
    <Dialog
      open={openModal}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Login
          formColLg={10}
          formColMd={10}
          formColXs={11}
          loginCallback={closeModal}
        />
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button
          onClick={closeModal}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
