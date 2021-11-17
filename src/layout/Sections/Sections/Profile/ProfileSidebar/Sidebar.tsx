import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useStyles } from './sidebarStyles';
import { useState } from 'react';
import { IProps } from '../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';

const SideBar = ({ sidebar, Title }: IProps) => {
  const classes = useStyles();
  const {
    root,
    drawer,
    drawerHeader,
    closeIcon,
    container,
    content,
    heading,
    link,
    selectedContent,
    selectedIcon,
    pathIcon
  } = classes;
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { user } = useSelector((state: RootState) => state.auth);
  const history = useHistory();
  return (
    <>
      <Drawer
        className={drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: root
        }}
      >
        <div className={drawerHeader}></div>
        <section className={heading}>
          <div>
            <Typography variant="h3">{'Hello'}</Typography>
            <Typography
              variant="h3"
              onClick={() => history.push('/dashboard/profile')}
            >
              {user.firstName}&nbsp;{user.lastName}
            </Typography>
          </div>
          <CloseIcon className={closeIcon} onClick={() => setOpen(!open)} />
        </section>
        <section className={container}>
          <List>
            {sidebar.map((data, index) => {
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
        </section>
      </Drawer>
      <MenuIcon
        style={{ fontSize: '30px' }}
        onClick={() => {
          setOpen(!open);
        }}
      />
    </>
  );
};

export default SideBar;
