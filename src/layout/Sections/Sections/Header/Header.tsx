import React, { useState } from 'react';
import { useStyles } from './useStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  ListItem,
  List,
  Toolbar,
  AppBar,
  Typography,
  Hidden,
  Menu,
  MenuItem,
  IconButton,
  InputAdornment,
  Button
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SideBar from './Sidebar/Sidebar';
import Logo from '../../assets/logo.png';
import { Paths } from './paths';
import { logout } from '../../../../redux/reducers/authSlice';
import { paths, routes } from '../../../../routes/paths';
import {
  LOGOUT,
  SIGNIN,
  SIGNUP,
  POST_AN_AD
} from '../../../../Utils/constants/language/en/buttonLabels';
import history from '../../../../routes/history';
import { RootState } from '../../../../redux/store';
import InputField from '../../../../components/InputField';
import { SearchRounded } from '@material-ui/icons';
import { setQueryParams } from '../../../../redux/reducers/queryParamsSlice';

const HeaderContext = () => {
  const {
    logo,
    list,
    appbarsolid,
    root,
    btn,
    link,
    loginLink,
    inputRoot,
    input
  } = useStyles();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const handleSearch = (e: any) => {
    let queryParams = {
      keywords: e.target.value
    };
    dispatch(setQueryParams(queryParams));
    history.push(paths.cars);
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
      <MenuItem
        onClick={() =>
          history.push(
            routes.dashboard.substr(0, routes.dashboard.lastIndexOf('/') + 1) +
              'profile'
          )
        }
      >
        {paths.profile}
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
      <AppBar className={root} color="inherit">
        <Toolbar className={appbarsolid}>
          <Grid container justifyContent="flex-start">
            <section>
              <img src={Logo} alt="logo" className={logo} />
            </section>
            <Hidden smDown>
              <List className={list}>
                {Paths.map((data, index) => {
                  return (
                    <NavLink key={index} className={link} to={data.path}>
                      <ListItem>
                        <Typography variant="h4">{data.name}</Typography>
                      </ListItem>
                    </NavLink>
                  );
                })}
                <Button
                  className={btn}
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    history.push(
                      routes.addEditCar.substr(
                        0,
                        routes.addEditCar.lastIndexOf('/')
                      )
                    )
                  }
                >
                  {POST_AN_AD}
                </Button>
              </List>
            </Hidden>
          </Grid>
          <Hidden smDown>
            <InputField
              fullWidth
              className={inputRoot}
              placeholder="Search ..."
              onKeyPress={handleKeyPress}
              InputProps={{
                classes: { input: input },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={handleSearch}
                      disableRipple
                    >
                      <SearchRounded />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <List className={list}>
              {!isLoggedIn && (
                <ListItem>
                  <NavLink className={loginLink} to={'/login'}>
                    <Typography variant="body1">{SIGNIN} |</Typography>
                  </NavLink>
                  <NavLink
                    style={{ marginLeft: '5px' }}
                    className={loginLink}
                    to={'/signup'}
                  >
                    <Typography variant="body1">{SIGNUP}</Typography>
                  </NavLink>
                </ListItem>
              )}
            </List>
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
          <Hidden mdUp>
            <SideBar />
          </Hidden>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </React.Fragment>
  );
};

export default HeaderContext;
