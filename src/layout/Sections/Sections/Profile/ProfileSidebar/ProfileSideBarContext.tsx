import { Grid, Typography, Hidden, ListItem, List } from "@material-ui/core";
import { useStyles } from "./sidebarStyles";
import { NavLink } from "react-router-dom";
import { paths, Title } from "../../../Utils/sidebarText";

interface IProp {
  children: React.ReactNode
}
const ProfileSideBarContext = ({ children }: IProp) => {
  const { heading, container, content, icon, link } = useStyles();
  return (
    <Grid style={{ display: "block" }} container>
      <Grid
        style={{ display: "flex", paddingTop: "90px" }}
        item
        xs={12}
      >
        <Hidden smDown>
          <Grid item lg={4} md={4}>
            <section className={heading}>
              <Typography variant="h3">{Title}</Typography>
            </section>

            <Grid item xs={12} className={container}>
              <List>
                {paths.map((data, index) => {
                  return (
                    <>
                      <NavLink className={link} to={data.path}>
                        <ListItem
                          key={`sidebar ${index}`}
                          className={content}
                          button
                        >
                          <section className={icon}>
                            <img width="50%" src={data.icon} alt="img" />
                          </section>
                          <Typography variant="subtitle1">
                            {data.title}
                          </Typography>
                        </ListItem>
                      </NavLink>
                    </>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Hidden>
        {children}
      </Grid>
    </Grid>
  );
};

export default ProfileSideBarContext;
