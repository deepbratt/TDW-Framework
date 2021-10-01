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
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    actionBtnLabel?: string,
    actionBtnFunc?:()=>void
}
const InformationDialog = ({title, message, open, setOpen, actionBtnLabel="OK", actionBtnFunc } : DialogComponentProps)=>{
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClose = () =>{
      setOpen(false)
      if(actionBtnFunc){
        actionBtnFunc()
      }
    }
    return(
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
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
          <Button onClick={handleClose} color="primary" autoFocus variant="contained">
            {actionBtnLabel}
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default InformationDialog