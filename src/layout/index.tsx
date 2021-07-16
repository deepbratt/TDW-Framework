import { Grid } from "@material-ui/core";
// import {Home}  from "tdw-pages";
// import HeaderContext from "../Sections/Header/Header";
// import { Footer } from "@TDW/components";
// import { Footer } from "tdw-components";
import Footer from "./footer";
import { FooterData } from "../utils/constants/language/en/footerData";
import { Colors } from "../utils/constants/colors/colors";
import TabComponent from "./tabs";
import {
  browseUsedCards,
  PostAdData,
} from "../utils/constants/language/en/homePageData";
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
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item container xs={10}>
          {/* // * Footer here */}
          <TabComponent data={browseUsedCards} />
        </Grid>
        <Grid item container xs={10} spacing={5}>
          <PostAd data={PostAdData} />
        </Grid>
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
