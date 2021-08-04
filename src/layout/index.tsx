import { Grid } from "@material-ui/core";
import Footer from "../sections/Footer";
import { FooterData } from "../utils/constants/language/en/footerData";
import { Colors } from "../utils/constants/colors/colors";
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
          {/* Header Here */}
        </Grid>
        <Grid item xs={12} container justify="center">
          {children}
        </Grid>
        <Grid item xs={12}>
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
