import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import FooterStyles from './styles';
import { FooterProps, IRoutes } from '../../Utils/interfaces/footer.interface';

/** 
 @param data 
 @param rootBackgroundColor footer background Color
 @param textPrimary
 **/

const Footer: React.FC<FooterProps> = ({
  data,
  rootBackgroundColor,
  textPrimary
}) => {
  const footerStylesProps = {
    rootBackgroundColor,
    textPrimary
  };

  const {
    root,
    container,
    logo,
    socialMedia,
    contacts,
    pageLinks,
    termsLinkRoot,
    termsLink,
    socialMediaLinks
  } = FooterStyles(footerStylesProps);

  return (
    <BrowserRouter>
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
        {/* will be used later when pages are added  */}
        {/* <Grid className={container} item xs={12}>
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
        </Grid>
        <Grid className={container} item xs={12}>
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
        </Grid> */}
        <Grid className={container} item container xs={12}>
          <Grid className={termsLinkRoot} item xs={12} md={6}>
            {data.termsAndConditions &&
              data.termsAndConditions.map((terms, index) => (
                <NavLink
                  className={pageLinks}
                  key={`page-link-${index}`}
                  to={terms.path}
                >
                  <Typography
                    className={termsLink}
                    variant="body2"
                    component="span"
                    gutterBottom
                  >
                    {terms.name}
                  </Typography>
                </NavLink>
              ))}
          </Grid>
          <Grid className={socialMediaLinks} item xs={12} md={6}>
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
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default Footer;
