import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
// import {Home}  from "tdw-pages";
// import HeaderContext from "../Sections/Header/Header";
// import {CommonButton}  from "tdw-components";
// import { Footer } from "tdw-components";
import Footer from "./footer";
// import { FooterData } from "../utils/constants/language/en/footerData";

export interface LayoutProps {
  children: React.ReactNode;
}

/**
  // Todo: Move this component to components repo
  @param children
**/

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {/* <CommonButton /> */}
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          {/* // * Footer here */}
          <Footer data={FooterData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
