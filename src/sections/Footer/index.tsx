import { useDispatch } from 'react-redux';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import FooterStyles from './styles';
import {
  FooterProps,
  IFooterFilter
} from '../../Utils/interfaces/footer.interface';
import { paths } from '../../routes/paths';
import { setArrayFilter } from '../../redux/reducers/carFiltersSlice';
import { RootState } from '../../redux/store';

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

  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const handleFilters = (filter: IFooterFilter) => {
    window.scrollTo(0, 0);
    dispatch(setArrayFilter({ name: filter.filterName, value: filter.value }));
    history.push(paths.cars);
  };

  const dataPath = (link: string) => {
    let route = link;
    if (isLoggedIn && link.indexOf('help') > -1) {
      route = `/dashboard${link}`;
    }
    window.scrollTo(0, 0);
    history.push(route);
  };

  return (
    <BrowserRouter>
      <Container>
        <Grid className={root} item container xs={12}>
          <Grid className={container} item xs={12} container>
            <Grid item container xs={12} lg={9}>
              {/* <Grid item xs={12} sm={4} lg={3}>
                <Typography className={filterTitle} variant="h3" gutterBottom>
                  Explore CarOkta
                </Typography>
                {data.explore &&
                  data.explore.map((item, index) => (
                    <Typography
                      key={`explore-link-${index}`}
                      onClick={() => history.push(item.path)}
                      className={pageLinks}
                      variant="body2"
                      component="h5"
                      gutterBottom
                    >
                      {item.name}
                    </Typography>
                  ))}
              </Grid>
              <Grid item xs={12} sm={4} lg={3}>
                <Typography className={filterTitle} variant="h3" gutterBottom>
                  CarOkta.com
                </Typography>
                {data.carOkta &&
                  data.carOkta.map((item, index) => (
                    <Typography
                      key={`carOkta-link-${index}`}
                      onClick={() => history.push(item.path)}
                      className={pageLinks}
                      variant="body2"
                      component="h5"
                      gutterBottom
                    >
                      {item.name}
                    </Typography>
                  ))}
              </Grid> */}
              {Object.entries(data.filters).map(([keys, values], index) => (
                <Grid key={`filters-${index}`} item xs={12} sm={4} lg={3}>
                  <Typography className={filterTitle} variant="h3" gutterBottom>
                    Cars By {keys}
                  </Typography>
                  {values.map((value: IFooterFilter, index) => (
                    <Typography
                      onClick={() => handleFilters(value)}
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
                    Explore CarOkta
                  </Typography>
                  {data.sell &&
                    data.sell.map((item, index) => (
                      <Typography
                        key={`sell-links-${index}`}
                        onClick={() => history.push(item.path)}
                        className={pageLinks}
                        variant="body2"
                        component="h5"
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                    ))}
                </Grid>
              </Grid>
              {/* <Grid item container xs={12} md={4} lg={12}>
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
              </Grid> */}
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
              {/* <Grid item container xs={12} md={4} lg={12}>
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
              </Grid> */}
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
                    <Typography
                      className={pageLinks}
                      onClick={() => dataPath(item.path)}
                      style={{ marginLeft: '5px' }}
                      variant="body2"
                      component="span"
                    >
                      {` ${item.name}`}{' '}
                    </Typography>
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
