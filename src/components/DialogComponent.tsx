import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, DialogTitleProps, useMediaQuery, useTheme } from "@material-ui/core"

interface DialogComponentProps {
    title: string
    message:string
    open: boolean
    handleConfirmation: ()=>void
    handleRejection: ()=>void
    confirmBtnLabel?: string
    rejectBtnLabel?: string 
}
const DialogComponent = ({title, message, handleConfirmation, handleRejection, open, confirmBtnLabel="Agree", rejectBtnLabel="Disagree"} : DialogComponentProps)=>{
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleRejection}
        aria-labelledby="responsive-dialog-title"
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

export default DialogComponent