import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useTheme from "@material-ui/core/styles/useTheme"

interface DialogComponentProps {
    title: string
    message:string
    open: boolean
    handleConfirmation: ()=>void
    handleRejection: ()=>void
    confirmBtnLabel?: string
    rejectBtnLabel?: string 
}
const ConfirmationDialog = ({title, message, handleConfirmation, handleRejection, open, confirmBtnLabel="Agree", rejectBtnLabel="Disagree"} : DialogComponentProps)=>{
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleRejection}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"sm"}
        fullWidth={true}
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleRejection} color="secondary" variant="outlined">
            {rejectBtnLabel}
          </Button>
          <Button onClick={handleConfirmation} color="primary" autoFocus variant="contained">
            {confirmBtnLabel}
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default ConfirmationDialog