import { Grid } from '@material-ui/core';
import Header from './Sections/Sections/Header/Header';
import Footer from '../sections/Footer';
import { FooterData } from '../Utils/constants/language/en/footerData';
import { Colors } from '../Utils/constants/colors/colors';
import GlobalStyles from '../globalStyles';
export interface LayoutProps {
  children: React.ReactNode;
}

/**
  @children childrens
**/

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { flashWhite, textPrimary } = Colors;
  const { header } = GlobalStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid className={header} item xs={12} justify="center">
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
