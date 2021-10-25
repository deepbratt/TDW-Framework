import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import { useStyles } from './useStyles';
import {
  paths,
  Title,
  help,
  helpTitle,
  gmail,
  number,
  mailTo,
  dialTo,
  emailUs,
  callUs,
  sendTicketMsg,
} from '../../../Utils/sidebarText';
import SideBar from '../ProfileSidebar/Sidebar';
import MetaTags from '../../../../../components/MetaTags';
import PageMeta from '../../../../../Utils/constants/language/en/pageData';
import { useState } from 'react';
import InformationDialog from '../../../../../components/InformationDialog';
import addEditCarData from '../../../../../Utils/constants/language/en/addEditCarData';
import Toast from '../../../../../components/Toast';
import Loader from '../../../../../components/Loader';
import TechHelpInputDialog from '../../../../../sections/TechHelpInputDialog';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import helpBanner from '../../../../../assets/helpImage.png'

const Help = () => {
  const { heading, box, helpContainer, subContainer, onlyHelpbox } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [techAssistanceDialog, setTeachAssistanceDialog] = useState(false);
  const [helpComingDialog, setHelpComingDialog] = useState(false);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  return (
    <Grid container>
      <MetaTags
        title={PageMeta.help.title}
        description={PageMeta.help.description}
        canonical={PageMeta.help.canonical}
        keywords={PageMeta.help.keywords}
      />
      <Paper elevation={4} className={isLoggedIn ? box : onlyHelpbox}>
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        style={{ marginTop: isLoggedIn ? 0 : '50px' }}
      >
        {isLoggedIn && (
          <section className={heading}>
            <Hidden mdUp>
              <SideBar Title={Title} sidebar={paths} />
            </Hidden>
            <Typography variant="h3">
              {help}
            </Typography>
          </section>
        )}
        <Grid className={helpContainer} item lg={12}>
          <section className={subContainer}>
            <Grid item xs={12}>
              <img width="100%" src={helpBanner} alt="" />
            </Grid>

            <Grid style={{ marginTop: '25px' }} item xs={12}>
              <Typography variant="h2"> {helpTitle} </Typography>
            </Grid>
            <Grid style={{ marginTop: '25px' }} item xs={12}>
              <Typography variant="h6">
                {emailUs} <a href={mailTo}> {gmail} </a>
              </Typography>
            </Grid>
            <Grid style={{ marginTop: '25px' }} item xs={12}>
              <Typography variant="h6">
                {callUs} <a href={dialTo}> {number} </a>
              </Typography>
            </Grid>
            <Grid style={{ marginTop: '25px' }} item xs={12}>
              <Button
                color={'primary'}
                variant="contained"
                onClick={() => setTeachAssistanceDialog(true)}
              >
                {sendTicketMsg}
              </Button>
            </Grid>
          </section>
        </Grid>
      </Grid>
      </Paper>
      <Loader open={isLoading} isBackdrop={true} />
      <Toast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        type={toastType}
        message={toastMessage}
      />
      <InformationDialog
        open={helpComingDialog}
        setOpen={setHelpComingDialog}
        title={addEditCarData.helpComingTitle}
        message={addEditCarData.helpComingMessage}
        actionBtnFunc={() => setHelpComingDialog(false)}
      />
      <TechHelpInputDialog
        title={'Need Help?'}
        message="Fill the below form and submit to open help ticket."
        open={techAssistanceDialog}
        handleRejection={() => setTeachAssistanceDialog(false)}
        setIsLoading={setIsLoading}
        setToastOpen={setToastOpen}
        setToastType={setToastType}
        setToastMessage={setToastMessage}
        setHelpComingDialog={setHelpComingDialog}
      />
    </Grid>
  );
};

export default Help;
