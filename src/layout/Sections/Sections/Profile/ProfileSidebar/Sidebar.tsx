import { Drawer, Typography, List, ListItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink } from "react-router-dom";
import { useStyles } from "./sidebarStyles";
import { useState } from "react";
import { IProps } from "../types";

const SideBar = ({ sidebar, Title }: IProps) => {
  const classes = useStyles();
  const {
    root,
    drawer,
    drawerHeader,
    closeIcon,
    container,
    icon,
    content,
    heading,
    link,
  } = classes;
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
        <div className={drawerHeader}></div>
        <section className={heading}>
          <Typography variant="h3">{Title}</Typography>
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
                      className={content}
                      button
                    >
                      {/* <section className={icon}>
                        <img width="50%" src={data.icon} alt="img" />
                      </section> */}
                      {data.icon}
                      <Typography variant="subtitle1">{data.title}</Typography>
                    </ListItem>
                  </NavLink>
                </>
              );
            })}
          </List>
        </section>
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
