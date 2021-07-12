import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import {Header} from "@TDW/Sections"
import MUITheme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
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
      <ThemeProvider theme={MUITheme}>
         <Header />
         </ThemeProvider>
      </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          {/* // * Footer here */}
          <Typography variant="h5">Footer</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
