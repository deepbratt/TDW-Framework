import * as React from "react";
import { Drawer, ListItem, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink } from "react-router-dom";
import { useStyles } from "./sidebarStyles";
import Logo from "../../../assets/logo.png";
import { useState } from "react";
import { Paths } from "../paths";

const SideBar = () => {
  const classes = useStyles();
  const { root, drawer, drawerHeader, closeIcon, logo, link } = classes;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Drawer
        className={drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: root,
        }}
      >
        <div className={drawerHeader}>
          <CloseIcon className={closeIcon} onClick={() => setOpen(!open)} />
        </div>
        <section className={logo}>
          <img src={Logo} alt="logo" width="120px" />
        </section>
        {Paths.map((data, index) => {
          return (
            <span key={"sidebar" + index}>
              <NavLink
                className={link}
                to={data.path}
                onClick={() => {
                  setOpen(open);
                }}
              >
                <ListItem >
                  <Typography
                    style={{ paddingLeft: "30px", paddingBottom: "15px" }}
                    variant="h6"
                  >
                    {data.name}
                  </Typography>
                </ListItem>
              </NavLink>
            </span>
          );
        })}
      </Drawer>
      <MenuIcon
        style={{ fontSize: "30px" }}
        onClick={() => {
          setOpen(!open);
        }}
      />
    </>
  );
};

export default SideBar;
