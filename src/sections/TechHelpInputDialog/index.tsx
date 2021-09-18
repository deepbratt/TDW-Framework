import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
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
    helperText
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
                value={formData.email}
                fullWidth
                error={requireError.email}
                helperText={requireError.email ? helperText : ''}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                type="number"
                onChange={handleChange}
                label="Phone"
                name="phone"
                value={formData.phone}
                fullWidth
                error={requireError.phone}
                helperText={requireError.phone ? helperText : ''}
              />
            </Grid>
          </>
        )}
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              label="Description"
              name="description"
              value={formData.description}
              fullWidth
              multiline
              maxRows={5}
              error={requireError.description}
              helperText={requireError.description ? helperText : ''}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleRejection}
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
