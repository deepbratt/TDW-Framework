import { NavLink, BrowserRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FooterStyles from './styles';
import {
  FooterProps,
  IFooterFilter
} from '../../Utils/interfaces/footer.interface';

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
    filterTitle,
    socialMediaLinks,
    pageLinks,
    divider,
    textFiedld,
    btn,
    text
  } = FooterStyles(footerStylesProps);

  return (
    <BrowserRouter>
      <Container>
        <Grid className={root} item container xs={12}>
          <Grid className={container} item xs={12} container>
            <Grid item container xs={12} lg={9}>
              <Grid item xs={12} sm={4} lg={3}>
                <Typography className={filterTitle} variant="h3" gutterBottom>
                  Explore TezDeals
                </Typography>
                {data.explore &&
                  data.explore.map((item, index) => (
                    <NavLink
                      className={pageLinks}
                      key={`explore-link-${index}`}
                      to={item.path}
                    >
                      <Typography
                        className={pageLinks}
                        variant="body2"
                        component="h5"
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                    </NavLink>
                  ))}
              </Grid>
              <Grid item xs={12} sm={4} lg={3}>
                <Typography className={filterTitle} variant="h3" gutterBottom>
                  TezDeals.com
                </Typography>
                {data.tezDealz &&
                  data.tezDealz.map((item, index) => (
                    <NavLink
                      className={pageLinks}
                      key={`tezDealz-link-${index}`}
                      to={item.path}
                    >
                      <Typography
                        className={pageLinks}
                        variant="body2"
                        component="h5"
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                    </NavLink>
                  ))}
              </Grid>
              {Object.entries(data.filters).map(([keys, values], index) => (
                <Grid key={`filters-${index}`} item xs={12} sm={4} lg={3}>
                  <Typography className={filterTitle} variant="h3" gutterBottom>
                    Cars By {keys}
                  </Typography>
                  {values.map((value: IFooterFilter, index) => (
                    <Typography
                      key={`filter-${index}`}
                      className={pageLinks}
                      variant="body2"
                      component="h5"
                      gutterBottom
                    >
                      {value.text}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
            <Grid item container xs={12} lg={3}>
              <Grid item container xs={12} md={4} lg={12}>
                <Grid item xs={12}>
                  <Typography className={filterTitle} variant="h3">
                    Sell On TezDeals
                  </Typography>
                  {data.sell &&
                    data.sell.map((item, index) => (
                      <NavLink
                        className={pageLinks}
                        key={`sell-links-${index}`}
                        to={item.path}
                      >
                        <Typography
                          className={pageLinks}
                          variant="body2"
                          component="h5"
                          gutterBottom
                        >
                          {item.name}
                        </Typography>
                      </NavLink>
                    ))}
                </Grid>
              </Grid>
              <Grid item container xs={12} md={4} lg={12}>
                <Grid item xs={12}>
                  <Typography className={filterTitle} variant="h3">
                    Subscribe to our Newsletter
                  </Typography>
                  <TextField
                    className={textFiedld}
                    fullWidth
                    placeholder="name@email.com"
                    variant="standard"
                    InputProps={{
                      endAdornment: (
                        <Button className={btn} variant="contained">
                          Subscribe
                        </Button>
                      ),
                      disableUnderline: true
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container xs={12} md={4} lg={12}>
                <Grid item xs={12}>
                  <Typography className={filterTitle} variant="h3">
                    Follow Us
                  </Typography>
                </Grid>
                {data.socialMedia &&
                  data.socialMedia.map((item, index) => (
                    <Grid
                      className={socialMediaLinks}
                      item
                      key={`social-media-link-${index}`}
                    >
                      <img height="30px" src={item.icon} alt={item.name} />
                    </Grid>
                  ))}
              </Grid>
              <Grid item container xs={12} md={4} lg={12}>
                <Grid item xs={12}>
                  <Typography className={filterTitle} variant="h3">
                    Download Mobile App
                  </Typography>
                </Grid>
                {data.appLinks &&
                  data.appLinks.map((item, index) => (
                    <Grid
                      item
                      xs={5}
                      className={socialMediaLinks}
                      key={`app-link-${index}`}
                    >
                      <img width="100%" src={item} alt={'App Links Button'} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>

          <Divider className={divider} />
          <Grid
            style={{ borderTop: '1px solid black', paddingTop: '10px' }}
            item
            container
            justifyContent="center"
          >
            <Grid item>
              <Typography className={text} align="center" variant="body2">
                {data.copyrights}
              </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              {data.termsAndConditions &&
                data.termsAndConditions.map((item, index) => (
                  <Grid item key={`terms-and-conditions-${index}`}>
                    <NavLink className={pageLinks} to={item.path}>
                      <Typography
                        style={{ marginLeft: '5px' }}
                        variant="body2"
                        component="span"
                      >
                        {` ${item.name}`}{' '}
                      </Typography>
                    </NavLink>
                    <Typography style={{ color: textPrimary }} component="span">
                      {index < data.termsAndConditions.length - 1 ? '| ' : ''}
                    </Typography>
                  </Grid>
                ))}
            </Grid>
            <Grid item>
              <Typography className={text} align="center" variant="body2">
                {data.notice}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </BrowserRouter>
  );
};

export default Footer;
