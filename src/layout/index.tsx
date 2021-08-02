import { Grid } from "@material-ui/core";
// import {ComparisonContext,Banner}  from "@TDW/Sections/build/index";
// import HeaderContext from "../Sections/Header/Header";
// import { TestComponent } from "tdw-components-npm";
// import { Footer } from "tdw-components";
import Footer from "./footer";
import { FooterData } from "../Utils/constants/language/en/footerData";
import { Colors } from "../Utils/constants/colors/colors";
import Header from "./Sections/Sections/Header/Header";
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
        <Header/>
        {/* <TestComponent/> */}
      </Grid>
        <Grid item xs={12}>
          {children}
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
