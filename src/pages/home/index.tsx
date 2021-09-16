import Banner from '../../layout/Sections/Sections/Banner/Banner';
import CategorySection from '../../layout/Sections/Sections/HomeSections/Category/CategorySection';
import ComparisonContext from '../../layout/Sections/Sections/HomeSections/CarComparison/ComparisonContext';
import {
  Data,
  Title,
  subTitle,
  filter,
  category,
  carModel,
  priceRange
} from '../../Utils/constants/language/Text';
import PostAd from '../../sections/PostAd';
import {
  browseUsedCards,
  PostAdData
} from '../../Utils/constants/language/en/homePageData';
import { Grid } from '@material-ui/core';
import TabComponent from '../../components/Tabs';
import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import HomeBanner from '../../sections/HomeBanner';
export interface HomeProps {}

const HomePage = () => {
  return (
    <Grid container justifyContent="center">
      <MetaTags
        title={PageMeta.home.title}
        description={PageMeta.home.description}
        canonical={PageMeta.home.canonical}
        keywords={PageMeta.home.keywords}
      />
      <HomeBanner />
      <CategorySection data={Data} />
      <Grid item xs={12}>
        <PostAd data={PostAdData} />
      </Grid>
      <Grid item xs={12}>
        <TabComponent data={browseUsedCards} />
      </Grid>
      <ComparisonContext />
    </Grid>
  );
};

export default HomePage;
