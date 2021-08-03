import { Grid } from "@material-ui/core";
// import {Home}  from "tdw-pages";
// import HeaderContext from "../Sections/Header/Header";
// import { Footer } from "@TDW/components";
// import { Footer } from "tdw-components";
import Footer from "./footer";
import { FooterData } from "../Utils/constants/language/en/footerData";
import { Colors } from "../Utils/constants/colors/colors";
import TabComponent from "./tabs";
import {
  browseUsedCards,
  PostAdData,
} from "../Utils/constants/language/en/homePageData";
import PostAd from "./postAd";
// import CarComparision from "./carComparision";
// import CarsComparisonImage from "../assets/Cars/carsComparision.png";
// import DownloadApp from "./downloadApp";

export interface LayoutProps {
  children: React.ReactNode;
}

/**
  // Todo: Move this component to components repo
  @children childrens
**/

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { flashWhite, textPrimary } = Colors;

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {/* <CustomButton buttonText="button"/> */}
        </Grid>
        <Grid item xs={12} container justify="center">
          <Grid item xs={8}>
            {children}
          </Grid>
        </Grid>
        {/* <Grid item container xs={10}>
          <TabComponent data={browseUsedCards} />
        </Grid>
        <Grid item container xs={12}>
          <PostAd data={PostAdData} />
        </Grid> */}
        <Grid item xs={12}>
          {/* // * Footer here */}
          <Footer
            data={FooterData}
            rootBackgroundColor={flashWhite}
            textPrimary={textPrimary}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;

// import { createUseStyles } from "react-jss";

// export const useStyles = createUseStyles({
//   "@global": {
//     body: {
//       margin: "0px",
//       padding: "0px",
//       width: "100%",
//       height: "100%",
//       overflowX: "hidden"
//     },
//     html: {
//       overflowX: "hidden",
//     },
//   },
// });
