import { Grid, Typography, Hidden, Paper } from '@material-ui/core';
import { useStyles } from '../useStyles';
import { useEffect } from 'react';
import CarListing from '../../../../../components/ListingCard/';
import {
  adsTitle,
  paths,
  Title,
  ads,
  createdAt
} from '../../../Utils/sidebarText';
import SideBar from '../ProfileSidebar/Sidebar';
import Actions from '../useFunctions';
import { useSelector } from 'react-redux';
import LayoutToggler from '../../../../../components/LayoutToggler';
import Pagination from '@material-ui/lab/Pagination';
import { RootState } from '../../../../../redux/store';
import MetaTags from '../../../../../components/MetaTags';
import PageMeta from '../../../../../Utils/constants/language/en/pageData';
import Loader from '../../../../../components/Loader';
import { API_ENDPOINTS } from '../../../../../Utils/API/endpoints';
import { routes } from '../../../../../routes/paths';
import { Link } from 'react-router-dom';

const Container = () => {
  const { heading, box, favContainer, loading, pagination, layout } =
    useStyles();
  const { isLoading, data, page, pageCount, dataLimit, fetchData } = Actions();

  const { layoutType } = useSelector((state: RootState) => state.layout);

  const getMyCars = (pageValue = page) => {
    fetchData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.MY_CARS}?limit=${dataLimit}&page=${pageValue}`
    );
  };

  useEffect(() => {
    getMyCars(1);
  }, []);

  return (
    <Grid style={{ display: 'flex' }} container>
      <MetaTags
        title={PageMeta.myAds.title}
        description={PageMeta.myAds.description}
        canonical={PageMeta.myAds.canonical}
        keywords={PageMeta.myAds.keywords}
      />
      <Loader open={isLoading} isBackdrop={true} />
      <Paper elevation={4} className={layoutType === 'list' ? box : layout}>
        <Grid item xs={12}>
          <section className={heading}>
            <Hidden mdUp>
              <SideBar Title={Title} sidebar={paths} />
            </Hidden>
            <Typography variant="h3">{ads}</Typography>
          </section>
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
                      isFavs={false}
                      span={createdAt}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
        <Grid className={pagination} item xs={12}>
          <Pagination
            count={pageCount}
            onChange={(event, value) => getMyCars(value)}
            color="secondary"
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Container;
