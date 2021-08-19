import { Grid, Typography, Hidden } from "@material-ui/core";
import { useStyles } from "./useStyles";
import CarListing from "../../../../components/ListingCard";
import { useState, useEffect } from "react";
import { favTitle, paths, Title, fav } from "../../Utils/sidebarText";
import SideBar from "./ProfileSidebar/Sidebar";
import Actions from "./useFunctions";
import { getFavs, removeFavs } from "../../../../Utils/hooks/endpoints";
import Toast from "../../../../components/Toast";
import { useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import LayoutToggler from "../../../../components/LayoutToggler";
import CircularProgress from '@material-ui/core/CircularProgress';
const Container = () => {
  const {
    heading,
    box,
    favContainer,
    loading,
    pagination,
    layout,
  } = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    loadAllData,
    removeData,
    open,
    setOpen,
    responseMessage,
    data,
    isLoading
  } = Actions();

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleFavs = (id: string) => {
    removeData(removeFavs, id);
  };

  useEffect(() => {
    loadAllData(getFavs, currentPage);
  }, [currentPage]);

  const layoutType = useSelector(
    (state: any) => state.persistedReducer.layout.layoutType
  );

  const handlePageChange = (e: any) => {
    setCurrentPage(e.target.innerText);
  };

  let isFavs = true

  return (
    <Grid container>
      <Grid className={layoutType === "list" ? box : layout} item xs={12}>
        <section className={heading}>
          <Hidden mdUp>
            <SideBar Title={Title} sidebar={paths} />
          </Hidden>
          <Grid item xs={12}>
            <Typography variant="h3">{fav}</Typography>
          </Grid>
        </section>
        {data.length === 0 || isLoading ? (
          <h2 className={loading}><CircularProgress/></h2>
        ) : (
          <Grid className={favContainer} item xs={12}>
            <Grid item xs={12}>
              <Typography style={{ textAlign: "center" }} variant="h2">
                {favTitle}
              </Typography>
              </Grid>
              <Grid item lg={layoutType === "list" ? 12 : 6} xs={12} sm={10}>
              <LayoutToggler />
              <CarListing
                data={data}
                layoutType={layoutType}
                isFavs={isFavs}
                handleFavs={handleFavs}
              />
            </Grid>
       
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
