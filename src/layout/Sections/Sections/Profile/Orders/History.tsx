import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"
import { useStyles } from "./useStyles";
import {
  paths,
  Title,
  history,
  purchaseTitle,
  sellingTitle,
} from "../../../Utils/sidebarText";
import SideBar from "../ProfileSidebar/Sidebar";
import { useState } from "react";
import {Colors} from "../../../Utils/color.constants"
import MetaTags from "../../../../../components/MetaTags";
import PageMeta from "../../../../../Utils/constants/language/en/pageData";
const UserHistory = () => {
  const {
    heading,
    box,
    helpContainer,
    subContainer,
    button,
    buttonContainer,
  } = useStyles();
  const {berryRed,royalBlue} = Colors
  const [title, setTitle] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [notActive, setNotActive] = useState(false);
  let purchase = purchaseTitle;
  let selling = sellingTitle;
  return (
    <Grid container>
      <MetaTags
        title={PageMeta.orders.title}
        canonical={PageMeta.orders.canonical}
      />
      <Grid className={box} item lg={12} md={10} xs={12}>
        <section className={heading}>
          <Hidden mdUp>
            <SideBar Title={Title} sidebar={paths} />
          </Hidden>
            <Typography variant="h3">{history}</Typography>
        </section>
        <Grid className={buttonContainer} item xs={12}>
          <button
            style={
              isActive
                ? { background: berryRed, transition: "all .2s linear" }
                : { background: royalBlue, transition: "all .2s linear" }
            }
            className={button}
            onClick={() => {
              setTitle(purchase);
              setIsActive(true);
              setNotActive(false);
            }}
          >
            {purchaseTitle}
          </button>
          <button
            style={
              notActive
                ? { background: berryRed, transition: "all .3s linear" }
                : { background: royalBlue, transition: "all .3s linear" }
            }
            className={button}
            onClick={() => {
              setTitle(selling);
              setIsActive(false);
              setNotActive(true);
            }}
          >
            {sellingTitle}
          </button>
        </Grid>
        <Grid className={helpContainer} item xs={12}>
          <section className={subContainer}>
            <Grid
              style={{ marginTop: "10px", textAlign: "center" }}
              item
              xs={12}
            >
              <Typography variant="h2"> {title ? title : selling} </Typography>
            </Grid>
            {title === purchase ? (
              <>
                <Grid style={{ marginTop: "25px" }} item xs={12}>
                  {/* <ListingCard
                    data={CarsListingData}
                    layoutType="list"
                    span={purchasedOn}
                  /> */}
                </Grid>
              </>
            ) : (
              <>
                <Grid style={{ marginTop: "25px" }} item xs={12}>
                  {/* <ListingCard
                    data={CarsListingData}
                    layoutType="list"
                    span={soldOn}
                  /> */}
                </Grid>
              </>
            )}
          </section>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserHistory;
