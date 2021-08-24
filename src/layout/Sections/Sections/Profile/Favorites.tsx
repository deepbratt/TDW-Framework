import { Grid, Typography, Hidden } from "@material-ui/core";
import { useStyles } from "./useStyles";
import CarListing from "../../../../components/ListingCard/";
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
import { RootState } from "../../../../redux/store";
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
    console.log(data)
  }, [currentPage]);

  const {layoutType} = useSelector(
    (state: RootState) => state.layout
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
        {isLoading ? (
          <h2 className={loading}><CircularProgress/></h2>
        ) : data.length === 0 ? <Typography variant="h2" className={loading}>No Result Found</Typography> :(
          <Grid className={favContainer} item xs={12}>
            <Grid item xs={12}>
              <Typography style={{ textAlign: "center" }} variant="h2">
                {favTitle}
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
                      isFavs={isFavs}
                      handleFavs={handleFavs}
                      handleClick={()=>console.log("")}
                      />
                  </Grid>
                ))}
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
