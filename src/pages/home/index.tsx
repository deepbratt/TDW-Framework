import Banner from "../../layout/Sections/Sections/Banner/Banner";
import CategorySection from "../../layout/Sections/Sections/HomeSections/Category/CategorySection";
import ComparisonContext from "../../layout/Sections/Sections/HomeSections/CarComparison/ComparisonContext";
import {
  Data,
  Title,
  subTitle,
  filter,
  category,
  carModel,
  priceRange,
} from "../../Utils/constants/language/Text";
import PostAd from "../../sections/PostAd";
import {
  browseUsedCards,
  PostAdData,
} from "../../Utils/constants/language/en/homePageData";
import { Grid } from "@material-ui/core";
import TabComponent from "../../components/Tabs";
export interface HomeProps {}

const HomePage = () => {
  return (
    <Grid container justifyContent="center">
      <Banner
        Title={Title}
        subTitle={subTitle}
        category={category}
        filter={filter}
        range={priceRange}
        carModel={carModel}
      />
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
