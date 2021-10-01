import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import {Theme} from '@material-ui/core/styles/createTheme';
import { Colors } from '../Utils/constants/colors/colors';
interface LoaderProps {
  open: boolean;
  isBackdrop?: boolean;
}
const Loader = ({ open, isBackdrop = true }: LoaderProps) => {
  const classes = useStyles();
  if (!open) {
    return null;
  }
  if (isBackdrop) {
    return (
      <Backdrop
        className={classes.backdrop}
        // classes={{ root: classes.root }}
        open={open}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    );
  }
  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loader;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      backgroundColor: Colors.whiteTranparent
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '150px',
      backgroundColor: Colors.greyTranparent
    }
  })
);
