import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';
import { useStyles } from './sidebarStyles';
import Logo from '../../../assets/logo.png';
import { Paths as sideBarPath } from '../paths';
import { paths } from '../../../../../routes/paths';
import {
  LOGOUT,
  POST_AN_AD,
  PROFILE,
  SIGNIN,
  SIGNUP
} from '../../../../../Utils/constants/language/en/buttonLabels';
import { logout } from '../../../../../redux/reducers/authSlice';

const SideBar = () => {
  const classes = useStyles();
  const { root, drawer, drawerHeader, nested, logo, link } = classes;
  const [expand, setExpand] = React.useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: any) => state.auth.isLoggedIn
  );

  return (
    <>
      <SwipeableDrawer
        className={drawer}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        classes={{
          paper: root
        }}
      >
        <div className={drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            <ChevronRightIcon />
          </IconButton>
          <Divider orientation="vertical" />
          <section className={logo}>
            <img src={Logo} alt="logo" width="100px" />
          </section>
        </div>
        <Divider />
        <List>
          {sideBarPath.map((data, index) => {
            return (
              <ListItem key={index} button>
                <NavLink className={link} to={data.path}>
                  <ListItemText primary={data.name} />
                </NavLink>
              </ListItem>
            );
          })}
          {isLoggedIn && (
            <>
              <ListItem button onClick={handleExpand}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={PROFILE} />
                {expand ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding dense>
                  <ListItem button className={nested}>
                    <NavLink className={link} to={paths.addEditCar}>
                      <ListItemText primary={POST_AN_AD} />
                    </NavLink>
                  </ListItem>
                  <ListItem button className={nested}>
                    <NavLink className={link} to={paths.dashboard+"/profile"}>
                      <ListItemText primary={PROFILE} />
                    </NavLink>
                  </ListItem>
                  <ListItem button className={nested} onClick={() => dispatch(logout())}>              
                    <ListItemText primary={LOGOUT} />       
                  </ListItem>
                </List>
              </Collapse>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink className={link} to={paths.login}>
                <ListItem button>
                  <ListItemText primary={SIGNIN} />
                </ListItem>
              </NavLink>

              <NavLink className={link} to={paths.signup}>
                <ListItem button>
                  <ListItemText primary={SIGNUP} />
                </ListItem>
              </NavLink>
            </>
          )}
        </List>
      </SwipeableDrawer>
      <MenuIcon style={{ fontSize: '30px' }} onClick={toggleDrawer} />
    </>
  );
};

export default SideBar;
