import * as React from "react";
import { useStyles } from "./useStyles";
import { ListItem, List, Toolbar, AppBar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import SideBar from "./Sidebar/Sidebar";
import CustomButton from "../../../../components/CustomButton";
import Logo from "../../assets/logo.png";
import header from "../../assets/header.png";
import pattern from "../../assets/pattern.png";
import { Paths } from "./paths";
import { Colors } from "../../Utils/color.constants";
const HeaderContext = () => {
  const { logo, list, appbarsolid, root, rec, link } = useStyles();
  const { white, black } = Colors;

  return (
    <React.Fragment>
      <AppBar
        style={{
          background: white,
          paddingBottom: "0px",
          boxShadow: "none",
          paddingTop: "0px",
          position: "fixed",
        }}
        className={root}
      >
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
            <List style={{ paddingBottom: "0px" }} className={list}>
              {Paths.map((data, index) => {
                return (
                  <span key={"header" + index}>
                    <NavLink className={link} to={data.path}>
                      <ListItem>
                        <Typography variant="h6">{data.name}</Typography>
                      </ListItem>
                    </NavLink>
                  </span>
                );
              })}

              <ListItem>
                <CustomButton style={{ background: white, color: black }}>
                  Post an Ad
                </CustomButton>
              </ListItem>
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideBar />
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default HeaderContext;
