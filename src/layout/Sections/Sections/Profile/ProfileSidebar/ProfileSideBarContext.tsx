import {
  Grid,
  Typography,
  Hidden,
  ListItem,
  List,
  Paper
} from '@material-ui/core';
import { useStyles } from './sidebarStyles';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { paths, Title, profile } from '../../../Utils/sidebarText';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { Colors } from '../../../../../Utils/constants/colors/colors';

interface IProp {
  children: React.ReactNode;
}
const ProfileSideBarContext = ({ children }: IProp) => {
  const {
    container,
    content,
    link,
    selectedContent,
    selectedIcon,
    pathIcon,
    userContainer,
    userInfo,
    userName
  } = useStyles();
  const { pathname } = useLocation();
  const history = useHistory()
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <Grid style={{ display: 'block' }} container>
      <Grid style={{ display: 'flex', paddingTop: '90px' }} item xs={12}>
        <Hidden smDown>
          <Grid item lg={4} md={4}>
            <Paper elevation={4} className={userContainer}>
              <img src={user.image || profile} alt="profile" width="70px" />
              <div className={userInfo}>
                <Typography variant="h4">Hello</Typography>
                <Typography variant="h2" className={userName} onClick={()=>history.push('/dashboard/profile')}>
                  {user.firstName}&nbsp;{user.lastName}
                </Typography>
              </div>
            </Paper>

            <Paper elevation={4} style={{ marginTop: '10px' }}>
              <Grid item xs={12} className={container}>
                <List style={{ padding: 0 }}>
                  {paths.map((data, index) => {
                    return (
                      <>
                        <NavLink className={link} to={data.path}>
                          <ListItem
                            key={`sidebar ${index}`}
                            className={
                              pathname.indexOf(data.path) > -1
                                ? selectedContent
                                : content
                            }
                            button
                          >
                            {/* <section className={icon}>
                            </section> */}
                            {/* <img width="30px" src={data.icon} alt="img"/> */}
                            <span
                              className={
                                pathname.indexOf(data.path) > -1
                                  ? selectedIcon
                                  : pathIcon
                              }
                            >
                              {data.icon}
                            </span>
                            <Typography
                              variant="subtitle1"
                              style={{ marginLeft: '10px' }}
                            >
                              {data.title}
                            </Typography>
                          </ListItem>
                        </NavLink>
                      </>
                    );
                  })}
                </List>
              </Grid>
            </Paper>
          </Grid>
        </Hidden>
        {children}
      </Grid>
    </Grid>
  );
};

export default ProfileSideBarContext;
