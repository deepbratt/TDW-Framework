import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './useStyles';
import CarListing from '../../../../components/ListingCard/';
import { useEffect } from 'react';
import { paths, Title, fav } from '../../Utils/sidebarText';
import SideBar from './ProfileSidebar/Sidebar';
import Actions from './useFunctions';
import { removeFavs } from '../../../../Utils/hooks/endpoints';
import Toast from '../../../../components/Toast';
import { useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import LayoutToggler from '../../../../components/LayoutToggler';
import { RootState } from '../../../../redux/store';
import MetaTags from '../../../../components/MetaTags';
import PageMeta from '../../../../Utils/constants/language/en/pageData';
import Loader from '../../../../components/Loader';
import { API_ENDPOINTS } from '../../../../Utils/API/endpoints';
import { Link } from 'react-router-dom';
import { routes } from '../../../../routes/paths';
const Container = () => {
  const { heading, box, favContainer, loading, pagination, layout } =
    useStyles();
  const {
    removeData,
    open,
    setOpen,
    responseMessage,
    data,
    isLoading,
    fetchData,
    pageCount,
    page,
    dataLimit
  } = Actions();

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleFavs = (id: string) => {
    removeData(removeFavs, id);
  };
  const getFavs = (pageValue = page) => {
    fetchData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.FAVOURITES}?limit=${dataLimit}&page=${pageValue}`
    );
  };

  useEffect(() => {
    getFavs(1);
  }, []);

  const { layoutType } = useSelector((state: RootState) => state.layout);

  let isFavs = true;

  return (
    <Grid container>
      <MetaTags
        title={PageMeta.favorites.title}
        description={PageMeta.favorites.description}
        canonical={PageMeta.favorites.canonical}
        keywords={PageMeta.favorites.keywords}
      />
      <Loader isBackdrop={true} open={isLoading} />
      <Paper elevation={4} className={layoutType === 'list' ? box : layout}>
        <Grid item xs={12}>
          <section className={heading}>
            <Hidden mdUp>
              <SideBar Title={Title} sidebar={paths} />
            </Hidden>
            <Typography variant="h3">{fav}</Typography>
          </section>
        </Grid>
        <Grid item xs={12}>
          {data.length === 0 ? (
            <Typography variant="h2" className={loading}>
              No Result Found
            </Typography>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12} justifyContent="flex-start" container>
                <LayoutToggler />
              </Grid>
              {data.map((item: any, index: number) => (
                <Grid item lg={layoutType === 'list' ? 12 : 4} xs={12} sm={12}>
                  <Link
                    to={
                      routes.carDetail.substr(
                        0,
                        routes.carDetail.lastIndexOf('/') + 1
                      ) + item._id
                    }
                    target="_blank"
                  >
                    <CarListing
                      data={item}
                      layoutType={layoutType}
                      isFavs={isFavs}
                      handleFavs={handleFavs}
                      // handleClick={()=>console.log(item)}
                    />
                  </Link>
                </Grid>
              ))}

              <Toast
                open={open}
                type={responseMessage.status}
                message={responseMessage.message}
                onClose={handleClose}
              />
            </Grid>
          )}
        </Grid>
        <Grid className={pagination} item xs={12}>
          <Pagination
            count={pageCount}
            onChange={(event, value) => getFavs(value)}
            color="secondary"
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Container;
