import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { paths, Title, statsTitle } from '../../../Utils/sidebarText';
import SideBar from '../ProfileSidebar/Sidebar';
import MetaTags from '../../../../../components/MetaTags';
import PageMeta from '../../../../../Utils/constants/language/en/pageData';
import Loader from '../../../../../components/Loader';
import { API_ENDPOINTS } from '../../../../../Utils/API/endpoints';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { useStyles } from '../useStyles';
import Actions from '../useFunctions';

function Stats() {
  const { heading, box, loading, layout } = useStyles();

  const {
    isLoading,
    data,
    page,
    pageCount,
    dataLimit,
    fetchData,
    setResponseMessage,
    responseMessage,
    open,
    setOpen
  } = Actions();

  const { layoutType } = useSelector((state: RootState) => state.layout);

  const getAllCarsData = () => {
    fetchData(
      `${API_ENDPOINTS.ADS}${API_ENDPOINTS.CARS}${API_ENDPOINTS.MY_CARS}`
    );
  };

  useEffect(() => {
    getAllCarsData();
  }, []);

  return (
    <Grid container>
      <MetaTags
        title={PageMeta.stats.title}
        canonical={PageMeta.stats.canonical}
      />
      <Loader isBackdrop={true} open={isLoading} />
      <Paper elevation={4} className={layoutType === 'list' ? box : layout}>
        <Grid item xs={12}>
          <section className={heading}>
            <Hidden mdUp>
              <SideBar key={statsTitle} Title={Title} sidebar={paths} />
            </Hidden>
            <Typography variant="h3">{statsTitle}</Typography>
          </section>
        </Grid>
        {data.length === 0 ? (
          <Typography variant="h2" className={loading}>
            No Result Found
          </Typography>
        ) : (
          <Grid container spacing={2}>
            <p>{JSON.stringify(data)}</p>
          </Grid>
        )}
        {/* <Grid className={pagination} item xs={12}>
        <Pagination
          count={pageCount}
          onChange={(event, value) => getFavs(value)}
          color="secondary"
        />
      </Grid> */}
      </Paper>
    </Grid>
  );
}

export default Stats;
