import React, { useState } from 'react';
import { useStyles } from './useStyles';
import { useDispatch, connect } from 'react-redux';
import {
  ListItem,
  List,
  Toolbar,
  AppBar,
  Typography,
  Hidden,
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SideBar from './Sidebar/Sidebar';
import CustomButton from '../../../../components/CustomButton';
import Logo from '../../assets/logo.png';
import header from '../../assets/header.png';
import pattern from '../../assets/pattern.png';
import { Paths } from './paths';
import { Colors } from '../../Utils/color.constants';
import { logout } from '../../../../redux/reducers/authSlice';
import { paths } from '../../../../routes/paths';
import {
  LOGOUT,
  SIGNIN,
  SIGNUP,
  ADD_EDIT_CAR
} from '../../../../Utils/constants/language/en/buttonLabels';
import history from '../../../../routes/history';
interface IHeaderProps {
  isLoggedIn?: boolean;
}

const HeaderContext = ({ isLoggedIn }: IHeaderProps) => {
  const { logo, list, appbarsolid, root, rec, link, loginLink } = useStyles();
  const { white, black } = Colors;
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => history.push(paths.addEditCar)}>
        {ADD_EDIT_CAR}
      </MenuItem>
      <MenuItem
        onClick={() => {
          dispatch(logout());
          handleMenuClose();
        }}
      >
        {LOGOUT}
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <AppBar className={root}>
        <Hidden mdDown>
          <img src={header} alt="logo" className={rec} />
        </Hidden>
        <Hidden lgUp>
          <img src={pattern} alt="pattern" className={rec} />
        </Hidden>
        <Toolbar className={appbarsolid}>
          <section>
            <img src={Logo} alt="logo" className={logo} />
          </section>
          <Hidden smDown>
            <List style={{ paddingBottom: '0px' }} className={list}>
              {Paths.map((data, index) => {
                return (
                  <NavLink key={index} className={link} to={data.path}>
                    <ListItem>
                      <Typography variant="h6">{data.name}</Typography>
                    </ListItem>
                  </NavLink>
                );
              })}
              <ListItem>
                <CustomButton style={{ background: white, color: black }}>
                  Post an Ad
                </CustomButton>
              </ListItem>

              {!isLoggedIn && (
                <ListItem>
                  <NavLink className={loginLink} to={paths.login}>
                    {' '}
                    <Typography variant="body1">{SIGNIN} /</Typography>
                  </NavLink>
                  <NavLink className={loginLink} to={paths.signup}>
                    {' '}
                    <Typography variant="body1">{SIGNUP}</Typography>
                  </NavLink>
                </ListItem>
              )}
              <Hidden smDown>
                {isLoggedIn && (
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    size="medium"
                  >
                    <AccountCircle fontSize="large" />
                  </IconButton>
                )}
              </Hidden>
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideBar />
          </Hidden>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.persistedReducer.auth.isLoggedIn
});

export default connect(mapStateToProps)(HeaderContext);
