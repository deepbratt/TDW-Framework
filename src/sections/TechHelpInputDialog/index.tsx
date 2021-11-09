import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import useTheme from '@material-ui/core/styles/useTheme';
import useTechHelpInputDialog from './useTechHelpInputDialog';

interface TechHelpInputDialogProps {
  title: string;
  message: string;
  open: boolean;
  setHelpComingDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setToastType: React.Dispatch<React.SetStateAction<string>>;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
  handleRejection: () => void;
  submitBtnLabel?: string;
  rejectBtnLabel?: string;
}

const TechHelpInputDialog = ({
  title,
  message,
  handleRejection,
  open,
  submitBtnLabel = 'Yes',
  rejectBtnLabel = 'Cancel',
  setToastMessage,
  setToastOpen,
  setToastType,
  setIsLoading,
  setHelpComingDialog
}: TechHelpInputDialogProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    formData,
    handleChange,
    isLoggedIn,
    requireError,
    handleSubmit,
    helperText,
    resetFormData
  } = useTechHelpInputDialog(
    setHelpComingDialog,
    setIsLoading,
    setToastOpen,
    setToastType,
    setToastMessage,
    handleRejection
  );

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleRejection}
      aria-labelledby="responsive-dialog-title"
      maxWidth={'sm'}
      fullWidth={true}
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
        <Grid container spacing={1}>
        {!isLoggedIn && (
          <>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                type="email"
                onChange={handleChange}
                label="Email"
                name="email"
                defaultValue={formData.email}
                fullWidth
                error={requireError.email}
                helperText={requireError.email ? helperText : ''}
                placeholder={"email"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                type="tel"
                onChange={handleChange}
                label="Phone"
                name="phone"
                defaultValue={formData.phone}
                fullWidth
                error={requireError.phone}
                helperText={requireError.phone ? helperText : ''}
                placeholder={"+923XXXXXXXXXX"}
              />
            </Grid>
          </>
        )}
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              label="Description"
              name="description"
              defaultValue={formData.description}
              fullWidth
              multiline
              maxRows={5}
              error={requireError.description}
              helperText={requireError.description ? helperText : ''}
              placeholder={"Describe the issue/bug"}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={resetFormData}
          color="secondary"
          variant="outlined"
        >
          {rejectBtnLabel}
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          autoFocus
          variant="contained"
        >
          {submitBtnLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TechHelpInputDialog;
