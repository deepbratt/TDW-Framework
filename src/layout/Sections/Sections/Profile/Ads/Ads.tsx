import { Grid, Typography, Hidden } from "@material-ui/core";
import { useStyles } from "../useStyles";
import { useEffect, useState } from "react";
import CarListing from "../../../../../components/ListingCard/";
import {
  adsTitle,
  paths,
  Title,
  ads,
  createdAt,
} from "../../../Utils/sidebarText";
import SideBar from "../ProfileSidebar/Sidebar";
import Actions from "../useFunctions";
import { getAds } from "../../../../../Utils/hooks/endpoints";
import { useSelector } from "react-redux";
import LayoutToggler from "../../../../../components/LayoutToggler";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import { RootState } from "../../../../../redux/store";

const Container = () => {
  const {
    heading,
    box,
    favContainer,
    loading,
    pagination,
    layout,
  } = useStyles();
  const { loadAllData,isLoading,data} = Actions();

  const {layoutType} = useSelector(
    (state: RootState) => state.layout
  );

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadAllData(getAds, currentPage);
    window.scrollTo(0, 0)
  }, [currentPage]);

  const handlePageChange = (e: any) => {
    setCurrentPage(e.target.innerText);
  };

  let isFavs = false;

  return (
    <Grid style={{ display: "flex" }} container>
      <Grid className={layoutType === "list" ? box : layout} item xs={12}>
        <section className={heading}>
          <Hidden mdUp>
            <SideBar Title={Title} sidebar={paths} />
          </Hidden>
          <Typography variant="h3">{ads}</Typography>
        </section>
        {data.length === 0 || isLoading ? (
          <h2 className={loading}>
            <CircularProgress />
          </h2>
        ) : (
          <Grid className={favContainer} item xs={12}>
            <Grid item xs={12}>
              <Typography style={{ textAlign: "center" }} variant="h2">
                {adsTitle}
              </Typography>
            </Grid>
            <Grid item container lg={12} xs={12} sm={10} spacing={2}>
              <Grid item xs={12} lg={12}>
                <LayoutToggler />
              </Grid>
              {data.map((item:any, index:number)=>(
                <Grid item lg={layoutType === "list" ? 12 : 6} xs={12} sm={10}>
                  <CarListing
                    data={item}
                    layoutType={layoutType}
                    isFavs={false}
                    span={createdAt}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid className={pagination} item xs={12}>
        <Pagination
          count={10}
          hidePrevButton
          hideNextButton
          onChange={(e) => handlePageChange(e)}
        />
      </Grid>
    </Grid>
  );
};

export default Container;
