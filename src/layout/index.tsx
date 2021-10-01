import Grid from '@material-ui/core/Grid';
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
  const { footerLinks, footerBackground } = Colors;
  const { header } = GlobalStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid className={header} item xs={12}>
          {children}
        </Grid>
        <Grid style={{ backgroundColor: footerBackground }} item xs={12}>
          <Footer
            data={FooterData}
            rootBackgroundColor={footerBackground}
            textPrimary={footerLinks}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
