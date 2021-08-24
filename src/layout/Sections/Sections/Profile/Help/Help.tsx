import { Grid, Typography, Hidden } from "@material-ui/core";
import { useStyles } from "./useStyles";
import {
  paths,
  Title,
  help,
  helpTitle,
  icon,
  gmail,
  number,
  mailTo,
  dialTo,
  emailUs,
  callUs
} from "../../../Utils/sidebarText";
import SideBar from "../ProfileSidebar/Sidebar";

const Help = () => {
  const { heading, box, helpContainer, subContainer } = useStyles();

  return (
    <Grid container>
      <Grid className={box} item lg={12} md={10} xs={12}>
        <section className={heading}>
          <Hidden mdUp>
            <SideBar Title={Title} sidebar={paths} />
          </Hidden>
            <Typography variant="h3">{help}</Typography>
        </section>
        <Grid className={helpContainer} item lg={12}>
          <section className={subContainer}>
            <Grid item xs={12}>
              <img width="40%" src={icon} alt="" />
            </Grid>

            <Grid style={{ marginTop: "25px" }} item xs={12}>
              <Typography variant="h2"> {helpTitle} </Typography>
            </Grid>
            <Grid style={{ marginTop: "25px" }} item xs={12}>
              <Typography variant="h6">
                {emailUs} <a href={mailTo}> {gmail} </a>
              </Typography>
            </Grid>
            <Grid style={{ marginTop: "25px" }} item xs={12}>
              <Typography variant="h6">
                {callUs} <a href={dialTo}> {number} </a>
              </Typography>
            </Grid>
          </section>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Help;
