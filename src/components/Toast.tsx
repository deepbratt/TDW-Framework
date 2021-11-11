import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
interface IProp {
  open: boolean;
  message: string;
  onClose: Function;
  type: string;
}
const Alert = (props: any) => (
  <MuiAlert elevation={0} variant="filled" {...props} />
);

const Toast = ({ open, message, type, onClose }: IProp) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={open}
      autoHideDuration={5000}
      onClose={() => onClose()}
    >
      <Alert onClose={onClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
