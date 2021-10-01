import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import DialogActions from "@material-ui/core/DialogActions";
import  DialogContent from "@material-ui/core/DialogContent";
import {
  APPLY_FILTERS,
  CLOSE,
} from "../../Utils/constants/language/en/buttonLabels";

export interface FullScreenDialogProps {
  title: string;
  handleClose: Function;
  open: boolean;
  children: React.ReactNode;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog: React.FC<FullScreenDialogProps> = (props) => {
  const { title, children, handleClose, open } = props;
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => handleClose()}
      TransitionComponent={Transition}
    >
      <AppBar style={{ position: "relative" }} color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => handleClose()}
            aria-label="close"
          >
            <ArrowBackIosRoundedIcon />
          </IconButton>
            <Typography style={{ marginLeft: "10px", flex: 1 }} variant="h6">
              {title}
            </Typography>
          <Button color="inherit" onClick={() => handleClose()}>
            {CLOSE}
          </Button>
        </Toolbar>
      </AppBar>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => handleClose()}>
          {APPLY_FILTERS}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FullScreenDialog;
