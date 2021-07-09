import { NavLink } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { FooterProps, IRoutes } from "../../utils/interfaces/footer.interface";
import FooterStyles from "./styles";

/** 
  @param data 
**/

const Footer: React.FC<FooterProps> = ({ data }) => {
  const { root, logo, socialMedia, contacts, pageLinks } = FooterStyles();
  return (
    <Grid container>
      <Grid className={root} item container xs={12}>
        <Grid item container xs={12} lg={3}>
          <Grid item xs={12}>
            <img
              height="46px"
              className={logo}
              src={data.logo}
              alt="tezDealz logo"
            />
          </Grid>
          <Grid item xs={12}>
            {data.socialMedia &&
              data.socialMedia.map((item) => (
                <a
                  className={socialMedia}
                  key={`${item.name}-link`}
                  href={item.path}
                >
                  <img height="17px" src={item.icon} alt={item.name} />
                </a>
              ))}
          </Grid>
          <Grid item xs={12}>
            <div className={contacts}>
              {data.contacts &&
                data.contacts.map((contact, index) => (
                  <Typography
                    key={`${contact.location}-${index}`}
                    variant="body2"
                    gutterBottom
                    component="h5"
                  >
                    {contact.location}: {contact.phone}
                  </Typography>
                ))}
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3}>
          {data.services &&
            data.services.map((service, index) => (
              <NavLink
                className={pageLinks}
                key={`page-link-${index}`}
                to={service.path}
              >
                <Typography
                  className={pageLinks}
                  variant="body2"
                  component="h5"
                  gutterBottom
                >
                  {service.name}
                </Typography>
              </NavLink>
            ))}
        </Grid>
        <Grid item xs={12} lg={3}>
          {data.about &&
            data.about.map((about, index) => (
              <NavLink
                className={pageLinks}
                key={`page-link-${index}`}
                to={about.path}
              >
                <Typography
                  className={pageLinks}
                  variant="body2"
                  component="h5"
                  gutterBottom
                >
                  {about.name}
                </Typography>
              </NavLink>
            ))}
        </Grid>
        <Grid item xs={12} lg={3}>
          {data.help &&
            data.help.map((help, index) => (
              <NavLink
                className={pageLinks}
                key={`page-link-${index}`}
                to={help.path}
              >
                <Typography
                  className={pageLinks}
                  variant="body2"
                  component="h5"
                  gutterBottom
                >
                  {help.name}
                </Typography>
              </NavLink>
            ))}
        </Grid>
      </Grid>
      <Grid className={root} item xs={12}>
        <Typography variant="h4" gutterBottom>
          {data.headers.leadingCategories}
        </Typography>
        {Object.entries(data.categories).map(([keys, values]) => {
          return (
            <div className={contacts} key={`category-${keys}`}>
              <Typography
                variant="h3"
                color="textPrimary"
                gutterBottom
                component="span"
              >
                {`${keys}`}:
              </Typography>
              {values.map((item: IRoutes, index: any) => (
                <NavLink
                  key={`most-popular-item-${index}`}
                  className={pageLinks}
                  to={item.path}
                >
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    gutterBottom
                    component="span"
                  >
                    {` ${item.name}`} |
                  </Typography>
                </NavLink>
              ))}
            </div>
          );
        })}
        {/* <div className={contacts}>
          {data.categories.popularMakeAndModels &&
            data.categories.popularMakeAndModels.map((item, index) => (
              <NavLink
                className={pageLinks}
                key={`most-popular-item-${index}`}
                to={item.path}
              >
                <Typography variant="body2" gutterBottom component="span">
                  {` ${item.name}`} |
                </Typography>
              </NavLink>
            ))}
        </div> */}
      </Grid>
      <Grid className={root} item xs={12}>
        <Typography variant="h4" gutterBottom>
          {data.headers.MostSearched}
        </Typography>
        <div className={contacts}>
          {data.mostSearched &&
            data.mostSearched.map((item, index) => (
              <NavLink
                className={pageLinks}
                key={`most-searched-item-${index}`}
                to={item.path}
              >
                <Typography variant="body2" gutterBottom component="span">
                  {` ${item.name}`} |
                </Typography>
              </NavLink>
            ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
